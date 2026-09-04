import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Friday, September 4, 2026",
    lede: "You're spiritually inclined, Aries, and today you could feel especially so.",
    body: [
      "You're spiritually inclined, Aries, and today you could feel especially so. You might be attracted to online meditation groups or the study of the texts of various religions. You're also likely to feel especially psychic, and you might experience some premonitions that actually come true. This is a good time to train your psychic abilities or try reading runes or tarot cards.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-04T07:00:00-07:00",
    updatedAt: "2026-09-04T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Friday, September 4, 2026",
    lede: "If you happen to be thinking about a particular friend today, Taurus, don't be surprised if you hear from him or her.",
    body: [
      "If you happen to be thinking about a particular friend today, Taurus, don't be surprised if you hear from him or her. You're especially attuned to telepathic messages, and you may send out a few. While you usually enjoy solitude, you might be more interested in communicating with others today. Don't fight the urge. Go for it. You could talk to some interesting new people who become your friends for life.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-04T07:00:00-07:00",
    updatedAt: "2026-09-04T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Friday, September 4, 2026",
    lede: "Sudden and unexpected changes could have you feeling a bit confused, disoriented, and doubtful about the future, Gemini.",
    body: [
      "Sudden and unexpected changes could have you feeling a bit confused, disoriented, and doubtful about the future, Gemini. Relax! The changes may be not only beneficial for your career but also for your finances. Don't think those in authority haven't noticed your skills and ingenuity. In fact, you may receive some sincere compliments and gratitude.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-04T07:00:00-07:00",
    updatedAt: "2026-09-04T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Friday, September 4, 2026",
    lede: "You should wake up feeling hopeful and optimistic about the future, Cancer.",
    body: [
      "You should wake up feeling hopeful and optimistic about the future, Cancer. Your self-confidence is stronger than usual, and your enthusiasm is contagious. Success in joint efforts should have you glowing with satisfaction. You could even receive public acknowledgment of your efforts. Today bodes well for relationships of all kinds, particularly romantic ones. Celebrate your good fortune with a lover tonight!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-04T07:00:00-07:00",
    updatedAt: "2026-09-04T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Friday, September 4, 2026",
    lede: "Today, Leo, you might turn to practices like meditation or psychic development.",
    body: [
      "Today, Leo, you might turn to practices like meditation or psychic development. Some vivid dreams over the past few days may have brought up personal issues that you need to clear up in order to progress. You may pick up on the thoughts and feelings of others more strongly than usual. If you've been thinking about learning to read tarot cards or runes, this is the day to start.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-04T07:00:00-07:00",
    updatedAt: "2026-09-04T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Friday, September 4, 2026",
    lede: "A new romance may be in store today, Virgo, perhaps with someone you've known for a long time, but you suddenly view in a new light.",
    body: [
      "A new romance may be in store today, Virgo, perhaps with someone you've known for a long time, but you suddenly view in a new light. You could see a side of this person that you've never seen before, totally changing your perception of him or her. Any new relationship formed today shows a lot of promise of developing into a lifelong connection. The bonds involved will run deep.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-04T07:00:00-07:00",
    updatedAt: "2026-09-04T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Friday, September 4, 2026",
    lede: "You could be in a fanciful mood all day, Libra, so you may not be too focused on this world.",
    body: [
      "You could be in a fanciful mood all day, Libra, so you may not be too focused on this world. This is great for artistic or metaphysical studies, as well as being sensitive to others. Beware of a tendency to daydream when you should pay attention! You might want to break out of the mundane world and follow your dreams, but this isn't the day to do it. It's a good day to plan.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-04T07:00:00-07:00",
    updatedAt: "2026-09-04T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Friday, September 4, 2026",
    lede: "You're intuitive by nature, Scorpio, and today you could almost be clairvoyant.",
    body: [
      "You're intuitive by nature, Scorpio, and today you could almost be clairvoyant. Obey your instincts today. Don't let your rational mind get in the way. This isn't the day to be logical! You can sense the needs of others, so you could earn some gratitude by giving them what they need without being asked. Romantic relationships should be warm, loving, and intimate.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-04T07:00:00-07:00",
    updatedAt: "2026-09-04T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Friday, September 4, 2026",
    lede: "Creative inspiration could come from either your own past or from history, Sagittarius.",
    body: [
      "Creative inspiration could come from either your own past or from history, Sagittarius. You might want to try painting, music, or poetry, but today it's more likely that you'll turn that inspiration toward your home. If you're planning to refurnish or redecorate, this is the day to start. Your taste and aesthetic sense are operating at a high level.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-04T07:00:00-07:00",
    updatedAt: "2026-09-04T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Friday, September 4, 2026",
    lede: "Capricorn, a long-awaited letter or call could come from a love partner or beloved friend, bringing much happiness into your life.",
    body: [
      "Capricorn, a long-awaited letter or call could come from a love partner or beloved friend, bringing much happiness into your life. Don't be surprised if the person needs a shoulder to cry on. You could experience some powerful psychic insights today, and this might be a bit frightening. Don't let that get in the way of seeing these revelations objectively. They could be important.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-04T07:00:00-07:00",
    updatedAt: "2026-09-04T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Friday, September 4, 2026",
    lede: "Projects that you've worked on in the past may finally bear fruit today, Aquarius.",
    body: [
      "Projects that you've worked on in the past may finally bear fruit today, Aquarius. Financial benefits and career advancement are strongly indicated, and you be basking in the glow of success. Don't bask too long, however. This is only the beginning! You're on a roll. Throw yourself into new projects you enjoy and you're likely to continue in this fortuitous manner for a while.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-04T07:00:00-07:00",
    updatedAt: "2026-09-04T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Friday, September 4, 2026",
    lede: "Today your desire for sex and romance is going to receive a powerful surge, Pisces.",
    body: [
      "Today your desire for sex and romance is going to receive a powerful surge, Pisces. Perhaps memories of past partners will come back to haunt you, or maybe a current love interest will look especially sexy now. You're likely to be projecting glamour and sensuality, so don't be surprised if strangers notice you. Plan a romantic encounter for tonight, and dress for the occasion.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-04T07:00:00-07:00",
    updatedAt: "2026-09-04T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
