"use client";

import { useEffect, useState } from "react";
import BookingCalendar from "@/components/booking/BookingCalendar";

/**
 * Site-wide booking modal. Mounted once in the layout; any BookingButton opens
 * it by dispatching a window "open-booking" event. Renders the booking calendar,
 * which ChiliPiper intercepts on submit to open the calendar.
 */
export default function BookingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener("open-booking", openHandler);
    return () => window.removeEventListener("open-booking", openHandler);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <div className="relative w-full max-w-3xl border-t-2 border-acid bg-panel p-5 ring-1 ring-steel/20 sm:p-6">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 font-mono text-sm text-steel transition-colors hover:text-acid"
        >
          ✕
        </button>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">Book a strategy call</p>
        <h2 className="mt-3 font-display text-2xl uppercase leading-tight text-bone">Lock a time.</h2>
        <p className="mb-4 mt-2 text-sm text-bone/60">
          {"Pick a time that works — you'll get a calendar invite right away."}
        </p>
        <BookingCalendar className="h-[68vh] w-full sm:h-[600px]" />
      </div>
    </div>
  );
}
