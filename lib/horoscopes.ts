import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Sunday, September 6, 2026",
    lede: "Your mind may be going a thousand miles an hour today.",
    body: [
      "Your mind may be going a thousand miles an hour today. You might be inundated with new ideas and information that could cause mental overload. Write it all down if you can. You'll want to refer to it later. It might be advisable to then go out for a walk or other exercise. This intellectual overload could produce excess nervous energy that you'll need to work off.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-06T07:00:00-07:00",
    updatedAt: "2026-09-06T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Sunday, September 6, 2026",
    lede: "Worries over the situation of a lover or close friend who seems depressed could plague you today, yet you may hesitate to contact this person and ask what's wrong because you don't want to intrude.",
    body: [
      "Worries over the situation of a lover or close friend who seems depressed could plague you today, yet you may hesitate to contact this person and ask what's wrong because you don't want to intrude. Nonetheless, you should. All is not as bad as it seems, and your concern will be appreciated. Tonight, get some much-needed rest. You've been working far too hard.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-06T07:00:00-07:00",
    updatedAt: "2026-09-06T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Sunday, September 6, 2026",
    lede: "A family member may be depressed and not up for talking about what's wrong.",
    body: [
      "A family member may be depressed and not up for talking about what's wrong. His or her mood could spread to everyone else, so it might be a good idea to ask what's wrong. Point out that moods are contagious! Don't force the issue, Gemini. That would be worse. A number of calls could interrupt your work, which you might find irritating. Don't be afraid to let voicemail get the calls.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-06T07:00:00-07:00",
    updatedAt: "2026-09-06T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Sunday, September 6, 2026",
    lede: "Misinformation might spread through your extended family or neighborhood and cause unnecessary upsets among those involved.",
    body: [
      "Misinformation might spread through your extended family or neighborhood and cause unnecessary upsets among those involved. Don't accept at face value any gossip or rumor you hear today until you check it out yourself, Cancer. It could turn out to be a tempest in a teapot. This isn't a good time to plan or take a trip of any kind. Delays or mishaps could result.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-06T07:00:00-07:00",
    updatedAt: "2026-09-06T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Sunday, September 6, 2026",
    lede: "Misinformation regarding money could come from someone who has a stake in your believing whatever you're told.",
    body: [
      "Misinformation regarding money could come from someone who has a stake in your believing whatever you're told. This could be a banker, creditor, investment counselor, or even a close friend or relative. Whoever it is, Leo, don't accept what this person says at face value. Look into the facts of the situation yourself before making any decisions about what you need to do.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-06T07:00:00-07:00",
    updatedAt: "2026-09-06T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Sunday, September 6, 2026",
    lede: "Someone close to you may not be totally honest.",
    body: [
      "Someone close to you may not be totally honest. This person could be avoiding telling the truth or hiding something from you in order to protect you. Trust your instincts, Virgo. If someone tells you something important that doesn't ring true, check it out before accepting one person's word. This isn't a vicious deception - only a protective one. But shielding someone from the truth can sometimes backfire!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-06T07:00:00-07:00",
    updatedAt: "2026-09-06T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Sunday, September 6, 2026",
    lede: "Weariness may have you feeling a bit listless today, Libra, and you're likely to want to stay home in bed rather than go anywhere.",
    body: [
      "Weariness may have you feeling a bit listless today, Libra, and you're likely to want to stay home in bed rather than go anywhere. This goes against your normal inclination, so you could be tempted to bite the bullet and get out in spite of your malaise. Don't fall into this trap. Get some rest so that when you absolutely have to go out, you'll be your old self again.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-06T07:00:00-07:00",
    updatedAt: "2026-09-06T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Sunday, September 6, 2026",
    lede: "A lover or close friend may seem to have dropped out of the picture, and this could have you worried, confused, and wondering if this person isn't interested in continuing a relationship with you.",
    body: [
      "A lover or close friend may seem to have dropped out of the picture, and this could have you worried, confused, and wondering if this person isn't interested in continuing a relationship with you. Don't let your insecurity get the best of you. The person has his or her troubles and will eventually want a strong, sympathetic shoulder to cry on. You're likely to be that person!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-06T07:00:00-07:00",
    updatedAt: "2026-09-06T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Sunday, September 6, 2026",
    lede: "Career interests may be short-circuited by gossip, rumor, and office politics.",
    body: [
      "Career interests may be short-circuited by gossip, rumor, and office politics. Someone has an agenda and isn't likely to care too much about the effect on others' lives of any underhanded dealings. If you hear about such goings-on, Sagittarius, do what you can to stop them before they get out of hand. That way you can protect your and your colleagues' career interests.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-06T07:00:00-07:00",
    updatedAt: "2026-09-06T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Sunday, September 6, 2026",
    lede: "Perhaps you've been planning a trip or a return to school for a long time.",
    body: [
      "Perhaps you've been planning a trip or a return to school for a long time. However, Capricorn, a rather disturbing letter or phone call could jeopardize your plans and leave you teetering on the edge of disappointment. If you look at the situation carefully, you may find that it doesn't set you back that much. You can take care of it without sacrificing what you want.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-06T07:00:00-07:00",
    updatedAt: "2026-09-06T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Sunday, September 6, 2026",
    lede: "Seemingly bad news about your financial situation could throw your usually even-keeled nature off kilter.",
    body: [
      "Seemingly bad news about your financial situation could throw your usually even-keeled nature off kilter. Look into the matter carefully before panicking, Aquarius. There may have been a computer error or other mistake, or perhaps someone confused you with someone else. Take steps to rectify the blunder. It's a drag, but you'll be relieved to know that all was better than it seemed.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-06T07:00:00-07:00",
    updatedAt: "2026-09-06T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Sunday, September 6, 2026",
    lede: "An unpleasant situation could arise.",
    body: [
      "An unpleasant situation could arise. Your first reaction may be to protect those closest to you from the truth. You could be tempted to lie or at least avoid mentioning the situation. Don't give in to the temptation, Pisces. Your desire to shield loved ones is understandable, but it could cause problems. You can't protect people from everything. Most people prefer to know the facts.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-06T07:00:00-07:00",
    updatedAt: "2026-09-06T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
