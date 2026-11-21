"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { categories, coursesIn, getCourse } from "@/lib/content";
import { getDict, href, tr } from "@/lib/i18n";
import { blankInquiry, validateInquiry, type Inquiry, type InquiryErrors } from "@/lib/inquiry";
import type { Lang } from "@/lib/types";
import { Arrow, Icon } from "./Icon";

const AGES = Array.from({ length: 13 }, (_, i) => i + 5);

export function ContactForm({ lang, initialCourse }: { lang: Lang; initialCourse: string }) {
  const t = getDict(lang);
  const tc = t.contact;
  const [f, setF] = useState<Inquiry>(() => blankInquiry(initialCourse, lang));
  const [touched, setTouched] = useState(false);
  const [blurred, setBlurred] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [sent, setSent] = useState<Inquiry | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const errors: InquiryErrors = validateInquiry(f);
  const show = (k: keyof InquiryErrors): boolean =>
    (touched || (blurred.has(k) && !!(f[k as keyof Inquiry] as string))) && !!errors[k];
  const isValid = (k: keyof InquiryErrors) => (touched || blurred.has(k)) && !errors[k] && !!(f[k as keyof Inquiry] as string);
  const set = <K extends keyof Inquiry>(k: K, v: Inquiry[K]) => setF((p) => ({ ...p, [k]: v }));
  const blur = (k: string) => setBlurred((s) => new Set(s).add(k));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (Object.keys(errors).length) {
      const first = formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      if (!res.ok) throw new Error(String(res.status));
      setSent(f);
      setStatus("sent");
      setTimeout(() => successRef.current?.focus(), 50);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" && sent) {
    const c = getCourse(sent.course);
    const rows: [string, ReactNode][] = [
      [tc.name, sent.name],
      [sent.method === "phone" ? tc.phone : tc.email, <bdi key="c" dir="ltr">{sent.method === "phone" ? sent.phone : sent.email}</bdi>],
      [tc.childAge, sent.age === "adult" ? tc.adult : `${sent.age}${lang === "ar" ? "" : " years"}`],
      [tc.course, sent.course === "unsure" ? tc.notSure : c ? tr(c.title, lang) : sent.course],
      [tc.prefLang, sent.lang === "ar" ? "العربية" : "English"]
    ];
    if (sent.message) rows.push([tc.message, sent.message]);
    return (
      <div className="success" tabIndex={-1} ref={successRef}>
        <span className="tick">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
        </span>
        <div>
          <h2>{lang === "ar" ? "شكرًا لك، وصلنا استفسارك" : "Thank you — we've received your inquiry"}</h2>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>{lang === "ar" ? "ستتواصل معك المدرسة قريبًا." : "The school will be in touch soon."}</p>
        </div>
        <div className="summary">
          <h3>{tc.summaryTitle}</h3>
          <dl>{rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        </div>
        <div style={{ width: "100%", textAlign: "start" }}>
          <h3 style={{ fontSize: "var(--fs-lg)", marginBottom: 12 }}>{tc.nextTitle}</h3>
          <ol className="next-list">{tc.next.map((l) => <li key={l}>{l}</li>)}</ol>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <button className="btn btn-secondary" type="button" onClick={() => { setF(blankInquiry("", lang)); setTouched(false); setBlurred(new Set()); setStatus("idle"); setSent(null); }}>
            <Icon name="rotate-ccw" className="i-sm" />{tc.another}
          </button>
          <Link className="btn" href={href.courses(lang)}>{t.cta.explore}<Arrow /></Link>
        </div>
      </div>
    );
  }

  const fieldCls = (k: keyof InquiryErrors) => `field${show(k) ? " invalid" : isValid(k) && k !== "age" && k !== "course" ? " valid" : ""}`;
  const err = (k: keyof InquiryErrors, msg: string) => <span className="ferr" id={`e-${k}`}><Icon name="circle-alert" className="i-sm" />{msg}</span>;
  const align = { textAlign: lang === "ar" ? "right" : "left" } as const;

  return (
    <form className="form" ref={formRef} noValidate onSubmit={onSubmit}>
      <div className={`form-err${touched && Object.keys(errors).length ? " show" : ""}`} role="alert">
        <Icon name="circle-alert" />{tc.errSummary}
      </div>
      {status === "error" && (
        <div className="form-err show" role="alert">
          <Icon name="circle-alert" />{lang === "ar" ? "تعذّر الإرسال. تحقّق من الاتصال وحاول مرة أخرى." : "We couldn't send your inquiry. Check your connection and try again."}
        </div>
      )}

      <div className={fieldCls("name")}>
        <label htmlFor="f-name">{tc.name}</label>
        <input className="input" id="f-name" autoComplete="name" placeholder={tc.namePh} value={f.name}
          onChange={(e) => set("name", e.target.value)} onBlur={() => blur("name")} aria-invalid={show("name")} aria-describedby="e-name" />
        {err("name", tc.err.name)}
      </div>

      <fieldset className="field" style={{ border: 0, padding: 0, margin: 0 }}>
        <legend className="lbl" style={{ fontWeight: 700, color: "var(--ink)", fontSize: ".95rem", marginBottom: 8, padding: 0 }}>{tc.contactMethod}</legend>
        <div className="radio-cards">
          {(["phone", "email"] as const).map((m) => (
            <label key={m}>
              <input type="radio" name="method" value={m} checked={f.method === m} onChange={() => set("method", m)} />
              <span className="dotr" /><Icon name={m === "phone" ? "phone" : "mail"} className="i-sm" />{m === "phone" ? tc.phone : tc.email}
            </label>
          ))}
        </div>
      </fieldset>

      {f.method === "phone" ? (
        <div className={fieldCls("phone")}>
          <label htmlFor="f-phone">{tc.phone}</label>
          <input className="input" id="f-phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" style={align} placeholder={tc.phonePh}
            value={f.phone} onChange={(e) => set("phone", e.target.value)} onBlur={() => blur("phone")} aria-invalid={show("phone")} aria-describedby="e-phone" />
          {err("phone", tc.err.phone)}
        </div>
      ) : (
        <div className={fieldCls("email")}>
          <label htmlFor="f-email">{tc.email}</label>
          <input className="input" id="f-email" type="email" autoComplete="email" dir="ltr" style={align} placeholder={tc.emailPh}
            value={f.email} onChange={(e) => set("email", e.target.value)} onBlur={() => blur("email")} aria-invalid={show("email")} aria-describedby="e-email" />
          {err("email", tc.err.email)}
        </div>
      )}

      <div className="row2">
        <div className={fieldCls("age")}>
          <label htmlFor="f-age">{tc.childAge}</label>
          <select className="select" id="f-age" value={f.age} onChange={(e) => set("age", e.target.value)} onBlur={() => blur("age")} aria-invalid={show("age")} aria-describedby="e-age">
            <option value="">{tc.childAgePh}</option>
            {AGES.map((n) => <option key={n} value={n}>{n} {lang === "ar" ? (n <= 10 ? "سنوات" : "سنة") : "years"}</option>)}
            <option value="adult">{tc.adult}</option>
          </select>
          {err("age", tc.err.age)}
        </div>
        <div className={fieldCls("course")}>
          <label htmlFor="f-course">{tc.course}</label>
          <select className="select" id="f-course" value={f.course} onChange={(e) => set("course", e.target.value)} onBlur={() => blur("course")} aria-invalid={show("course")} aria-describedby="e-course">
            <option value="">{tc.coursePh}</option>
            <option value="unsure">{tc.notSure}</option>
            {categories.map((k) => (
              <optgroup key={k.id} label={tr(k.name, lang)}>
                {coursesIn(k.id).map((c) => <option key={c.slug} value={c.slug}>{tr(c.title, lang)}</option>)}
              </optgroup>
            ))}
          </select>
          {err("course", tc.err.course)}
        </div>
      </div>

      <fieldset className="field" style={{ border: 0, padding: 0, margin: 0 }}>
        <legend className="lbl" style={{ fontWeight: 700, color: "var(--ink)", fontSize: ".95rem", marginBottom: 8, padding: 0 }}>{tc.prefLang}</legend>
        <div className="radio-cards">
          <label>
            <input type="radio" name="lang" value="ar" checked={f.lang === "ar"} onChange={() => set("lang", "ar")} />
            <span className="dotr" /><span lang="ar">العربية</span>
            {lang === "en" && <span style={{ color: "var(--muted)", fontWeight: 500 }}> ({tc.ar})</span>}
          </label>
          <label>
            <input type="radio" name="lang" value="en" checked={f.lang === "en"} onChange={() => set("lang", "en")} />
            <span className="dotr" /><span lang="en">English</span>
            {lang === "ar" && <span style={{ color: "var(--muted)", fontWeight: 500 }}> ({tc.en})</span>}
          </label>
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="f-msg">{tc.message} <span className="opt">({tc.optional})</span></label>
        <textarea className="textarea" id="f-msg" maxLength={600} placeholder={tc.messagePh} value={f.message} onChange={(e) => set("message", e.target.value)} />
      </div>

      <p className="privacy"><Icon name="lock" className="i-sm" /><span>{tc.privacy}</span></p>
      <button className="btn" type="submit" disabled={status === "sending"} style={{ justifySelf: "start", minWidth: 200 }}>
        {status === "sending" ? <><span className="spinner" />{tc.sending}</> : <>{tc.submit}<Arrow /></>}
      </button>
    </form>
  );
}
