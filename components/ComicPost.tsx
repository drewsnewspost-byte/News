import { SECTION_LABEL } from "@/lib/site";
import type { ComicPost as ComicPostType } from "@/lib/types";

export function ComicPost({ post }: { post: ComicPostType }) {
  const strip = post.comic;
  const hasStrip = Boolean(strip?.src);
  const credit = strip?.credit || post.source.publisher || post.source.title;
  const caption = strip?.caption || post.dek;
  const grafs = post.recap.split(/\n\s*\n/).map((g) => g.trim()).filter(Boolean);
  return (
    <article>
      {hasStrip && strip ? (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={strip.src}
          alt={strip.alt}
          width={strip.width ?? 1200}
          height={strip.height ?? 675}
          className="h-auto w-full bg-white"
        />
        <figcaption className="mt-2 font-mono text-sm text-neutral-500">
          {caption ? <span>{caption}</span> : null}
          {caption && credit ? <span> · </span> : null}
          {credit ? <span>{credit}</span> : null}
        </figcaption>
      </figure>
      ) : null}
      <p className="mt-8 font-sans text-xs uppercase tracking-widest text-leaf">
        {SECTION_LABEL[post.section]}
        {post.section === "humor" ? " · SATIRE" : ""}
      </p>
      <h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">{post.headline}</h1>
      <div className="mt-5 space-y-4">
        {grafs.map((graf) => (
          <p key={graf.slice(0, 48)} className="font-sans text-base leading-7 text-neutral-800">
            {graf}
          </p>
        ))}
      </div>
      <p className="mt-4 font-sans text-sm">
        Source:{" "}
        <a className="text-leaf underline underline-offset-2" href={post.source.url}>
          {post.source.publisher || post.source.title}
        </a>
      </p>
    </article>
  );
}
