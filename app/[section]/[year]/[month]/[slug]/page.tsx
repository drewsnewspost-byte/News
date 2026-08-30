import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ComicPost } from "@/components/ComicPost";
import { JsonLd } from "@/components/JsonLd";
import { clipMeta, comicPostLd, postMetaTitle } from "@/lib/seo";
import { absUrl, isSection } from "@/lib/site";
import { getAllPublishedStoryParams, getPublishedStory, getRelatedStories } from "@/lib/stories";
import { storyAbsUrl, storyHref, storyModified, storyPublished } from "@/lib/urls";

type Props = {
  params: Promise<{ section: string; year: string; month: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllPublishedStoryParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, year, month, slug } = await params;
  const story = getPublishedStory(section, year, month, slug);
  if (!story) {
    return { title: { absolute: "Not found | Drew's Comic Newsroom" }, robots: { index: false, follow: false } };
  }
  const title = postMetaTitle(story.headline);
  const description = clipMeta(story.dek || story.recap);
  const url = storyAbsUrl(story);
  const strip = story.comic;
  const src = strip?.src ?? "";
  const imageUrl = src
    ? src.startsWith("http")
      ? src
      : absUrl(src)
    : absUrl("/og/default.png");
  const ogImages = src
    ? [{ url: imageUrl, alt: strip?.alt, width: strip?.width, height: strip?.height }]
    : [{ url: imageUrl }];
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: story.headline,
      description,
      url,
      publishedTime: storyPublished(story),
      modifiedTime: storyModified(story),
      images: ogImages,
    },
    twitter: {
      card: src ? "summary_large_image" : "summary",
      title: story.headline,
      description,
      images: [imageUrl],
    },
  };
}

export default async function StoryPage({ params }: Props) {
  const { section, year, month, slug } = await params;
  if (!isSection(section)) {
    notFound();
  }
  const story = getPublishedStory(section, year, month, slug);
  if (!story) {
    notFound();
  }
  const related = getRelatedStories(story, 2);
  const url = storyAbsUrl(story);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={comicPostLd(story, url)} />
      <ComicPost post={story} />
      {related.length > 0 ? (
        <aside className="mt-12 border-t border-line pt-8">
          <h2 className="kicker mb-4 text-muted">
            Related
          </h2>
          <ul className="space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={storyHref(item)} className="font-serif text-xl text-forest hover:underline">
                  {item.headline}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </main>
  );
}
