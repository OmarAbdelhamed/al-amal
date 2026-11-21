import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { empty as emptyArt, spot } from "@/lib/art";
import { getDict, href } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import { Arrow, Icon } from "./Icon";

/** Renders one of our own SVG illustrations (static markup from lib/art). */
export function Art({ svg, className }: { svg: string; className?: string }) {
  return <div className={className} style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: svg }} />;
}

export function Spot({ art, cat, id, fit = "slice" }: { art: string; cat: string; id: string; fit?: "slice" | "meet" }) {
  const svg = spot(art, cat, id);
  return <Art svg={fit === "meet" ? svg.replace("xMidYMid slice", "xMidYMid meet") : svg} />;
}

export function EmptyArt() {
  return <Art svg={emptyArt()} />;
}

/** Dashed "To be confirmed" marker for anything the school hasn't published yet. */
export function Tbc({ lang, text }: { lang: Lang; text?: string }) {
  return (
    <span className="tbc">
      <Icon name="circle-dashed" />
      {text ?? getDict(lang).tbc}
    </span>
  );
}

export function SecHead({ eyebrow, title, lead, center }: { eyebrow: string; title: string; lead?: string | null; center?: boolean }) {
  return (
    <div className={`sec-head${center ? " center" : ""}`}>
      <span className="eyebrow"><span className="dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {lead ? <p>{lead}</p> : null}
    </div>
  );
}

export function PatternBg({ color = "#ffffff", opacity = 0.12 }: { color?: string; opacity?: number }) {
  const id = `pp${color.slice(1)}`;
  return (
    <svg className="pat" aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id={id} width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="2" fill={color} opacity={opacity * 1.4} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function Crumbs({ lang, items }: { lang: Lang; items: { label: string; href?: string }[] }) {
  const t = getDict(lang);
  const all = [{ label: t.nav.home, href: href.home(lang) }, ...items];
  return (
    <ol className="crumbs">
      {all.map((it, i) => (
        <Fragment key={i}>
          {i > 0 && <li aria-hidden="true"><Icon name="chevron-right" className="flip" /></li>}
          <li aria-current={i === all.length - 1 ? "page" : undefined}>
            {it.href && i < all.length - 1 ? <Link href={it.href}>{it.label}</Link> : it.label}
          </li>
        </Fragment>
      ))}
    </ol>
  );
}

const DECO: Record<string, [string, string]> = {
  teal: ["#E3F1EE", "#FDF3DA"],
  sun: ["#FDF3DA", "#E3F1EE"],
  coral: ["#FBE9E3", "#E3F1EE"]
};

/** Inner-page header: breadcrumb, eyebrow, title, lead, soft decorative circles. */
export function PageHead({ lang, crumb, eyebrow, title, lead, deco = "teal", children }: {
  lang: Lang; crumb: string; eyebrow: string; title: string; lead: string; deco?: keyof typeof DECO; children?: ReactNode;
}) {
  const [a, b] = DECO[deco];
  return (
    <section className="page-head">
      <svg className="deco" viewBox="0 0 340 340" aria-hidden="true">
        <circle cx="200" cy="140" r="104" fill={a} />
        <circle cx="128" cy="222" r="52" fill={b} />
      </svg>
      <div className="wrap" style={{ position: "relative" }}>
        <Crumbs lang={lang} items={[{ label: crumb }]} />
        <span className="eyebrow" style={{ marginTop: 20 }}><span className="dot" />{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
        {children}
      </div>
    </section>
  );
}

export function FinalCta({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  return (
    <section className="section tight">
      <div className="wrap">
        <div className="final">
          <PatternBg color="#ffffff" opacity={0.1} />
          <div>
            <h2>{t.home.finalTitle}</h2>
            <p>{t.home.finalBody}</p>
          </div>
          <div className="acts">
            <Link className="btn btn-sun" href={href.contact(lang)}>{t.cta.inquire}<Arrow /></Link>
            <Link className="btn btn-secondary" href={href.courses(lang)}>{t.cta.explore}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const METHOD_COLORS = ["#F2C14E", "#7FC4B8", "#E8755A", "#8EB8D9"];

export function MethodBand({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  return (
    <section className="section band-ink" style={{ position: "relative", overflow: "hidden", isolation: "isolate" }}>
      <PatternBg color="#7FC4B8" opacity={0.12} />
      <div className="wrap method">
        <SecHead eyebrow={t.home.methodEyebrow} title={t.home.methodTitle} />
        <div className="method-list">
          {t.home.method.map(([b, p], i) => (
            <div key={b}>
              <span className="mk">
                <svg viewBox="0 0 44 44" width="44" height="44" aria-hidden="true">
                  <circle cx="22" cy="22" r="18" fill={METHOD_COLORS[i]} />
                  <text x="22" y="27" textAnchor="middle" fontSize="14" fontWeight="800" fill="#14233B" fontFamily="Nunito, sans-serif">{i + 1}</text>
                </svg>
              </span>
              <div><h3>{b}</h3><p>{p}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
