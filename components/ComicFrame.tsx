export function ComicFrame({
  src,
  alt,
  caption,
  credit,
}: {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
}) {
  return (
    <figure className="bg-white">
      <div className="overflow-hidden bg-mist">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full object-cover" />
      </div>
      {(caption || credit) ? (
        <figcaption className="mt-2 font-mono text-sm text-neutral-500">
          {caption}
          {caption && credit ? " · " : ""}
          {credit}
        </figcaption>
      ) : null}
    </figure>
  );
}
