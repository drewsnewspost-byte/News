import type { Story } from "./types";
export { STORIES, getPublishedStories, getPublishedStory, getPublishedStoriesBySection as getStoriesBySection } from "./stories";
import { storyHref } from "./urls";

export function storyPath(story: Pick<Story, "section" | "slug" | "publishedAt">): string {
  return storyHref(story);
}
