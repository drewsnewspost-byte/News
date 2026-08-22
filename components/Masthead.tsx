import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function Masthead() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center">
        <p className="mb-2 font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500">Comics on the day’s news</p>
        <Link href="/" className="font-serif text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
          {SITE_NAME}
        </Link>
      </div>
    </header>
  );
}
