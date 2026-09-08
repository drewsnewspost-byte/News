import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Tuesday, September 8, 2026",
    lede: "Don't be surprised if lots of people contact you today.",
    body: [
      "Don't be surprised if lots of people contact you today. Perhaps you're in the mood to gossip or neighbors have news of changes nearby. You should be brimming with energy, so you can handle it, but you might find it a bit unnerving if communication gets too hectic. It's best just to go with the flow and enjoy situations like this. You can think about what it all means later.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-08T07:00:00-07:00",
    updatedAt: "2026-09-08T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Tuesday, September 8, 2026",
    lede: "You could be feeling a bit antsy today and may want to spend time exercising or trying a new sport or game that you've never played before.",
    body: [
      "You could be feeling a bit antsy today and may want to spend time exercising or trying a new sport or game that you've never played before. This is great. Ask some friends to join you, if possible. Don't push yourself past your limits. This can only bring exhaustion or injury, and it won't help your fitness level. Exercise within your limitations and do it more often.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-08T07:00:00-07:00",
    updatedAt: "2026-09-08T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Tuesday, September 8, 2026",
    lede: "An exciting communication could inform you of an advancement opportunity that you should explore.",
    body: [
      "An exciting communication could inform you of an advancement opportunity that you should explore. While you'd be quick to act under normal circumstances, Gemini, today you might be more cautious. You've sought recognition for a while, so don't be too reticent. Don't let your insecurity get the better of you. Learn all you can about the situation and then make an informed decision.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-08T07:00:00-07:00",
    updatedAt: "2026-09-08T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Tuesday, September 8, 2026",
    lede: "A friend could ask for a loan and you might hesitate to give him or her the money.",
    body: [
      "A friend could ask for a loan and you might hesitate to give him or her the money. Follow your instincts. The person probably isn't too savvy about money. You might want to participate in some group activities, but don't let people take unfair advantage of you. You're willing to serve those who need you but discriminate between those who do and don't really need your help.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-08T07:00:00-07:00",
    updatedAt: "2026-09-08T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Tuesday, September 8, 2026",
    lede: "Today you're likely to experience a powerful burst of energy that may temporarily turn you into a workaholic.",
    body: [
      "Today you're likely to experience a powerful burst of energy that may temporarily turn you into a workaholic. Chores may have piled up around the house that desperately need to be done. You may want to go through them like wildfire. You don't have to do them all at once. Take care of the most pressing tasks and then relax. The rest can wait. Ask family members to help.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-08T07:00:00-07:00",
    updatedAt: "2026-09-08T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Tuesday, September 8, 2026",
    lede: "Frustration may be the word for today, Virgo.",
    body: [
      "Frustration may be the word for today, Virgo. You could be experiencing a bit of wanderlust. Distant states and foreign lands may beckon to you, but circumstances could make it hard for you to get away. There might also be friction with your partner. Don't get sucked into a quarrel. Use your placid nature to get grounded, then use your practicality to solve the issues at hand.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-08T07:00:00-07:00",
    updatedAt: "2026-09-08T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Tuesday, September 8, 2026",
    lede: "You've probably had a busy week, Libra, and may feel out of sorts today.",
    body: [
      "You've probably had a busy week, Libra, and may feel out of sorts today. Perhaps you had too much good food last night, stayed up too late, or both. It goes against your grain to stay in and rest, but this is the perfect day to curl up with a good book. You're going to want some exercise, but don't overdo it. As you well know, you can get too much of a good thing!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-08T07:00:00-07:00",
    updatedAt: "2026-09-08T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Tuesday, September 8, 2026",
    lede: "There might be a lot of work to do at home today.",
    body: [
      "There might be a lot of work to do at home today. Since certain family members are conveniently absent, you may feel that the burden falls on you. Don't be a martyr, however. Just do what you can and leave the rest. Uncertainties about money could also be on your mind but put these aside for now. You'll be better able to deal with them tomorrow.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-08T07:00:00-07:00",
    updatedAt: "2026-09-08T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Tuesday, September 8, 2026",
    lede: "Too much indulging may leave you with a headache or stomachache to the point where you may want to spend most of today sleeping.",
    body: [
      "Too much indulging may leave you with a headache or stomachache to the point where you may want to spend most of today sleeping. The stress of this condition could cause you to snap at family members but remember that they weren't the ones who chose to overindulge. Chill out, get some rest, and regain your strength. You'll be back in the real world soon enough.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-08T07:00:00-07:00",
    updatedAt: "2026-09-08T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Tuesday, September 8, 2026",
    lede: "You like to be honest with those you care about, but today you're likely to be a bit too honest.",
    body: [
      "You like to be honest with those you care about, but today you're likely to be a bit too honest. Don't be too quick to take offense and watch the tendency to be too blunt. If you temper your honesty with some diplomacy, you should get your message across with a minimum of hurt feelings. You create win/win situations that way. It's best for all involved.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-08T07:00:00-07:00",
    updatedAt: "2026-09-08T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Tuesday, September 8, 2026",
    lede: "It might feel like your home has turned into Grand Central Station.",
    body: [
      "It might feel like your home has turned into Grand Central Station. Lots of family members present, deliveries made and phones ringing, and you may just want to watch TV or read a book. This could lead to some understandable irritation. However, be your usual polite self. If possible, get a family member to screen your callers. You might be frustrated, but you don't want to offend anybody.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-08T07:00:00-07:00",
    updatedAt: "2026-09-08T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Tuesday, September 8, 2026",
    lede: "You might have to do a lot of running around when you probably want to stay home.",
    body: [
      "You might have to do a lot of running around when you probably want to stay home. Obligations to friends and family are likely to come up, and even though you're a bit tired you'll want to help out. The best plan for today is to get everything done as quickly as possible and then spend the rest of the day relaxing alone. You can have it both ways!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-08T07:00:00-07:00",
    updatedAt: "2026-09-08T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
