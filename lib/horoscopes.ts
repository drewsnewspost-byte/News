import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Monday, September 14, 2026",
    lede: "Give people the benefit of the doubt, Aries.",
    body: [
      "Give people the benefit of the doubt, Aries. Don't be so hasty in your actions, and take the time to think things through. You have a special connection with your feelings today that can aid in clearing some of the fog in your thinking. Your sensitivity to others is remarkably strong. People will be particularly drawn to this side of you, especially tonight.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-14T07:00:00-07:00",
    updatedAt: "2026-09-14T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Monday, September 14, 2026",
    lede: "Put your businesslike nature aside for the day and focus on your feelings, Taurus.",
    body: [
      "Put your businesslike nature aside for the day and focus on your feelings, Taurus. You may be a bit protective of your emotions, but realize that much of what you're feeling is best experienced through expressing it to others. Reach down deep and get in touch with what you truly believe to be the heart of the issue. Your thinking is clear as can be today, so enjoy it!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-14T07:00:00-07:00",
    updatedAt: "2026-09-14T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Monday, September 14, 2026",
    lede: "Call or write a letter to a friend today, Gemini.",
    body: [
      "Call or write a letter to a friend today, Gemini. Your brain may feel like it's stuck in a rut, which is probably best remedied by sharing these feelings with others. Take it one step at a time, and be patient with others in return. People are likely to snap more easily since fuses will be extra short. Take care as you approach the deep end. Make sure you have your life jacket on.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-14T07:00:00-07:00",
    updatedAt: "2026-09-14T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Monday, September 14, 2026",
    lede: "Things flow well for you today, Cancer, so bask in any sunshine that this day offers.",
    body: [
      "Things flow well for you today, Cancer, so bask in any sunshine that this day offers. Your intuition is especially strong, and you have an uncanny ability to pick up on other people's feelings. Your nurturing gifts are in high demand by those around you. They'll need a sensitive shoulder to lean on. Just make sure you don't lose yourself in the process. Save some energy for you.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-14T07:00:00-07:00",
    updatedAt: "2026-09-14T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Monday, September 14, 2026",
    lede: "Other people's indecisiveness could leave you feeling frustrated and stuck today, Leo.",
    body: [
      "Other people's indecisiveness could leave you feeling frustrated and stuck today, Leo. Realize that you can overcome this by pushing past them. Don't feel like you need to wait for others to make up their minds before you act. Do what you need to do, and others will catch up when they're ready. You aren't responsible for the well-being of others. Concentrate on you.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-14T07:00:00-07:00",
    updatedAt: "2026-09-14T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Monday, September 14, 2026",
    lede: "It may be much easier than usual to express your emotions to someone today, Virgo.",
    body: [
      "It may be much easier than usual to express your emotions to someone today, Virgo. If there has been something on your mind for a while, now is the time to say it. You'll be able to paint a clear picture of your true feelings. Express yourself with confidence so you don't come across as helpless or clingy. Your sensitivity is a gift that others will recognize and appreciate.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-14T07:00:00-07:00",
    updatedAt: "2026-09-14T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Monday, September 14, 2026",
    lede: "Does it feel like someone's raining on your parade today, Libra?",
    body: [
      "Does it feel like someone's raining on your parade today, Libra? No surprise there. You may feel like you're stuck in a bog, so wear your galoshes and give it your best shot. That's all you can do. People may be extra touchy and impatient with ridiculous banter, even if it is polite. Try not to make sense of things that seem confusing now. Come back to them in a couple days.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-14T07:00:00-07:00",
    updatedAt: "2026-09-14T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Monday, September 14, 2026",
    lede: "Your intuition is extra keen today, Scorpio, and your mental aim is on target.",
    body: [
      "Your intuition is extra keen today, Scorpio, and your mental aim is on target. Other people may sink into the swamp, but you're the life raft they can cling to. Your amazing mental clarity will be invaluable throughout the day. You'll be able to communicate your feelings clearly, and you should find their receptivity to your thoughts much greater than usual.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-14T07:00:00-07:00",
    updatedAt: "2026-09-14T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Monday, September 14, 2026",
    lede: "You might find the mood of today a bit too somber for your liking, Sagittarius.",
    body: [
      "You might find the mood of today a bit too somber for your liking, Sagittarius. Why is everyone so serious? Whether you figure out the answer or not, just know that it probably isn't something you did. Emotions that have been building up are likely to express themselves now, much like a volcano bursting under the pressure of tons of molten lava.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-14T07:00:00-07:00",
    updatedAt: "2026-09-14T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Monday, September 14, 2026",
    lede: "Yes, you may have another cookie, Capricorn.",
    body: [
      "Yes, you may have another cookie, Capricorn. Enjoy it and don't feel guilty. Guilt is useless. Today, get rid of regret. Express your emotions but don't dwell on them. Your sensitivity is acute, so put up your psychic shield. You might pick up on others' intense energy, so be careful. Sympathize with others, but don't take on their garbage. They need to take out their own trash.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-14T07:00:00-07:00",
    updatedAt: "2026-09-14T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Monday, September 14, 2026",
    lede: "You might just want to stay on the couch today, Aquarius.",
    body: [
      "You might just want to stay on the couch today, Aquarius. That's fine. Don't get up if you don't want to. You're probably better off sticking close to home and enjoying a good movie tonight. If people ask how you're doing, be honest. Others will be able to see right through you, so don't try to hide your feelings. Today is a good day to say how you really feel.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-14T07:00:00-07:00",
    updatedAt: "2026-09-14T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Monday, September 14, 2026",
    lede: "Finally, the world is starting to see it your way, Pisces.",
    body: [
      "Finally, the world is starting to see it your way, Pisces. Be yourself and don't be squeamish about telling people exactly how it is. Your thinking is clear and focused. Use your penetrating mind to accomplish mental tasks. Your intense nature is powerful, so act wisely. Today may well be one in which other people realize that you really aren't as crazy as they first thought.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-14T07:00:00-07:00",
    updatedAt: "2026-09-14T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
