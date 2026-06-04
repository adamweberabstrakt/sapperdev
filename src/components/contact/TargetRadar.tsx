"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Targets the "system" cycles through and locks onto.
const TARGETS = [
  { x: 32, y: 28, coord: "41.88 N / 87.63 W" },
  { x: 68, y: 36, coord: "40.71 N / 74.01 W" },
  { x: 45, y: 68, coord: "29.76 N / 95.37 W" },
  { x: 70, y: 62, coord: "33.75 N / 84.39 W" },
  { x: 30, y: 58, coord: "39.74 N / 104.99 W" },
];

export default function TargetRadar() {
  const [i, setI] = useState(0);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    let acquire: ReturnType<typeof setTimeout>;
    const cycle = setInterval(() => {
      setLocked(false);
      setI((p) => (p + 1) % TARGETS.length);
      acquire = setTimeout(() => setLocked(true), 750);
    }, 2800);
    acquire = setTimeout(() => setLocked(true), 750);
    return () => {
      clearInterval(cycle);
      clearTimeout(acquire);
    };
  }, []);

  const t = TARGETS[i];

  return (
    <div className="relative aspect-square w-full overflow-hidden border-t-2 border-acid bg-panel ring-1 ring-steel/20">
      {/* faint grid */}
      <div className="absolute inset-0 bg-tactical-grid opacity-60" aria-hidden />

      {/* concentric rings */}
      {[88, 64, 40, 18].map((s) => (
        <div
          key={s}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-steel/25"
          style={{ width: `${s}%`, height: `${s}%` }}
          aria-hidden
        />
      ))}

      {/* crosshair axes */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-steel/15" aria-hidden />
      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-steel/15" aria-hidden />

      {/* rotating sweep */}
      <div
        className="animate-radar-sweep absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(182,242,43,0.0) 0deg, rgba(182,242,43,0.0) 300deg, rgba(182,242,43,0.28) 358deg, rgba(182,242,43,0.0) 360deg)",
        }}
        aria-hidden
      />

      {/* static blips */}
      {TARGETS.map((b, idx) =>
        idx === i ? null : (
          <span
            key={idx}
            className="absolute h-1.5 w-1.5 rounded-full bg-steel/60"
            style={{ left: `${b.x}%`, top: `${b.y}%` }}
            aria-hidden
          />
        )
      )}

      {/* the locking crosshair */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        animate={{ left: `${t.x}%`, top: `${t.y}%` }}
        transition={{ type: "spring", stiffness: 90, damping: 14 }}
        style={{ left: `${t.x}%`, top: `${t.y}%` }}
      >
        {!locked && (
          <span className="animate-radar-ping absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-acid" />
        )}
        <span
          className={`relative block h-7 w-7 transition-colors duration-300 ${
            locked ? "text-acid" : "text-steel"
          }`}
        >
          <span className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-current" />
          <span className="absolute left-1/2 bottom-0 h-2 w-px -translate-x-1/2 bg-current" />
          <span className="absolute top-1/2 left-0 h-px w-2 -translate-y-1/2 bg-current" />
          <span className="absolute top-1/2 right-0 h-px w-2 -translate-y-1/2 bg-current" />
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current" />
        </span>
      </motion.div>

      {/* readout */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 border-t border-steel/20 bg-ink/70 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-steel sm:text-[11px]">
        <span className={locked ? "text-acid" : "text-steel"}>
          {locked ? "● Target Locked" : "○ Acquiring…"}
        </span>
        <span>{t.coord}</span>
      </div>

      {/* base label */}
      <div className="absolute left-4 top-3 font-mono text-[10px] uppercase tracking-[0.18em] text-steel sm:text-[11px]">
        Base / St. Louis
        <span className="block text-acid/80">38.63 N / 90.20 W</span>
      </div>
    </div>
  );
}
