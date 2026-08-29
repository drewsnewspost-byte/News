import type { MetadataRoute } from "next";
import { SIGNS, SECTION_ALLOWLIST, absUrl } from "@/lib/site";
import { getPublishedStories } from "@/lib/stories";
import { signHref, storyHref } from "@/lib/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  const stories = getPublishedStories();
  return [
    { url: absUrl("/"), lastModified: new Date() },
    { url: absUrl("/about/") },
    ...SECTION_ALLOWLIST.map((section) => ({ url: absUrl(`/${section}/`) })),
    ...SIGNS.map((sign) => ({ url: absUrl(signHref(sign)) })),
    ...stories.map((story) => ({
      url: absUrl(storyHref(story)),
      lastModified: story.dateModified ?? story.updatedAt,
    })),
  ];
}
