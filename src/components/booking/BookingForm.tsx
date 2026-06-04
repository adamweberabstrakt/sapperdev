"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site.config";

const { chilipiperDomain, chilipiperRouter } = siteConfig.integrations;

/**
 * Real HTML form that ChiliPiper Concierge intercepts. On mount we call
 * ChiliPiper.deploy(domain, router, { formType: "HTML" }) so the router attaches
 * to this form; on submit ChiliPiper reads the email, routes the lead, and opens
 * the booking calendar. This is the form-triggered flow this router requires.
 */
export default function BookingForm() {
  const armed = useRef(false);

  useEffect(() => {
    let tries = 0;
    let timer: ReturnType<typeof setTimeout>;
    const arm = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as Record<string, any>;
      if (win.ChiliPiper?.deploy && !armed.current) {
        try {
          win.ChiliPiper.deploy(chilipiperDomain, chilipiperRouter, {
            formType: "HTML",
            onSuccess: () => {
              win.dataLayer = win.dataLayer || [];
              win.dataLayer.push({ event: "meeting_booked" });
            },
          });
          armed.current = true;
        } catch {
          /* fall through to retry */
        }
        return;
      }
      if (++tries < 20) timer = setTimeout(arm, 400);
    };
    timer = setTimeout(arm, 300);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // ChiliPiper's own listener handles routing + opening the calendar.
    // preventDefault stops a native navigation if ChiliPiper isn't ready yet.
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as Record<string, any>;
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({ event: "booking_started" });
  };

  const field =
    "w-full border border-steel/30 bg-ink px-4 py-3 font-mono text-sm text-bone placeholder:text-steel/60 focus:border-acid focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input name="firstname" required placeholder="First name" className={field} />
        <input name="lastname" required placeholder="Last name" className={field} />
      </div>
      <input name="email" type="email" required placeholder="Work email" className={field} />
      <input name="company" placeholder="Company" className={field} />
      <Button type="submit" variant="acid" className="w-full">Find my time →</Button>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel/70">
        Pick a time on the next screen — no spam, just a meeting.
      </p>
    </form>
  );
}
