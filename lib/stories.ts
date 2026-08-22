import { isSection, type SectionSlug } from "./site";
import type { Story } from "./types";
import { storyPathParts, storyPublished } from "./urls";
import { loadFileStories } from "./load-file-stories";

export const STORIES: Story[] = loadFileStories();

function isPublished(story: Story): boolean {
  return story.status === "published";
}

export function getPublishedStories(): Story[] {
  return STORIES.filter(isPublished).sort(
    (a, b) => Date.parse(storyPublished(b)) - Date.parse(storyPublished(a))
  );
}

export function getPublishedStoriesBySection(section: SectionSlug): Story[] {
  return getPublishedStories().filter((story) => story.section === section);
}

export function getPublishedStory(
  section: string,
  year: string,
  month: string,
  slug: string
): Story | undefined {
  if (!isSection(section)) return undefined;
  return getPublishedStories().find((story) => {
    const parts = storyPathParts(story);
    return (
      story.section === section &&
      parts.year === year &&
      parts.month === month &&
      story.slug === slug
    );
  });
}

export function getRelatedStories(story: Story, count = 2): Story[] {
  const same = getPublishedStories().filter(
    (other) => other.slug !== story.slug && other.section === story.section
  );
  const rest = getPublishedStories().filter(
    (other) => other.slug !== story.slug && other.section !== story.section
  );
  return [...same, ...rest].slice(0, count);
}

export function getAllPublishedStoryParams() {
  return getPublishedStories().map((story) => storyPathParts(story));
}
