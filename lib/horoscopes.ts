import { isSign, SIGNS, type SignSlug } from "./site";
import type { DailySign } from "./types";

export const DAILY_SIGNS: Record<SignSlug, DailySign> = {
  aries: {
    sign: "aries",
    headline: "Aries (Mar 21–Apr 19)",
    dek: "Aug. 22, 2026 daily from horoscope.com.",
    lede: "Some new information about an interesting field could have you browsing the web and looking through books to learn more, Aries. This could involve law, philosophy, history, or spirituality. You could find so much that you want to take notes or make a lot of photocopies. Don't tire yourself out and try to keep track of time. You might miss dinner or get to bed very late.",
    body: [
      "Some new information about an interesting field could have you browsing the web and looking through books to learn more, Aries. This could involve law, philosophy, history, or spirituality. You could find so much that you want to take notes or make a lot of photocopies. Don't tire yourself out and try to keep track of time. You might miss dinner or get to bed very late.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-22T07:00:00-07:00",
    updatedAt: "2026-08-22T07:00:00-07:00",
  },
  taurus: {
    sign: "taurus",
    headline: "Taurus (Apr 20–May 20)",
    dek: "Aug. 22, 2026 daily from horoscope.com.",
    lede: "Today you might learn about new and creative ways to increase your income, Taurus, possibly involving technology in some way. So much new information could come your way that you find it hard to keep track of it, so make sure you take note of where you found it so you can consult the source later. Your mind could be going so fast that you need to take a walk to clear your head.",
    body: [
      "Today you might learn about new and creative ways to increase your income, Taurus, possibly involving technology in some way. So much new information could come your way that you find it hard to keep track of it, so make sure you take note of where you found it so you can consult the source later. Your mind could be going so fast that you need to take a walk to clear your head.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-22T07:00:00-07:00",
    updatedAt: "2026-08-22T07:00:00-07:00",
  },
  gemini: {
    sign: "gemini",
    headline: "Gemini (May 21–Jun 20)",
    dek: "Aug. 22, 2026 daily from horoscope.com.",
    lede: "Social events could put you in touch with interesting people in intriguing professions, Gemini. You might get involved in some fascinating conversations that provide you with a lot of useful information. Some of what you hear could be so bizarre that you find it difficult to believe. New friendships or groups could result from this interaction, so get contact information. Enjoy!",
    body: [
      "Social events could put you in touch with interesting people in intriguing professions, Gemini. You might get involved in some fascinating conversations that provide you with a lot of useful information. Some of what you hear could be so bizarre that you find it difficult to believe. New friendships or groups could result from this interaction, so get contact information. Enjoy!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-22T07:00:00-07:00",
    updatedAt: "2026-08-22T07:00:00-07:00",
  },
  cancer: {
    sign: "cancer",
    headline: "Cancer (Jun 21–Jul 22)",
    dek: "Aug. 22, 2026 daily from horoscope.com.",
    lede: "A friend or colleague could recommend some books that you want to read right away, Cancer. Be sure you take breaks and rest your eyes from time to time to avoid eyestrain and headaches today. It's also important to remember to get out and go for a walk, weather permitting. Your body needs stimulation as much as your mind, and a walk will clear your head. Enjoy your day.",
    body: [
      "A friend or colleague could recommend some books that you want to read right away, Cancer. Be sure you take breaks and rest your eyes from time to time to avoid eyestrain and headaches today. It's also important to remember to get out and go for a walk, weather permitting. Your body needs stimulation as much as your mind, and a walk will clear your head. Enjoy your day.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-22T07:00:00-07:00",
    updatedAt: "2026-08-22T07:00:00-07:00",
  },
  leo: {
    sign: "leo",
    headline: "Leo (Jul 23–Aug 22)",
    dek: "Aug. 22, 2026 daily from horoscope.com.",
    lede: "Today your mind will be quick, insightful, and inspired, Leo. Your creative impulses should go a thousand miles an hour and ideas should pop in and out of your head like crazy. Most likely you'll want to drop everything else and write down all your ideas. Make use of this inspiration while you can, as it may come in fits and starts. You could be surprised by what you produce.",
    body: [
      "Today your mind will be quick, insightful, and inspired, Leo. Your creative impulses should go a thousand miles an hour and ideas should pop in and out of your head like crazy. Most likely you'll want to drop everything else and write down all your ideas. Make use of this inspiration while you can, as it may come in fits and starts. You could be surprised by what you produce.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-22T07:00:00-07:00",
    updatedAt: "2026-08-22T07:00:00-07:00",
  },
  virgo: {
    sign: "virgo",
    headline: "Virgo (Aug 23–Sep 22)",
    dek: "Aug. 22, 2026 daily from horoscope.com.",
    lede: "If visitors are able to pop in and out during the day, Virgo, you'll be in the right frame of mind to enjoy their company. Expect interesting news and stimulating conversation. At the end of the day, your mind may be going like a house afire, so it might be a good idea to take a walk or get some other form of exercise or else you might not be able to sleep.",
    body: [
      "If visitors are able to pop in and out during the day, Virgo, you'll be in the right frame of mind to enjoy their company. Expect interesting news and stimulating conversation. At the end of the day, your mind may be going like a house afire, so it might be a good idea to take a walk or get some other form of exercise or else you might not be able to sleep.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-22T07:00:00-07:00",
    updatedAt: "2026-08-22T07:00:00-07:00",
  },
  libra: {
    sign: "libra",
    headline: "Libra (Sep 23–Oct 22)",
    dek: "Aug. 22, 2026 daily from horoscope.com.",
    lede: "Don't be surprised if your inbox fills with email or your phone rings off the hook, Libra. Friends, relatives, and colleagues could have great news and useful information. One or more of these messages could inspire you to send a few of your own or even pay some visits. Most of what you learn should be positive and exciting, although some things may be confusing.",
    body: [
      "Don't be surprised if your inbox fills with email or your phone rings off the hook, Libra. Friends, relatives, and colleagues could have great news and useful information. One or more of these messages could inspire you to send a few of your own or even pay some visits. Most of what you learn should be positive and exciting, although some things may be confusing.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-22T07:00:00-07:00",
    updatedAt: "2026-08-22T07:00:00-07:00",
  },
  scorpio: {
    sign: "scorpio",
    headline: "Scorpio (Oct 23–Nov 21)",
    dek: "Aug. 22, 2026 daily from horoscope.com.",
    lede: "Inspiration is the word for today, Scorpio. Your creative talent should blossom and motivate you to work on wonderful ideas. This could involve music, painting, decorating, or cooking. Relax and have fun with it. Whatever you do, you'll probably be pleased with the results. Feedback from others should be encouraging. Make notes of ideas you don't use today to remember them later.",
    body: [
      "Inspiration is the word for today, Scorpio. Your creative talent should blossom and motivate you to work on wonderful ideas. This could involve music, painting, decorating, or cooking. Relax and have fun with it. Whatever you do, you'll probably be pleased with the results. Feedback from others should be encouraging. Make notes of ideas you don't use today to remember them later.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-22T07:00:00-07:00",
    updatedAt: "2026-08-22T07:00:00-07:00",
  },
  sagittarius: {
    sign: "sagittarius",
    headline: "Sagittarius (Nov 22–Dec 21)",
    dek: "Aug. 22, 2026 daily from horoscope.com.",
    lede: "Today your physical and mental energy should be operating at a very high level, Sagittarius. You probably won't spend much time inside if you can avoid it. Expect get-togethers with friends and colleagues, if possible, and some stimulating, animated discussions. You may want to get in a good workout. This is a great day to enjoy the evening, perhaps watching an online concert, play, or movie. Have a great day.",
    body: [
      "Today your physical and mental energy should be operating at a very high level, Sagittarius. You probably won't spend much time inside if you can avoid it. Expect get-togethers with friends and colleagues, if possible, and some stimulating, animated discussions. You may want to get in a good workout. This is a great day to enjoy the evening, perhaps watching an online concert, play, or movie. Have a great day.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-22T07:00:00-07:00",
    updatedAt: "2026-08-22T07:00:00-07:00",
  },
  capricorn: {
    sign: "capricorn",
    headline: "Capricorn (Dec 22–Jan 19)",
    dek: "Aug. 22, 2026 daily from horoscope.com.",
    lede: "Your intuition is likely to be very keen today, Capricorn. Accurate psychic insights could come to you thick and fast. Your imagination is also strong, and you might come up with ideas to enrich your home, work, or anything else on your mind. Don't be surprised if you seem to know what others will say before they even think of it. Write down any premonitions to verify later.",
    body: [
      "Your intuition is likely to be very keen today, Capricorn. Accurate psychic insights could come to you thick and fast. Your imagination is also strong, and you might come up with ideas to enrich your home, work, or anything else on your mind. Don't be surprised if you seem to know what others will say before they even think of it. Write down any premonitions to verify later.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-22T07:00:00-07:00",
    updatedAt: "2026-08-22T07:00:00-07:00",
  },
  aquarius: {
    sign: "aquarius",
    headline: "Aquarius (Jan 20–Feb 18)",
    dek: "Aug. 22, 2026 daily from horoscope.com.",
    lede: "Get-togethers with friends or meetings with a small group, if possible, should prove informative and enlightening today, Aquarius, although some of it may be a bit perplexing. You may have useful information to share, but you'll probably spend as much time listening as talking. Your friends may have happy news. Don't be surprised if day's end finds you more tightly bonded than before. Enjoy!",
    body: [
      "Get-togethers with friends or meetings with a small group, if possible, should prove informative and enlightening today, Aquarius, although some of it may be a bit perplexing. You may have useful information to share, but you'll probably spend as much time listening as talking. Your friends may have happy news. Don't be surprised if day's end finds you more tightly bonded than before. Enjoy!",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-22T07:00:00-07:00",
    updatedAt: "2026-08-22T07:00:00-07:00",
  },
  pisces: {
    sign: "pisces",
    headline: "Pisces (Feb 19–Mar 20)",
    dek: "Aug. 22, 2026 daily from horoscope.com.",
    lede: "Today things could be rather hectic at work, Pisces. You'll probably be very busy and happy with whatever results you produce. You could tire yourself out, so be sure to take occasional breaks, and certainly don't forget to eat. Don't be surprised if colleagues pay you a lot of compliments. In the evening, get takeout for dinner and unwind. You deserve it.",
    body: [
      "Today things could be rather hectic at work, Pisces. You'll probably be very busy and happy with whatever results you produce. You could tire yourself out, so be sure to take occasional breaks, and certainly don't forget to eat. Don't be surprised if colleagues pay you a lot of compliments. In the evening, get takeout for dinner and unwind. You deserve it.",
      "Source: https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx",
    ],
    byline: "The Horoscope Desk",
    desk: "Horoscope",
    hero: { src: "/og/default.png", alt: "Star chart on a news desk" },
    publishedAt: "2026-08-22T07:00:00-07:00",
    updatedAt: "2026-08-22T07:00:00-07:00",
  },
};

export function getDailySign(sign: string): DailySign | undefined {
  if (!isSign(sign)) return undefined;
  return DAILY_SIGNS[sign];
}

export function getAllSignParams() {
  return SIGNS.map((sign) => ({ sign }));
}
