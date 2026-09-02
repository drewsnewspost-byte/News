import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Wednesday, September 2, 2026",
    lede: "Valuable and interesting information could come your way through modern technology.",
    body: [
      "Valuable and interesting information could come your way through modern technology. You might discover new information online that awakens an exciting new interest in you, perhaps related to the sciences, occult, or metaphysics. You could even discover a talent for astrology. Online group activities may also be appealing now, particularly those regarding humanitarian pursuits.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-02T07:00:00-07:00",
    updatedAt: "2026-09-02T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Wednesday, September 2, 2026",
    lede: "Finances could take on a new dimension as you look to technology to help you increase your bank balance.",
    body: [
      "Finances could take on a new dimension as you look to technology to help you increase your bank balance. You could decide to invest online or try some new means of recordkeeping. Whatever you try will bode well for your financial future. Expect a lucky break or two as well.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-02T07:00:00-07:00",
    updatedAt: "2026-09-02T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Wednesday, September 2, 2026",
    lede: "Bizarre, unexpected developments might turn your life upside down today, Gemini.",
    body: [
      "Bizarre, unexpected developments might turn your life upside down today, Gemini. Money could be involved. New people could arrive who open doors that eventually lead to a new life. You could even fall in love at first sight. It isn't easy to make predictions for a strange day like this. Rest assured that when you go to bed you won't be the same person you were when you woke up.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-02T07:00:00-07:00",
    updatedAt: "2026-09-02T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Wednesday, September 2, 2026",
    lede: "Today you might be fascinated with movies, music, and video.",
    body: [
      "Today you might be fascinated with movies, music, and video. You could discover a new interest in filmmaking, sound engineering, or videography that you want to pursue. You might decide to read about these fields and apply what you learn to the movies you see and the music you hear. If you're serious about learning these skills, this is the time to go for it. You'll enjoy it!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-02T07:00:00-07:00",
    updatedAt: "2026-09-02T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Wednesday, September 2, 2026",
    lede: "You could have a strong urge to seek adventure, Leo.",
    body: [
      "You could have a strong urge to seek adventure, Leo. You might want to take a spontaneous trip to an exotic place, meet new people in exciting fields, or try new pastimes, perhaps as outrageous as skydiving. Go for it if you are able, but this urge could indicate boredom in some part of your life. What can you change about your lifestyle to avoid future stagnation?",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-02T07:00:00-07:00",
    updatedAt: "2026-09-02T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Wednesday, September 2, 2026",
    lede: "An unexpected career break could come your way, Virgo.",
    body: [
      "An unexpected career break could come your way, Virgo. It should be exciting and encouraging - and a little scary! Don't let apprehension get to you. You won't want to let this opportunity pass you by. Your good fortune could arouse envy in some of your co-workers, but don't let this bother you either. Simply do what you need to do to get the ball rolling and then go ahead with it.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-02T07:00:00-07:00",
    updatedAt: "2026-09-02T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Wednesday, September 2, 2026",
    lede: "A trip by air may be in your future, Libra.",
    body: [
      "A trip by air may be in your future, Libra. You may be planning to tour distant states or foreign lands when that’s possible. You could be going with friends or a group you're associated with. Unusual new interests could capture your attention, enticing you to further study. You might enroll in an online workshop. You're looking toward expanding your horizons. Take care not to spread yourself too thin.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-02T07:00:00-07:00",
    updatedAt: "2026-09-02T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Wednesday, September 2, 2026",
    lede: "Unusual experiences may give rise to a new interest in the sciences or occult practices like magic or alchemy.",
    body: [
      "Unusual experiences may give rise to a new interest in the sciences or occult practices like magic or alchemy. This is an excellent time to start perusing such subjects, Scorpio, or embark on a formal study of astrology. A lucky money break could come your way today. It might be a gift or a repaid loan. Your inclination might be to go out and spend it all. Take care!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-02T07:00:00-07:00",
    updatedAt: "2026-09-02T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Wednesday, September 2, 2026",
    lede: "Upsets in the home or neighborhood could lead to a sudden decision to move, causing a great deal of activity.",
    body: [
      "Upsets in the home or neighborhood could lead to a sudden decision to move, causing a great deal of activity. You might not yet be sure where you're going. Organization and discipline are vital at times like this, Sagittarius. It might be helpful to make lists and cross off each task as you finish it. Don't panic. This could turn out to be the best thing that ever happened to you.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-02T07:00:00-07:00",
    updatedAt: "2026-09-02T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Wednesday, September 2, 2026",
    lede: "You could get upsetting news regarding your job, Capricorn.",
    body: [
      "You could get upsetting news regarding your job, Capricorn. There could be a shakeup in the hierarchy or someone in a position of authority could abruptly leave. You and your co-workers could have some momentary fears about job security, but they're probably unwarranted. Your security will survive these events, and you'll probably be better off than you were before.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-02T07:00:00-07:00",
    updatedAt: "2026-09-02T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Wednesday, September 2, 2026",
    lede: "Expect to fall in love at first sight today, Aquarius.",
    body: [
      "Expect to fall in love at first sight today, Aquarius. Someone new will come on the scene and you'll feel an instant attraction. Whether it turns into anything lasting or not isn't certain, but whatever happens, you'll remember this person for a long time! You may also have a sudden interest in new forms of artistic expression and want to start learning videography or computer graphics.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-02T07:00:00-07:00",
    updatedAt: "2026-09-02T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Wednesday, September 2, 2026",
    lede: "The wonders of technology may come to your home today, Pisces.",
    body: [
      "The wonders of technology may come to your home today, Pisces. You might purchase some new equipment like a computer or phone, or decide to go for a state-of-the-art home entertainment center. Whichever it is, expect a lot of activity in and around your home as family members learn how to use your new toys. It will be exciting for everyone!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-02T07:00:00-07:00",
    updatedAt: "2026-09-02T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
