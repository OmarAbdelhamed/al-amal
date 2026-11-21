"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ageGroups, categories, courses, coursesIn, getCategory, levels } from "@/lib/content";
import { emptyFilters, getDict, matches, tr, type Filters } from "@/lib/i18n";
import type { Lang, LevelId } from "@/lib/types";
import { CourseCard } from "./CourseCard";
import { Icon } from "./Icon";
import { EmptyArt } from "./ui";

type Key = "cat" | "age" | "level";

/** Search + filters + results. Initial filters come from the URL (?cat=, ?age=). */
export function CourseCatalog({ lang, initial }: { lang: Lang; initial: Partial<Filters> }) {
  const t = getDict(lang);
  const tc = t.courses;
  const [f, setF] = useState<Filters>({ ...emptyFilters, ...initial });
  const [open, setOpen] = useState(false);
  const list = useMemo(() => courses.filter((c) => matches(c, f)), [f]);

  const set = (k: keyof Filters, v: string) => setF((p) => ({ ...p, [k]: v }));
  const chip = (k: Key, v: string, label: ReactNode, extra?: ReactNode) => (
    <button key={v} type="button" className="chip" aria-pressed={f[k] === v} onClick={() => set(k, v)}>{extra}{label}</button>
  );

  const active: [keyof Filters, string][] = [];
  if (f.cat !== "all") active.push(["cat", tr(getCategory(f.cat)!.name, lang)]);
  if (f.age !== "all") active.push(["age", tr(ageGroups.find((g) => g.id === f.age)!.name, lang)]);
  if (f.level !== "all") active.push(["level", tr(levels[f.level as LevelId], lang)]);
  if (f.q.trim()) active.push(["q", `“${f.q.trim()}”`]);

  const clear = (k: keyof Filters | "all") => (k === "all" ? setF(emptyFilters) : set(k, k === "q" ? "" : "all"));

  let idx = 0;
  const grouped = f.cat === "all" && !f.q.trim();

  return (
    <>
      <div className="search" style={{ maxWidth: 560, marginTop: -8, marginBottom: 32 }}>
        <Icon name="search" />
        <label className="sr-only" htmlFor="q">{tc.search}</label>
        <input id="q" type="search" autoComplete="off" placeholder={tc.searchPh} value={f.q} onChange={(e) => set("q", e.target.value)} />
        {f.q && <button className="clear" type="button" onClick={() => clear("q")} aria-label={t.close}><Icon name="x" className="i-sm" /></button>}
      </div>

      <div className="catalog">
        <aside className={`filters${open ? " open" : ""}`} aria-label={tc.filters}>
          <button className="btn btn-secondary btn-block filter-toggle" type="button" aria-expanded={open} aria-controls="fbody" onClick={() => setOpen((o) => !o)}>
            <Icon name="sliders-horizontal" className="i-sm" />{tc.filters}<span className="badge num" style={{ height: 22 }}>{list.length}</span>
          </button>
          <div className="filters-body" id="fbody">
            <div className="fgroup">
              <span className="lbl" id="fl-cat">{tc.category}</span>
              <div className="chips" role="group" aria-labelledby="fl-cat">
                {chip("cat", "all", tc.all)}
                {categories.map((c) => chip("cat", c.id, <>{tr(c.name, lang)} <span className="count num">{coursesIn(c.id).length}</span></>, <span className="sw" style={{ background: `var(--${c.id})` }} />))}
              </div>
            </div>
            <div className="fgroup">
              <span className="lbl" id="fl-age">{tc.ageGroup}</span>
              <div className="chips" role="group" aria-labelledby="fl-age">
                {chip("age", "all", tc.anyAge)}
                {ageGroups.map((g) => chip("age", g.id, <bdi>{tr(g.name, lang)}</bdi>))}
              </div>
            </div>
            <div className="fgroup">
              <span className="lbl" id="fl-lvl">{t.level}</span>
              <div className="chips" role="group" aria-labelledby="fl-lvl">
                {chip("level", "all", tc.levelAny)}
                {(Object.keys(levels) as LevelId[]).map((k) => chip("level", k, tr(levels[k], lang)))}
              </div>
            </div>
          </div>
        </aside>

        <div style={{ minWidth: 0 }}>
          <div className="results-bar">
            <span className="count num" aria-live="polite">{tc.results(list.length)}</span>
            <div className="active-filters">
              {active.map(([k, l]) => (
                <button key={k} type="button" onClick={() => clear(k)} aria-label={`${l} ×`}><bdi>{l}</bdi><Icon name="x" className="i-sm" /></button>
              ))}
              {active.length > 1 && (
                <button type="button" onClick={() => clear("all")} style={{ background: "transparent", color: "var(--muted)" }}>{t.cta.reset}</button>
              )}
            </div>
          </div>

          {!list.length ? (
            <div className="empty">
              <EmptyArt />
              <h3>{tc.emptyTitle}</h3>
              <p>{tc.emptyBody}</p>
              <button className="btn btn-secondary" type="button" onClick={() => clear("all")}><Icon name="rotate-ccw" className="i-sm" />{t.cta.reset}</button>
            </div>
          ) : grouped ? (
            categories.map((c) => {
              const items = list.filter((x) => x.cat === c.id);
              if (!items.length) return null;
              return (
                <div key={c.id}>
                  <h2 className="cat-section-title"><span className="sw" style={{ background: `var(--${c.id})` }} />{tr(c.name, lang)} <span className="badge outline num">{items.length}</span></h2>
                  <div className="course-grid">{items.map((x) => <CourseCard key={x.slug} c={x} lang={lang} index={idx++} className="entering" />)}</div>
                </div>
              );
            })
          ) : (
            <div className="course-grid">{list.map((x, i) => <CourseCard key={x.slug} c={x} lang={lang} index={i} className="entering" />)}</div>
          )}
        </div>
      </div>
    </>
  );
}
