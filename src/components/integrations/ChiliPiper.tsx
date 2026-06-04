"use client";

import Script from "next/script";
import { siteConfig } from "@/config/site.config";

const { chilipiperDomain } = siteConfig.integrations;

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
