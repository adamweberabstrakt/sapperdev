/**
 * SITE CONFIG — single source of truth for everything that changes per brand/site.
 *
 * When this build becomes a reusable framework, THIS is the file each new site
 * overrides. Shared components/pages read from here and stay generic.
 * Keep it pure data (no React, no "use client") so both the app and
 * tailwind.config.ts can import it.
 */
export const siteConfig = {
  name: "Sapper Consulting",
  shortName: "Sapper",
  tagline: "B2B Pipeline Generation",
  url: "https://sapperdev.vercel.app",

  contact: {
    email: "adam.weber@abstraktmg.com",
    phone: "(314) 742-9830",
    phoneHref: "tel:+13147429830",
  },

  location: {
    basedIn: "U.S.-based",
    street: "701 N 1st St, Suite 201",
    city: "St. Louis",
    state: "Missouri",
    stateAbbr: "MO",
    zip: "63102",
    region: "the Midwest",
    teamSize: "400+",
    full: "701 N 1st St, Suite 201, St. Louis, MO 63102",
    mapsUrl: "https://maps.app.goo.gl/hL12XaSsL3i7TJwL6",
  },

  social: {
    linkedin: "https://www.linkedin.com/company/sapper-consulting-llc/",
    facebook: "https://www.facebook.com/SapperConsulting/",
  },

  integrations: {
    chilipiperDomain: "abstraktmg",
    chilipiperRouter: "sapper_router_1",
    gtmId: "GTM-MQLB3J4",
    bookingUrl: "https://abstraktmg.chilipiper.com/round-robin/sapper-demo",
  },

  // Headline proof stats reused across pages — change once, updates everywhere.
  stats: [
    { num: "2,000", suffix: "+", label: "Clients" },
    { num: "80", suffix: "+", label: "Industries" },
    { num: "50", suffix: "", label: "States" },
    { num: "500K", suffix: "+", label: "Meetings Booked" },
  ],

  // Brand v2 design tokens — consumed by tailwind.config.ts.
  brandColors: {
    ink: "#0B1B30",
    panel: "#11243D",
    acid: "#B6F22B",
    steel: "#6B829E",
    bone: "#F5F7FA",
    danger: "#FF4B3E",
  },
  fonts: {
    sans: ["Inter", "system-ui", "sans-serif"],
    display: ["Anton", "Impact", "sans-serif"],
    mono: ["'Space Mono'", "ui-monospace", "monospace"],
  },
} as const;

export type SiteConfig = typeof siteConfig;
