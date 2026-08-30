import { TickerTape } from "@/components/TickerTape";
import { getPublishedStories } from "@/lib/stories";
import { storyHref } from "@/lib/urls";

export function SiteBanner() {
  const items = getPublishedStories()
    .filter((story) => /\.(png|jpe?g|webp|gif)$/i.test(story.comic.src))
    .map((story) => ({
      href: storyHref(story),
      src: story.comic.src,
      alt: story.comic.alt || story.headline,
    }));

  return (
    <div>
      <div className="site-banner-stamp">
        <p className="px-4 py-1.5 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
          Comics on the day’s news
        </p>
      </div>
      <TickerTape items={items} />
      <div className="flex items-center justify-center gap-2 border-b-[3px] border-forest bg-white py-2">
        <a
          href="https://x.com/DrewsComicNews"
          target="_blank"
          rel="noopener noreferrer"
          className="social-stamp inline-flex h-7 min-w-7 items-center justify-center px-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-leaf hover:text-white"
          aria-label="Drew's Comic Newsroom on X"
        >
          X
        </a>
        <a
          href="https://drewscomicnewsroom.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-stamp inline-flex h-7 items-center justify-center px-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-leaf hover:text-white"
          aria-label="Subscribe"
        >
          Subscribe
        </a>
      </div>
    </div>
  );
}
