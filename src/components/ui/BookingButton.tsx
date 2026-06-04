"use client";

import Button from "./Button";

type Variant = "acid" | "outline-acid" | "primary" | "secondary" | "outline";

interface BookingButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

/**
 * Opens the site-wide booking modal (BookingModal listens for "open-booking").
 * The modal holds the form that ChiliPiper intercepts to open the calendar.
 */
export default function BookingButton({
  children,
  variant = "acid",
  className = "",
}: BookingButtonProps) {
  const handleBook = () => {
    window.dispatchEvent(new CustomEvent("open-booking"));
  };

  return (
    <Button variant={variant} onClick={handleBook} className={className}>
      {children}
    </Button>
  );
}
