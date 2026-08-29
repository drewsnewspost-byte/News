import Image from "next/image";
import Link from "next/link";
import { SECTION_LABEL } from "@/lib/site";
import type { Story } from "@/lib/types";
import { formatDeskDate, storyHref, storyPublished } from "@/lib/urls";

export function StoryCard({ story }: { story: Story }) {
  const href = storyHref(story);
  const credit = story.comic.credit || story.source.publisher || story.source.title;
  const width = story.comic.width ?? 560;
  const height = story.comic.height ?? 420;
  const recap = (story.dek || story.recap).split(/\n\s*\n/)[0];
  return (
    <article className="story-card-lift relative isolate min-w-0 flex flex-col border border-leaf/40 p-3 bg-white pb-8">
      <Link href={href} className="block">
        <div className="overflow-hidden bg-white">
          <Image
            src={story.comic.src}
            alt={story.comic.alt}
            width={width}
            height={height}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
            className="h-auto w-full object-cover"
          />
        </div>
      </Link>
      <p className="mt-2 font-sans text-xs text-neutral-500">{credit}</p>
      <div className="flex flex-1 flex-col pt-3">
        <p className="font-sans text-[11px] uppercase tracking-widest text-leaf">
          {SECTION_LABEL[story.section]}
          {story.section === "humor" ? " · SATIRE" : ""}
        </p>
        <h2 className="mt-2 font-serif text-[1.35rem] font-medium leading-snug tracking-tight text-ink">
          <Link href={href} className="hover:text-leaf">
            {story.headline}
          </Link>
        </h2>
        <p className="mt-2 line-clamp-2 flex-1 font-sans text-[15px] leading-relaxed text-neutral-600">{recap}</p>
        <p className="mt-3 font-sans text-xs uppercase tracking-wide text-neutral-400">
          {formatDeskDate(storyPublished(story))}
        </p>
      </div>
    </article>
  );
}
