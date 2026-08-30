import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { StoryGrid } from "@/components/StoryGrid";
import { getDailySign } from "@/lib/horoscopes";
import { collectionLd, SECTION_DESCRIPTION, sectionMetaTitle } from "@/lib/seo";
import { SECTION_LABEL, SECTION_TONE, SECTION_ALLOWLIST, SIGNS, SIGN_LABEL, absUrl, isSection } from "@/lib/site";
import { getPublishedStoriesBySection } from "@/lib/stories";
import { signAbsUrl, signHref, storyAbsUrl } from "@/lib/urls";

type Props = { params: Promise<{ section: string }> };

export function generateStaticParams() {
  return SECTION_ALLOWLIST.map((section) => ({ section }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section } = await params;
  if (!isSection(section)) {
    return { title: { absolute: "Not found | Drew's Comic Newsroom" }, robots: { index: false } };
  }
  const title = `${SECTION_LABEL[section]} comics | Drew's Comic Newsroom`;
  const description = SECTION_DESCRIPTION[section];
  const url = absUrl(`/${section}/`);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url },
  };
}

export default async function SectionPage({ params }: Props) {
  const { section: raw } = await params;
  if (!isSection(raw)) {
    notFound();
  }
  const stories = getPublishedStoriesBySection(raw);
  const title = sectionMetaTitle(raw);
  const url = absUrl(`/${raw}/`);
  const items =
    raw === "horoscope"
      ? [
          ...SIGNS.map((sign) => ({ name: `${SIGN_LABEL[sign]} horoscope`, url: signAbsUrl(sign) })),
          ...stories.map((story) => ({ name: story.headline, url: storyAbsUrl(story) })),
        ]
      : stories.map((story) => ({ name: story.headline, url: storyAbsUrl(story) }));

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <JsonLd data={collectionLd(title, url, items)} />
      <p className={`kicker-chip font-sans ${SECTION_TONE[raw]}`}>
        {SECTION_LABEL[raw]}
        {raw === "humor" ? " · SATIRE" : ""}
      </p>
      <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-ink">{SECTION_LABEL[raw]}</h1>
      {raw === "horoscope" ? (
        <section className="mb-10 mt-6">
          <h2 className="mb-4 font-sans text-kicker uppercase text-muted">
            Today by sign
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {SIGNS.map((sign) => {
              const daily = getDailySign(sign);
              return (
                <li key={sign} className="border border-line bg-white p-4">
                  <Link href={signHref(sign)} className="font-serif text-xl text-forest hover:underline">
                    {SIGN_LABEL[sign]}
                  </Link>
                  {daily ? <p className="mt-2 text-sm text-muted">{daily.dek}</p> : null}
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
      <section>
        <h2 className="mb-6 font-sans text-kicker uppercase text-muted">
          Comics
        </h2>
        <StoryGrid stories={stories} />
      </section>
    </main>
  );
}
