import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Friday, September 18, 2026",
    lede: "You have lots of energy at your disposal today, Aries, but it's erratic and powerful.",
    body: [
      "You have lots of energy at your disposal today, Aries, but it's erratic and powerful. You have the stamina to make major changes, and the opportunity to break free from any restrictions that hold you back. Embrace the new, fresh aspects of your life that ring true to your freedom-loving nature. Give your soul room to breathe as you take a long walk in nature this afternoon.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-18T07:00:00-07:00",
    updatedAt: "2026-09-18T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Friday, September 18, 2026",
    lede: "It's time to take a bold step forward, Taurus.",
    body: [
      "It's time to take a bold step forward, Taurus. Have confidence in yourself and all the careful planning you've been painstakingly doing for the past few months. Realize that much of this hard work is paying off, but only if you're willing to take the next step. The opportunity is there. All you need to do is jump on it. Act out of faith and confidence instead of fear and restriction.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-18T07:00:00-07:00",
    updatedAt: "2026-09-18T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Friday, September 18, 2026",
    lede: "You can't ask for a better day, Gemini.",
    body: [
      "You can't ask for a better day, Gemini. Positive energy is coming your way. You should look for the opportunities that are right in front of you. You may be going through some significant upheaval right now. Clear away all the things that have limited you in the past. The future is wide open. Empower yourself to make the changes necessary to build your life way you want it to be.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-18T07:00:00-07:00",
    updatedAt: "2026-09-18T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Friday, September 18, 2026",
    lede: "Be on your toes today, Cancer, and expect the unexpected.",
    body: [
      "Be on your toes today, Cancer, and expect the unexpected. People may be acting out in rash, outlandish ways, so go with the flow. As usual, you have a tremendous ability to roll with the punches and still come out unscathed. Just take care that someone else isn't grabbing the reins. Stay laid-back while maintaining control of your actions.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-18T07:00:00-07:00",
    updatedAt: "2026-09-18T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Friday, September 18, 2026",
    lede: "If you've put in your time and done your homework, this day can prove very rewarding, Leo.",
    body: [
      "If you've put in your time and done your homework, this day can prove very rewarding, Leo. Watch out for incredible opportunities hiding nearby. You have a great deal of physical energy today, although you may find it erratic and a bit out of control. Break free of anything that seems to be binding you. Shed the chains and live the way you want to live.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-18T07:00:00-07:00",
    updatedAt: "2026-09-18T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Friday, September 18, 2026",
    lede: "You may find people very stubborn today, so take care, Virgo.",
    body: [
      "You may find people very stubborn today, so take care, Virgo. Arguments can explode out of nowhere, so have your helmet ready. Think before you act and don't feel pressured to get involved in something that makes you feel uncomfortable. Remember that it's OK to just walk away. No one will win the boxing match, so don't even get in the ring.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-18T07:00:00-07:00",
    updatedAt: "2026-09-18T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Friday, September 18, 2026",
    lede: "Initiate a major change in your life, Libra.",
    body: [
      "Initiate a major change in your life, Libra. Break free of the humdrum and launch into something exciting. Take part in an online class that expands your mind. Consider yoga, tarot, or any form of martial arts. You have a tremendous amount of energy today. It will help you maintain confidence and endurance as you do the groundwork to put this new life-enhancing endeavor in motion.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-18T07:00:00-07:00",
    updatedAt: "2026-09-18T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Friday, September 18, 2026",
    lede: "Action is the word of the day.",
    body: [
      "Action is the word of the day. Whether you're initiating it or feeling the brunt of it, you'll be caught up in the vortex of it. Try not to lose your tempter today, Scorpio, and don't be surprised if people act rashly and insensitively. Perhaps this is their way of saying they need you and that your energy and input are important. Have confidence in your words.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-18T07:00:00-07:00",
    updatedAt: "2026-09-18T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Friday, September 18, 2026",
    lede: "Today may be filled with sudden changes and unexpected events, Sagittarius.",
    body: [
      "Today may be filled with sudden changes and unexpected events, Sagittarius. The energy is electric and strong. People will act in erratic, powerful bursts. Try to stay centered and maintain your focus. Keep in mind that if you need to break free from certain limitations, now is the time to make that move. Have confidence in your actions and make it happen.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-18T07:00:00-07:00",
    updatedAt: "2026-09-18T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Friday, September 18, 2026",
    lede: "You might not get the things done that you want to do today, Capricorn, but don't sweat it.",
    body: [
      "You might not get the things done that you want to do today, Capricorn, but don't sweat it. Go easy on yourself if you still have a few unchecked things on the list tonight. People may pop out of nowhere and demand your attention for much of the time. Listen, be present, and try not to think of the things that aren't getting done. Focus on those things that are getting done.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-18T07:00:00-07:00",
    updatedAt: "2026-09-18T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Friday, September 18, 2026",
    lede: "Today is a fantastic day, Aquarius, so make the most of it.",
    body: [
      "Today is a fantastic day, Aquarius, so make the most of it. If you're emotionally and mentally prepared to go on a new, exciting life journey, the opportunity will present itself. The energy will be fast and furious. You can work harmoniously with electrical gadgets and new technologies. Break free of the mundane and seek less conventional ways of living.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-18T07:00:00-07:00",
    updatedAt: "2026-09-18T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Friday, September 18, 2026",
    lede: "You'll be tested today, Pisces, so brace yourself for the unexpected.",
    body: [
      "You'll be tested today, Pisces, so brace yourself for the unexpected. A large piece of your life is coming into question at this time, and you're being forced to face the music. Is this something that really rings true with your inner being? If it is, you should be able to deal with this challenge. If you're struggling, perhaps you should take this as a sign that you need a major life change.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-09-18T07:00:00-07:00",
    updatedAt: "2026-09-18T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}

