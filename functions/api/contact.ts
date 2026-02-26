export interface Env {
  CONTACT_TO?: string;
  GRAPH_SENDER?: string;
  TENANT_ID?: string;
  CLIENT_ID?: string;
  CLIENT_SECRET?: string;
}

function json(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

async function readJson(req: Request) {
  const ct = req.headers.get("content-type") || "";
  if (!ct.toLowerCase().includes("application/json")) return null;
  try {
    return (await req.json()) as unknown;
  } catch {
    return null;
  }
}

async function getGraphToken(env: Env) {
  const tenantId = env.TENANT_ID || "";
  const clientId = env.CLIENT_ID || "";
  const clientSecret = env.CLIENT_SECRET || "";

  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  const form = new URLSearchParams();
  form.set("client_id", clientId);
  form.set("client_secret", clientSecret);
  form.set("grant_type", "client_credentials");
  form.set("scope", "https://graph.microsoft.com/.default");

  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });

  const data = await res.json();

  if (!res.ok || !data.access_token) {
    throw new Error(`TOKEN_ERROR ${res.status} ${JSON.stringify(data)}`);
  }

  return data.access_token;
}

async function graphSendMail(token: string, sender: string, payload: unknown) {
  const url = `https://graph.microsoft.com/v1.0/users/${sender}/sendMail`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`SEND_ERROR ${res.status} ${text}`);
  }
}

export async function onRequest(context: { request: Request; env: Env }) {
  const { request, env } = context;

  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "POST" },
    });
  }

  try {
    const body = await readJson(request);
    if (!body || typeof body !== "object") {
      return json(400, { ok: false, error: "Invalid request." });
    }

    const b = body as Record<string, unknown>;
    const name = String(b.name || "").trim();
    const email = String(b.email || "").trim();
    const subject = String(b.subject || "").trim();
    const message = String(b.message || "").trim();

    const to = env.CONTACT_TO || "sales@gntsecurity.com";
    const sender = env.GRAPH_SENDER || "no-reply@gntsecurity.com";

    const text = `
New website contact form submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
`;

    const mail = {
      message: {
        subject: `[Website] ${subject}`,
        body: { contentType: "Text", content: text },
        toRecipients: [{ emailAddress: { address: to } }],
        replyTo: [{ emailAddress: { address: email, name } }],
      },
      saveToSentItems: false,
    };

    const token = await getGraphToken(env);
    await graphSendMail(token, sender, mail);

    return json(200, { ok: true });
  } catch (err) {
    return json(500, { ok: false, error: String(err) });
  }
}