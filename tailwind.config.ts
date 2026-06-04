import type { Config } from "tailwindcss";
import { siteConfig } from "./src/config/site.config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy tokens (kept so existing pages are untouched)
        navy: "#0B2E57",
        cyan: "#00D0FF",
        purple: "#A82EFF",
        "light-gray": "#F4F4F4",
        // Brand v2 tokens — sourced from site config (single source of truth)
        ...siteConfig.brandColors,
      },
      fontFamily: {
        sans: [...siteConfig.fonts.sans],
        display: [...siteConfig.fonts.display],
        mono: [...siteConfig.fonts.mono],
      },
    },
  },
  plugins: [],
};
export default config;
