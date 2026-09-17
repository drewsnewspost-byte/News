import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Thursday, September 17, 2026",
    lede: "A rush of physical energy may hit you this morning, Aries, and you could feel like you have no outlet for it.",
    body: [
      "A rush of physical energy may hit you this morning, Aries, and you could feel like you have no outlet for it. But a sibling or neighbor may need some help, so you'll definitely be able to put that energy to work. It should be a good day for everyone. Your friend will receive some valuable help with an important matter, and you'll be able to make use of all that vigor.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-17T07:00:00-07:00",
    updatedAt: "2026-09-17T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Thursday, September 17, 2026",
    lede: "Invaluable help with money or property concerns could come to you from an unexpected quarter today, Taurus.",
    body: [
      "Invaluable help with money or property concerns could come to you from an unexpected quarter today, Taurus. Someone you didn't know possessed the appropriate information could offer it out of the blue, making a big difference to the way you handle these matters. The situation may not be all that dire to begin with, but all should be well by day's end.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-17T07:00:00-07:00",
    updatedAt: "2026-09-17T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Thursday, September 17, 2026",
    lede: "Are you looking for a particular piece of information, Gemini?",
    body: [
      "Are you looking for a particular piece of information, Gemini? A friend, possibly another Gemini, has this information but is unaware that you're searching for it. Don't be afraid to let all your friends and acquaintances know that you need to find some specific facts. The person who finally comes forward may surprise you. Enjoy your day!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-17T07:00:00-07:00",
    updatedAt: "2026-09-17T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Thursday, September 17, 2026",
    lede: "The opportunity to fly somewhere might come up today, Cancer.",
    body: [
      "The opportunity to fly somewhere might come up today, Cancer. Career changes are in the wind, and while they might seem rather unsettling at first, they'll be positive in the long run. This could involve a raise or promotion, transfer, new job, or even new career. Don't fight it. It might be scary, but it's a blessing in disguise. Go with the flow.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-17T07:00:00-07:00",
    updatedAt: "2026-09-17T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Thursday, September 17, 2026",
    lede: "Have you been having difficulties with career or money matters, Leo?",
    body: [
      "Have you been having difficulties with career or money matters, Leo? If so, help might come today from a friend who lives far away. This person may not do much but offer words that are so insightful that you know immediately what course of action to take. What this person says could also be of valuable assistance in the future. Write it down so you'll be sure to remember it.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-17T07:00:00-07:00",
    updatedAt: "2026-09-17T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Thursday, September 17, 2026",
    lede: "Today, a flash of inspiration may resolve an obstacle to your career advancement that presented itself in the past few days, Virgo.",
    body: [
      "Today, a flash of inspiration may resolve an obstacle to your career advancement that presented itself in the past few days, Virgo. This solution could prove so beneficial that you'll want to remember it for obstacles in any area of your life for the future. You may feel so good about resolving this that you'll want to go out and celebrate. Go for it!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-17T07:00:00-07:00",
    updatedAt: "2026-09-17T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Thursday, September 17, 2026",
    lede: "Are you presently negotiating a contract, Libra?",
    body: [
      "Are you presently negotiating a contract, Libra? If you and the other party disagree on any points, these differences will most likely be resolved. You'll probably come up with an idea that creates a win/win situation so both of you feel good about it. This will strengthen your relationship considerably, so expect partnership matters to progress smoothly. Enjoy your day.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-17T07:00:00-07:00",
    updatedAt: "2026-09-17T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Thursday, September 17, 2026",
    lede: "Professional difficulties could be resolved by outside assistance, Scorpio.",
    body: [
      "Professional difficulties could be resolved by outside assistance, Scorpio. Equipment may have gone haywire, or miscommunications could have led to snarls. Perhaps you need to call in a consultant. It's possible that you might come up with the right solution at the right time and earn some well-deserved respect. Whatever the difficulty, it won't last.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-17T07:00:00-07:00",
    updatedAt: "2026-09-17T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Thursday, September 17, 2026",
    lede: "Idealistic romantic notions join with intense sensual passion to create powerful desire that stays with you throughout the day, Sagittarius.",
    body: [
      "Idealistic romantic notions join with intense sensual passion to create powerful desire that stays with you throughout the day, Sagittarius. If you can schedule some quality time with your love partner, by all means do it. If not, you might have to settle for making a date for later in the week. In the meantime, pamper yourself a bit until then and hang in there!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-17T07:00:00-07:00",
    updatedAt: "2026-09-17T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Thursday, September 17, 2026",
    lede: "You could be quite busy today as friends from far away call for long-overdue conversations, Capricorn.",
    body: [
      "You could be quite busy today as friends from far away call for long-overdue conversations, Capricorn. You'll probably spend as much time as you can catching up on the latest news, but don't go overboard. Your friends want to talk to you, but they aren’t judgmental. Talk about whatever is on your mind, and don’t worry about making a good impression. The truth is more important than bragging. Enjoy visiting.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-17T07:00:00-07:00",
    updatedAt: "2026-09-17T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Thursday, September 17, 2026",
    lede: "Some fascinating news could come from a friend who's presently out of town, Aquarius.",
    body: [
      "Some fascinating news could come from a friend who's presently out of town, Aquarius. This might be personal, but it more likely involves new discoveries in a field that interests you both. You'll probably want to do some research of your own, so be prepared to spend time in the library or online over the next few weeks. Keep careful records. You won't want to forget a thing!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-17T07:00:00-07:00",
    updatedAt: "2026-09-17T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Thursday, September 17, 2026",
    lede: "Friends who are interested in psychic and metaphysical matters could contact you today, Pisces.",
    body: [
      "Friends who are interested in psychic and metaphysical matters could contact you today, Pisces. You may discuss a lot of fascinating material, which could alter your value system in a subtle but profound way. Don't be surprised if you do more listening than talking on this occasion. It's important to soak in as much as you can. Write it down if you think you'll forget it.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-17T07:00:00-07:00",
    updatedAt: "2026-09-17T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
