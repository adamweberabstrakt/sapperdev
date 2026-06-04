"use client";

import Button from "./Button";
import { SITE_CONFIG } from "@/lib/constants";

type Variant = "acid" | "outline-acid" | "primary" | "secondary" | "outline";

interface BookingButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

/**
 * Single CTA wherever a "book a meeting" action is needed.
 * Opens the ChiliPiper Concierge router popup, which collects the prospect's
 * details and routes them. On a successful booking it pushes a GTM
 * "meeting_booked" event. We do NOT pass an empty lead (that breaks routing)
 * and we do NOT redirect on error (that was sending clicks to /contact).
 * The only fallback is /contact if the ChiliPiper script never loaded.
 */
export default function BookingButton({
  children,
  variant = "acid",
  className = "",
}: BookingButtonProps) {
  const handleBook = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as Record<string, any>;
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({ event: "booking_started" });

    if (win.ChiliPiper?.submit) {
      try {
        win.ChiliPiper.submit(
          SITE_CONFIG.chilipiper.domain,
          SITE_CONFIG.chilipiper.router,
          {
            trigger: "RouterLink",
            onSuccess: () => {
              win.dataLayer = win.dataLayer || [];
              win.dataLayer.push({ event: "meeting_booked" });
            },
          }
        );
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("ChiliPiper submit failed", e);
      }
      return;
    }

    window.location.href = "/contact";
  };

  return (
    <Button variant={variant} onClick={handleBook} className={className}>
      {children}
    </Button>
  );
}
