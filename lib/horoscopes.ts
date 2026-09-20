import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Sunday, September 20, 2026",
    lede: "Too much rigorous exercise over the past few days might have you feeling a little sore and tired, Aries.",
    body: [
      "Too much rigorous exercise over the past few days might have you feeling a little sore and tired, Aries. Your nerves may be on edge, and you could be more likely than usual to snap at those around you. Try to ease both nerves and muscle aches by soaking in a hot bath. Herbal tea might also help. Accept that you should take it easy today and then do it!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-20T07:00:00-07:00",
    updatedAt: "2026-09-20T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Sunday, September 20, 2026",
    lede: "Spiritual breakthroughs may have you feeling a little disconcerted, Taurus.",
    body: [
      "Spiritual breakthroughs may have you feeling a little disconcerted, Taurus. Clearing away deadwood, such as past traumas, might tell you a few things about yourself you'd rather not face. It's vital to release them in order to progress as a human being. Even if tears are involved, this is a positive development. You'll feel happier once it's all set free. Onward and upward!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-20T07:00:00-07:00",
    updatedAt: "2026-09-20T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Sunday, September 20, 2026",
    lede: "A group meeting or conference of some kind could touch upon some pretty volatile issues, Gemini.",
    body: [
      "A group meeting or conference of some kind could touch upon some pretty volatile issues, Gemini. People could disagree to the point that the meeting turns into a shouting match. You probably have strong opinions on this as well, but don't get involved. You won't be able to stop the argument, and it can only cause you stress. If you can, avoid joining this meeting altogether. Think about it!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-20T07:00:00-07:00",
    updatedAt: "2026-09-20T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Sunday, September 20, 2026",
    lede: "Is your significant other caught up in family problems and unable to spend time with you?",
    body: [
      "Is your significant other caught up in family problems and unable to spend time with you? Don't let your insecurity get the best of you. Your partner needs to deal with family now. Relax, do what you want to do, and have confidence that you'll be spending more time together as soon as possible. After dealing with family quarrels, you'll be a peaceful refuge for your partner.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-20T07:00:00-07:00",
    updatedAt: "2026-09-20T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Sunday, September 20, 2026",
    lede: "Matters involving communication seem to be fouled up, Leo.",
    body: [
      "Matters involving communication seem to be fouled up, Leo. Messages may not get delivered, emails may not go through, and people might misinterpret your words. This could create a mess that brings everything to a screeching halt. You need to speak to people directly, give detailed instructions, use simple language, and make sure they take notes, or beware of the consequences!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-20T07:00:00-07:00",
    updatedAt: "2026-09-20T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Sunday, September 20, 2026",
    lede: "Your values could oppose those of a business or romantic partner today, Virgo.",
    body: [
      "Your values could oppose those of a business or romantic partner today, Virgo. One of you may be overly pragmatic and the other too idealistic. One seems callous, while the other seems to be living in a dream world. This could be a milestone in your relationship if approached properly. If you can't create a win/win situation, perhaps you should reconsider the partnership.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-20T07:00:00-07:00",
    updatedAt: "2026-09-20T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Sunday, September 20, 2026",
    lede: "If you've been having trouble reaching a romantic partner, Libra, it might be a good idea to stop trying.",
    body: [
      "If you've been having trouble reaching a romantic partner, Libra, it might be a good idea to stop trying. Your friend is having a rough day and might not make the best company. In fact, your beloved could view a call from you as an unwelcome interruption and be short, if not downright rude. If you speak with your friend, keep it brief and plan to get together - just not today.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-20T07:00:00-07:00",
    updatedAt: "2026-09-20T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Sunday, September 20, 2026",
    lede: "You may feel a bit restless and unsettled without really knowing why, Scorpio.",
    body: [
      "You may feel a bit restless and unsettled without really knowing why, Scorpio. Stresses on the job could churn up repressed resentment from the past that you need to release. Try to discern exactly what these stresses remind you of. If you're unable to do this, however, you'll probably still reap the benefits of the release. Stay focused on your work and just let it happen.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-20T07:00:00-07:00",
    updatedAt: "2026-09-20T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Sunday, September 20, 2026",
    lede: "Too many people could be vying for your attention today, Sagittarius.",
    body: [
      "Too many people could be vying for your attention today, Sagittarius. All of them want advice or help. This could be flattering, and you'll probably want to help them, but it can also be unsettling and make it hard to focus. Don't let this set your temper on edge and cause you to snap at your friends. Take each request one at a time, make no promises, and do your best.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-20T07:00:00-07:00",
    updatedAt: "2026-09-20T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Sunday, September 20, 2026",
    lede: "There could be trouble brewing in the workplace, Capricorn.",
    body: [
      "There could be trouble brewing in the workplace, Capricorn. Some of your colleagues neither like nor trust each other and find it impossible to work together. Adjustments are needed if everyone is going to work to the best of their abilities. If you're in a position to handle this, do it now. If you aren't, distance yourself from the situation. It's the only way to stay sane!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-20T07:00:00-07:00",
    updatedAt: "2026-09-20T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Sunday, September 20, 2026",
    lede: "Squabbles may come up between you and a sibling or neighbor, Aquarius.",
    body: [
      "Squabbles may come up between you and a sibling or neighbor, Aquarius. Your ability to compromise is definitely called for here. If you aren't careful, this could turn into a battle of wills. The minute the disagreement comes up, try to talk it out and turn it into a win/win situation. Otherwise, things may be said that shouldn't be, and feelings could remain hurt for a long time.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-20T07:00:00-07:00",
    updatedAt: "2026-09-20T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Sunday, September 20, 2026",
    lede: "Money matters might cause you a few headaches, Pisces.",
    body: [
      "Money matters might cause you a few headaches, Pisces. You could be torn between the desire to put money aside for the future and the impulse to buy something that you've wanted for a long time. There may be a way to have it both ways. Save a little less and try to find a bargain price for your item. Take everything into consideration and work it out before you make yourself crazy.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-20T07:00:00-07:00",
    updatedAt: "2026-09-20T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
