import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Monday, September 7, 2026",
    lede: "Matters regarding love and romance are in your favor today, Aries.",
    body: [
      "Matters regarding love and romance are in your favor today, Aries. You'll find that love comes to you when you least expect it. There's a powerful creative force within you that will be most rewarding if you put it to use for some sort of artistic endeavor. A strong yet erratic urge may call you into action, so be ready to respond with your entire being.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-07T07:00:00-07:00",
    updatedAt: "2026-09-07T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Monday, September 7, 2026",
    lede: "Realize that you might have to leave some things to chance today, because you probably aren't going to be able to control all that you'd like to under the circumstances, Taurus.",
    body: [
      "Realize that you might have to leave some things to chance today, because you probably aren't going to be able to control all that you'd like to under the circumstances, Taurus. Although it may be comfortable for you to try to fit things into their perfect spots, you'll find that this may not be the best way to conduct your business, especially on a day like this.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-07T07:00:00-07:00",
    updatedAt: "2026-09-07T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Monday, September 7, 2026",
    lede: "Things should be going quite well for you today, Gemini, especially in the love and romance department.",
    body: [
      "Things should be going quite well for you today, Gemini, especially in the love and romance department. You'll find that there is a magical, adventuresome spirit when you connect with others. Take advantage of this courageous energy and put it to good use in whatever way you see fit. Bring an extra element of excitement into your world tonight with someone very special to you.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-07T07:00:00-07:00",
    updatedAt: "2026-09-07T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Monday, September 7, 2026",
    lede: "Express your independence today, Cancer, and prove to others that you won't be pushed around anymore.",
    body: [
      "Express your independence today, Cancer, and prove to others that you won't be pushed around anymore. Do things for yourself and have fun while you do it. Your heart will know which way is the right way to proceed. Don't be fooled by those who try to tell you otherwise. Success comes when you can initiate others into your world instead of you being seduced by theirs.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-07T07:00:00-07:00",
    updatedAt: "2026-09-07T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Monday, September 7, 2026",
    lede: "Things relating to love and romance are in your favor today, Leo, although you may find that issues of this nature might be unpredictable.",
    body: [
      "Things relating to love and romance are in your favor today, Leo, although you may find that issues of this nature might be unpredictable. Lovers could be present one moment and MIA the next, but these are the risks you take when you deal with love. Find a balance that doesn't get you so wrapped up in someone else that you're hurt if his or her eyes turn elsewhere.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-07T07:00:00-07:00",
    updatedAt: "2026-09-07T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Monday, September 7, 2026",
    lede: "It might feel like there's a hole in your heart today, Virgo, and you could have a hard time filling it.",
    body: [
      "It might feel like there's a hole in your heart today, Virgo, and you could have a hard time filling it. Remember that you're the one responsible for making sure this void is taken care of. If you insist that someone else fill the gap, you're setting yourself up for disappointment. Do something nice for yourself and feel free to spend a little money to make yourself happy.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-07T07:00:00-07:00",
    updatedAt: "2026-09-07T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Monday, September 7, 2026",
    lede: "Issues regarding love and romance are at a climactic point right now, Libra, and you could be rather combative.",
    body: [
      "Issues regarding love and romance are at a climactic point right now, Libra, and you could be rather combative. Your energy in this area may come in waves, and you're likely to be so charged up about the situation that you feel like a time bomb ready to explode. Don't destroy something wonderful by wanting a great deal more than you really need.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-07T07:00:00-07:00",
    updatedAt: "2026-09-07T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Monday, September 7, 2026",
    lede: "Don't expect a great deal of sensitivity from others when it comes to issues concerning love and beauty today, Scorpio.",
    body: [
      "Don't expect a great deal of sensitivity from others when it comes to issues concerning love and beauty today, Scorpio. People are apt to be in their own little worlds. It may be hard for you to relate to them now. Trying to sway others to your point of view could be possible, but it may be quite difficult and, more importantly, not worth the effort.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-07T07:00:00-07:00",
    updatedAt: "2026-09-07T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Monday, September 7, 2026",
    lede: "There could be people who try to convince you that you're wrong about something, Sagittarius.",
    body: [
      "There could be people who try to convince you that you're wrong about something, Sagittarius. Don't fall into the trap of thinking that you're inferior just because you don't agree with someone on an issue. Focus on your creativity today. You can combine your incredible artistic talent with pure intellectual genius for a dynamite swing that will knock any ball clear out of the park.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-07T07:00:00-07:00",
    updatedAt: "2026-09-07T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Monday, September 7, 2026",
    lede: "There's an adventurous side to today that you should latch onto.",
    body: [
      "There's an adventurous side to today that you should latch onto. Try not to get weighed down by the little things in your life that don't really matter much. Look at the big picture and understand the importance of having great breadth of vision. There's a whole world to explore out there, Capricorn, so get going. There may be a few surprises today, so be ready for anything.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-07T07:00:00-07:00",
    updatedAt: "2026-09-07T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Monday, September 7, 2026",
    lede: "Unexpected people and events are likely to crop up today just as you're longing for adventure.",
    body: [
      "Unexpected people and events are likely to crop up today just as you're longing for adventure. Feel free to hop aboard a train to an unknown destination, Aquarius. It's better to regret the things you've done than regret the things you haven't done. Take this to heart as you plan your day. There's no shortage of fun out there - you just need to find it.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-07T07:00:00-07:00",
    updatedAt: "2026-09-07T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Monday, September 7, 2026",
    lede: "It's extremely important that you not be too possessive today, especially when it comes to other people, Pisces.",
    body: [
      "It's extremely important that you not be too possessive today, especially when it comes to other people, Pisces. You have important relationships with the people around you, and you'll find that in order to maintain them, it's best to let those people live their lives the way they want. Don't think that people belong to you, because they don't.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-07T07:00:00-07:00",
    updatedAt: "2026-09-07T07:00:00-07:00",
  }
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
