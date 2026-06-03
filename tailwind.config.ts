import type { Config } from "tailwindcss";

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
        // Brand Standards v2 — "HIT / tactical dossier"
        ink: "#0B1B30",
        panel: "#11243D",
        acid: "#B6F22B",
        steel: "#6B829E",
        bone: "#F5F7FA",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Anton", "Impact", "sans-serif"],
        mono: ["'Space Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
