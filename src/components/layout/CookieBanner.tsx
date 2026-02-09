"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-t border-white/10 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/80 text-center sm:text-left">
          We use cookies to improve your experience.{" "}
          <Link
            href="/privacy-policy"
            className="text-cyan underline underline-offset-2"
          >
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="text-sm text-white/60 hover:text-white px-4 py-2 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="text-sm bg-cyan text-navy font-semibold px-5 py-2 rounded-md hover:bg-cyan/90 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
