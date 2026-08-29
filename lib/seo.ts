import { absUrl, SECTION_LABEL, SITE_NAME, SITE_ORIGIN, type SectionSlug } from "./site";
import type { ComicPost } from "./types";

const orgId = `${SITE_ORIGIN}/#org`;
const siteId = `${SITE_ORIGIN}/#website`;

export function orgAndSiteLd() {
  return [
    {
      "@type": "NewsMediaOrganization",
      "@id": orgId,
      name: SITE_NAME,
      url: absUrl("/"),
      logo: absUrl("/og/default.png"),
    },
    {
      "@type": "WebSite",
      "@id": siteId,
      name: SITE_NAME,
      url: absUrl("/"),
      publisher: { "@id": orgId },
    },
  ];
}

export function collectionLd(name: string, url: string, items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...orgAndSiteLd(),
      {
        "@type": "CollectionPage",
        name,
        url,
        isPartOf: { "@id": siteId },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            url: item.url,
          })),
        },
      },
    ],
  };
}

type SeoImage = string | { src?: string; url?: string; alt?: string; credit?: string; width?: number; height?: number };

function imageObject(image: SeoImage) {
  const raw = typeof image === "string" ? image : image.url || image.src || "";
  const url = raw.startsWith("http") ? raw : absUrl(raw);
  const obj: Record<string, unknown> = {
    "@type": "ImageObject",
    url,
    contentUrl: url,
  };
  if (typeof image !== "string") {
    if (image.alt) {
      obj.caption = image.alt;
      obj.description = image.alt;
    }
    if (image.credit) obj.creditText = image.credit;
    if (image.width) obj.width = image.width;
    if (image.height) obj.height = image.height;
  }
  return obj;
}

/** NewsArticle only — never BlogPosting or ComicIssue. */
export function newsArticleLd(opts: {
  headline: string;
  dek?: string;
  description?: string;
  articleBody?: string;
  recap?: string;
  url: string;
  image: SeoImage;
  datePublished: string;
  dateModified: string;
  section?: string;
  sourceUrl?: string;
}) {
  const description = opts.description ?? opts.recap ?? opts.dek ?? "";
  const articleBody = opts.articleBody ?? opts.recap ?? description;
  const article: Record<string, unknown> = {
    "@type": "NewsArticle",
    headline: opts.headline,
    description,
    articleBody,
    url: opts.url,
    image: imageObject(opts.image),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    articleSection: opts.section,
    author: { "@id": orgId },
    publisher: { "@id": orgId },
    mainEntityOfPage: opts.url,
  };
  if (opts.sourceUrl) {
    article.isBasedOn = opts.sourceUrl;
    article.citation = opts.sourceUrl;
  }
  return {
    "@context": "https://schema.org",
    "@graph": [...orgAndSiteLd(), article],
  };
}

export function comicPostLd(post: ComicPost, url: string) {
  return newsArticleLd({
    headline: post.headline,
    description: clipMeta(post.dek || post.recap),
    articleBody: post.recap,
    recap: post.recap,
    url,
    image: post.comic,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    section: post.section,
    sourceUrl: post.source.url,
  });
}

export function sectionMetaTitle(section: SectionSlug): string {
  return `${SECTION_LABEL[section]} comics | ${SITE_NAME}`;
}

export const HOME_TITLE = `${SITE_NAME} | Comics on the day's news`;

export function postMetaTitle(headline: string): string {
  return `${headline} | ${SITE_NAME}`;
}

export function clipMeta(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return "";
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const clipped = (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:\s]+$/, "");
  return `${clipped}…`;
}

export const HOME_DESCRIPTION =
  "Original comics on the day's news: sports, finance, science, AI, culture, horoscope, and humor. Each post is a strip, a source, and a short recap.";

export const SECTION_DESCRIPTION: Record<SectionSlug, string> = {
  sports: "Sports comics from Drew's Comic Newsroom. Each post is an original strip, the source story, and a short recap.",
  finance: "Finance comics from Drew's Comic Newsroom. Markets and money as a strip plus source and recap.",
  science: "Science and Space comics from Drew's Comic Newsroom. Papers, missions, and discoveries as a strip, source, and recap.",
  ai: "Technology and AI comics from Drew's Comic Newsroom. Models and product news as a strip, source, and recap.",
  animal: "Animals and Nature comics from Drew's Comic Newsroom. Wildlife and conservation as a strip, source, and recap.",
  culture: "Culture and Curiosity comics from Drew's Comic Newsroom. Art, history, and odd finds as a strip, source, and recap.",
  horoscope: "Daily horoscope comics from Drew's Comic Newsroom. Today's sign pages plus horoscope-desk strips, each with a source.",
  humor: "Humor comics from Drew's Comic Newsroom. Satire is labeled. Each post is a strip, a source, and a short recap.",
};
