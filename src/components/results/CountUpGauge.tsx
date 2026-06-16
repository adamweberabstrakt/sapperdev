"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUpGauge({
  value = 70,
  suffix = "%",
  label,
}: {
  value?: number;
  suffix?: string;
  label?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1500;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const R = 52;
  const C = 2 * Math.PI * R;
  const offset = C * (1 - n / 100);

  return (
    <div ref={ref} className="relative mx-auto flex h-56 w-56 items-center justify-center">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle cx="60" cy="60" r={R} fill="none" stroke="#475F7C" strokeOpacity="0.2" strokeWidth="6" />
        <circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          stroke="#A82EFF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display text-5xl leading-none text-bone">
          {n}
          <span className="text-acid">{suffix}</span>
        </span>
        {label && (
          <span className="mt-2 max-w-[8rem] text-center font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
