import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { AdSlot } from "@/components/AdSlot";
import { StoryGrid } from "@/components/StoryGrid";
import { collectionLd, HOME_DESCRIPTION, HOME_TITLE } from "@/lib/seo";
import { getPublishedStories } from "@/lib/stories";
import { SECTION_LABEL, absUrl } from "@/lib/site";
import { storyAbsUrl, storyHref } from "@/lib/urls";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  alternates: { canonical: absUrl("/") },
  openGraph: {
    type: "website",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: absUrl("/"),
  },
};

export default function HomePage() {
  const stories = getPublishedStories();
  const featured =
    stories.find((s) => /\\.(png|jpe?g|webp)$/i.test(s.comic.src) || s.comic.src.includes("/comics/")) ??
    stories[0];
  const latest = stories.filter((s) => s.slug !== featured?.slug);
  const jsonLd = collectionLd(
    HOME_TITLE,
    absUrl("/"),
    stories.map((story) => ({ name: story.headline, url: storyAbsUrl(story) }))
  );

  return (
    <>
    <main className="shell py-10">
      <JsonLd data={jsonLd} />
      <h1 className="sr-only">{HOME_TITLE}</h1>
      {featured ? (
        <section className="pb-12">
          <Link href={storyHref(featured)} className="featured-lift featured-fade panel-ink block overflow-hidden">
            <Image
              src={featured.comic.src}
              alt={featured.comic.alt}
              width={featured.comic.width ?? 1200}
              height={featured.comic.height ?? 675}
              sizes="(max-width: 1024px) 100vw, 1200px"
              priority
              className="h-auto w-full bg-white"
            />
          </Link>
          <p className="mt-3 font-mono text-sm text-neutral-500">
            {featured.comic.caption || featured.dek}
            {featured.comic.credit || featured.source.publisher ? (
              <> · {featured.comic.credit || featured.source.publisher}</>
            ) : null}
          </p>
          <p className="mt-5 font-sans text-[11px] uppercase tracking-widest text-leaf">
            {SECTION_LABEL[featured.section]}
            {featured.section === "humor" ? " · SATIRE" : ""}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            <Link href={storyHref(featured)} className="ink-underline">
              {featured.headline}
            </Link>
          </h2>
          <p className="mt-3 max-w-3xl font-sans text-[1.05rem] leading-relaxed text-neutral-600">
            {featured.dek || featured.recap.split(/\n\s*\n/)[0]}
          </p>
          <p className="mt-3 font-sans text-sm">
            Source:{" "}
            <a className="text-leaf underline underline-offset-2" href={featured.source.url}>
              {featured.source.publisher || featured.source.title}
            </a>
          </p>
        </section>
      ) : null}
      <div className="md:grid md:grid-cols-12 md:items-start md:gap-10">
        <section className="min-w-0 border-t-[3px] border-forest pt-10 md:col-span-9">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="font-sans text-[11px] uppercase tracking-widest text-leaf">The Latest</h2>
          </div>
          <StoryGrid stories={latest} compact />
        </section>
        <aside className="mt-8 flex min-w-0 flex-col gap-3 md:col-span-3 md:mt-10">
          <AdSlot />
        </aside>
      </div>
    </main>
    </>
  );
}
