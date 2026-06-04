import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import ChiliPiperLoader from "@/components/integrations/ChiliPiper";
import Chatbot from "@/components/integrations/Chatbot";
import BehaviorTracking from "@/components/integrations/BehaviorTracking";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sapper Consulting | B2B Pipeline Generation",
    template: "%s | Sapper Consulting",
  },
  description:
    "We generate consistent B2B sales meetings through strategic omni-channel outreach. Cold calling, email, and LinkedIn — coordinated to fill your pipeline.",
  openGraph: {
    title: "Sapper Consulting | B2B Pipeline Generation",
    description:
      "We generate consistent B2B sales meetings through strategic omni-channel outreach.",
    url: "https://www.sapperconsulting.com",
    siteName: "Sapper Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sapper Consulting | B2B Pipeline Generation",
    description:
      "We generate consistent B2B sales meetings through strategic omni-channel outreach.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MQLB3J4');`}
        </Script>
      </head>
      <body className="bg-white text-navy font-sans">
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQLB3J4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <CookieBanner />

        {/* Integrations */}
        <ChiliPiperLoader />
        <Chatbot />
        <BehaviorTracking />
      </body>
    </html>
  );
}
