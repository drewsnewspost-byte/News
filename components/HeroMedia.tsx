import type { SectionSlug } from "@/lib/site";

const DEFAULT_OG = "/og/default.png";

export function heroDisplaySrc(src: string, section: SectionSlug | string) {
  if (src === DEFAULT_OG) {
    return `/art/${section}.svg`;
  }
  return src;
}

export function HeroMedia({
  src,
  alt,
  section,
  className = "h-full w-full object-cover",
}: {
  src: string;
  alt: string;
  section: SectionSlug | string;
  className?: string;
}) {
  const resolved = heroDisplaySrc(src, section);
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img src={resolved} alt={alt} className={className} />
  );
}
