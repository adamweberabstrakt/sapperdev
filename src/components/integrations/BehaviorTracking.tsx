"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// "More than 3 page views" -> fires on the 4th view. One minute on site.
const PAGEVIEW_THRESHOLD = 3;
const TIME_THRESHOLD_MS = 60_000;

function pushEvent(event: string) {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as Record<string, any>;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event });
}

/**
 * Soft-conversion signals for PMax / GA4 (one fire per browser session):
 *  - engaged_pageviews: more than 3 page views in the session
 *  - engaged_time:      more than 60 seconds on site in the session
 * Rendered once in the root layout (persists across client-side navigations).
 */
export default function BehaviorTracking() {
  const pathname = usePathname();

  // Count page views (initial load + each client-side navigation).
  useEffect(() => {
    try {
      const count = Number(sessionStorage.getItem("sapper_pv") || "0") + 1;
      sessionStorage.setItem("sapper_pv", String(count));
      if (count > PAGEVIEW_THRESHOLD && !sessionStorage.getItem("sapper_pv_fired")) {
        sessionStorage.setItem("sapper_pv_fired", "1");
        pushEvent("engaged_pageviews");
      }
    } catch {
      /* sessionStorage unavailable — skip */
    }
  }, [pathname]);

  // Time on site (survives reloads within the tab via a stored start time).
  useEffect(() => {
    let start = Date.now();
    try {
      const stored = Number(sessionStorage.getItem("sapper_start") || "0");
      if (stored) {
        start = stored;
      } else {
        sessionStorage.setItem("sapper_start", String(start));
      }
      if (sessionStorage.getItem("sapper_time_fired")) return;
    } catch {
      /* ignore */
    }

    const fire = () => {
      try {
        if (sessionStorage.getItem("sapper_time_fired")) return;
        if (Date.now() - start >= TIME_THRESHOLD_MS) {
          sessionStorage.setItem("sapper_time_fired", "1");
          pushEvent("engaged_time");
          clearInterval(interval);
        }
      } catch {
        /* ignore */
      }
    };

    const remaining = Math.max(0, TIME_THRESHOLD_MS - (Date.now() - start));
    const timeout = setTimeout(fire, remaining + 200);
    const interval = setInterval(fire, 5000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return null;
}
