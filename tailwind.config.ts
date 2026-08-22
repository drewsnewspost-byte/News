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
        mint: "#F4F8F5",
        gold: "#B8860B",
        brick: "#9B3D2E",
        olive: "#5C6B3A",
        paper: "#FFFFFF",
        "paper-card": "#FFFFFF",
        rule: "#E5E5E5",
        line: "#E5E5E5",
        mist: "#FAFAFA",
        muted: "#525252",
        sage: "#6B7F68",
        "sage-pale": "#E8EEE9",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Source Sans 3", "Helvetica Neue", "Arial", "sans-serif"],
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
