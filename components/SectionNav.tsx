"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_SECTIONS, NAV_LABEL } from "@/lib/site";

export function SectionNav() {
  const pathname = usePathname() || "/";
  return (
    <nav className="sticky top-0 z-20 overflow-hidden border-b-[3px] border-forest bg-paper/95 backdrop-blur" aria-label="Sections">
      <ul className="topic-nav">
        <li>
          <Link href="/" className={pathname === "/" ? "nav-link-active" : "nav-link"}>
            Home
          </Link>
        </li>
        {NAV_SECTIONS.map((section) => {
          const href = `/${section}/`;
          const active = pathname === href || pathname.startsWith(`/${section}/`);
          return (
            <li key={section}>
              <Link href={href} className={active ? "nav-link-active" : "nav-link"}>
                {NAV_LABEL[section]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
