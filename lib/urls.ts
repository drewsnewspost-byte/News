import { absUrl, SIGN_LABEL, type SignSlug } from "./site";
import type { DailySign, Story } from "./types";

function publishedIso(story: Pick<Story, "slug"> & { datePublished?: string; publishedAt?: string }) {
  const iso = story.datePublished ?? story.publishedAt;
  if (!iso) {
    throw new Error(`Story ${story.slug} is missing a dated publish field`);
  }
  return iso;
}

type StoryPathInput = Pick<Story, "section" | "slug"> & { datePublished?: string; publishedAt?: string };

export function storyPathParts(story: StoryPathInput) {
  const match = publishedIso(story).match(/^(\d{4})-(\d{2})/);
  if (!match) {
    throw new Error(`Story ${story.slug} is missing a dated publish field`);
  }
  return {
    section: story.section,
    year: match[1],
    month: match[2],
    slug: story.slug,
  };
}

export function storyHref(story: StoryPathInput): string {
  const { section, year, month, slug } = storyPathParts(story);
  return `/${section}/${year}/${month}/${slug}/`;
}

export function storyAbsUrl(story: Story): string {
  return absUrl(storyHref(story));
}

export function signHref(sign: SignSlug): string {
  return `/horoscope/${sign}/`;
}

export function signAbsUrl(sign: SignSlug): string {
  return absUrl(signHref(sign));
}

export function formatDeskDate(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

export function signTitle(sign: DailySign): string {
  return `${SIGN_LABEL[sign.sign]} horoscope today | Drew's Comic Newsroom`;
}

export function storyPublished(story: Story): string {
  return story.datePublished ?? story.publishedAt ?? "";
}

export function storyModified(story: Story): string {
  return story.dateModified ?? story.updatedAt ?? storyPublished(story);
}
