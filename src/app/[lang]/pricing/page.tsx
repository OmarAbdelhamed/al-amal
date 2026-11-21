import type { Metadata } from "next";
import { Accordion } from "@/components/Accordion";
import { Icon } from "@/components/Icon";
import { PricingTable } from "@/components/PricingTable";
import { FinalCta, PageHead, SecHead } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import type { Lang } from "@/lib/types";

type Props = { params: Promise<{ lang: Lang }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDict(lang).nav.pricing };
}

export default async function PricingPage({ params }: Props) {
  const { lang } = await params;
  const t = getDict(lang);
  const tp = t.pricing;
  return (
    <>
      <PageHead lang={lang} crumb={t.nav.pricing} eyebrow={tp.eyebrow} title={tp.title} lead={tp.lead} deco="sun" />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 28 }}>
          <div className="callout"><span className="ic"><Icon name="info" /></span><div><b>{tp.notice}</b><p>{tp.noticeBody}</p></div></div>
          <PricingTable lang={lang} />
        </div>
      </section>
      <section className="section band-sand">
        <div className="wrap">
          <SecHead eyebrow={tp.includes} title={tp.includedTitle} lead={tp.teacherIncluded} />
          <div className="incl-grid">
            {tp.included.map(([i, l]) => <div key={l}><span className="ic"><Icon name={i} /></span>{l}</div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap faq-wrap">
          <div><SecHead eyebrow={tp.eyebrow} title={tp.faqTitle} /></div>
          <Accordion openFirst items={tp.faqs.map(([q, a]) => ({ q, a: <p>{a}</p> }))} />
        </div>
      </section>
      <FinalCta lang={lang} />
    </>
  );
}
