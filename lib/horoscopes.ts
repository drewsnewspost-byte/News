import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Saturday, September 5, 2026",
    lede: "Interesting communications from friends could center on possible world developments or maybe some juicy gossip about people you know, Aries.",
    body: [
      "Interesting communications from friends could center on possible world developments or maybe some juicy gossip about people you know, Aries. Enjoy yourself, but don't take everything you hear at face value. Much of it is less actual fact than the product of someone's fertile imagination. Short journeys in your area could bring news of upcoming changes in your community. Expect the unexpected!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-05T07:00:00-07:00",
    updatedAt: "2026-09-05T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Saturday, September 5, 2026",
    lede: "Today you might earn corporate kudos, Taurus, for all signs indicate that your imagination is flying high and can be put to work to increase your job effectiveness.",
    body: [
      "Today you might earn corporate kudos, Taurus, for all signs indicate that your imagination is flying high and can be put to work to increase your job effectiveness. You might even earn a promotion or increase in salary. However, it's important to curb the impulse to hide the downside of whatever you're doing from those in power. Be honest! It will benefit you more in the long run.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-05T07:00:00-07:00",
    updatedAt: "2026-09-05T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Saturday, September 5, 2026",
    lede: "Your mind is likely to be going a thousand miles an hour.",
    body: [
      "Your mind is likely to be going a thousand miles an hour. Ideas for imaginative and innovative projects may come faster than you can possibly turn them into reality. Write them down. You may not have time to work on them now, but you will later. You could decide to attend a lecture or seminar, sign up for an online class, or make plans to join friends and attend another kind of small group activity, if possible.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-05T07:00:00-07:00",
    updatedAt: "2026-09-05T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Saturday, September 5, 2026",
    lede: "You may have strange dreams and vivid premonitions today, Cancer.",
    body: [
      "You may have strange dreams and vivid premonitions today, Cancer. Your intuition and telepathic faculties are operating at a high level. You could think of someone who later phones. There's also a tendency to be too paranoid. Don't panic if some of the messages you receive seem disturbing. Check out the facts first. You're likely to find that all is better than you thought",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-05T07:00:00-07:00",
    updatedAt: "2026-09-05T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Saturday, September 5, 2026",
    lede: "Today you could be feeling warm and friendly toward everyone.",
    body: [
      "Today you could be feeling warm and friendly toward everyone. You might be involved in social events or receive invitations to future parties. You'll probably have a great time and make some new friends. Take care to take lots of vitamin C. There could be colds or other bugs flying around and you could be more susceptible to such infections at this time.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-05T07:00:00-07:00",
    updatedAt: "2026-09-05T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Saturday, September 5, 2026",
    lede: "Relations with people on the job should be warm, Virgo, and this could do wonders for your career.",
    body: [
      "Relations with people on the job should be warm, Virgo, and this could do wonders for your career. Take nothing at face value. All may not be as it seems. Someone has issues with you that render him or her untrustworthy. Take care to avoid getting too close to anyone who seems a little under the weather. Your immune system is a bit weak, and you could catch a bug.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-05T07:00:00-07:00",
    updatedAt: "2026-09-05T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Saturday, September 5, 2026",
    lede: "Some new information could come your way that causes you to focus on a new interest, Libra.",
    body: [
      "Some new information could come your way that causes you to focus on a new interest, Libra. It'll set your mind traveling to faraway places and times. You may also communicate with some new people who are highly educated, from foreign lands, or both. They might have fascinating stories to tell! Whatever happens, today promises to excite your curiosity and stimulate your intellect.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-05T07:00:00-07:00",
    updatedAt: "2026-09-05T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Saturday, September 5, 2026",
    lede: "You could have some intense dreams tonight, Scorpio.",
    body: [
      "You could have some intense dreams tonight, Scorpio. You might find that they bring inspiration for creative projects, perhaps for redecorating or otherwise beautifying your home. You could feel energetic now and want to charge ahead and work on your project until you drop. Take care to pace yourself. You might tire to the point of feeling ill.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-05T07:00:00-07:00",
    updatedAt: "2026-09-05T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Saturday, September 5, 2026",
    lede: "A welcome communication from a business or romantic partner could arrive today, Sagittarius.",
    body: [
      "A welcome communication from a business or romantic partner could arrive today, Sagittarius. This could generate a lot of enthusiasm on both your parts and do wonders for your relationship or for whatever business you do together. Be honest with your partner. Don't conceal your concerns. It's better to get things out in the open. Don't worry. Everything will be OK!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-05T07:00:00-07:00",
    updatedAt: "2026-09-05T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Saturday, September 5, 2026",
    lede: "Today is a good day to ask for a raise or consider other ways to increase your income, Capricorn.",
    body: [
      "Today is a good day to ask for a raise or consider other ways to increase your income, Capricorn. Superiors will be in a receptive mood and likely feeling more benevolent than usual. This is a good time to study and consider investment possibilities, but it isn't a good time to make investments. The facts may differ from what you read or hear. Wait about a week before deciding.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-05T07:00:00-07:00",
    updatedAt: "2026-09-05T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Saturday, September 5, 2026",
    lede: "You should be feeling especially romantic and sensual now, Aquarius, and you might draw admiring glances from those around you - even strangers.",
    body: [
      "You should be feeling especially romantic and sensual now, Aquarius, and you might draw admiring glances from those around you - even strangers. Your passion is high, so this is an excellent day to plan a romantic evening. You could also feel especially creative and want to spend your day in some sort of artistic activity. Go to it!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-05T07:00:00-07:00",
    updatedAt: "2026-09-05T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Saturday, September 5, 2026",
    lede: "Strange, passionate stirrings could find you wanting to escape from civilization with a lover, Pisces.",
    body: [
      "Strange, passionate stirrings could find you wanting to escape from civilization with a lover, Pisces. This is a great day for it. At least plan a quiet evening at home with your special someone. You might also want to satisfy other sensual cravings, such as a desire for delicious food, drink, or comfortable chairs or beds. Flow with it. We all need a little self-indulgence now and then!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-05T07:00:00-07:00",
    updatedAt: "2026-09-05T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
