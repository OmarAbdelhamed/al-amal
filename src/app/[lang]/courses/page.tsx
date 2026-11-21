import type { Metadata } from "next";
import { CourseCatalog } from "@/components/CourseCatalog";
import { FinalCta, PageHead } from "@/components/ui";
import { ageGroups, categories } from "@/lib/content";
import { getDict } from "@/lib/i18n";
import type { Lang } from "@/lib/types";

type Props = { params: Promise<{ lang: Lang }>; searchParams: Promise<{ cat?: string; age?: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDict(lang).nav.courses };
}

export default async function CoursesPage({ params, searchParams }: Props) {
  const { lang } = await params;
  const sp = await searchParams;
  const t = getDict(lang);
  // only accept known values from the URL
  const cat = categories.some((c) => c.id === sp.cat) ? sp.cat! : "all";
  const age = ageGroups.some((g) => g.id === sp.age) ? sp.age! : "all";

  return (
    <>
      <PageHead lang={lang} crumb={t.nav.courses} eyebrow={t.courses.eyebrow} title={t.courses.title} lead={t.courses.lead} />
      <section className="section" style={{ paddingTop: "var(--s4)" }}>
        <div className="wrap">
          {/* key: re-initialise filters when the URL changes (e.g. picking a subject in the header) */}
          <CourseCatalog key={`${cat}-${age}`} lang={lang} initial={{ cat, age }} />
        </div>
      </section>
      <FinalCta lang={lang} />
    </>
  );
}
