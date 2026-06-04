"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STAGES = [
  {
    n: "01",
    title: "Generate",
    tag: "Awareness & web traffic",
    desc: "We run brand and demand programs that pull the right companies to your site and content — creating the signal everything else runs on.",
  },
  {
    n: "02",
    title: "Capture & Enrich",
    tag: "Visitor data → real people",
    desc: "We capture the traffic data your site already produces and turn anonymous visitors into named, reachable decision-makers — enriched for outbound.",
  },
  {
    n: "03",
    title: "Match & Activate",
    tag: "Every channel, one list",
    desc: "That enriched data feeds every outbound play at once — aimed at people already showing intent.",
    channels: ["Direct Mail", "LinkedIn", "Email", "Cold Calling"],
  },
  {
    n: "04",
    title: "Compound",
    tag: "Sharper every cycle",
    desc: "Every touch creates more signal and more awareness, driving more traffic — and each pass through the loop sharpens the data for the next.",
  },
];

export default function DataLoop() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % STAGES.length), 3600);
    return () => clearInterval(t);
  }, []);

  const s = STAGES[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
      {/* LOOP RAIL */}
      <div>
        <div className="relative border-l-2 border-steel/25 pl-7">
          {STAGES.map((st, i) => {
            const on = i === active;
            return (
              <button
                key={st.n}
                onClick={() => setActive(i)}
                className="relative block w-full pb-7 text-left last:pb-0"
              >
                <span className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center">
                  {on && (
                    <span className="animate-radar-ping absolute h-4 w-4 rounded-full border border-acid" />
                  )}
                  <span className={`h-3 w-3 rounded-full ring-4 ring-ink transition-colors ${on ? "bg-acid" : "bg-steel/50"}`} />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">{st.n}</span>
                <span className={`block font-display text-2xl uppercase transition-colors sm:text-3xl ${on ? "text-acid" : "text-bone/55"}`}>
                  {st.title}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-5 pl-7 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
          ↺ The loop repeats — sharper each cycle
        </p>
      </div>

      {/* DETAIL + CORE */}
      <div>
        <div className="min-h-[210px] border-t-2 border-acid bg-panel p-8 ring-1 ring-steel/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">{s.tag}</span>
              <h3 className="mt-3 font-display text-3xl uppercase text-bone">{s.title}</h3>
              <p className="mt-3 text-bone/75">{s.desc}</p>
              {s.channels && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.channels.map((c) => (
                    <span key={c} className="border border-steel/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-acid">{c}</span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center gap-4 bg-ink p-6 ring-1 ring-steel/20">
          <span className="font-display text-2xl text-acid">◎</span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">Data Core</p>
            <p className="mt-1 text-sm text-bone/75">Your enriched, first-party data. You own it — and it gets better every cycle.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
