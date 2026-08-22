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

function imageObject(image: string | { src?: string; url?: string; alt?: string; width?: number; height?: number }) {
  const raw = typeof image === "string" ? image : image.url || image.src || "";
  const url = raw.startsWith("http") ? raw : absUrl(raw);
  const obj: Record<string, unknown> = {
    "@type": "ImageObject",
    url,
    contentUrl: url,
  };
  if (typeof image !== "string") {
    if (image.alt) obj.caption = image.alt;
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
  image: string | { src?: string; url?: string; alt?: string; width?: number; height?: number };
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
    description: post.recap,
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
