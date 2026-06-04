"use client";

import { useEffect, useRef, useState } from "react";
import BookingButton from "@/components/ui/BookingButton";
import { siteConfig } from "@/config/site.config";

/**
 * Renders the ChiliPiper router INLINE into a container (not a popup) using
 * concierge's domElement option. If ChiliPiper isn't available or inline isn't
 * configured, it degrades to a clear popup CTA so booking always works.
 */
export default function ChiliPiperInline() {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"loading" | "ready" | "fallback">("loading");

  useEffect(() => {
    let tries = 0;
    let timer: ReturnType<typeof setTimeout>;

    const attempt = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as Record<string, any>;
      if (win.ChiliPiper?.submit && ref.current) {
        try {
          win.ChiliPiper.submit(
            siteConfig.integrations.chilipiperDomain,
            siteConfig.integrations.chilipiperRouter,
            {
              domElement: ref.current,
              lead: { PersonEmail: "" },
              onSuccess: () => {
                win.dataLayer = win.dataLayer || [];
                win.dataLayer.push({ event: "meeting_booked" });
              },
            }
          );
          setState("ready");
          return;
        } catch {
          setState("fallback");
          return;
        }
      }
      tries += 1;
      if (tries > 16) {
        setState("fallback"); // ~8s without ChiliPiper
        return;
      }
      timer = setTimeout(attempt, 500);
    };

    timer = setTimeout(attempt, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[560px] border-t-2 border-acid bg-panel ring-1 ring-steel/20">
      {/* ChiliPiper renders the calendar in here */}
      <div ref={ref} className="min-h-[560px] w-full" />

      {state !== "ready" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-center">
          <div className="relative h-12 w-12">
            <span className="animate-radar-ping absolute inset-0 rounded-full border border-acid" />
            <span className="absolute inset-0 flex items-center justify-center font-mono text-acid">+</span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
            {state === "loading"
              ? "Establishing secure channel…"
              : "Open the booking console to lock a time."}
          </p>
          {state === "fallback" && <BookingButton>Open booking</BookingButton>}
        </div>
      )}
    </div>
  );
}
