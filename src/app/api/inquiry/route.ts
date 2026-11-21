import { NextResponse } from "next/server";
import { validateInquiry, type Inquiry } from "@/lib/inquiry";

/** Receives an enrollment inquiry. Validates on the server too (never trust the client).
 *  TODO before launch: deliver it — e.g. send an email, post to a CRM / Google Sheet,
 *  or notify the school's WhatsApp Business number. */
export async function POST(req: Request) {
  let body: Partial<Inquiry>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const inquiry: Inquiry = {
    name: String(body.name ?? "").slice(0, 120),
    method: body.method === "email" ? "email" : "phone",
    phone: String(body.phone ?? "").slice(0, 40),
    email: String(body.email ?? "").slice(0, 160),
    age: String(body.age ?? "").slice(0, 10),
    course: String(body.course ?? "").slice(0, 80),
    lang: body.lang === "ar" ? "ar" : "en",
    message: String(body.message ?? "").slice(0, 600)
  };

  const errors = validateInquiry(inquiry);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // Placeholder delivery: log on the server so inquiries are visible during development.
  console.info("[inquiry]", { ...inquiry, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
