"use client";

import Script from "next/script";

export default function ChiliPiperLoader() {
  return (
    <Script
      id="chilipiper-concierge"
      src="https://abstraktmg.chilipiper.com/concierge-js/cjs/concierge.js"
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
    win.ChiliPiper.submit("abstraktmg", "sapper_router_1", {
      map: true,
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
