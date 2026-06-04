"use client";

import Script from "next/script";
import { siteConfig } from "@/config/site.config";

const { chilipiperDomain, chilipiperRouter } = siteConfig.integrations;

export default function ChiliPiperLoader() {
  return (
    <Script
      id="chilipiper-concierge"
      src={`https://${chilipiperDomain}.chilipiper.com/concierge-js/cjs/concierge.js`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
}

// Helper to fire ChiliPiper after form submit
export function fireChiliPiper(formData: {
  name: string;
  email: string;
  company: string;
  phone?: string;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const win = window as Record<string, any>;
  if (typeof window !== "undefined" && win.ChiliPiper) {
    win.ChiliPiper.submit(chilipiperDomain, chilipiperRouter, {
      trigger: "RouterLink",
      lead: {
        FirstName: formData.name.split(" ")[0],
        LastName: formData.name.split(" ").slice(1).join(" ") || "",
        Email: formData.email,
        Company: formData.company,
        Phone: formData.phone || "",
      },
    });
  }
}
