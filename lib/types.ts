import type { SectionSlug, SignSlug } from "./site";

export type { SectionSlug, SignSlug };
export type Section = SectionSlug;
export type PublishStatus = "draft" | "published";
export type StoryStatus = PublishStatus;

export type ComicImage = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  width?: number;
  height?: number;
};

/** Alias used by the file loader. */
export type ComicStrip = ComicImage;

export type ComicSource = {
  url: string;
  title: string;
  publisher?: string;
};

/** Comic newsroom post. No long article body. */
export type ComicPost = {
  section: SectionSlug;
  slug: string;
  headline: string;
  dek?: string;
  comic?: ComicImage;
  source: ComicSource;
  recap: string;
  datePublished: string;
  dateModified: string;
  status: PublishStatus;
};

/**
 * Runtime story record. ComicPost plus thin adapters so existing pages
 * that still read hero / body / dek / byline can compile.
 */
export type Story = ComicPost & {
  comic: ComicImage & { caption?: string };
  hero: { src: string; alt: string };
  body: string[];
  lede: string;
  dek: string;
  byline: string;
  desk: string;
  publishedAt: string;
  updatedAt: string;
};


export type DailySign = {
  sign: SignSlug;
  headline: string;
  dek: string;
  lede: string;
  body: string[];
  datePublished?: string;
  dateModified?: string;
  publishedAt?: string;
  updatedAt?: string;
  byline?: string;
  desk?: string;
  hero?: { src: string; alt: string };
};

export function adaptComicPost(post: ComicPost): Story {
  const dek = post.dek ?? post.recap;
  const comic = post.comic ?? { src: "", alt: post.headline };
  return {
    ...post,
    dek,
    comic: { ...comic, caption: comic.caption ?? dek },
    hero: { src: comic.src, alt: comic.alt },
    body: [post.recap],
    lede: post.recap,
    byline: post.source.publisher ?? post.source.title,
    desk: post.source.publisher ?? post.section,
    publishedAt: post.datePublished,
    updatedAt: post.dateModified,
  };
}

export { SECTIONS, SECTION_LABEL as SECTION_LABELS, isSection } from "./site";
