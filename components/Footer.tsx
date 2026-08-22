import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { NAV_SECTIONS, NAV_LABEL, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 font-sans text-sm text-neutral-500">
        <p className="font-serif text-xl text-neutral-900">{SITE_NAME}</p>
        <p className="mt-2">Comics on the day’s news. One strip, a short recap, a source.</p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {NAV_SECTIONS.map((section) => (
            <li key={section}>
              <Link href={`/${section}/`} className="uppercase tracking-wide text-leaf hover:text-forest hover:underline">
                {NAV_LABEL[section]}
              </Link>
            </li>
          ))}
        </ul>
        <NewsletterSignup variant="footer" />
        <p className="mt-6">© {new Date().getFullYear()} {SITE_NAME}</p>
      </div>
    </footer>
  );
}
