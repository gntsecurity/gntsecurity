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

async function getGraphToken(env: Env) {
  const tenantId = env.TENANT_ID || "";
  const clientId = env.CLIENT_ID || "";
  const clientSecret = env.CLIENT_SECRET || "";
  if (!tenantId || !clientId || !clientSecret) throw new Error("missing_graph_env");

  const tokenUrl = `https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`;
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

  const data = (await res.json().catch(() => null)) as
    | { access_token?: string; error?: string; error_description?: string }
    | null;

  if (!res.ok || !data?.access_token) throw new Error("token_failed");
  return data.access_token;
}

async function graphSendMail(token: string, sender: string, payload: unknown) {
  const url = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("send_failed");
}

export async function onRequest(context: { request: Request; env: Env }) {
  const { request, env } = context;

  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
  }

  const ct = request.headers.get("content-type") || "";
  if (!ct.toLowerCase().includes("application/json")) {
    return json(400, { ok: false, error: "Invalid request." });
  }

  let body: unknown = null;
  try {
    body = await request.json();
  } catch {
    body = null;
  }
  if (!body || typeof body !== "object") {
    return json(400, { ok: false, error: "Invalid request." });
  }

  const b = body as Record<string, unknown>;
  const email = String(b.email || "").trim();
  const website = String(b.website || "").trim();

  if (website) return json(200, { ok: true });

  if (!email || email.length > 200 || !isEmail(email)) {
    return json(400, { ok: false, error: "Enter a valid email." });
  }

  const to = env.CONTACT_TO || "sales@gntsecurity.com";
  const sender = env.GRAPH_SENDER || "no-reply@gntsecurity.com";

  const mail = {
    message: {
      subject: `[Website] Newsletter subscribe`,
      body: { contentType: "Text", content: `Subscriber: ${email}\nTime: ${new Date().toISOString()}\n` },
      toRecipients: [{ emailAddress: { address: to } }],
      replyTo: [{ emailAddress: { address: email } }],
    },
    saveToSentItems: false,
  };

  try {
    const token = await getGraphToken(env);
    await graphSendMail(token, sender, mail);
    return json(200, { ok: true });
  } catch {
    return json(502, { ok: false, error: "Unable to subscribe right now." });
  }
}