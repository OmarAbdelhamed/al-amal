/** Inquiry form model + validation, shared by the form (client) and the API route (server). */
export type Inquiry = {
  name: string;
  method: "phone" | "email";
  phone: string;
  email: string;
  age: string;      // "5".."17" or "adult"
  course: string;   // course slug or "unsure"
  lang: "en" | "ar";
  message: string;
};

export type InquiryErrors = Partial<Record<"name" | "phone" | "email" | "age" | "course", true>>;

export const blankInquiry = (course = "", lang: "en" | "ar" = "en"): Inquiry => ({
  name: "", method: "phone", phone: "", email: "", age: "", course, lang, message: ""
});

export function validateInquiry(f: Inquiry): InquiryErrors {
  const e: InquiryErrors = {};
  if (f.name.trim().length < 2) e.name = true;
  if (f.method === "phone") {
    if ((f.phone.match(/\d/g) ?? []).length < 8) e.phone = true;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = true;
  if (!f.age) e.age = true;
  if (!f.course) e.course = true;
  return e;
}
