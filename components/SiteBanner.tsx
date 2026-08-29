export function SiteBanner() {
  return (
    <div>
      <div className="bg-leaf">
        <p className="px-4 py-1.5 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
          Comics on the day’s news
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 border-b border-leaf/40 bg-white py-2">
        <a
          href="https://x.com/DrewsComicNews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-7 min-w-7 items-center justify-center border border-leaf px-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-leaf hover:bg-leaf hover:text-white"
          aria-label="Drew's Comic Newsroom on X"
        >
          X
        </a>
        <a
          href="https://drewscomicnewsroom.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-7 items-center justify-center border border-leaf px-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-leaf hover:bg-leaf hover:text-white"
        >
          Substack
        </a>
      </div>
    </div>
  );
}
