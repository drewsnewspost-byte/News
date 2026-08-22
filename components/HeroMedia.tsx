import Image from "next/image";
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
  priority = false,
  sizes = "(max-width: 768px) 100vw, 800px",
}: {
  src: string;
  alt: string;
  section: SectionSlug | string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const resolved = heroDisplaySrc(src, section);
  const unoptimized = resolved.endsWith(".svg");
  return (
    <Image
      src={resolved}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized={unoptimized}
      className={className}
    />
  );
}
