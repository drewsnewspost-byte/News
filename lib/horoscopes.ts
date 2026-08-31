import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Monday, August 31, 2026",
    lede: "Your emotions could feel restricted today, Aries, a feeling that may be difficult to shake.",
    body: [
      "Your emotions could feel restricted today, Aries, a feeling that may be difficult to shake. Take this opportunity to calm down and relax. You'll enjoy the good times more when you give your body the rest it needs. Always pushing for bigger and better adventures may be fun, but it can leave you too tired to fully appreciate them.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-31T07:00:00-07:00",
    updatedAt: "2026-08-31T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Monday, August 31, 2026",
    lede: "It could be hard to find your footing early in the day, Taurus.",
    body: [
      "It could be hard to find your footing early in the day, Taurus. You may be better off sleeping in. Have a good breakfast and relax in the morning. By evening, you'll be refreshed, recharged, and ready to take on the town. Your emotions may feel restricted, which could make it difficult to fully express yourself. You'd be better off turning this energy inward now.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-31T07:00:00-07:00",
    updatedAt: "2026-08-31T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Monday, August 31, 2026",
    lede: "Use the morning to take care of yourself, Gemini.",
    body: [
      "Use the morning to take care of yourself, Gemini. You could be so concerned with the world and the shared environment that you forget to take care of you. Use the early afternoon to reflect and meditate. Gather facts from your inner state and use the information to create a plan for the future. Be flexible in your approach.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-31T07:00:00-07:00",
    updatedAt: "2026-08-31T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Monday, August 31, 2026",
    lede: "Get to some water today and reconnect with this element, Cancer.",
    body: [
      "Get to some water today and reconnect with this element, Cancer. Like lapping waves against the shore, you may be gently changing the landscape around you with each word or action. Don't underestimate your inner strength. It could be that you seem overpowered by the things going on around you, but don't let them keep you from being the person you truly are.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-31T07:00:00-07:00",
    updatedAt: "2026-08-31T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Monday, August 31, 2026",
    lede: "Emotionally speaking, you should be doing quite well today, Leo, especially in the morning.",
    body: [
      "Emotionally speaking, you should be doing quite well today, Leo, especially in the morning. This is a good time to take charge of projects that require definite leadership. Don't think that you're inferior to the people around you. Act like you belong in a leadership role and you'll find that others will automatically support you in that position. You have what it takes to lead.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-31T07:00:00-07:00",
    updatedAt: "2026-08-31T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Monday, August 31, 2026",
    lede: "You may get frustrated today, Virgo, especially in the morning when other people's egos seem to be strong.",
    body: [
      "You may get frustrated today, Virgo, especially in the morning when other people's egos seem to be strong. It could be difficult to relate to people who simply refuse to accept any opinion but their own. Things should mellow out by afternoon. You'll find people start to see things from your perspective. Remain confident in your position despite the vacillation of others.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-31T07:00:00-07:00",
    updatedAt: "2026-08-31T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Monday, August 31, 2026",
    lede: "People may see you as the personification of drama, especially this morning, Libra.",
    body: [
      "People may see you as the personification of drama, especially this morning, Libra. This is a good time to express your emotions and get things out of your system. Be sure to release whatever pent-up emotion you have inside. By afternoon, it might be a good idea to settle down and lay low. Turn your energy inward, come to your center, and plan what needs to get done.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-31T07:00:00-07:00",
    updatedAt: "2026-08-31T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Monday, August 31, 2026",
    lede: "There may be a damper on your mood today, Scorpio, especially in the morning.",
    body: [
      "There may be a damper on your mood today, Scorpio, especially in the morning. It could seem as if everyone is having fun but you. Having a good time is more a state of mind than anything else. Try not to get trapped in a lousy mindset. Late afternoon is a good time to ground your emotions. Operate from a point of stability instead of jealousy.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-31T07:00:00-07:00",
    updatedAt: "2026-08-31T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Monday, August 31, 2026",
    lede: "There may be some conflict today, Sagittarius, especially in the morning.",
    body: [
      "There may be some conflict today, Sagittarius, especially in the morning. Your general mood is quite good, but there's a strong force asking you to be more realistic in your approach. The last thing you want is for someone else to throw a bucket of water on your raging fire of fun, but this is likely to happen unless you address the reality of the situation.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-31T07:00:00-07:00",
    updatedAt: "2026-08-31T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Monday, August 31, 2026",
    lede: "Your mind may be a little cloudy most of the day, Capricorn, and you could find it hard to ground yourself.",
    body: [
      "Your mind may be a little cloudy most of the day, Capricorn, and you could find it hard to ground yourself. It may be that you're trying to navigate by the stars, but unfortunately, the clouds have moved in and there are no reference points to be seen. The good news is that the skies should clear later, and you'll find there's nothing but smooth sailing for the rest of the night.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-31T07:00:00-07:00",
    updatedAt: "2026-08-31T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Monday, August 31, 2026",
    lede: "Praise you may receive this morning could make you feel on top of the world, Aquarius, but try not to let this feeling go to your head.",
    body: [
      "Praise you may receive this morning could make you feel on top of the world, Aquarius, but try not to let this feeling go to your head. Stay modest despite the lavish praise that may be showered on you. By evening, you won't be able to get by on just talk alone. Actions will speak much louder than words and it's important that you have some sort of plan.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-31T07:00:00-07:00",
    updatedAt: "2026-08-31T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Monday, August 31, 2026",
    lede: "Things should improve for you as the day progresses, Pisces.",
    body: [
      "Things should improve for you as the day progresses, Pisces. The key is to stay loose and not be concerned with the situation's outcome. The future is uncertain. You shouldn't depend on something that may or may not pan out the way you want. There could be some conflict between you and someone with a strong ego in the morning, but this should resolve itself by evening.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-31T07:00:00-07:00",
    updatedAt: "2026-08-31T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
