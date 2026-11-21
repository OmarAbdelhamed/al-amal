import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { Crumbs, FinalCta, PatternBg, SecHead, Tbc } from "@/components/ui";
import { SHOW_TEACHERS } from "@/lib/content";
import { getDict } from "@/lib/i18n";
import type { Lang } from "@/lib/types";

type Props = { params: Promise<{ lang: Lang }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDict(lang).nav.about };
}

const VALUE_ICONS = ["heart", "lightbulb", "handshake", "footprints"];
const TRUST_ICONS = ["list-checks", "users", "badge-check"];

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  const t = getDict(lang);
  const a = t.about;
  return (
    <>
      <section className="page-head">
        <div className="wrap about-hero">
          <div>
            <Crumbs lang={lang} items={[{ label: t.nav.about }]} />
            <span className="eyebrow" style={{ marginTop: 20 }}><span className="dot" />{a.eyebrow}</span>
            <h1>{a.title}</h1>
            <p className="lead">{a.lead}</p>
            <p style={{ marginTop: 20 }}><Tbc lang={lang} text={a.placeholders} /></p>
          </div>
          <div className="mission">
            <PatternBg color="#7FC4B8" opacity={0.16} />
            <svg viewBox="0 0 80 80" width="72" height="72" aria-hidden="true">
              <circle cx="40" cy="34" r="18" fill="#F2C14E" />
              <path d="M40 66c-8-6-18-8-28-6V42c10-2 20 0 28 6 8-6 18-8 28-6v18c-10-2-20 0-28 6z" fill="#FFFDF8" />
            </svg>
            <h2>{a.missionTitle}</h2>
            <p>{a.mission}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecHead eyebrow={a.eyebrow} title={a.philosophyTitle} />
          <div className="phil">{a.philosophy.map(([b, p]) => <div key={b}><h3>{b}</h3><p>{p}</p></div>)}</div>
        </div>
      </section>

      <section className="section band-sand">
        <div className="wrap">
          <SecHead eyebrow={a.eyebrow} title={a.valuesTitle} />
          <div className="values">
            {a.values.map(([w, d], i) => (
              <div key={w}><span className="w"><Icon name={VALUE_ICONS[i]} className="i-lg" /></span><b>{w}</b><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {SHOW_TEACHERS && (
        <section className="section">
          <div className="wrap teach">
            <div><SecHead eyebrow={a.eyebrow} title={a.teachersTitle} lead={a.teachersBody} /></div>
            <div>
              <div className="teacher-slots">
                {[0, 1, 2].map((i) => <div key={i} className="slot"><Icon name="user-round" className="i-lg" /><div><Tbc lang={lang} /></div></div>)}
              </div>
              <p className="hint" style={{ marginTop: 12 }}>{t.home.teachersPlaceholder}</p>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <SecHead eyebrow={a.eyebrow} title={a.trustTitle} />
          <div className="trust">
            {a.trust.map(([b, p], i) => <div key={b}><Icon name={TRUST_ICONS[i]} /><b>{b}</b><p>{p}</p></div>)}
          </div>
        </div>
      </section>

      <FinalCta lang={lang} />
    </>
  );
}
