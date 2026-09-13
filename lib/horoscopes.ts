import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Sunday, September 13, 2026",
    lede: "Bask in the sunshine of today, Aries.",
    body: [
      "Bask in the sunshine of today, Aries. Focus on the positive aspects of your life and work to expand these energies. There's a great deal of opportunity open at this time. The key to taking advantage of this is to stay close to the things that truly bring you the most happiness. The details will work themselves out with almost no effort. Have faith that you'll succeed, and you will.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-13T07:00:00-07:00",
    updatedAt: "2026-09-13T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Sunday, September 13, 2026",
    lede: "Make sure you're getting enough sleep, Taurus.",
    body: [
      "Make sure you're getting enough sleep, Taurus. You may seem groggy and your head could be a bit cloudy today, but try not to let this stop you from getting your work done. Much of what you perceive may not exactly correlate with reality. Your emotions could be especially distorted. You may have a strong desire to escape into a fantasy world. Try to keep both feet on the ground.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-13T07:00:00-07:00",
    updatedAt: "2026-09-13T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Sunday, September 13, 2026",
    lede: "There may be an area of your life that seems completely fanciful now, Gemini.",
    body: [
      "There may be an area of your life that seems completely fanciful now, Gemini. The issues regarding it have become a bit hazy. You may no longer be sure of the reality of the situation. Today's energies will bring these issues into focus. Your emotions are especially heightened, and they, too, will seem a bit clouded. Try to stay balanced and gain a new perspective on the situation.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-13T07:00:00-07:00",
    updatedAt: "2026-09-13T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Sunday, September 13, 2026",
    lede: "Your fantasy life is especially active today, Cancer, so enjoy this little break into your dream world.",
    body: [
      "Your fantasy life is especially active today, Cancer, so enjoy this little break into your dream world. Coming back to reality may be difficult. Keep tabs on your emotions so they don't get the better of you. The impressions you receive from the outside world may not be accurate today. Keep your wits about you and try not to get caught up in drugs and alcohol.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-13T07:00:00-07:00",
    updatedAt: "2026-09-13T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Sunday, September 13, 2026",
    lede: "You're in a fun-loving and jovial mood today, Leo, and you should make time to enjoy it with friends, if possible.",
    body: [
      "You're in a fun-loving and jovial mood today, Leo, and you should make time to enjoy it with friends, if possible. The one caveat to the day is that your emotions may be a bit clouded. You may not have the most accurate impression of a situation. You might feel that people have the wrong impression of who you are. Try not to feel insecure. Have confidence in yourself and take the lead.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-13T07:00:00-07:00",
    updatedAt: "2026-09-13T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Sunday, September 13, 2026",
    lede: "You may have a strange paranoia that people are out to get you today, Virgo, but don't let this feeling paralyze you.",
    body: [
      "You may have a strange paranoia that people are out to get you today, Virgo, but don't let this feeling paralyze you. Your emotions are more than likely getting the better of you. The reality of the situation is much different than your sensitive emotions perceive. Avoid the tendency to escape even further into this fantasy world. Stay away from drugs or alcohol.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-13T07:00:00-07:00",
    updatedAt: "2026-09-13T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Sunday, September 13, 2026",
    lede: "Your fantasy world is piqued today, Libra.",
    body: [
      "Your fantasy world is piqued today, Libra. Your imagination is running wild. Maintain a certain amount of control over your emotions or they may get the better of you. You could find yourself in a cloud of confusion by afternoon. Avoid this by trying to ground yourself throughout the day. Make sure your actions result from an equal balance between thought and emotion.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-13T07:00:00-07:00",
    updatedAt: "2026-09-13T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Sunday, September 13, 2026",
    lede: "You may get the feeling that you're operating in an emotional crossfire today, Scorpio.",
    body: [
      "You may get the feeling that you're operating in an emotional crossfire today, Scorpio. On the one hand, you may have a \"me first,\" selfish feeling that demands attention from others. You may also sense the need to work to serve others and bring like-minded people together. Realize that both of these energies are valid and deserve your attention. Balance is the key. Work to soothe your fluctuating emotions.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-13T07:00:00-07:00",
    updatedAt: "2026-09-13T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Sunday, September 13, 2026",
    lede: "You'll enjoy a day of high spirits and friendly interactions.",
    body: [
      "You'll enjoy a day of high spirits and friendly interactions. The energy of the day is in your favor, although it may not seem like it. Your emotions may become cloudy and it might seem like people are working against you. Although this may be true to some extent, realize that much of this paranoia comes more from your emotional insecurity than another's plot against you.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-13T07:00:00-07:00",
    updatedAt: "2026-09-13T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Sunday, September 13, 2026",
    lede: "Ask for help if you need it, Capricorn.",
    body: [
      "Ask for help if you need it, Capricorn. Your nature is to serve others, but in order to maintain that energy, make sure that you're taken care of as well. Offer extra support to the people you love. In work-related issues, make sure that you aren't biting off more than you can chew. Delegate tasks to others. Pamper yourself tonight with a hot bath and a good meal.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-13T07:00:00-07:00",
    updatedAt: "2026-09-13T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Sunday, September 13, 2026",
    lede: "Keeping your emotions in balance is going to be the key to a successful day, Aquarius.",
    body: [
      "Keeping your emotions in balance is going to be the key to a successful day, Aquarius. Don't get swept away by a fanciful situation that could send your mind spinning. Maintain control at all times. This might be easier said than done. Give yourself a break and avoid excess alcohol or any sort of drug use. It will be hard enough to keep your mind clear without them.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-13T07:00:00-07:00",
    updatedAt: "2026-09-13T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Sunday, September 13, 2026",
    lede: "You may feel like you're running into a brick wall at every turn, Pisces, especially when it comes to emotions.",
    body: [
      "You may feel like you're running into a brick wall at every turn, Pisces, especially when it comes to emotions. The intensity of the day may have you feeling like you're in a pressure cooker. Try not to blow things out of proportion. Realize that much of the drama is more a figment of your imagination than reality. Clear away the clouds and get to the heart of the matter.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-13T07:00:00-07:00",
    updatedAt: "2026-09-13T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
