import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { AdSlot } from "@/components/AdSlot";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { StoryGrid } from "@/components/StoryGrid";
import { collectionLd, HOME_TITLE } from "@/lib/seo";
import { getPublishedStories } from "@/lib/stories";
import { SECTION_LABEL, SECTION_TONE, absUrl } from "@/lib/site";
import { storyAbsUrl, storyHref } from "@/lib/urls";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  alternates: { canonical: absUrl("/") },
  openGraph: {
    type: "website",
    title: HOME_TITLE,
    url: absUrl("/"),
  },
};

export default function HomePage() {
  const stories = getPublishedStories();
  const featured =
    stories.find((s) => /\.(png|jpe?g|webp)$/i.test(s.comic.src) || s.comic.src.includes("/comics/")) ??
    stories[0];
  const latest = stories.filter((s) => s.slug !== featured?.slug);
  const jsonLd = collectionLd(
    HOME_TITLE,
    absUrl("/"),
    stories.map((story) => ({ name: story.headline, url: storyAbsUrl(story) }))
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <JsonLd data={jsonLd} />
      <h1 className="sr-only">{HOME_TITLE}</h1>
      <div className="md:grid md:grid-cols-12 md:items-start md:gap-10">
        <div className="md:col-span-9">
          {featured ? (
            <section className="pb-12">
              <Link href={storyHref(featured)} className="block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.comic.src}
                  alt={featured.comic.alt}
                  className="featured-fade w-full bg-white"
                />
              </Link>
              <p className="mt-2 font-sans text-sm text-neutral-500">
                {featured.comic.caption || featured.dek}
                {featured.comic.credit || featured.source.publisher ? (
                  <> · {featured.comic.credit || featured.source.publisher}</>
                ) : null}
              </p>
              <p className={`mt-6 font-sans text-[11px] uppercase tracking-widest ${SECTION_TONE[featured.section]}`}>
                {SECTION_LABEL[featured.section]}
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium leading-tight tracking-tight text-neutral-900 md:text-4xl">
                <Link href={storyHref(featured)} className="hover:text-leaf">
                  {featured.headline}
                </Link>
              </h2>
              <p className="mt-4 max-w-2xl font-sans text-[1.05rem] leading-relaxed text-neutral-600">{featured.recap}</p>
              <p className="mt-3 font-sans text-sm">
                Source:{" "}
                <a className="text-leaf underline underline-offset-2" href={featured.source.url}>
                  {featured.source.publisher || featured.source.title}
                </a>
              </p>
            </section>
          ) : null}
          <section className="border-t border-neutral-200 pt-10">
            <h2 className="mb-8 font-sans text-[11px] uppercase tracking-widest text-leaf">Latest</h2>
            <StoryGrid stories={latest} />
          </section>
        </div>
        <aside className="mt-8 flex flex-col gap-3 md:col-span-3 md:mt-0">
          <AdSlot />
          <NewsletterSignup variant="rail" />
        </aside>
      </div>
    </main>
  );
}
