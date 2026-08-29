import Link from "next/link";
import { NAV_SECTIONS, NAV_LABEL, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-leaf bg-white">
      <div className="shell py-10 font-sans text-sm text-neutral-500">
        <p className="font-sans text-xl font-bold tracking-tight text-ink">
          Drew&apos;s <span className="text-leaf">Comic</span> Newsroom
        </p>
        <p className="mt-2">Comics on the day’s news. One strip, a short recap, a source.</p>
        <ul className="mt-6 grid grid-cols-5 text-center">
          <li>
            <Link href="/" className="uppercase tracking-wide text-leaf hover:text-forest hover:underline">
              Home
            </Link>
          </li>
          {NAV_SECTIONS.map((section) => (
            <li key={section}>
              <Link href={`/${section}/`} className="uppercase tracking-wide text-leaf hover:text-forest hover:underline">
                {NAV_LABEL[section]}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6">
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
