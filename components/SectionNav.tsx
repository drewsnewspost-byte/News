"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_SECTIONS, NAV_LABEL } from "@/lib/site";
export function SectionNav() {
  const pathname = usePathname() || "/";
  return (
    <nav className="border-b border-neutral-200 bg-white" aria-label="Sections">
      <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-3 font-sans text-[12px]">
        <li>
          <Link href="/" className={pathname === "/" ? "nav-link-active uppercase" : "nav-link uppercase text-neutral-500"}>
            Home
          </Link>
        </li>
        {NAV_SECTIONS.map((section) => {
          const href = `/${section}/`;
          const active = pathname === href || pathname.startsWith(`/${section}/`);
          return (
            <li key={section}>
              <Link href={href} className={active ? "nav-link-active uppercase" : "nav-link uppercase text-neutral-500"}>
                {NAV_LABEL[section]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
