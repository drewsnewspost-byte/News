import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";
import { JsonLd } from "@/components/JsonLd";
import { Timestamps } from "@/components/Timestamps";
import { getAllSignParams, getDailySign } from "@/lib/horoscopes";
import { newsArticleLd } from "@/lib/seo";
import { SIGN_LABEL, SIGNS, absUrl, isSign } from "@/lib/site";
import { signAbsUrl } from "@/lib/urls";

type Props = { params: Promise<{ sign: string }> };

export function generateStaticParams() {
  return getAllSignParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sign } = await params;
  if (!isSign(sign)) {
    return { title: "Not found | Drew's Comic Newsroom", robots: { index: false } };
  }
  const daily = getDailySign(sign);
  if (!daily) {
    return { title: "Not found | Drew's Comic Newsroom", robots: { index: false } };
  }
  const title = `${SIGN_LABEL[sign]} horoscope today | Drew's Comic Newsroom`;
  const url = signAbsUrl(sign);
  return {
    title,
    description: daily.dek,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description: daily.dek,
      url,
      publishedTime: daily.datePublished,
      modifiedTime: daily.dateModified,
    },
  };
}

export default async function SignPage({ params }: Props) {
  const { sign } = await params;
  if (!isSign(sign)) {
    notFound();
  }
  const daily = getDailySign(sign);
  if (!daily) {
    notFound();
  }
  const url = signAbsUrl(sign);
  const others = SIGNS.filter((item) => item !== sign).slice(0, 2);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={newsArticleLd({
          headline: daily.headline,
          dek: daily.dek,
          url,
          image: daily.hero?.src ?? "/og/default.png",
          datePublished: daily.datePublished ?? daily.publishedAt ?? "",
          dateModified: daily.dateModified ?? daily.updatedAt ?? daily.datePublished ?? daily.publishedAt ?? "",
          section: "horoscope",
        })}
      />
      <article>
        <p className="kicker">Horoscope</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-ink">{daily.headline}</h1>
        <p className="mt-4 font-sans text-lg leading-relaxed text-muted">{daily.dek}</p>
        <p className="mt-3 font-sans text-sm text-muted">
          {daily.byline} · {daily.desk} desk
        </p>
        <div className="mt-2">
          <Timestamps datePublished={daily.datePublished ?? daily.publishedAt} dateModified={daily.dateModified ?? daily.updatedAt} />
        </div>
        <p className="mt-6 font-sans text-[17px] leading-8 text-ink">{daily.lede}</p>
        <ArticleBody paragraphs={daily.body.slice(1)} />
      </article>
      <aside className="mt-12 border-t border-line pt-8">
        <h2 className="kicker mb-4 text-muted">Related</h2>
        <ul className="space-y-3">
          {others.map((item) => (
            <li key={item}>
              <Link href={`/horoscope/${item}/`} className="font-serif text-xl text-forest hover:underline">
                {SIGN_LABEL[item]} horoscope today
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/horoscope/" className="text-forest underline">
            All signs
          </Link>
        </p>
      </aside>
    </main>
  );
}
