import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Tuesday, September 1, 2026",
    lede: "Money that you've been earning for a long time may finally come your way today, Aries, but don't be surprised if you have to do a lot of running around in order to get it.",
    body: [
      "Money that you've been earning for a long time may finally come your way today, Aries, but don't be surprised if you have to do a lot of running around in order to get it. Plans for future moneymaking projects could come up, although it's important to consider everything carefully and not jump in too quickly. This is an excellent time to learn a new moneymaking skill.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-01T07:00:00-07:00",
    updatedAt: "2026-09-01T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Tuesday, September 1, 2026",
    lede: "The special someone in your life may be having some trouble with colleagues.",
    body: [
      "The special someone in your life may be having some trouble with colleagues. Don't just comfort him or her, Taurus. It's unlikely that your sweetie wants sympathy. Solutions are needed. If you don't have any, just be a good listener. It's important for you to get out and exercise. If the weather is good, take a walk. If not, attend an online exercise class. You'll feel better.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-01T07:00:00-07:00",
    updatedAt: "2026-09-01T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Tuesday, September 1, 2026",
    lede: "Today you're likely to be working hard behind the scenes, perhaps preparing a project for others to make public or coaching people for some kind of virtual performance.",
    body: [
      "Today you're likely to be working hard behind the scenes, perhaps preparing a project for others to make public or coaching people for some kind of virtual performance. You'll expend a lot of energy in the course of completing this chore, yet you'll probably feel it was all worth it. Don't expect to go home early, Gemini. You'll probably go above and beyond the call of duty.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-01T07:00:00-07:00",
    updatedAt: "2026-09-01T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Tuesday, September 1, 2026",
    lede: "Friends could entice you to join them for a short day trip, perhaps to the country.",
    body: [
      "Friends could entice you to join them for a short day trip, perhaps to the country. This is a great day to go on such an outing if it's possible, Cancer. You've probably been working hard and need to get away for a while. Don't be surprised if there's a delay, however. You or one of your friends could be waiting to talk with someone.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-01T07:00:00-07:00",
    updatedAt: "2026-09-01T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Tuesday, September 1, 2026",
    lede: "Emotions could be intense at work today as important projects approach their deadlines, Leo.",
    body: [
      "Emotions could be intense at work today as important projects approach their deadlines, Leo. You may put in more time than usual. Tempers might flare and co-workers clash, so stay calm and keep going. On the positive side, the financial and recognition payoffs for whatever you accomplish today should prove well worth the effort.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-01T07:00:00-07:00",
    updatedAt: "2026-09-01T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Tuesday, September 1, 2026",
    lede: "Today you should feel especially sexy and relationships with romantic partners should go well, Virgo.",
    body: [
      "Today you should feel especially sexy and relationships with romantic partners should go well, Virgo. Your passions are intense, the lines of communication are open, and appreciation of one another is running high. There might be talk of taking a long trip together in the future. Plan a cozy evening for two. You'll want to do a lot of talking - and more!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-01T07:00:00-07:00",
    updatedAt: "2026-09-01T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Tuesday, September 1, 2026",
    lede: "Money is probably on your mind now, Libra.",
    body: [
      "Money is probably on your mind now, Libra. A desire for increased financial security could force you to look for work or investments that would pay off big. Opportunities for one or both of these are likely to come through friends, perhaps someone with whom you've worked before. You're likely to accomplish what you want for now, but it's uncertain whether you'll continue on this path in the future.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-01T07:00:00-07:00",
    updatedAt: "2026-09-01T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Tuesday, September 1, 2026",
    lede: "Don't expect to spend a lot of time at home today, Scorpio.",
    body: [
      "Don't expect to spend a lot of time at home today, Scorpio. You're more likely to be in the car and away from home. There may be errands and other obligations to fulfill. Try to pace yourself in whatever you do or else you might be exhausted by day's end. Take the time to stop and enjoy yourself. This will ensure a fun rather than tiring day.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-01T07:00:00-07:00",
    updatedAt: "2026-09-01T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Tuesday, September 1, 2026",
    lede: "Emotional turmoil on the job could stress you out way too much.",
    body: [
      "Emotional turmoil on the job could stress you out way too much. Headaches or temporary hypertension could plague you if you aren't careful. Don't push too hard. Remember to take breaks, Sagittarius, and go for a walk on your lunch hour. Don't be afraid to put off nonessential tasks. You'll be all right. Why make a day's work any more difficult than it needs to be?",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-01T07:00:00-07:00",
    updatedAt: "2026-09-01T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Tuesday, September 1, 2026",
    lede: "This should be a fortunate day for you, Capricorn.",
    body: [
      "This should be a fortunate day for you, Capricorn. Everything you try to do should go fairly smoothly. Relations with others are warm, friendly, and congenial. Any chores or other pending work should be completed quickly and efficiently. If you've been planning to start a new project, this is the day to get going. Romance should be intense and passionate now, so make the most of it!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-01T07:00:00-07:00",
    updatedAt: "2026-09-01T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Tuesday, September 1, 2026",
    lede: "A couple you've known for a long time could visit you at your home today, Aquarius.",
    body: [
      "A couple you've known for a long time could visit you at your home today, Aquarius. Don't be surprised if they tell you how wonderful the place looks. Conversation should be lively and entertaining, though you should sidestep any discussion of controversial subjects. Debates on such matters could get rather heated. It might be wise to treat your guests to food rather than alcohol!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-01T07:00:00-07:00",
    updatedAt: "2026-09-01T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Tuesday, September 1, 2026",
    lede: "Today, Pisces, you might spend a great deal of time in the car running errands in the neighborhood.",
    body: [
      "Today, Pisces, you might spend a great deal of time in the car running errands in the neighborhood. You're likely to see people you know who have interesting news. New businesses may open nearby. Doctors, dentists, and other professionals could be more accessible than you expect, making your daily routine more convenient. Some of them might be your neighbors or relatives.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-01T07:00:00-07:00",
    updatedAt: "2026-09-01T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
