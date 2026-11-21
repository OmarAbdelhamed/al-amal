import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { CourseCard } from "@/components/CourseCard";
import { Arrow, Icon } from "@/components/Icon";
import { Art, FinalCta, MethodBand, SecHead, Spot, Tbc } from "@/components/ui";
import { hero } from "@/lib/art";
import { SHOW_TEACHERS, ageGroups, categories, courses, coursesIn } from "@/lib/content";
import { getDict, href, tr } from "@/lib/i18n";
import type { Lang } from "@/lib/types";

const CATEGORY_ART: Record<string, string> = { languages: "abc", math: "shapes", science: "atom", coding: "blocks", quran: "mushaf", teachers: "board" };

export default async function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const t = getDict(lang);
  const h = t.home;
  const featured = courses.filter((c) => c.featured).slice(0, 6);
  const [t1, t2, t3] = h.title;
  const faqs = [...t.how.faqs.slice(0, 4), t.pricing.faqs[0]];

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow"><span className="dot" />{h.eyebrow}</span>
            <h1 style={{ marginTop: 16 }}>{t1} {t2} <span className="hl">{t3}</span></h1>
            <p className="lead">{h.lead}</p>
            <div className="hero-ctas">
              <Link className="btn" href={href.courses(lang)}>{t.cta.explore}<Arrow /></Link>
              <Link className="btn btn-secondary" href={href.how(lang)}><Icon name="circle-play" />{t.cta.how}</Link>
            </div>
            <div className="hero-facts">
              {h.facts.map(([b, s]) => <div key={b}><b>{b}</b><span>{s}</span></div>)}
            </div>
          </div>
          <div className="hero-art-wrap"><Art svg={hero()} /></div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "var(--s12)" }}>
        <div className="wrap">
          <SecHead eyebrow={h.programsEyebrow} title={h.programsTitle} lead={h.programsLead} />
          <div className="cat-grid">
            {categories.map((c) => (
              <Link key={c.id} className={`cat-card c-${c.id}`} href={href.courses(lang, { cat: c.id })}>
                <div className="arch"><Spot art={CATEGORY_ART[c.id]} cat={c.id} id={`cat-${c.id}`} fit="meet" /></div>
                <div className="txt"><h3>{tr(c.name, lang)}</h3><p>{tr(c.blurb, lang)}</p></div>
                <div className="meta"><span className="num">{h.coursesCount(coursesIn(c.id).length)}</span><span className="go"><Arrow small /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-sand">
        <div className="wrap">
          <SecHead eyebrow={h.journeyEyebrow} title={h.journeyTitle} center />
          <ol className="journey">
            {h.journey.map(([b, s], i) => (
              <li key={b}>
                <Link href={href.courses(lang, { age: ageGroups[i].id })}>
                  <span className="node"><span className="num">{i + 1}</span></span><b>{b}</b><small>{s}</small>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
            <SecHead eyebrow={h.featuredEyebrow} title={h.featuredTitle} />
            <Link className="btn btn-secondary" href={href.courses(lang)} style={{ marginBottom: 40 }}>{t.cta.all}<Arrow /></Link>
          </div>
          <div className="course-grid">{featured.map((c, i) => <CourseCard key={c.slug} c={c} lang={lang} index={i} />)}</div>
        </div>
      </section>

      <section className="section band-sand">
        <div className="wrap">
          <SecHead eyebrow={h.whyEyebrow} title={h.whyTitle} />
          <div className="why-grid">
            {h.why.map(([i, b, p]) => (
              <div key={b} className="why-item"><span className="ic"><Icon name={i} className="i-lg" /></span><div><h3>{b}</h3><p>{p}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecHead eyebrow={h.howEyebrow} title={h.howTitle} />
          <ol className="steps">
            {h.steps.map(([b, p], i) => <li key={b}><span className="n num">{i + 1}</span><h3>{b}</h3><p>{p}</p></li>)}
          </ol>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn" href={href.courses(lang)}>{t.cta.explore}<Arrow /></Link>
            <Link className="btn btn-ghost" href={href.how(lang)}>{t.nav.how}<Arrow small /></Link>
          </div>
        </div>
      </section>

      <MethodBand lang={lang} />

      {SHOW_TEACHERS && (
        <section className="section">
          <div className="wrap teach">
            <div><SecHead eyebrow={h.teachersEyebrow} title={h.teachersTitle} lead={h.teachersBody} /></div>
            <div>
              <div className="teacher-slots">
                {[0, 1, 2].map((i) => <div key={i} className="slot"><Icon name="user-round" className="i-lg" /><div><Tbc lang={lang} /></div></div>)}
              </div>
              <p className="hint" style={{ marginTop: 12 }}>{h.teachersPlaceholder}</p>
            </div>
          </div>
        </section>
      )}

      <section className="section band-sand">
        <div className="wrap faq-wrap">
          <div>
            <SecHead eyebrow={h.faqEyebrow} title={h.faqTitle} />
            <Link className="btn btn-secondary" href={href.how(lang)}>{t.nav.how}<Arrow /></Link>
          </div>
          <Accordion openFirst items={faqs.map(([q, a]) => ({ q, a: <p>{a}</p> }))} />
        </div>
      </section>

      <FinalCta lang={lang} />
    </>
  );
}
