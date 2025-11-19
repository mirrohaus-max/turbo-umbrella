// app/api/contact/route.js
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

    // No email service wired in this build; you can hook later.
    // (Optional) log to Vercel function logs:
    console.log("Contact message:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid input" },
      { status: 400 }
    );
  }
}
