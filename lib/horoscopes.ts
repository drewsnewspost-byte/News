import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Wednesday, September 9, 2026",
    lede: "The glass may look half empty, but only at first glance.",
    body: [
      "The glass may look half empty, but only at first glance. Keep looking at it, or perhaps change the way you look at it, and you'll see that it indeed is half full. You may be experiencing some frustration. Computers could be down, or communication hindered in some way. Don't get stressed. See this as an ideal time to relax since you can't get any work done anyway.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-09T07:00:00-07:00",
    updatedAt: "2026-09-09T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Wednesday, September 9, 2026",
    lede: "There are lots of personal and financial issues to resolve today, Taurus.",
    body: [
      "There are lots of personal and financial issues to resolve today, Taurus. You may hear from your bank or see some alarming numbers on an ATM receipt. Don't get upset. Ultimately, these matters will be resolved to your benefit. As for personal matters, you may learn some new information about someone you thought you knew well. A relationship you once considered close may not be.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-09T07:00:00-07:00",
    updatedAt: "2026-09-09T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Wednesday, September 9, 2026",
    lede: "A rising tide lifts all boats.",
    body: [
      "A rising tide lifts all boats. When someone close experiences a windfall or especially good luck, Gemini, the ripple effect reaches you. Change is in the air. While everything happening is positive, sometimes it feels like it's going too quickly. You feel a bit off balance, with little or no time to adjust. Even windfalls take some getting used to. Give yourself time to settle into the new circumstances.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-09T07:00:00-07:00",
    updatedAt: "2026-09-09T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Wednesday, September 9, 2026",
    lede: "It looks as though change is on the horizon at work, Cancer.",
    body: [
      "It looks as though change is on the horizon at work, Cancer. You've just recently completed some long-term projects and are being recognized for your efforts. Perhaps a bonus or promotion is in store. Your affinity for technology and ability to quickly absorb new information makes you a prime candidate for a new position that's just opened up. Grab the chance!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-09T07:00:00-07:00",
    updatedAt: "2026-09-09T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Wednesday, September 9, 2026",
    lede: "Crazy as it seems, why not plan that trip you've been eager to go on, Leo?",
    body: [
      "Crazy as it seems, why not plan that trip you've been eager to go on, Leo? Adventure calls, and although there are a few obstacles to stop you from answering, you can’t wait to get out of your rut. There is a great big world out there, and you can’t wait to make the time to go and see some of it!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-09T07:00:00-07:00",
    updatedAt: "2026-09-09T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Wednesday, September 9, 2026",
    lede: "Prosperity is just around the corner, Virgo.",
    body: [
      "Prosperity is just around the corner, Virgo. With it comes change. Change in your job, career, or environment figures prominently today. However this change manifests, it's bound to be positive. You're lucky, and you're about to hit the road to even greater success. Savor this moment, for you'll be busy soon!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-09T07:00:00-07:00",
    updatedAt: "2026-09-09T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Wednesday, September 9, 2026",
    lede: "Your world is changing, Libra, both internally and externally.",
    body: [
      "Your world is changing, Libra, both internally and externally. You feel a need to broaden your horizons. You may be contemplating a move to a new neighborhood or trip to a faraway land. The people in your life will change as a result of this. You're about to embark on a new phase of life, and these new friends will act as able guides.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-09T07:00:00-07:00",
    updatedAt: "2026-09-09T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Wednesday, September 9, 2026",
    lede: "Romance is in the air today, Scorpio.",
    body: [
      "Romance is in the air today, Scorpio. It's likely that your relationship with your loved ones will see a dramatic improvement. Perhaps some flowers will arrive unexpectedly, or you'll be paid a sincere compliment. Harmony reigns in the work environment as well. Both people and machines run smoothly and efficiently.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-09T07:00:00-07:00",
    updatedAt: "2026-09-09T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Wednesday, September 9, 2026",
    lede: "You're focused and attentive to detail.",
    body: [
      "You're focused and attentive to detail. Some longstanding projects benefit from this sudden spurt of energy and get completed in record time. Children figure prominently in your life right now, Sagittarius. Is there one child in particular who needs some extra attention from you? Your love and support mean a lot more than you realize.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-09T07:00:00-07:00",
    updatedAt: "2026-09-09T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Wednesday, September 9, 2026",
    lede: "Don't let others' bad moods get you down, Capricorn.",
    body: [
      "Don't let others' bad moods get you down, Capricorn. And don't feel it's your responsibility to cheer them up. Their moodiness is their business, not yours. You could be a little bit anxious today, and allowing yourself to be negatively influenced by others will do you no good at all. The general atmosphere will improve in a few days.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-09T07:00:00-07:00",
    updatedAt: "2026-09-09T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Wednesday, September 9, 2026",
    lede: "It's time to let go of the past and focus only on the future, Aquarius.",
    body: [
      "It's time to let go of the past and focus only on the future, Aquarius. A new person may come into your life who can help you do just that. Communication with close friends and relatives is highlighted, and you may find yourself spending more time on the phone than usual. Enjoy this day as you anticipate your brilliant future!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-09T07:00:00-07:00",
    updatedAt: "2026-09-09T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Wednesday, September 9, 2026",
    lede: "There's definitely a downside to home ownership!",
    body: [
      "There's definitely a downside to home ownership! Much as you love projects, Pisces, the joy is tempered when the chores never end. While your home is structurally sound, it may need some cosmetic enhancement. Try adding plants and flowers indoors. Outside, a few strategically placed pots can act as attractive focal points. You can make a difference with little effort or expense.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-09T07:00:00-07:00",
    updatedAt: "2026-09-09T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
