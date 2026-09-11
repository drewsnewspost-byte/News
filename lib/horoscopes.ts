import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Friday, September 11, 2026",
    lede: "Today you might have a strange feeling that something is wrong, perhaps in the neighborhood or with a friend or relative.",
    body: [
      "Today you might have a strange feeling that something is wrong, perhaps in the neighborhood or with a friend or relative. This is probably going to bother you all day, Aries, so it might be a good idea to call this person or otherwise look into the matter. There's probably nothing really wrong, but someone close to you may have just experienced a shock of some kind.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-11T07:00:00-07:00",
    updatedAt: "2026-09-11T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Friday, September 11, 2026",
    lede: "An organization with which you're affiliated may be having financial problems, and this fact could come out today.",
    body: [
      "An organization with which you're affiliated may be having financial problems, and this fact could come out today. It might be a shock to you and everyone else involved, Taurus, but it's good that it's coming out now. This revelation might have a profound effect on your goals, and may necessitate some reevaluation. Some intense discussion with those around you is definitely indicated.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-11T07:00:00-07:00",
    updatedAt: "2026-09-11T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Friday, September 11, 2026",
    lede: "Some unexpected changes that have been kept under wraps at the workplace could come out soon.",
    body: [
      "Some unexpected changes that have been kept under wraps at the workplace could come out soon. They may involve reorganization or a change of ownership. This is going profoundly affect your attitude toward your job. It could cause you to consider making a change of your own. This isn't the time to make a decision. Take a few days to consider your options before making up your mind.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-11T07:00:00-07:00",
    updatedAt: "2026-09-11T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Friday, September 11, 2026",
    lede: "Some disconcerting revelations about your past or the past of someone close to you could come out today.",
    body: [
      "Some disconcerting revelations about your past or the past of someone close to you could come out today. This might be a bit of a shock, Cancer, but it's a positive development, nonetheless. It will shed some light on how to deal with current issues in your life or a relationship. Write down your thoughts, meditate, talk to a friend, or otherwise try to make sense of it.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-11T07:00:00-07:00",
    updatedAt: "2026-09-11T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Friday, September 11, 2026",
    lede: "Something you might have wanted to keep between you and a few trusted friends could inadvertently be revealed, perhaps to the wrong people.",
    body: [
      "Something you might have wanted to keep between you and a few trusted friends could inadvertently be revealed, perhaps to the wrong people. Frustration and a sense of betrayal could plague you, but don't turn against those who knew. Even though this can be disconcerting, you can learn from it. Benjamin Franklin said, \"Two people can keep a secret only when one of them is dead.\"",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-11T07:00:00-07:00",
    updatedAt: "2026-09-11T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Friday, September 11, 2026",
    lede: "Demands placed on you by work colleagues could have you stressed, Virgo.",
    body: [
      "Demands placed on you by work colleagues could have you stressed, Virgo. You might feel that your co-workers are taking unfair advantage of you. This could start you thinking of perhaps going into business for yourself or with a partner. This could well be a great idea, but today isn't the day to make a decision this monumental. Wait a few days and give it some serious thought.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-11T07:00:00-07:00",
    updatedAt: "2026-09-11T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Friday, September 11, 2026",
    lede: "Stress and job frustration might have you thinking about breaking free, walking out the door, and going somewhere else.",
    body: [
      "Stress and job frustration might have you thinking about breaking free, walking out the door, and going somewhere else. Another thought is likely to concern going back to school and training for a career in another field. You might need a vacation, and returning to school could be a great idea in the future, but don't decide today. Wait a few days at least.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-11T07:00:00-07:00",
    updatedAt: "2026-09-11T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Friday, September 11, 2026",
    lede: "A close friend or loved one might drop out of sight today.",
    body: [
      "A close friend or loved one might drop out of sight today. You may panic when he or she doesn't return your phone calls. Don't jump to conclusions. They're preoccupied with matters that for the moment appear important and will contact you in time. When you do finally connect, you could hear some interesting news. Relax, go about your business, and look forward to the call.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-11T07:00:00-07:00",
    updatedAt: "2026-09-11T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Friday, September 11, 2026",
    lede: "A household member might toy with the idea of moving out or going away for a while, Sagittarius.",
    body: [
      "A household member might toy with the idea of moving out or going away for a while, Sagittarius. This could stress you out, but don't make yourself crazy. Don't try to talk him or her out of it. Listen sympathetically and let your relative get it out of their system. This person is probably feeling temporarily restricted by forces outside the home and isn't really likely to go anywhere.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-11T07:00:00-07:00",
    updatedAt: "2026-09-11T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Friday, September 11, 2026",
    lede: "Stress could have you feeling uncommunicative today.",
    body: [
      "Stress could have you feeling uncommunicative today. You probably aren't going to want to talk to anyone, even your dearest friend, Capricorn. This might prove difficult, as people around you are going to ask for advice and help. Keep your cool. This feeling will pass, and you won't want anyone to think you're upset. Go to lunch alone, and tonight crash into bed with a good book.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-11T07:00:00-07:00",
    updatedAt: "2026-09-11T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Friday, September 11, 2026",
    lede: "Finances should be going well, Aquarius, but your financial affairs aren't something you want to talk about to anyone now.",
    body: [
      "Finances should be going well, Aquarius, but your financial affairs aren't something you want to talk about to anyone now. Perhaps you want to make a decision that's yours and not influenced by others. Nonetheless, a close friend or lover is going to find out. Maybe they'll guess or maybe you'll let it slip. Don't panic. This person understands you and won't try to exert undue influence.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-11T07:00:00-07:00",
    updatedAt: "2026-09-11T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Friday, September 11, 2026",
    lede: "You're likely to be in a solitary mood today, Pisces, and probably want to spend the evening reading or working on a project of your own.",
    body: [
      "You're likely to be in a solitary mood today, Pisces, and probably want to spend the evening reading or working on a project of your own. However, it isn't likely to work out that way. Family could drop by or some equipment could go on the blink and require repairs. Some unexpected calls could come your way. Take a deep breath and summon your good manners. You can be alone tomorrow.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-11T07:00:00-07:00",
    updatedAt: "2026-09-11T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
