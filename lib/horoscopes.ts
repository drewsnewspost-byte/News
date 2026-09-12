import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Saturday, September 12, 2026",
    lede: "Have you been thinking about relocating, Aries?",
    body: [
      "Have you been thinking about relocating, Aries? The siren song of distant states or exotic lands may play constantly in your ears. Foreign cultures could inspire you artistically, spiritually, and personally. This is actually a time when few things are out of your reach. If you're serious about this, look into it. You can decide once you have all the facts.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-12T07:00:00-07:00",
    updatedAt: "2026-09-12T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Saturday, September 12, 2026",
    lede: "Expect something new to take place regarding your home today, Taurus.",
    body: [
      "Expect something new to take place regarding your home today, Taurus. A family member could come for a visit or even move in. You could be redecorating, landscaping, or buying new furniture. There is always the possibility that you're moving. Whatever the changes, they're likely to be positive despite the messy and disruptive process of making them. You've got a lot to look forward to!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-12T07:00:00-07:00",
    updatedAt: "2026-09-12T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Saturday, September 12, 2026",
    lede: "Some wonderful news could come to you, Gemini, possibly from a sibling or neighbor.",
    body: [
      "Some wonderful news could come to you, Gemini, possibly from a sibling or neighbor. It might involve money or a new opportunity that's opening up nearby. A group event concerning a subject you're very interested in could also take place. You might feel you have a lot of phone calls to make and plans to think about. The future looks bright. Enjoy!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-12T07:00:00-07:00",
    updatedAt: "2026-09-12T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Saturday, September 12, 2026",
    lede: "An opportunity to bring in extra income might arrive today, Cancer, possibly through a female friend.",
    body: [
      "An opportunity to bring in extra income might arrive today, Cancer, possibly through a female friend. Another Cancer might be involved. This probably involves a special, temporary project, but it could prove enjoyable and profitable. A love partner might want to participate, too. Think about it before committing. Talk to people who have done this before. It's worth a try, anyway.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-12T07:00:00-07:00",
    updatedAt: "2026-09-12T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Saturday, September 12, 2026",
    lede: "This is a day of fresh beginnings for you, Leo.",
    body: [
      "This is a day of fresh beginnings for you, Leo. Accomplishments in the past foster a new sense of self-confidence, along with optimism and enthusiasm for the future. Travel lies ahead in the distant future, and possibly advancing your education in some way. Romance also looks promising. Go for a facial or massage today, if possible, or buy some new clothes. Start the new cycle by making your appearance match what you feel inside.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-12T07:00:00-07:00",
    updatedAt: "2026-09-12T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Saturday, September 12, 2026",
    lede: "If you've never tried your hand at the arts, Virgo, this is the day to do it.",
    body: [
      "If you've never tried your hand at the arts, Virgo, this is the day to do it. Your imagination and ingenuity are flying high, and your aesthetic sense is acute right now. If you aren't already involved with such activities, look online to see what classes or workshops are offered. Get a friend to sign up with you. You'll probably have a great time!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-12T07:00:00-07:00",
    updatedAt: "2026-09-12T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Saturday, September 12, 2026",
    lede: "You could encounter a potential romantic partner today, Libra.",
    body: [
      "You could encounter a potential romantic partner today, Libra. You'll probably connect with this person at a group event or gathering and hit it off immediately. This person is likely to be bright, physically attractive, kindhearted, and sensitive. If you're single and available, don't pass up this opportunity. Take advantage of the chance to get to know each other. Who knows where this might lead?",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-12T07:00:00-07:00",
    updatedAt: "2026-09-12T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Saturday, September 12, 2026",
    lede: "A lot of changes could be taking place in your life now, Scorpio.",
    body: [
      "A lot of changes could be taking place in your life now, Scorpio. Even though most of them are positive, the upheaval can be unsettling right now. Don't give in to panic. Nothing needs to be done that you can't handle. Take each task one step at a time. As you vault each hurdle, the road ahead seems that much smoother. When you arrive, all will be well. Keep going!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-12T07:00:00-07:00",
    updatedAt: "2026-09-12T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Saturday, September 12, 2026",
    lede: "New beginnings and promising new opportunities may appear from a distant state or foreign country, Sagittarius.",
    body: [
      "New beginnings and promising new opportunities may appear from a distant state or foreign country, Sagittarius. Your adventurous side is excited and enthusiastic, but the side of you that wants to stay settled could put up some resistance. Don't feel you have to jump into anything. Get all the facts and assess the situation objectively. Think seriously about it all. What do you most want?",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-12T07:00:00-07:00",
    updatedAt: "2026-09-12T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Saturday, September 12, 2026",
    lede: "A financial windfall might open new doors for you, Capricorn, and you could consider making some major changes in your life.",
    body: [
      "A financial windfall might open new doors for you, Capricorn, and you could consider making some major changes in your life. You might think about moving to a nicer home. Romance is definitely on your mind. If you aren't already involved in a domestic situation, you might consider it seriously right now. Change can be frightening, but these changes are good. Don't hesitate.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-12T07:00:00-07:00",
    updatedAt: "2026-09-12T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Saturday, September 12, 2026",
    lede: "Expect some positive changes in a current partnership, Aquarius.",
    body: [
      "Expect some positive changes in a current partnership, Aquarius. If this is a business partnership, a new agreement between you shows promise of success and good fortune. If this is a romance, you might be so perfectly compatible that you're considering moving to the next level of commitment. Any new partnership begun today should be promising and bring you whatever you hope to gain.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-12T07:00:00-07:00",
    updatedAt: "2026-09-12T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Saturday, September 12, 2026",
    lede: "Have you been working out, following a new dietary program, or both, Pisces?",
    body: [
      "Have you been working out, following a new dietary program, or both, Pisces? If so, today you could look in the mirror and for the first time see some tangible and positive results. You're probably looking and feeling great. Don't abandon your efforts. You'll want to continue the progress. Keep the energy flowing by going for a run or other workout, then treat yourself to a small indulgence.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-12T07:00:00-07:00",
    updatedAt: "2026-09-12T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
