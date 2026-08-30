import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        forest: "#1B4332",
        "forest-deep": "#12291F",
        leaf: "#2D6A4F",
        moss: "#4A7C59",
        mint: "#FFFFFF",
        gold: "#B8860B",
        brick: "#9B3D2E",
        olive: "#5C6B3A",
        paper: "#FFFFFF",
        "paper-card": "#FFFFFF",
        rule: "#E5E5E5",
        line: "#E5E5E5",
        mist: "#FFFFFF",
        muted: "#525252",
        sage: "#6B7F68",
        "sage-pale": "#FFFFFF",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Boska", "ui-serif", "serif"],
        sans: ["var(--font-sans)", "Satoshi", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "Azeret Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        kicker: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.22em" }],
        display: ["2.75rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        card: "none",
      },
    },
  },
  plugins: [],
};
export default config;
