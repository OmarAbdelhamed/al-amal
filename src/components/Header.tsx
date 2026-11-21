"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { categories, courses } from "@/lib/content";
import { getDict, href, otherLang, tr } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import { Arrow, Icon } from "./Icon";

export function Logo({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const name = lang === "ar" ? "مدرسة الأمل" : "Al-Amal School";
  return (
    <Link className="logo" href={href.home(lang)} aria-label={`${name} — ${t.nav.home}`}>
      <Image className="logo-mark" src="/logo-mark.png" alt="" width={356} height={270} priority />
      <span className="lt">{name}</span>
    </Link>
  );
}

type NavKey = "home" | "courses" | "pricing" | "about" | "how" | "contact";
const NAV: { key: NavKey; path: (l: Lang) => string; seg: string }[] = [
  { key: "home", path: href.home, seg: "" },
  { key: "courses", path: (l) => href.courses(l), seg: "courses" },
  { key: "pricing", path: href.pricing, seg: "pricing" },
  { key: "about", path: href.about, seg: "about" },
  { key: "how", path: href.how, seg: "how-it-works" },
  { key: "contact", path: (l) => href.contact(l), seg: "contact" }
];

export function Header({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const pathname = usePathname() ?? `/${lang}`;
  const router = useRouter();
  const section = pathname.split("/")[2] ?? "";
  const [ddOpen, setDdOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);
  const ddTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // close menus when the route changes
  useEffect(() => { setDdOpen(false); setDrawer(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setDdOpen(false); setDrawer(false); } };
    const onDown = (e: MouseEvent) => { if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDdOpen(false); };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawer]);

  /** Same page in the other language; keeps the query string (e.g. active filters). */
  const switchLang = () => {
    const to = otherLang(lang);
    const rest = pathname.split("/").slice(2).join("/");
    document.cookie = `lang=${to}; path=/; max-age=31536000; samesite=lax`;
    router.push(`/${to}${rest ? `/${rest}` : ""}${window.location.search}`, { scroll: false });
  };

  const isCurrent = (seg: string) => (seg === "" ? section === "" : section === seg);
  const hoverable = () => typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="wrap hdr">
          <Logo lang={lang} />
          <nav className="nav" aria-label="Main">
            <Link href={href.home(lang)} aria-current={isCurrent("") ? "page" : undefined}>{t.nav.home}</Link>
            <div
              ref={ddRef}
              className={`has-dd${ddOpen ? " open" : ""}`}
              onMouseEnter={() => { if (hoverable()) { if (ddTimer.current) clearTimeout(ddTimer.current); setDdOpen(true); } }}
              onMouseLeave={() => { if (hoverable()) ddTimer.current = setTimeout(() => setDdOpen(false), 180); }}
            >
              <button type="button" aria-expanded={ddOpen} aria-controls="dd-menu" data-current={isCurrent("courses")} onClick={() => setDdOpen((o) => !o)}>
                {t.nav.courses}<Icon name="chevron-down" className="i-sm" />
              </button>
              <div className="dd" id="dd-menu">
                {categories.map((c) => (
                  <Link key={c.id} href={href.courses(lang, { cat: c.id })} className={`c-${c.id}`}>
                    <span className="ic" style={{ background: "var(--c50)", color: "var(--cink)" }}><Icon name={c.icon} /></span>
                    <span><b>{tr(c.name, lang)}</b><span>{tr(c.blurb, lang)}</span></span>
                  </Link>
                ))}
                <div className="dd-foot">
                  <span className="num" style={{ color: "var(--muted)" }}>{t.courses.results(courses.length)}</span>
                  <Link href={href.courses(lang)} style={{ display: "inline-flex", gap: 6, alignItems: "center", padding: 0, fontWeight: 700, color: "var(--teal)" }}>
                    {t.cta.all}<Arrow small />
                  </Link>
                </div>
              </div>
            </div>
            {NAV.slice(2).map((n) => (
              <Link key={n.key} href={n.path(lang)} aria-current={isCurrent(n.seg) ? "page" : undefined}>{t.nav[n.key]}</Link>
            ))}
          </nav>
          <div className="hdr-actions">
            <button className="lang-btn" type="button" onClick={switchLang} aria-label={t.langLabel} lang={otherLang(lang)}>
              <Icon name="globe" className="i-sm" />
              <span className={lang === "ar" ? "en-label" : "ar-label"}>{t.langSwitch}</span>
            </button>
            <Link className="btn btn-sm btn-enroll" href={href.contact(lang)}>{t.cta.enroll}</Link>
            <button className="menu-btn" type="button" onClick={() => setDrawer(true)} aria-label={t.menu} aria-expanded={drawer} aria-controls="drawer">
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer${drawer ? " open" : ""}`} id="drawer" aria-hidden={!drawer}>
        <div className="scrim" onClick={() => setDrawer(false)} />
        <div className="panel" role="dialog" aria-modal="true" aria-label={t.menu}>
          <div className="panel-top">
            <Logo lang={lang} />
            <button className="menu-btn" style={{ display: "inline-flex" }} type="button" onClick={() => setDrawer(false)} aria-label={t.close}>
              <Icon name="x" />
            </button>
          </div>
          <nav aria-label="Mobile">
            {NAV.map((n) => (
              <Link key={n.key} href={n.path(lang)} aria-current={isCurrent(n.seg) ? "page" : undefined}>{t.nav[n.key]}<Arrow small /></Link>
            ))}
          </nav>
          <div className="cats">
            {categories.map((c) => (
              <Link key={c.id} href={href.courses(lang, { cat: c.id })} className={`c-${c.id}`}>
                <span style={{ color: "var(--c)" }}><Icon name={c.icon} className="i-sm" /></span>{tr(c.name, lang)}
              </Link>
            ))}
          </div>
          <div className="bottom">
            <button className="btn btn-secondary btn-block" type="button" onClick={switchLang}>
              <Icon name="globe" className="i-sm" /><span lang={otherLang(lang)}>{t.langSwitch}</span>
            </button>
            <Link className="btn btn-block" href={href.contact(lang)}>{t.cta.enroll}</Link>
          </div>
        </div>
      </div>
    </>
  );
}
