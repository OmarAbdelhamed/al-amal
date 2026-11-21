import Link from "next/link";
import { categories } from "@/lib/content";
import { getDict, href, tr } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import { Logo } from "./Header";

export function Footer({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const explore: { label: string; to: string }[] = [
    { label: t.nav.courses, to: href.courses(lang) },
    { label: t.nav.pricing, to: href.pricing(lang) },
    { label: t.nav.about, to: href.about(lang) },
    { label: t.nav.how, to: href.how(lang) },
    { label: t.nav.contact, to: href.contact(lang) }
  ];
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div style={{ display: "grid", gap: 16, alignContent: "start", maxWidth: "36ch" }}>
            <Logo lang={lang} />
            <p>{t.footer.about}</p>
          </div>
          <div>
            <h4>{t.footer.explore}</h4>
            <ul>{explore.map((e) => <li key={e.to}><Link href={e.to}>{e.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4>{t.footer.programs}</h4>
            <ul>{categories.map((c) => <li key={c.id}><Link href={href.courses(lang, { cat: c.id })}>{tr(c.name, lang)}</Link></li>)}</ul>
          </div>
        </div>
        <div className="foot-note">
          <span>© {new Date().getFullYear()} {lang === "ar" ? "مدرسة الأمل" : "Al-Amal School"}</span>
          <span>{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
