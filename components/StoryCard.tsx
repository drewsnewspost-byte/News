import Link from "next/link";
import { SECTION_LABEL } from "@/lib/site";
import type { Story } from "@/lib/types";
import { formatDeskDate, storyHref, storyPublished } from "@/lib/urls";

export function StoryCard({ story, compact = false }: { story: Story; compact?: boolean }) {
  const href = storyHref(story);
  const thumb = story.comic?.src ?? "";
  const credit = story.comic?.credit || story.source.publisher || story.source.title;
  const width = story.comic?.width ?? 560;
  const height = story.comic?.height ?? 420;
  const recap = (story.dek || story.recap).split(/\n\s*\n/)[0];
  return (
    <article className={`story-card-lift relative isolate min-w-0 flex flex-col ${compact ? "p-2 pb-4" : "p-3 pb-8"}`}>
      {thumb ? (
      <Link href={href} className="block">
        <div className="overflow-hidden bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt={story.comic?.alt ?? story.headline}
            width={width}
            height={height}
            className="h-auto w-full object-cover"
          />
        </div>
      </Link>
      ) : null}
      <p className="mt-2 font-mono text-xs text-neutral-500">{credit}</p>
      <div className="flex flex-1 flex-col pt-2">
        <p className="font-sans text-[11px] uppercase tracking-widest text-leaf">
          {SECTION_LABEL[story.section]}
          {story.section === "humor" ? " · SATIRE" : ""}
        </p>
        <h2 className={`mt-1 font-serif font-semibold leading-snug tracking-tight text-ink ${compact ? "text-[1.05rem]" : "text-[1.35rem]"}`}>
          <Link href={href} className="ink-underline">
            {story.headline}
          </Link>
        </h2>
        {compact ? null : (
          <p className="mt-2 line-clamp-2 flex-1 font-sans text-[15px] leading-relaxed text-neutral-600">{recap}</p>
        )}
        <p className="mt-3 font-mono text-xs uppercase tracking-wide text-neutral-400">
          {formatDeskDate(storyPublished(story))}
        </p>
      </div>
    </article>
  );
}
