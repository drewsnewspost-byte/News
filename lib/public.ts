import { isSection } from "./site";
import { getPublishedStories } from "./stories";
import type { Story } from "./types";

export function getPublishedStory(section: string, slug: string): Story | undefined {
  if (!isSection(section)) return undefined;
  return getPublishedStories().find(
    (story) => story.section === section && story.slug === slug
  );
}

export function getAllPublishedParams() {
  return getPublishedStories().map((story) => ({
    section: story.section,
    slug: story.slug,
  }));
}
