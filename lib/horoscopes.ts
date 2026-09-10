import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Thursday, September 10, 2026",
    lede: "Communication with close friends and a romantic partner should be especially beneficial today, Aries, since you're feeling more in touch with those close to you.",
    body: [
      "Communication with close friends and a romantic partner should be especially beneficial today, Aries, since you're feeling more in touch with those close to you. Children could also be a source of joy today. Your creativity and inspiration are strong, so this is a great day to start new projects. Your enthusiasm and optimism should propel you to new achievements. Enjoy!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-10T07:00:00-07:00",
    updatedAt: "2026-09-10T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Thursday, September 10, 2026",
    lede: "Recent successes could lead to new aspirations to increase your socioeconomic standing.",
    body: [
      "Recent successes could lead to new aspirations to increase your socioeconomic standing. You should be feeling especially determined and confident about your future. Your plans have worked out well. You're feeling close to family, as your intuition level is high, and you can sense what they're thinking and feeling. Career and relationships look promising. Enjoy!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-10T07:00:00-07:00",
    updatedAt: "2026-09-10T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Thursday, September 10, 2026",
    lede: "Normally you tend to view things on a logical, intellectual level, Gemini, but today the strength of your intuition could surprise you.",
    body: [
      "Normally you tend to view things on a logical, intellectual level, Gemini, but today the strength of your intuition could surprise you. Your communications could be subtler than words. Today you're probably feeling especially optimistic, enthusiastic, and very inspired by your circumstances. Continue on your path!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-10T07:00:00-07:00",
    updatedAt: "2026-09-10T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Thursday, September 10, 2026",
    lede: "Artistic talents are greatly increased by fresh, deeply felt inspiration.",
    body: [
      "Artistic talents are greatly increased by fresh, deeply felt inspiration. Today you may spend much of your time giving material form to your ideas. You're intuitive by nature, but today your psychic gifts are operating at a high level. Don't write off any insights you receive. Instead, write them down. Don't forget to keep paper and pen next to your bed. You'll want to remember your ideas and dreams later.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-10T07:00:00-07:00",
    updatedAt: "2026-09-10T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Thursday, September 10, 2026",
    lede: "This is a time when you're likely to feel especially idealistic and hopeful.",
    body: [
      "This is a time when you're likely to feel especially idealistic and hopeful. Spiritual experiences may have you on cloud nine, Leo. Your intuition is also strong. You might consider taking a future trip to a distant state or foreign country, perhaps one associated with a great spiritual tradition. Wait a day or two and talk it over with friends before making any specific arrangements.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-10T07:00:00-07:00",
    updatedAt: "2026-09-10T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Thursday, September 10, 2026",
    lede: "During this time, you'll feel especially intuitive, optimistic, and spiritually on a roll.",
    body: [
      "During this time, you'll feel especially intuitive, optimistic, and spiritually on a roll. You could feel artistically inspired, Virgo, and channel some of your newfound awareness into recently started projects. Your relationships are probably going well. Your increased understanding of others' needs makes you generous with sympathy or assistance where needed. Enjoy your day.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-10T07:00:00-07:00",
    updatedAt: "2026-09-10T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Thursday, September 10, 2026",
    lede: "Online group activities that you attend today are likely to be spiritually oriented, such as group meditations.",
    body: [
      "Online group activities that you attend today are likely to be spiritually oriented, such as group meditations. You could communicate with new friends from faraway places who share your interests. Though you're usually more intellectually inclined, today you should be feeling especially intuitive. Write down your thoughts and ideas lest you forget them. You may want to use them later.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-10T07:00:00-07:00",
    updatedAt: "2026-09-10T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Thursday, September 10, 2026",
    lede: "Some vivid and wonderful dreams might provide inspiration for future creative projects.",
    body: [
      "Some vivid and wonderful dreams might provide inspiration for future creative projects. You're feeling cheerful and optimistic now, and your enthusiasm is likely to continue. Success in career and relationships is indicated. Your increased intuition heightens your understanding of others. Don't be surprised if friends and colleagues line up for your support and guidance.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-10T07:00:00-07:00",
    updatedAt: "2026-09-10T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Thursday, September 10, 2026",
    lede: "You might find yourself thinking about a possible future vacation.",
    body: [
      "You might find yourself thinking about a possible future vacation. You've worked hard during the last few months and feel you deserve a break. This year you're likely to want to do something different from the norm, perhaps travel to a foreign land associated with a great spiritual tradition, if possible. You should feel closer to your loved ones and optimistic about the future. Enjoy!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-10T07:00:00-07:00",
    updatedAt: "2026-09-10T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Thursday, September 10, 2026",
    lede: "Your health should be in top shape today, Capricorn.",
    body: [
      "Your health should be in top shape today, Capricorn. You're likely to feel physically, emotionally, and spiritually strong and ready to tap into your inner power. Dreams may make it possible to release old traumas and move ahead. An increased understanding of the needs and desires of others enriches your relationships. Take heart from past success, continue as you are, and enjoy your day.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-10T07:00:00-07:00",
    updatedAt: "2026-09-10T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Thursday, September 10, 2026",
    lede: "You're good at dealing with others, but today you should be especially so.",
    body: [
      "You're good at dealing with others, but today you should be especially so. Your intuition is strong and you're likely to instinctively understand others' thoughts, feelings, needs, and desires. You give freely of your experience, knowledge, and understanding. This brings others closer to you, which can work for you on many levels. Social events and gatherings may bring new friends.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-10T07:00:00-07:00",
    updatedAt: "2026-09-10T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Thursday, September 10, 2026",
    lede: "You generally are good at sizing up other people and sensing their thoughts and feelings, Pisces, but today that talent is greatly enhanced by increased intuition.",
    body: [
      "You generally are good at sizing up other people and sensing their thoughts and feelings, Pisces, but today that talent is greatly enhanced by increased intuition. You should be feeling especially enthusiastic and optimistic today. Both work and home life are likely to be looking good. Physically, you should be healthy and vigorous, and spiritually you should be strong. Enjoy your day.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-10T07:00:00-07:00",
    updatedAt: "2026-09-10T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
