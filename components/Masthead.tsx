import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function Masthead() {
  return (
    <header className="border-b-2 border-leaf bg-white">
      <div className="shell flex items-center py-4">
        <Link href="/" className="flex items-center gap-3" aria-label={SITE_NAME}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon-32x32.png?v=2" alt="" width={36} height={36} className="h-9 w-9" />
          <span className="font-sans text-xl font-bold tracking-tight md:text-2xl">
            <span className="text-ink">Drew&apos;s </span>
            <span className="text-leaf">Comic</span>
            <span className="text-ink"> Newsroom</span>
          </span>
        </Link>
        <Link
          href="/about/"
          className="ml-auto font-sans text-[11px] uppercase tracking-[0.16em] text-leaf hover:text-forest"
        >
          About
        </Link>
      </div>
    </header>
  );
}
