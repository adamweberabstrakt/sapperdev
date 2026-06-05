/**
 * SITE CONFIG — single source of truth for everything that changes per brand/site.
 *
 * This is the NEUTRAL BASE TEMPLATE config. Every value here is a placeholder.
 * To stand up a new client site, copy this repo and overwrite the values below
 * (see docs/TEMPLATE-REBRANDING.md). Shared components/pages read from here and
 * stay generic. Keep it pure data (no React, no "use client") so both the app
 * and tailwind.config.ts can import it.
 */
export const siteConfig = {
  name: "Northbound",
  shortName: "Northbound",
  tagline: "B2B Demand Generation",
  url: "https://base-template.vercel.app",

  // Brand assets (per client). Leave blank to render a text wordmark of shortName.
  // Drop logo files in /public/images and set the paths to use image logos.
  logos: {
    header: "",
    footer: "",
    mark: "",
  },

  // Optional footer attribution. Blank = none (no parent brand).
  legal: {
    attribution: "",
  },

  contact: {
    email: "hello@example.com",
    phone: "(555) 000-0000",
    phoneHref: "tel:+15550000000",
  },

  // Transactional email sender for the /api/contact route.
  mail: {
    fromName: "Website",
    fromAddress: "noreply@example.com",
  },

  location: {
    basedIn: "U.S.-based",
    street: "123 Main St, Suite 100",
    city: "Your City",
    state: "Your State",
    stateAbbr: "ST",
    zip: "00000",
    region: "your region",
    teamSize: "10+",
    full: "123 Main St, Suite 100, Your City, ST 00000",
    mapsUrl: "https://maps.google.com",
  },

  social: {
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
  },

  // Leave gtmId blank to skip the tag entirely. Booking/ChiliPiper are placeholders.
  integrations: {
    chilipiperDomain: "example",
    chilipiperRouter: "demo_router",
    gtmId: "",
    bookingUrl: "#",
  },

  // Headline proof stats reused across pages — change once, updates everywhere.
  stats: [
    { num: "100", suffix: "+", label: "Clients" },
    { num: "20", suffix: "+", label: "Industries" },
    { num: "50", suffix: "", label: "States" },
    { num: "10K", suffix: "+", label: "Meetings Booked" },
  ],

  // Brand v2 design tokens — consumed by tailwind.config.ts.
  // Neutral slate/sky palette (distinct from any client brand).
  brandColors: {
    ink: "#0F172A",
    panel: "#1E293B",
    acid: "#38BDF8",
    steel: "#64748B",
    bone: "#F8FAFC",
    danger: "#F43F5E",
  },
  fonts: {
    sans: ["Inter", "system-ui", "sans-serif"],
    display: ["Anton", "Impact", "sans-serif"],
    mono: ["'Space Mono'", "ui-monospace", "monospace"],
  },
} as const;

export type SiteConfig = typeof siteConfig;
