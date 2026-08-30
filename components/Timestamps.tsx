import { formatDeskDate } from "@/lib/urls";

export function Timestamps({
  publishedAt,
  updatedAt,
  datePublished,
  dateModified,
}: {
  publishedAt?: string;
  updatedAt?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const published = publishedAt ?? datePublished ?? "";
  const updated = updatedAt ?? dateModified ?? published;
  return (
    <p className="font-mono text-sm text-gold">
      Published <time dateTime={published}>{formatDeskDate(published)}</time>
      {" "}
      · Updated <time dateTime={updated}>{formatDeskDate(updated)}</time>
    </p>
  );
}
