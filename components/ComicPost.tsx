import { SECTION_LABEL } from "@/lib/site";
import type { ComicPost as ComicPostType } from "@/lib/types";

export function ComicPost({ post }: { post: ComicPostType }) {
  const credit = post.comic.credit || post.source.publisher || post.source.title;
  const caption = post.comic.caption || post.dek;
  return (
    <article className="bg-white">
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.comic.src}
          alt={post.comic.alt}
          width={post.comic.width}
          height={post.comic.height}
          className="w-full bg-mist"
        />
        <figcaption className="mt-2 font-sans text-sm text-neutral-500">
          {caption ? <span>{caption}</span> : null}
          {caption && credit ? <span> · </span> : null}
          {credit ? <span>{credit}</span> : null}
        </figcaption>
      </figure>
      <p className="mt-8 font-sans text-xs uppercase tracking-widest text-leaf">
        {SECTION_LABEL[post.section]}
        {post.section === "humor" ? " · SATIRE" : ""}
      </p>
      <h1 className="mt-2 font-serif text-3xl leading-tight text-neutral-900 md:text-4xl">{post.headline}</h1>
      <p className="mt-5 font-sans text-base leading-7 text-neutral-800">{post.recap}</p>
      <p className="mt-4 font-sans text-sm">
        Source:{" "}
        <a className="text-leaf underline underline-offset-2" href={post.source.url}>
          {post.source.publisher || post.source.title}
        </a>
      </p>
    </article>
  );
}
