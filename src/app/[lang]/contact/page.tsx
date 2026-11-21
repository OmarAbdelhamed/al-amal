import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { PageHead, Tbc } from "@/components/ui";
import { getCourse, org } from "@/lib/content";
import { getDict } from "@/lib/i18n";
import type { Lang } from "@/lib/types";

type Props = { params: Promise<{ lang: Lang }>; searchParams: Promise<{ course?: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDict(lang).nav.contact };
}

export default async function ContactPage({ params, searchParams }: Props) {
  const { lang } = await params;
  const { course } = await searchParams;
  const t = getDict(lang);
  const tc = t.contact;
  const initialCourse = course && getCourse(course) ? course : "";
  const wa = org.whatsapp;
  const waLink = wa ? `https://wa.me/${wa.replace(/\D/g, "")}` : null;

  return (
    <>
      <PageHead lang={lang} crumb={t.nav.contact} eyebrow={tc.eyebrow} title={tc.title} lead={tc.lead} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap contact-grid">
          <div className="form-card">
            <ContactForm key={initialCourse} lang={lang} initialCourse={initialCourse} />
          </div>
          <aside className="aside">
            <div className="aside-card whats-card">
              <h3>{tc.whatsTitle}</h3>
              <p>{tc.whatsBody}</p>
              {waLink ? (
                <>
                  <div className="copy-row"><code dir="ltr">{wa}</code></div>
                  <a className="btn btn-whats btn-block" href={waLink} target="_blank" rel="noopener noreferrer"><Icon name="message-circle" />{t.cta.whatsapp}</a>
                </>
              ) : (
                <>
                  <p><Tbc lang={lang} text={tc.whatsTbc} /></p>
                  <button className="btn btn-whats btn-block" type="button" disabled style={{ cursor: "not-allowed" }}><Icon name="message-circle" />{t.cta.whatsapp}</button>
                </>
              )}
            </div>
            <div className="aside-card">
              <h3>{tc.sideTitle}</h3>
              <ul>{tc.side.map(([i, l]) => <li key={l}><Icon name={i} className="i-sm" /><span>{l}</span></li>)}</ul>
            </div>
            <div className="aside-card">
              <h3>{t.nav.how}</h3>
              <ul>{tc.next.map((l, i) => <li key={l}><span className="num" style={{ fontWeight: 800, color: "var(--teal)" }}>{i + 1}</span><span>{l}</span></li>)}</ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
