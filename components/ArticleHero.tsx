import { SECTION_LABEL, SECTION_TONE } from "@/lib/site";
import type { Story } from "@/lib/types";
import { storyModified, storyPublished } from "@/lib/urls";
import { Timestamps } from "./Timestamps";

export function ArticleHero({ story }: { story: Story }) {
  return (
    <header className="mb-8">
      <p className={`kicker-chip font-sans ${SECTION_TONE[story.section]}`}>
        {SECTION_LABEL[story.section]}
        {story.section === "humor" ? " · SATIRE" : ""}
      </p>
      <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-5xl">
        {story.headline}
      </h1>
      <p className="mt-4 font-sans text-lg leading-relaxed text-muted">{story.dek}</p>
      <p className="mt-3 font-mono text-sm text-muted">
        {story.desk && story.byline.toLowerCase().includes(story.desk.toLowerCase())
          ? story.byline
          : [story.byline, story.desk].filter(Boolean).join(" · ")}
      </p>
      <div className="mt-2">
        <Timestamps
          publishedAt={storyPublished(story)}
          updatedAt={storyModified(story)}
          datePublished={story.datePublished}
          dateModified={story.dateModified}
        />
      </div>
      {!story.comic ? (
        <div className="mt-6 overflow-hidden border border-line bg-mint">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={story.hero.src}
            alt={story.hero.alt}
            className="max-h-[420px] w-full object-cover"
          />
        </div>
      ) : null}
    </header>
  );
}
