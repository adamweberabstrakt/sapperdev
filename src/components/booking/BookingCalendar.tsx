"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site.config";

/**
 * Embeds the ChiliPiper smart link (a self-contained booking page) as an iframe.
 * The booking page sends no X-Frame-Options / frame-ancestors, so it embeds
 * cleanly. We listen for ChiliPiper's "booking-confirmed" postMessage to fire a
 * GTM meeting_booked conversion.
 */
export default function BookingCalendar({ className = "" }: { className?: string }) {
  const url = siteConfig.integrations.bookingUrl;

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      let host = "";
      try {
        host = new URL(e.origin).hostname;
      } catch {
        return;
      }
      if (!host.endsWith(".chilipiper.com")) return;
      const action = typeof e.data === "object" && e.data ? (e.data as { action?: string }).action : undefined;
      if (action === "booking-confirmed") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const win = window as Record<string, any>;
        win.dataLayer = win.dataLayer || [];
        win.dataLayer.push({ event: "meeting_booked" });
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  return (
    <div className={className}>
      <iframe
        src={url}
        title="Book a meeting"
        className="h-full w-full border-0 bg-bone"
        allow="camera; microphone; fullscreen"
      />
    </div>
  );
}
