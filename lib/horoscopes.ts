import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Saturday, September 19, 2026",
    lede: "Communication involving romance could come unexpectedly today, Aries.",
    body: [
      "Communication involving romance could come unexpectedly today, Aries. You may get a loving message from a romantic partner, or you could hear of a wedding to take place in the future amongst your circle of friends. You could also read a love poem or romance novel or write something along the same lines yourself! Someone might also express affection to you. Don't be surprised. You deserve it!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-19T07:00:00-07:00",
    updatedAt: "2026-09-19T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Saturday, September 19, 2026",
    lede: "A chance to increase your income by participating in an artistic project of some kind could come your way today, Taurus.",
    body: [
      "A chance to increase your income by participating in an artistic project of some kind could come your way today, Taurus. You might take part in the creative work or you could promote it in a business capacity. Whichever it is, you're likely to form some firm friendships in the process. If you're single, one of your colleagues might turn out to be a potential love partner. Enjoy!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-19T07:00:00-07:00",
    updatedAt: "2026-09-19T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Saturday, September 19, 2026",
    lede: "Have you been feeling stagnant lately, Gemini, as if your life is going nowhere?",
    body: [
      "Have you been feeling stagnant lately, Gemini, as if your life is going nowhere? What happens today could change that. An unusual group event could put you in touch with people who open new intellectual, career, or spiritual doors for you. Stimulating conversations could turn your head toward opportunities that you were never aware of before. Onward and upward!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-19T07:00:00-07:00",
    updatedAt: "2026-09-19T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Saturday, September 19, 2026",
    lede: "Inspiration could hit today, Cancer.",
    body: [
      "Inspiration could hit today, Cancer. It's a beautiful feeling, but you might not be sure how to channel it. It could represent a spiritual breakthrough, artistic inspiration, increased understanding of others, or all of the above. What's almost certain is that you'll want to spend time alone to take it all in and figure out how to use it. Don't dismiss any possibility, however outrageous it may seem.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-19T07:00:00-07:00",
    updatedAt: "2026-09-19T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Saturday, September 19, 2026",
    lede: "You might have the chance to speak with new people in interesting fields, perhaps from foreign lands, Leo.",
    body: [
      "You might have the chance to speak with new people in interesting fields, perhaps from foreign lands, Leo. Your conversational abilities are at an all-time high, so you'll not only enjoy talking with everyone, but they'll enjoy talking with you, too. Intriguing ideas and useful information could have your mind buzzing all night. Try to take a walk in the evening to clear your head.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-19T07:00:00-07:00",
    updatedAt: "2026-09-19T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Saturday, September 19, 2026",
    lede: "Information gleaned from surprising sources could lead to sudden, fortunate career breaks, Virgo.",
    body: [
      "Information gleaned from surprising sources could lead to sudden, fortunate career breaks, Virgo. You might explore totally new fields, although this could be temporary. Your efforts should attract the attention of those who matter and eventually lead to advancement or a raise. Don't be afraid to continue to explore these sources. Keep up the good work!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-19T07:00:00-07:00",
    updatedAt: "2026-09-19T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Saturday, September 19, 2026",
    lede: "A passionate encounter with a love partner might cement the bond between you so thoroughly that you start talking about commitment or even a wedding.",
    body: [
      "A passionate encounter with a love partner might cement the bond between you so thoroughly that you start talking about commitment or even a wedding. A romantic haze may permeate your interactions. Still, exercise some restraint in expressing your feelings. Hitting your friend with too much at once could have the opposite effect from the one you're hoping for. Be patient!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-19T07:00:00-07:00",
    updatedAt: "2026-09-19T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Saturday, September 19, 2026",
    lede: "Have you been feeling less than your normal self, Scorpio?",
    body: [
      "Have you been feeling less than your normal self, Scorpio? If so, today you may suddenly regain your strength and be raring to go. You might even be tempted to start a rigorous exercise program. Go ahead and start, but pace yourself and try not to make up for lost time all at once. You need to ease into these things. Maybe start with walking and yoga.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-19T07:00:00-07:00",
    updatedAt: "2026-09-19T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Saturday, September 19, 2026",
    lede: "Love and romance aren't just part of your life today, Sagittarius, they're your whole life.",
    body: [
      "Love and romance aren't just part of your life today, Sagittarius, they're your whole life. If you're single, an exciting potential partner could have you reeling. If you're currently involved, recent events may have created such a powerful bond between you and your beloved that you think it will never end. Consider what led to this feeling and find a way to repeat it. This can only benefit you.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-19T07:00:00-07:00",
    updatedAt: "2026-09-19T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Saturday, September 19, 2026",
    lede: "Does your house look like a cyclone hit it?",
    body: [
      "Does your house look like a cyclone hit it? Your tidy nature should drive you to clean it up. In the course of wading through the mess, don't be surprised if you discover some objects you thought you'd lost forever. Once you finish, you'll probably find that the place looks beautiful, better than it did before it was messed up. Something good can indeed come out of chaos.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-19T07:00:00-07:00",
    updatedAt: "2026-09-19T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Saturday, September 19, 2026",
    lede: "An exciting phone call or email could come from a friend who has some great news for you, Aquarius.",
    body: [
      "An exciting phone call or email could come from a friend who has some great news for you, Aquarius. Love, romance, and success in the arts are all highlighted now, and this communication could bring it to your attention. Conversations could bring inspiration your way, and your mind is apt to be going a thousand miles an hour for most of the day. Make the most of it!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-19T07:00:00-07:00",
    updatedAt: "2026-09-19T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Saturday, September 19, 2026",
    lede: "An online group could form today, Pisces, perhaps friends who are involved in the arts or meditation or spiritual studies.",
    body: [
      "An online group could form today, Pisces, perhaps friends who are involved in the arts or meditation or spiritual studies. This group is likely to be close, probably through mutual interests, so communicating with them this evening should be both intellectually stimulating and emotionally gratifying. What takes place today could also bring healing of some kind, either for you or for someone else.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-19T07:00:00-07:00",
    updatedAt: "2026-09-19T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}

