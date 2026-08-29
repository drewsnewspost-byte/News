import type { Metadata } from "next";
import Image from "next/image";
import { absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About — Drew's Comic Newsroom" },
  description:
    "Hi, I'm Drew, and I created Drew's Comic Newsroom because I wanted a different kind of place to get the news.",
  alternates: { canonical: absUrl("/about/") },
  openGraph: {
    type: "website",
    title: "About — Drew's Comic Newsroom",
    url: absUrl("/about/"),
    images: [{ url: "/about/drew.png", alt: "Drew, founder of Drew's Comic Newsroom" }],
  },
};

const questions = [
  "What happened?",
  "Why is it interesting?",
  "Why should you care?",
  "And what do you actually need to know?",
];

export default function AboutPage() {
  return (
    <main className="shell py-12 md:py-16">
      <div className="md:grid md:grid-cols-12 md:items-start md:gap-12">
        <div className="min-w-0 md:col-span-4">
          <Image
            src="/about/drew.png"
            alt="Drew, founder of Drew's Comic Newsroom"
            width={1131}
            height={1391}
            priority
            className="mx-auto h-auto w-full max-w-sm border-2 border-leaf bg-white md:mx-0"
          />
        </div>
        <div className="mt-8 min-w-0 max-w-2xl font-sans text-[1.05rem] leading-relaxed text-neutral-700 md:col-span-8 md:mt-0">
          <h1 className="font-serif text-3xl font-medium tracking-tight text-ink md:text-4xl">
            About Drew&apos;s Comic Newsroom
          </h1>
          <p className="mt-6">
            Hi, I&apos;m Drew, and I created Drew&apos;s Comic Newsroom because I wanted a different kind of place to get the news.
          </p>
          <p className="mt-5">
            There&apos;s no shortage of information online. If anything, there&apos;s too much of it. News can feel overwhelming, overly political, repetitive, negative, or buried underneath opinions and unnecessary fluff. I wanted to create something simpler.
          </p>
          <p className="mt-5">
            Drew&apos;s Comic Newsroom is built around the idea that staying informed shouldn&apos;t feel like a chore.
          </p>
          <p className="mt-5">
            The goal is to take interesting stories happening across the world and make them easier, faster, and more enjoyable to understand. Whether it&apos;s business, technology, sports, science, culture, entertainment, finance, or something unexpected happening around the world, the newsroom is designed to get to the point and tell you what actually matters.
          </p>
          <p className="mt-5">And we do it with a little personality.</p>
          <p className="mt-5">
            Instead of feeling like a traditional news website, Drew&apos;s Comic Newsroom combines news with visual storytelling and a comic-inspired style. The goal isn&apos;t to make important stories less serious. It&apos;s to make information more approachable and easier to consume.
          </p>
          <p className="mt-5">
            I also wanted to build a news desk that isn&apos;t centered around political arguments, outrage, or trying to tell you what to think. There are plenty of places for that already.
          </p>
          <p className="mt-5">This newsroom is about curiosity.</p>
          <div className="my-6 space-y-1 font-serif text-lg text-forest">
            {questions.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p>That&apos;s the standard behind the desk.</p>
          <p className="mt-5">But the mission is very human: make the world a little easier to understand.</p>
          <p className="mt-5">
            I&apos;m building this because I genuinely enjoy learning about what&apos;s happening, discovering interesting stories, and finding better ways to explain complicated things.
          </p>
          <p className="mt-5">
            If you leave the site knowing something you didn&apos;t know five minutes earlier, then the newsroom did its job.
          </p>
          <p className="mt-5">Thanks for stopping by Drew&apos;s Comic Newsroom.</p>
          <p className="mt-5">I hope you enjoy the desk.</p>
        </div>
      </div>
    </main>
  );
}
