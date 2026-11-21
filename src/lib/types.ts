export type Lang = "en" | "ar";
export const LANGS: Lang[] = ["en", "ar"];
export const isLang = (v: string): v is Lang => (LANGS as string[]).includes(v);

/** A string in both languages. */
export type L10n = { en: string; ar: string };

export type CategoryId = "languages" | "math" | "science" | "coding" | "quran" | "teachers";
export type LevelId = "beginner" | "intermediate" | "advanced" | "professional";
export type Format = "online" | "inperson";
export type ArtId =
  | "sprout" | "letters" | "mushaf" | "star" | "moon" | "mic" | "globe" | "key" | "lantern" | "board" | "scroll"
  | "abc" | "chat" | "shapes" | "graph" | "atom" | "blocks" | "code";

export type Category = { id: CategoryId; icon: string; name: L10n; blurb: L10n };
export type AgeGroup = { id: string; min: number; max: number; name: L10n };

export type Facts = {
  sessions: L10n | null;
  sessionLength: L10n | null;
  duration: L10n | null;
  schedule: L10n | null;
  groupSize: L10n | null;
  language: L10n | null;
  intake: L10n | null;
  cities?: L10n;
  certificate?: boolean;
};

export type Course = {
  slug: string;
  cat: CategoryId;
  art: ArtId;
  featured: boolean;
  sample?: boolean;
  source?: number;
  /** null = not published yet */
  ageMin: number | null;
  /** 99 = "and over" */
  ageMax: number | null;
  level: LevelId | null;
  format: Format;
  title: L10n;
  tagline: L10n;
  summary: L10n;
  forWho: L10n | null;
  outcomes: L10n[];
  learn: L10n[];
  curriculum: { title: L10n; items: L10n[] }[];
  facts: Facts;
  requirements: L10n[];
  next?: string;
  /** null until the school publishes a fee */
  price: number | null;
  priceUnit: L10n | null;
};
