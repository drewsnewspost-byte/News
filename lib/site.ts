export const SITE_NAME = "Drew's Comic Newsroom";
export const SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.drewscomicnewsroom.com").replace(/\/$/, "");

/** Public desks. Culture stays on the allowlist even with no published stories. Politics is never a desk. */
export const SECTIONS = [
  "sports",
  "finance",
  "science",
  "ai",
  "animal",
  "culture",
  "horoscope",
  "humor",
  "conspiracy",
  "movies",
] as const;

export type SectionSlug = (typeof SECTIONS)[number];

/** Topics shown in the masthead/footer. Politics is not a desk. */
export const NAV_SECTIONS = ["sports","finance","science","ai","horoscope","culture","humor","conspiracy","movies"] as const satisfies readonly SectionSlug[];

/** Section hubs always generated (empty CollectionPage is fine). */
export const SECTION_ALLOWLIST = SECTIONS;

export const SIGNS = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
] as const;

export type SignSlug = (typeof SIGNS)[number];

export const SECTION_LABEL: Record<SectionSlug, string> = {
  sports: "Sports",
  finance: "Finance",
  science: "Science and Space",
  ai: "Technology and AI",
  animal: "Animals and Nature",
  culture: "Culture and Curiosity",
  horoscope: "Horoscope",
  humor: "Humor",
  conspiracy: "Conspiracy Theories",
  movies: "Movie Reviews",
};

export const SECTION_LABELS = SECTION_LABEL;

/** Short masthead/footer nav labels. Hubs still use SECTION_LABEL. */
export const NAV_LABEL: Record<SectionSlug, string> = {
  sports: "Sports",
  finance: "Finance",
  science: "Science",
  ai: "AI",
  animal: "Animals",
  culture: "Culture",
  horoscope: "Horoscope",
  humor: "Humor",
  conspiracy: "Conspiracy",
  movies: "Movies",
};


export const SECTION_TONE: Record<SectionSlug, string> = {
  sports: "text-leaf",
  finance: "text-forest",
  science: "text-forest",
  ai: "text-leaf",
  animal: "text-moss",
  culture: "text-ink",
  horoscope: "text-gold",
  humor: "text-olive",
  conspiracy: "text-forest",
  movies: "text-leaf",
};

export const SIGN_LABEL: Record<SignSlug, string> = {
  aries: "Aries",
  taurus: "Taurus",
  gemini: "Gemini",
  cancer: "Cancer",
  leo: "Leo",
  virgo: "Virgo",
  libra: "Libra",
  scorpio: "Scorpio",
  sagittarius: "Sagittarius",
  capricorn: "Capricorn",
  aquarius: "Aquarius",
  pisces: "Pisces",
};

export function isSection(v: string): v is SectionSlug {
  return (SECTIONS as readonly string[]).includes(v.toLowerCase());
}

/** Retired desks: markdown may remain as drafts; never listed or routed. */
export function isRetiredSection(v: string): boolean {
  return (["environment", "politics"] as const).includes(v.toLowerCase() as "environment");
}

export function remapSection(v: string): string {
  return v;
}


export function isSign(v: string): v is SignSlug {
  return (SIGNS as readonly string[]).includes(v.toLowerCase());
}

/** Page routes keep a trailing slash. File URLs (sitemap.xml, images, llms.txt) do not. */
export function absUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (/\.[a-zA-Z0-9]{2,8}$/.test(p)) {
    return `${SITE_ORIGIN}${p}`;
  }
  return `${SITE_ORIGIN}${p.endsWith("/") ? p : `${p}/`}`;
}
