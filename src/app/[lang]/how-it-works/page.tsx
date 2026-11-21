import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { Arrow, Icon } from "@/components/Icon";
import { FinalCta, MethodBand, PageHead, SecHead } from "@/components/ui";
import { getDict, href } from "@/lib/i18n";
import type { Lang } from "@/lib/types";

type Props = { params: Promise<{ lang: Lang }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDict(lang).nav.how };
}

export default async function HowPage({ params }: Props) {
  const { lang } = await params;
  const t = getDict(lang);
  const h = t.how;
  return (
    <>
      <PageHead lang={lang} crumb={t.nav.how} eyebrow={h.eyebrow} title={h.title} lead={h.lead} deco="coral" />
      <section className="section" style={{ paddingTop: "var(--s4)" }}>
        <div className="wrap">
          <ol className="timeline">
            {h.steps.map(([i, b, p], n) => (
              <li key={b}>
                <span className="ic"><Icon name={i} className="i-lg" /></span>
                <div className="card">
                  <small>{lang === "ar" ? "الخطوة" : "Step"} <span className="num">{n + 1}</span></small>
                  <h3>{b}</h3>
                  <p>{p}</p>
                </div>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", paddingInlineStart: 84 }}>
            <Link className="btn" href={href.courses(lang)}>{t.cta.explore}<Arrow /></Link>
            <Link className="btn btn-secondary" href={href.contact(lang)}>{t.cta.inquire}</Link>
          </div>
        </div>
      </section>
      <MethodBand lang={lang} />
      <section className="section">
        <div className="wrap faq-wrap">
          <div><SecHead eyebrow={t.home.faqEyebrow} title={h.faqTitle} /></div>
          <Accordion openFirst items={h.faqs.map(([q, a]) => ({ q, a: <p>{a}</p> }))} />
        </div>
      </section>
      <FinalCta lang={lang} />
    </>
  );
}
