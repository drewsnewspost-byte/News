import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Masthead } from "@/components/Masthead";
import { SectionNav } from "@/components/SectionNav";
import { SiteBanner } from "@/components/SiteBanner";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/lib/seo";
import { SITE_NAME, SITE_ORIGIN, absUrl } from "@/lib/site";
import "./globals.css";

// Fontshare Boska: Reckless-like high-contrast display serif.
// Editorial New is not on Fontshare (Pangram Pangram, paid); Boska is the licensed substitute.
const serif = localFont({
  src: [
    { path: "./fonts/boska/Boska-Medium.woff2", weight: "600", style: "normal" },
    { path: "./fonts/boska/Boska-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/boska/Boska-Black.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-serif",
  display: "swap",
});

const sans = localFont({
  src: [
    { path: "./fonts/satoshi/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/satoshi/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/satoshi/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const mono = localFont({
  src: [
    { path: "./fonts/azeret-mono/AzeretMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/azeret-mono/AzeretMono-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: HOME_TITLE,
    template: "%s | Drew's Comic Newsroom",
  },
  description: HOME_DESCRIPTION,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: HOME_TITLE,
    url: absUrl("/"),
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "48x48" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9HM59GHFVJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9HM59GHFVJ');
          `}
        </Script>
      </head>
      <body className={`${serif.variable} ${sans.variable} ${mono.variable} flex min-h-screen flex-col bg-white font-sans text-neutral-900`}>
        <Masthead />
        <SectionNav />
        <SiteBanner />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
