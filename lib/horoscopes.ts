import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Tuesday, September 15, 2026",
    lede: "Happiness reigns as you and your household embark on one or more projects that could make your home more cheerful, Aries.",
    body: [
      "Happiness reigns as you and your household embark on one or more projects that could make your home more cheerful, Aries. Warm and companionable conversations involve sharing interesting information and bring you closer. Visitors could come by and other people could call with interesting news. This is a good day to throw an impromptu party. Enjoy your day!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-15T07:00:00-07:00",
    updatedAt: "2026-09-15T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Tuesday, September 15, 2026",
    lede: "A conversation with someone in your neighborhood could prove unexpectedly pleasant and enjoyable.",
    body: [
      "A conversation with someone in your neighborhood could prove unexpectedly pleasant and enjoyable. You might meet new people and get closer to the ones you already know. A lot of interesting and useful information could be exchanged. There might be a future get-together that you'll want to attend, Taurus, so you have something to look forward to. You might also lend or borrow some books today.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-15T07:00:00-07:00",
    updatedAt: "2026-09-15T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Tuesday, September 15, 2026",
    lede: "A pleasant surprise comes your way when you receive either a present or small sum of money, perhaps in the mail, Gemini.",
    body: [
      "A pleasant surprise comes your way when you receive either a present or small sum of money, perhaps in the mail, Gemini. Someone will either pay you back a loan or you could receive a gift for some small service you performed for someone. You could be tempted to turn that around and buy a present for someone else. Expect some calls that result in long and meaningful conversations.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-15T07:00:00-07:00",
    updatedAt: "2026-09-15T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Tuesday, September 15, 2026",
    lede: "Communication is likely to be warm, informative, and companionable today, Cancer, and you'll probably grow closer to those around you because of it.",
    body: [
      "Communication is likely to be warm, informative, and companionable today, Cancer, and you'll probably grow closer to those around you because of it. Your inspiration and imagination flow freely, and you're likely to want to channel much of your energy into creative projects. You may also want to phone a friend who shares your artistic interests.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-15T07:00:00-07:00",
    updatedAt: "2026-09-15T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Tuesday, September 15, 2026",
    lede: "If you're musically or artistically inclined, Leo, today you might have visions or melodies in your head that simply cry out to be written down.",
    body: [
      "If you're musically or artistically inclined, Leo, today you might have visions or melodies in your head that simply cry out to be written down. If you're a writer, you may be filled with story ideas. Whatever your creative interests, inspiration abounds. It's a good idea to start working on these projects today or they could disappear.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-15T07:00:00-07:00",
    updatedAt: "2026-09-15T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Tuesday, September 15, 2026",
    lede: "Today should be busy with regard to communication, Virgo.",
    body: [
      "Today should be busy with regard to communication, Virgo. Calls and emails to people close to you may take up a lot of your time. You could be organizing a meeting or social event of some kind. You're probably feeling optimistic and enthusiastic, and you'll likely spread these feelings to others. You're also better able to intuit what's going on with them.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-15T07:00:00-07:00",
    updatedAt: "2026-09-15T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Tuesday, September 15, 2026",
    lede: "A meeting is likely to happen during the course of the working day, Libra.",
    body: [
      "A meeting is likely to happen during the course of the working day, Libra. This should lead to pleasant and interesting conversations, possibly involving philosophy, spiritual matters, or the arts. Communication should be clear and open. Correspondence could take up almost as much time as conversations right now.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-15T07:00:00-07:00",
    updatedAt: "2026-09-15T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Tuesday, September 15, 2026",
    lede: "A message or phone call from someone dear who lives far away could arrive today.",
    body: [
      "A message or phone call from someone dear who lives far away could arrive today. You've been thinking about this person for a while, Scorpio, so don't be surprised if you hear from him or her. You're especially attuned to the thoughts and feelings of others right now. In fact, you may feel especially inspired to work on projects of your own, as ideas are likely to fill your head. Have fun!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-15T07:00:00-07:00",
    updatedAt: "2026-09-15T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Tuesday, September 15, 2026",
    lede: "Daydreams and reveries could inspire new ideas for creative projects today.",
    body: [
      "Daydreams and reveries could inspire new ideas for creative projects today. Visions, stories, or melodies might flood your mind, and it might be a good idea to write them down before they disappear. You're also likely to feel more attuned than usual to the thoughts and feelings of others. Don't be surprised if you intuitively give people what they want and need before they ask.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-15T07:00:00-07:00",
    updatedAt: "2026-09-15T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Tuesday, September 15, 2026",
    lede: "Affection blooms in close relationships as you tune into the thoughts, feelings, needs, and desires of those around you.",
    body: [
      "Affection blooms in close relationships as you tune into the thoughts, feelings, needs, and desires of those around you. Communication should be clear, open, and honest without being brutal. Social events should prove especially enjoyable today, Capricorn, as you're likely to attract interesting people with intriguing and useful information. Reading could also prove beneficial now. Enjoy your day.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-15T07:00:00-07:00",
    updatedAt: "2026-09-15T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Tuesday, September 15, 2026",
    lede: "You should be in glowing good health today, Aquarius.",
    body: [
      "You should be in glowing good health today, Aquarius. You're feeling especially fit, and your appearance likely reflects that. You're looking for healthy activities that also bring you pleasure, such as exercise and proper diet. Find a cookbook full of tasty recipes and use it. Your relations with others should be warm, loving, and companionable. Exercising with friends, if possible, should encourage you to keep up the good work.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-15T07:00:00-07:00",
    updatedAt: "2026-09-15T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Tuesday, September 15, 2026",
    lede: "Love blossoms in close relationships as communication flows freely.",
    body: [
      "Love blossoms in close relationships as communication flows freely. You're intuitive by nature, Pisces, but today you feel especially attuned to others' thoughts, feelings, needs, and desires. Don't be surprised if you grow closer to those around you. Children, in particular, should provide warmth and love. If you're artistically inclined, start a new project today.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-15T07:00:00-07:00",
    updatedAt: "2026-09-15T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
