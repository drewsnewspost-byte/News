import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Masthead } from "@/components/Masthead";
import { SectionNav } from "@/components/SectionNav";
import { HOME_TITLE } from "@/lib/seo";
import { SITE_NAME, SITE_ORIGIN, absUrl } from "@/lib/site";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: HOME_TITLE,
    template: "%s | Drew's Comic Newsroom",
  },
  description:
    "Drew's Comic Newsroom publishes comics on the day's news across sports, finance, science and space, technology and AI, animals and nature, culture and curiosity, horoscope, and humor.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: HOME_TITLE,
    url: absUrl("/"),
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} flex min-h-screen flex-col bg-white font-sans text-neutral-900`}>
        <Masthead />
        <SectionNav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
