import { ageGroups, getCategory, levels, org } from "./content";
import { dictionaries, type Dict } from "./dictionaries";
import type { Course, L10n, Lang } from "./types";

export const getDict = (lang: Lang): Dict => dictionaries[lang];
export const dirOf = (lang: Lang) => (lang === "ar" ? "rtl" : "ltr");
export const otherLang = (lang: Lang): Lang => (lang === "ar" ? "en" : "ar");

/** Pick the string for the current language. */
export function tr(o: L10n, lang: Lang): string;
export function tr(o: L10n | null | undefined, lang: Lang): string | null;
export function tr(o: L10n | null | undefined, lang: Lang) {
  return o == null ? null : o[lang] ?? o.en;
}

/* ---------- URL helpers (all routes are prefixed with the language) ---------- */
export const href = {
  home: (l: Lang) => `/${l}`,
  courses: (l: Lang, q?: { cat?: string; age?: string }) => {
    const p = new URLSearchParams();
    if (q?.cat) p.set("cat", q.cat);
    if (q?.age) p.set("age", q.age);
    const s = p.toString();
    return `/${l}/courses${s ? `?${s}` : ""}`;
  },
  course: (l: Lang, slug: string) => `/${l}/courses/${slug}`,
  pricing: (l: Lang) => `/${l}/pricing`,
  about: (l: Lang) => `/${l}/about`,
  how: (l: Lang) => `/${l}/how-it-works`,
  contact: (l: Lang, course?: string) => `/${l}/contact${course ? `?course=${encodeURIComponent(course)}` : ""}`
};

/* ---------- Course formatting ---------- */
export const ageShort = (c: Course, lang: Lang) => {
  if (c.ageMin == null || c.ageMax == null) return null;
  if (c.ageMax >= 99) return lang === "ar" ? `${c.ageMin} فأكثر` : `${c.ageMin}+`;
  return `${c.ageMin}–${c.ageMax}`;
};

export const ageLong = (c: Course, lang: Lang) => {
  const a = ageShort(c, lang);
  if (!a || c.ageMax == null) return null;
  if (lang === "ar") return c.ageMax >= 99 ? `من ${c.ageMin} سنة فأكثر` : `${a} سنوات`;
  return `Ages ${a}`;
};

export const levelName = (c: Course, lang: Lang) => (c.level ? tr(levels[c.level], lang) : null);

/** Duration without the trailing explanation after an em dash (used in compact cells). */
export const durationShort = (c: Course, lang: Lang) => {
  const d = tr(c.facts.duration, lang);
  return d ? d.split(" — ")[0] : null;
};

export const fmtPrice = (c: Course, lang: Lang) => {
  if (c.price == null) return null;
  try {
    return new Intl.NumberFormat(lang === "ar" ? "ar-EG-u-nu-latn" : "en-US", {
      style: "currency",
      currency: org.currency,
      maximumFractionDigits: 0
    }).format(c.price);
  } catch {
    return `${c.price} ${org.currency}`;
  }
};

/* ---------- Catalogue filtering (shared by server and client) ---------- */
export type Filters = { q: string; cat: string; age: string; level: string };
export const emptyFilters: Filters = { q: "", cat: "all", age: "all", level: "all" };

const norm = (s: string) => s.toLowerCase().replace(/[-–]/g, "-");

export function matches(c: Course, f: Filters) {
  if (f.cat !== "all" && c.cat !== f.cat) return false;
  if (f.level !== "all" && c.level !== f.level) return false;
  if (f.age !== "all") {
    const g = ageGroups.find((x) => x.id === f.age);
    if (!g || c.ageMin == null || c.ageMax == null) return false;
    if (!(c.ageMin <= g.max && c.ageMax >= g.min)) return false;
  }
  const q = norm(f.q.trim());
  if (q) {
    const k = getCategory(c.cat);
    const hay = norm(
      [
        c.title.en, c.title.ar, c.tagline.en, c.tagline.ar, c.summary.en, c.summary.ar,
        k?.name.en ?? "", k?.name.ar ?? "",
        ...c.learn.flatMap((x) => [x.en, x.ar]),
        c.ageMin != null ? `${c.ageMin}-${c.ageMax}` : ""
      ].join(" ")
    );
    if (!q.split(/\s+/).every((w) => hay.includes(w))) return false;
  }
  return true;
}
