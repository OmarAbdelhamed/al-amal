"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, coursesIn, formats } from "@/lib/content";
import { ageShort, durationShort, fmtPrice, getDict, href, tr } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import { Tbc } from "./ui";

/** Every program with its unit and fee; table on desktop, cards on phones. Filter by subject. */
export function PricingTable({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const tp = t.pricing;
  const [pcat, setPcat] = useState("all");
  const cats = categories.filter((c) => pcat === "all" || c.id === pcat);

  return (
    <div>
      <div className="p-tabs" role="group" aria-label={t.courses.category}>
        <button type="button" className="chip" aria-pressed={pcat === "all"} onClick={() => setPcat("all")}>{t.courses.all}</button>
        {categories.map((c) => (
          <button key={c.id} type="button" className="chip" aria-pressed={pcat === c.id} onClick={() => setPcat(c.id)}>
            <span className="sw" style={{ background: `var(--${c.id})` }} />{tr(c.name, lang)}
          </button>
        ))}
      </div>

      <div className="ptable-wrap">
        <table className="ptable">
          <thead>
            <tr>
              <th scope="col">{tp.program}</th><th scope="col">{t.age}</th><th scope="col">{t.duration}</th>
              <th scope="col">{tp.unit}</th><th scope="col">{tp.fee}</th><th scope="col"><span className="sr-only">{t.cta.ask}</span></th>
            </tr>
          </thead>
          <tbody>
            {cats.flatMap((k) => [
              <tr key={k.id} className="row-cat"><td colSpan={6}>{tr(k.name, lang)}</td></tr>,
              ...coursesIn(k.id).map((c) => {
                const price = fmtPrice(c, lang);
                const age = ageShort(c, lang);
                const dur = durationShort(c, lang);
                return (
                  <tr key={c.slug}>
                    <td>
                      <div className="prog">
                        <span className="sw" style={{ background: `var(--${c.cat})` }} />
                        <div>
                          <Link href={href.course(lang, c.slug)}>{tr(c.title, lang)}</Link>
                          <small>{tr(formats[c.format], lang)}{c.facts.sessions ? ` · ${tr(c.facts.sessions, lang)}` : ""}</small>
                        </div>
                      </div>
                    </td>
                    <td>{age ? <bdi className="num">{age}</bdi> : <Tbc lang={lang} />}</td>
                    <td>{dur ? <bdi>{dur}</bdi> : <Tbc lang={lang} />}</td>
                    <td>{c.priceUnit ? tr(c.priceUnit, lang) : <Tbc lang={lang} />}</td>
                    <td>{price ? <b className="num">{price}</b> : <span style={{ color: "var(--muted)", fontWeight: 700 }}>{t.feeTbc}</span>}</td>
                    <td style={{ textAlign: "end" }}><Link className="btn btn-sm btn-secondary" href={href.contact(lang, c.slug)}>{t.cta.ask}</Link></td>
                  </tr>
                );
              })
            ])}
          </tbody>
        </table>
      </div>

      <div className="pcards">
        {cats.map((k) => (
          <div key={k.id} style={{ display: "grid", gap: 12 }}>
            <h3 className="cat-section-title" style={{ fontSize: "var(--fs-lg)" }}><span className="sw" style={{ background: `var(--${k.id})` }} />{tr(k.name, lang)}</h3>
            {coursesIn(k.id).map((c) => {
              const price = fmtPrice(c, lang);
              const age = ageShort(c, lang);
              const dur = durationShort(c, lang);
              return (
                <div key={c.slug} className={`enroll-card c-${c.cat}`} style={{ boxShadow: "none" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                    <Link href={href.course(lang, c.slug)} style={{ fontWeight: 800, color: "var(--ink)", textDecoration: "none", fontSize: "1.05rem" }}>{tr(c.title, lang)}</Link>
                    <span className={`badge cat-${c.cat}`}>{tr(formats[c.format], lang)}</span>
                  </div>
                  <dl>
                    <div><dt>{t.age}</dt><dd>{age ? <bdi>{age}</bdi> : <Tbc lang={lang} />}</dd></div>
                    <div><dt>{t.duration}</dt><dd>{dur ? <bdi>{dur}</bdi> : <Tbc lang={lang} />}</dd></div>
                    <div><dt>{tp.unit}</dt><dd>{c.priceUnit ? tr(c.priceUnit, lang) : <Tbc lang={lang} />}</dd></div>
                    <div><dt>{tp.fee}</dt><dd>{price ?? t.feeTbc}</dd></div>
                  </dl>
                  <Link className="btn btn-sm btn-secondary btn-block" href={href.contact(lang, c.slug)}>{t.cta.ask}</Link>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
