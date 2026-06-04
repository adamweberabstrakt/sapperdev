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
 * Single CTA used everywhere a "book a meeting" action is needed.
 * Opens the ChiliPiper router (no form). On a successful booking it pushes a
 * GTM dataLayer event ("meeting_booked") so booking can be the tracked
 * conversion. If ChiliPiper isn't available yet, it falls back to /contact so
 * a CTA is never dead.
 */
export default function BookingButton({
  children,
  variant = "acid",
  className = "",
}: BookingButtonProps) {
  const handleBook = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as Record<string, any>;
    // Soft-conversion: user opened the booking flow.
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({ event: "booking_started" });
    try {
      if (win.ChiliPiper?.submit) {
        win.ChiliPiper.submit(
          SITE_CONFIG.chilipiper.domain,
          SITE_CONFIG.chilipiper.router,
          {
            onSuccess: () => {
              win.dataLayer = win.dataLayer || [];
              win.dataLayer.push({ event: "meeting_booked" });
            },
            onError: () => {
              window.location.href = "/contact";
            },
          }
        );
        return;
      }
    } catch {
      // fall through to the safe fallback below
    }
    window.location.href = "/contact";
  };

  return (
    <Button variant={variant} onClick={handleBook} className={className}>
      {children}
    </Button>
  );
}
