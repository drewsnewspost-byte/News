import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Aug. 30, 2026 daily from horoscope.com.",
    lede: "If work is beginning to feel more like a burden than a joy, it may be time to rethink your job, Aries. Your personality is such that you need lots of room to stretch and grow. If you feel stifled, you know it's time to find a new professional challenge. You're fortunate that your skill set affords you many opportunities. Choose carefully!",
    body: [
      "If work is beginning to feel more like a burden than a joy, it may be time to rethink your job, Aries. Your personality is such that you need lots of room to stretch and grow. If you feel stifled, you know it's time to find a new professional challenge. You're fortunate that your skill set affords you many opportunities. Choose carefully!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=1",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-30T07:00:00-07:00",
    updatedAt: "2026-08-30T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Aug. 30, 2026 daily from horoscope.com.",
    lede: "You're especially in tune with the environment and the people around you today, Taurus. Such sensitivity is new to you, and you aren't exactly sure what to do with the myriad messages that come into your head, seemingly out of nowhere. Even though this is outside your usual experience, try to accept rather than analyze.",
    body: [
      "You're especially in tune with the environment and the people around you today, Taurus. Such sensitivity is new to you, and you aren't exactly sure what to do with the myriad messages that come into your head, seemingly out of nowhere. Even though this is outside your usual experience, try to accept rather than analyze.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=2",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-30T07:00:00-07:00",
    updatedAt: "2026-08-30T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Aug. 30, 2026 daily from horoscope.com.",
    lede: "You're drawn to public service, Gemini. This desire propels you to volunteer your services with a group of some kind. You may feel a bit awkward at first, but your natural leadership abilities will soon kick in. The group will be left wondering how they ever managed without you. Your talent shines through once again. Well done!",
    body: [
      "You're drawn to public service, Gemini. This desire propels you to volunteer your services with a group of some kind. You may feel a bit awkward at first, but your natural leadership abilities will soon kick in. The group will be left wondering how they ever managed without you. Your talent shines through once again. Well done!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=3",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-30T07:00:00-07:00",
    updatedAt: "2026-08-30T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Aug. 30, 2026 daily from horoscope.com.",
    lede: "Don't take everything at face value today, Cancer. Information you receive might not be accurate. Someone could be repeating gossip or even creating it just to have something to talk about. Don't take part in the discussion. Since your workload is likely heavy, forego the socializing in favor of finishing the tasks in front of you.",
    body: [
      "Don't take everything at face value today, Cancer. Information you receive might not be accurate. Someone could be repeating gossip or even creating it just to have something to talk about. Don't take part in the discussion. Since your workload is likely heavy, forego the socializing in favor of finishing the tasks in front of you.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=4",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-30T07:00:00-07:00",
    updatedAt: "2026-08-30T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Aug. 30, 2026 daily from horoscope.com.",
    lede: "You may be feeling a bit on edge today, Leo. Your self-confidence is shaky and you may feel in need of new challenges. The tedious tasks you have in front of you don't inspire your imagination or creativity. Do what you can to get through this difficult day. Be extra kind to yourself by indulging in a good lunch or listening to classical music.",
    body: [
      "You may be feeling a bit on edge today, Leo. Your self-confidence is shaky and you may feel in need of new challenges. The tedious tasks you have in front of you don't inspire your imagination or creativity. Do what you can to get through this difficult day. Be extra kind to yourself by indulging in a good lunch or listening to classical music.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=5",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-30T07:00:00-07:00",
    updatedAt: "2026-08-30T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Aug. 30, 2026 daily from horoscope.com.",
    lede: "You and your mate may be experiencing some differences of opinion. It seems you each have definite ideas about some of life's fundamental values and they aren't completely in sync. Make an extra effort to communicate, Virgo. You may find that your values aren't as far apart as they first seemed. This rift between you will soon close. Hang in there.",
    body: [
      "You and your mate may be experiencing some differences of opinion. It seems you each have definite ideas about some of life's fundamental values and they aren't completely in sync. Make an extra effort to communicate, Virgo. You may find that your values aren't as far apart as they first seemed. This rift between you will soon close. Hang in there.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=6",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-30T07:00:00-07:00",
    updatedAt: "2026-08-30T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Aug. 30, 2026 daily from horoscope.com.",
    lede: "It isn't exactly all lightness and harmony at home today, Libra. There's tension in the air and it manifests in silly family arguments. Try to arrange separate activities for siblings, and encourage your partner to eat out with friends, if possible. This is a day to give everyone his or her space. Tomorrow everyone will be happy to eat together again.",
    body: [
      "It isn't exactly all lightness and harmony at home today, Libra. There's tension in the air and it manifests in silly family arguments. Try to arrange separate activities for siblings, and encourage your partner to eat out with friends, if possible. This is a day to give everyone his or her space. Tomorrow everyone will be happy to eat together again.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=7",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-30T07:00:00-07:00",
    updatedAt: "2026-08-30T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Aug. 30, 2026 daily from horoscope.com.",
    lede: "This could be a particularly stressful day, Scorpio. Your workload is heavier than ever, thanks to the increased responsibility you've taken on. The day seems endless, yet there aren't enough hours to get done all that needs doing. Take care not to take your anxiety out on others. If you're nice to them, they may even help you finish your project!",
    body: [
      "This could be a particularly stressful day, Scorpio. Your workload is heavier than ever, thanks to the increased responsibility you've taken on. The day seems endless, yet there aren't enough hours to get done all that needs doing. Take care not to take your anxiety out on others. If you're nice to them, they may even help you finish your project!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=8",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-30T07:00:00-07:00",
    updatedAt: "2026-08-30T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Aug. 30, 2026 daily from horoscope.com.",
    lede: "Your self-confidence may be a bit low and you could doubt your abilities right now, Sagittarius. Don't get depressed or disheartened. Your skills are excellent. Try to look at your situation objectively and pinpoint why you aren't progressing in your career as rapidly as you'd hoped. You may be worried about money but know that everything will work out in the end.",
    body: [
      "Your self-confidence may be a bit low and you could doubt your abilities right now, Sagittarius. Don't get depressed or disheartened. Your skills are excellent. Try to look at your situation objectively and pinpoint why you aren't progressing in your career as rapidly as you'd hoped. You may be worried about money but know that everything will work out in the end.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=9",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-30T07:00:00-07:00",
    updatedAt: "2026-08-30T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Aug. 30, 2026 daily from horoscope.com.",
    lede: "Today you may feel bored and frustrated with your life's direction, Capricorn. You feel buried under responsibilities, with no time left to do what you really want to do. You have other interests to pursue but no time to pursue them. It's frustrating. You might want to rethink your priorities. If you're creative about time management, you'll be able to find some time.",
    body: [
      "Today you may feel bored and frustrated with your life's direction, Capricorn. You feel buried under responsibilities, with no time left to do what you really want to do. You have other interests to pursue but no time to pursue them. It's frustrating. You might want to rethink your priorities. If you're creative about time management, you'll be able to find some time.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=10",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-30T07:00:00-07:00",
    updatedAt: "2026-08-30T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Aug. 30, 2026 daily from horoscope.com.",
    lede: "You're less optimistic and energetic than usual, Aquarius. Your mind feels sluggish - your whole body does, in fact. You're either coming down with the flu or completely and thoroughly disheartened. This would be a good day to take some time off. Issues from the past may come back to haunt you. Perhaps you should address them once and for all.",
    body: [
      "You're less optimistic and energetic than usual, Aquarius. Your mind feels sluggish - your whole body does, in fact. You're either coming down with the flu or completely and thoroughly disheartened. This would be a good day to take some time off. Issues from the past may come back to haunt you. Perhaps you should address them once and for all.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=11",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-30T07:00:00-07:00",
    updatedAt: "2026-08-30T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Aug. 30, 2026 daily from horoscope.com.",
    lede: "You may be discouraged about money matters today, Pisces. Perhaps a raise you'd been hoping for didn't come through. Perhaps a professional project didn't work out as you expected. Now is the time to put your ingenuity to work and figure out a way to earn the money you need. Trust that you have the necessary know-how. A good opportunity awaits you.",
    body: [
      "You may be discouraged about money matters today, Pisces. Perhaps a raise you'd been hoping for didn't come through. Perhaps a professional project didn't work out as you expected. Now is the time to put your ingenuity to work and figure out a way to earn the money you need. Trust that you have the necessary know-how. A good opportunity awaits you.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=12",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-30T07:00:00-07:00",
    updatedAt: "2026-08-30T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
