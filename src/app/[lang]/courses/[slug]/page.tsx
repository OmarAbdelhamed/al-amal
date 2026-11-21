import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/Accordion";
import { CourseCard } from "@/components/CourseCard";
import { CourseTabs, MobileEnrollBar, ScrollLink } from "@/components/CourseClient";
import { Arrow, Icon } from "@/components/Icon";
import { Crumbs, Spot, Tbc } from "@/components/ui";
import { SHOW_TEACHERS, courses, formats, getCategory, getCourse } from "@/lib/content";
import { ageLong, ageShort, fmtPrice, getDict, href, levelName, tr } from "@/lib/i18n";
import { LANGS, type Lang } from "@/lib/types";

type Props = { params: Promise<{ lang: Lang; slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.flatMap((lang) => courses.map((c) => ({ lang, slug: c.slug })));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const c = getCourse(slug);
  return c ? { title: tr(c.title, lang), description: tr(c.tagline, lang) } : {};
}

const METHOD_ICONS = ["spell-check", "audio-lines", "users", "heart"];

export default async function CoursePage({ params }: Props) {
  const { lang, slug } = await params;
  const c = getCourse(slug);
  if (!c) notFound();

  const t = getDict(lang);
  const tc = t.course;
  const k = getCategory(c.cat)!;
  const price = fmtPrice(c, lang);
  const f = c.facts;
  const fmtIcon = c.format === "online" ? "video" : "map-pin";
  const enroll = href.contact(lang, c.slug);
  const nextC = c.next ? getCourse(c.next) : undefined;
  const related = courses.filter((x) => x.slug !== c.slug && (x.cat === c.cat || x.slug === c.next)).slice(0, 3);

  const infoRows: [string, string, string | null][] = [
    ["users", t.age, ageLong(c, lang)],
    ["signal", t.level, levelName(c, lang)],
    ["calendar-days", t.sessions, tr(f.sessions, lang)],
    ["timer", t.sessionLength, tr(f.sessionLength, lang)],
    ["hourglass", t.duration, tr(f.duration, lang)],
    [fmtIcon, t.format, tr(formats[c.format], lang)],
    ["languages", t.language, tr(f.language, lang)],
    ["users-round", t.group, tr(f.groupSize, lang)],
    ["calendar-plus", t.intake, tr(f.intake, lang)]
  ];
  if (f.cities) infoRows.splice(6, 0, ["map", t.cities, tr(f.cities, lang)]);
  if (f.certificate) infoRows.push(["award", t.certificate, t.certYes]);

  const tabs: [string, string][] = [
    ["c-about", tc.about], ["c-learn", tc.learn], ["c-curriculum", tc.curriculum],
    ["c-info", tc.info], ["c-pricing", tc.pricing], ["c-faq", tc.faq]
  ];
  const fee = price ? <b className="num">{price}</b> : <b className="pending">{t.feeTbc}</b>;
  const keyFacts: [string, string, string | null][] = [
    ["users", t.age, ageLong(c, lang)], ["signal", t.level, levelName(c, lang)], ["hourglass", t.duration, tr(f.duration, lang)], ["receipt", t.pricing.fee, price]
  ];
  const sideRows: [string, string, string | null][] = [
    ["users", t.age, ageShort(c, lang)], ["signal", t.level, levelName(c, lang)], ["hourglass", t.duration, tr(f.duration, lang)], [fmtIcon, t.format, tr(formats[c.format], lang)]
  ];
  const noCurriculum = (
    <div className="callout"><span className="ic"><Icon name="info" /></span><div><b>{t.tbc}</b><p>{tc.noCurriculum}</p></div></div>
  );

  return (
    <>
      <div className={`c-${c.cat}`}>
        <section className="c-hero" style={{ background: "linear-gradient(180deg,var(--c50) 0%, var(--bg) 100%)" }}>
          <div className="wrap">
            <Crumbs lang={lang} items={[{ label: tc.breadcrumb, href: href.courses(lang) }, { label: tr(k.name, lang), href: href.courses(lang, { cat: c.cat }) }, { label: tr(c.title, lang) }]} />
            <div className="c-hero-grid">
              <div>
                <div className="tags">
                  <span className={`badge cat-${c.cat}`}><Icon name={k.icon} />{tr(k.name, lang)}</span>
                  {ageLong(c, lang) && <span className="badge outline"><Icon name="users" /><bdi>{ageLong(c, lang)}</bdi></span>}
                  {levelName(c, lang) && <span className="badge outline"><Icon name="signal" />{levelName(c, lang)}</span>}
                  <span className="badge outline"><Icon name={fmtIcon} />{tr(formats[c.format], lang)}</span>
                </div>
                <h1>{tr(c.title, lang)}</h1>
                <p className="tagline">{tr(c.tagline, lang)}</p>
                <div className="acts" id="hero-acts">
                  <Link className="btn" href={enroll}>{t.cta.enroll}<Arrow /></Link>
                  <ScrollLink to="c-pricing" className="btn btn-secondary"><Icon name="receipt" />{price ?? t.cta.ask}</ScrollLink>
                </div>
              </div>
              <div className="c-art"><Spot art={c.art} cat={c.cat} id={`hero-${c.slug}`} fit="meet" /></div>
            </div>
            <div className="keyfacts" style={{ marginTop: 40 }}>
              {keyFacts.map(([i, l, v]) => (
                <div key={l}>
                  <span className="ic"><Icon name={i} /></span>
                  <div style={{ minWidth: 0 }}>
                    <small>{l}</small>
                    <b>{v ? <bdi>{v}</bdi> : i === "receipt" ? <span style={{ color: "var(--muted)" }}>{t.feeTbc}</span> : <Tbc lang={lang} />}</b>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="wrap c-layout" style={{ marginTop: "var(--s8)" }}>
          <div className="c-main">
            <CourseTabs tabs={tabs} label={tc.about} />

            <section id="c-about">
              <h2>{tc.about}</h2>
              <p className="prose">{tr(c.summary, lang)}</p>
              <div className="about-grid" style={{ marginTop: 24 }}>
                <div className="box"><h3><Icon name="baby" />{tc.forWho}</h3><p>{c.forWho ? tr(c.forWho, lang) : <Tbc lang={lang} />}</p></div>
                <div className="box">
                  <h3><Icon name="target" />{tc.outcomes}</h3>
                  <ul className="outcomes">{c.outcomes.map((o) => <li key={o.en}><Icon name="check" /><span>{tr(o, lang)}</span></li>)}</ul>
                </div>
              </div>
              {nextC && (
                <Link className={`next-step c-${nextC.cat}`} href={href.course(lang, nextC.slug)} style={{ marginTop: 16 }}>
                  <span style={{ display: "grid" }}>{tc.next}<b>{tr(nextC.title, lang)}</b></span>
                  <span className="go"><Arrow small /></span>
                </Link>
              )}
            </section>

            <section id="c-learn">
              <h2>{tc.learn}</h2>
              {c.learn.length ? (
                <div className="learn-grid">{c.learn.map((x) => <div key={x.en}><span className="ic"><Icon name="check" /></span><span>{tr(x, lang)}</span></div>)}</div>
              ) : noCurriculum}
            </section>

            <section id="c-curriculum">
              <h2>{tc.curriculum}</h2>
              {c.curriculum.length ? (
                <Accordion
                  openFirst
                  items={c.curriculum.map((m, i) => ({
                    lead: <span className="stg num">{i + 1}</span>,
                    q: tr(m.title, lang),
                    a: <ul>{m.items.map((it) => <li key={it.en}><Icon name="check" className="i-sm" /><span>{tr(it, lang)}</span></li>)}</ul>
                  }))}
                />
              ) : noCurriculum}
            </section>

            <section id="c-info">
              <h2>{tc.info}</h2>
              <table className="info-table">
                <tbody>
                  {infoRows.map(([i, l, v]) => (
                    <tr key={l}><th scope="row"><Icon name={i} />{l}</th><td>{v ? <bdi>{v}</bdi> : <Tbc lang={lang} />}</td></tr>
                  ))}
                </tbody>
              </table>
              <h3 style={{ fontSize: "var(--fs-lg)", margin: "32px 0 12px" }}>{tc.requirements}</h3>
              {c.requirements.length ? (
                <ul className="req-list">{c.requirements.map((r) => <li key={r.en}><Icon name="circle-check-big" /><span>{tr(r, lang)}</span></li>)}</ul>
              ) : <p style={{ color: "var(--muted)" }}>{tc.noReq}</p>}
            </section>

            <section id="c-pricing">
              <h2>{tc.pricing}</h2>
              <div className="price-panel">
                <div className="l">
                  <h3>{t.pricing.fee}</h3>
                  {price ? <div className="amount num">{price}</div> : <><div className="amount pending">{t.feeTbc}</div><span><Tbc lang={lang} text={t.feeNote} /></span></>}
                  <div style={{ display: "grid", gap: 4, marginTop: 8 }}>
                    <small style={{ color: "var(--muted)", fontWeight: 700 }}>{tc.priceUnit}</small>
                    <span>{c.priceUnit ? tr(c.priceUnit, lang) : <Tbc lang={lang} />}</span>
                  </div>
                  <p style={{ fontSize: ".95rem", marginTop: 8 }}>{tc.priceIntro}</p>
                  <Link className="btn" href={enroll} style={{ marginTop: 8, justifySelf: "start" }}>{t.cta.ask}<Arrow /></Link>
                </div>
                <div className="r">
                  <h3>{tc.included}</h3>
                  <ul className="outcomes">
                    {t.pricing.included.map(([i, l]) => <li key={l}><Icon name={i} /><span>{l}</span></li>)}
                    {f.certificate && <li><Icon name="award" /><span>{t.certYes}</span></li>}
                  </ul>
                  <Link href={href.pricing(lang)} className="btn btn-ghost" style={{ justifySelf: "start", padding: 0 }}>{t.cta.compare}<Arrow small /></Link>
                </div>
              </div>
            </section>

            <section id="c-teach">
              {SHOW_TEACHERS ? (
                <>
                  <h2>{tc.teachers}</h2>
                  <div className="callout info"><span className="ic"><Icon name="graduation-cap" /></span><div><b>{tc.teachers}</b><p>{tc.teachersBody}</p></div></div>
                  <h3 style={{ fontSize: "var(--fs-lg)", margin: "28px 0 12px" }}>{tc.method}</h3>
                </>
              ) : <h2>{tc.method}</h2>}
              <div className="learn-grid">
                {t.home.method.map(([b, p], i) => (
                  <div key={b} style={{ alignItems: "start" }}>
                    <span className="ic"><Icon name={METHOD_ICONS[i]} /></span>
                    <span><b style={{ display: "block" }}>{b}</b><span style={{ fontWeight: 500, color: "var(--muted)", fontSize: ".92rem" }}>{p}</span></span>
                  </div>
                ))}
              </div>
            </section>

            <section id="c-faq">
              <h2>{tc.faq}</h2>
              <Accordion items={tc.faqs.map(([q, a]) => ({ q, a: <p>{a}</p> }))} />
            </section>

            {related.length > 0 && (
              <section>
                <h2>{tc.related}</h2>
                <div className="course-grid" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))" }}>
                  {related.map((x, i) => <CourseCard key={x.slug} c={x} lang={lang} index={i} />)}
                </div>
              </section>
            )}
          </div>

          <aside className="side" aria-label={t.cta.enroll}>
            <div className="enroll-card">
              <div className="fee">
                <div className="price"><small>{t.pricing.fee}</small>{fee}</div>
                {!price && <Tbc lang={lang} text={lang === "ar" ? "غير منشورة" : "Not published"} />}
              </div>
              <dl>
                {sideRows.map(([i, l, v]) => (
                  <div key={l}><dt><Icon name={i} className="i-sm" />{l}</dt><dd>{v ? <bdi>{v}</bdi> : <span style={{ color: "var(--muted)", fontWeight: 600 }}>—</span>}</dd></div>
                ))}
              </dl>
              <Link className="btn btn-block" href={enroll}>{t.cta.enroll}<Arrow /></Link>
              <Link className="btn btn-whats btn-block" href={href.contact(lang)}><Icon name="message-circle" />{t.cta.whatsapp}</Link>
              <p className="note">{t.contact.side[1][1]}</p>
            </div>
          </aside>
        </div>
      </div>

      <MobileEnrollBar watchId="hero-acts" feeLabel={tc.mobileFee} fee={fee} enrollLabel={t.cta.enroll} enrollHref={enroll} />
    </>
  );
}
