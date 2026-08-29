"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_SECTIONS, NAV_LABEL } from "@/lib/site";

export function SectionNav() {
  const pathname = usePathname() || "/";
  return (
    <nav className="sticky top-0 z-20 border-b-2 border-leaf bg-white/95 backdrop-blur" aria-label="Sections">
      <ul className="shell grid grid-cols-5 text-center">
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
