import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Wednesday, September 16, 2026",
    lede: "Romance and creativity are the driving forces in your life today, Aries.",
    body: [
      "Romance and creativity are the driving forces in your life today, Aries. You might find that feelings for a special person provide lots of inspiration for creative projects. Your creative energy makes you that much more attractive to the one you love most. This could prove to be an emotionally and aesthetically satisfying day. Make the most of it!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-16T07:00:00-07:00",
    updatedAt: "2026-09-16T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Wednesday, September 16, 2026",
    lede: "You tend to be down to Earth and practical, Taurus, but now you feel like indulging in some flights of fancy.",
    body: [
      "You tend to be down to Earth and practical, Taurus, but now you feel like indulging in some flights of fancy. Romance or fantasy novels could be especially appealing right now. You might even toy with the idea of writing one of your own. If you're currently romantically involved, your sweetheart might want to do something special with you tonight. Enjoy your day.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-16T07:00:00-07:00",
    updatedAt: "2026-09-16T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Wednesday, September 16, 2026",
    lede: "An affectionate letter, phone call, or email could come to you from an old friend, Gemini, expressing gratitude for past favors.",
    body: [
      "An affectionate letter, phone call, or email could come to you from an old friend, Gemini, expressing gratitude for past favors. This is going to make you feel warm and loving toward this person, and you'll want to reciprocate in kind. Invite him or her for coffee and have a long conversation. The bond between you is strong. This isn't a friendship you'll want to let go.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-16T07:00:00-07:00",
    updatedAt: "2026-09-16T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Wednesday, September 16, 2026",
    lede: "Have you been thinking about changing careers, Cancer?",
    body: [
      "Have you been thinking about changing careers, Cancer? You might hear of some opportunities today, possibly through a colleague. This could be the right time to make a change. Positive professional developments are indicated for you. List your options and then do some research on each one. You might be headed toward some exciting possibilities.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-16T07:00:00-07:00",
    updatedAt: "2026-09-16T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Wednesday, September 16, 2026",
    lede: "You may feel especially warm and loving, Leo, and romance could be on your mind.",
    body: [
      "You may feel especially warm and loving, Leo, and romance could be on your mind. Time spent with a love partner from another state or country might seem especially appealing. This is a great day to schedule an intimate evening alone with your friend and see where it takes you. All signs indicate that your friend returns your feelings, and you might end up just where you want!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-16T07:00:00-07:00",
    updatedAt: "2026-09-16T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Wednesday, September 16, 2026",
    lede: "Erotic dreams could wake you up in a strange mood, Virgo.",
    body: [
      "Erotic dreams could wake you up in a strange mood, Virgo. You could long for a romantic encounter, but the impact is likely to be stronger than that. These intense dreams might stimulate your creative juices. If you aren't currently working on a project, ideas could flood your imagination. Let them stew for a while. There's no rush to pick one. Enjoy your day.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-16T07:00:00-07:00",
    updatedAt: "2026-09-16T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Wednesday, September 16, 2026",
    lede: "You might find yourself reeling from shock when an old friend suddenly seems to show romantic interest in you.",
    body: [
      "You might find yourself reeling from shock when an old friend suddenly seems to show romantic interest in you. Conflicting emotions could come up, but don't write it off if you're available. There could be potential for a good relationship with this person. Don't feel that you have to either jump right in or forget the whole thing. You can test the waters for a while!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-16T07:00:00-07:00",
    updatedAt: "2026-09-16T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Wednesday, September 16, 2026",
    lede: "Today you may be asked to speak to a gathering or lead a discussion group, Scorpio.",
    body: [
      "Today you may be asked to speak to a gathering or lead a discussion group, Scorpio. You tend to be shy, but today you'll be all for it and enjoy being in the limelight, albeit temporarily. You'll certainly shine, and others may pay you sincere compliments. After the event, enjoy the rest of your day. You earned it.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-16T07:00:00-07:00",
    updatedAt: "2026-09-16T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Wednesday, September 16, 2026",
    lede: "Romance continues to soar today, Sagittarius.",
    body: [
      "Romance continues to soar today, Sagittarius. You should feel especially sexy. You're likely to attract admiring glances from those around you, including strangers. If you're single, you might even attract an exciting new love partner. If you're already involved, your beloved could fall in love with you all over again. Schedule an intimate evening together, if possible, and make the most of it!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-16T07:00:00-07:00",
    updatedAt: "2026-09-16T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Wednesday, September 16, 2026",
    lede: "You could feel like a millionaire today, Capricorn.",
    body: [
      "You could feel like a millionaire today, Capricorn. Money matters seem to surpass your expectations. You might want to spend time fixing up your home or perhaps shopping for yourself. Do you have plans to see someone special tonight? A sexy new item might make your friend's eyes pop! Increased self-confidence adds even more juice to an already enhanced appearance. Dress in your favorite colors and have fun.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-16T07:00:00-07:00",
    updatedAt: "2026-09-16T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Wednesday, September 16, 2026",
    lede: "Someone you've never met before who you find exceedingly attractive could pass you today.",
    body: [
      "Someone you've never met before who you find exceedingly attractive could pass you today. You might decide to go say hello and discover not only a physical attraction but an intellectual compatibility as well. Your feelings are probably reciprocated! If you're single, this attraction might be worth pursuing. If you're involved, at least you might make a new friend.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-16T07:00:00-07:00",
    updatedAt: "2026-09-16T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Wednesday, September 16, 2026",
    lede: "Career and money matters continue to go well for you, Pisces, and probably romance, too.",
    body: [
      "Career and money matters continue to go well for you, Pisces, and probably romance, too. Your life may be the envy of others, but you probably feel there's still something missing. This is a good day to explore metaphysical and spiritual studies. It's a time of transition, and this sort of interest can make things easier for you, especially if those close to you share your interest.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-16T07:00:00-07:00",
    updatedAt: "2026-09-16T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
