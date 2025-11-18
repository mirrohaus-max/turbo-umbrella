
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(2000)
});

export async function POST(req) {
  try {
    const json = await req.json();
    const { name, email, message } = schema.parse(json);

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.EMAIL_TO;
    const from = process.env.EMAIL_FROM;

    if (apiKey && to && from) {
      const { Resend } = await import("resend").catch(() => ({ Resend: null }));
      if (Resend) {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          to, from, subject: `New inquiry from ${name}`,
          text: `From: ${name} <${email}>\n\n${message}`
        });
      }
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 });
  }
}
