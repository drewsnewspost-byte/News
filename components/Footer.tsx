import Link from "next/link";
import { NAV_SECTIONS, NAV_LABEL, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t-[3px] border-forest bg-paper">
      <div className="py-10 font-sans text-sm text-neutral-500">
        <div className="shell">
          <p className="font-sans text-xl font-bold tracking-tight text-ink">
            Drew&apos;s <span className="wordmark-comic">Comic</span> Newsroom
          </p>
          <p className="mt-2">Comics on the day’s news. One strip, a short recap, a source.</p>
        </div>
        <ul className="topic-nav mt-6">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          {NAV_SECTIONS.map((section) => (
            <li key={section}>
              <Link href={`/${section}/`} className="nav-link">
                {NAV_LABEL[section]}
              </Link>
            </li>
          ))}
        </ul>
        <p className="shell mt-6">
          © {new Date().getFullYear()} {SITE_NAME}
          {" · "}
          <Link href="/about/" className="text-leaf hover:text-forest hover:underline">
            About
          </Link>
        </p>
      </div>
    </footer>
  );
}
