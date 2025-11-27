export interface Env {
  CONTACT_TO: string;
  CONTACT_FROM: string;
  SEND_EMAIL: SendEmail;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    let data: any;
    try {
      data = await request.json();
    } catch {
      return Response.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();
    const message = String(data.message || "").trim();

    if (!name || !email || !message) {
      return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const subject = `New contact form submission from ${name}`;
    const bodyText = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      "",
      "Message:",
      message,
      "",
      `Submitted at: ${new Date().toISOString()}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await env.SEND_EMAIL.send({
        from: env.CONTACT_FROM,
        to: env.CONTACT_TO,
        subject,
        text: bodyText,
      });

      return Response.json({ success: true });
    } catch (err) {
      return Response.json({ error: "Failed to send message." }, { status: 500 });
    }
  },
};
