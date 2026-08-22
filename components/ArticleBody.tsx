export function ArticleBody({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-5 font-sans text-[17px] leading-8 text-ink">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={index === 0 ? "drop-cap" : undefined}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
