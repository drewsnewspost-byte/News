import { TickerTape } from "@/components/TickerTape";
import { getPublishedStories } from "@/lib/stories";
import { storyHref } from "@/lib/urls";

/** Today's full-color strips only — keep the ticker off the older archive. */
const COLOR_TICKER_SLUGS = [
  "claude-automated-alignment",
  "coyote-vs-acme-tomatometer",
  "etf-basket-that-trades",
  "quantum-gravity-two-maps",
  "sara-bareilles-good-grief",
  "tigers-walk-off-dodgers",
  "tsitsipas-security-quotes",
  "voynich-manuscript-unread",
] as const;

const COLOR_TICKER_SET = new Set<string>(COLOR_TICKER_SLUGS);

function isColorTickerStory(story: { slug: string; comic?: { src?: string } }) {
  const src = story.comic?.src ?? "";
  if (!/\.(png|jpe?g|webp|gif)$/i.test(src)) return false;
  if (COLOR_TICKER_SET.has(story.slug)) return true;
  return COLOR_TICKER_SLUGS.some((slug) => src.includes(slug));
}

export function SiteBanner() {
  const items = getPublishedStories()
    .filter(isColorTickerStory)
    .map((story) => ({
      href: storyHref(story),
      src: `/comics/${story.slug}.png`,
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
