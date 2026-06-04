"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type CaseTab = {
  id: string;
  label: string;
  body: string[];
  quote?: string;
};

export default function CaseFileTabs({ tabs, quoteAttribution }: { tabs: CaseTab[]; quoteAttribution: string }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div>
      {/* tab buttons */}
      <div className="flex flex-wrap gap-px border border-steel/20 bg-steel/20">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActive(i)}
            className={`flex-1 px-5 py-4 text-left font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
              i === active ? "bg-acid text-ink" : "bg-ink text-steel hover:text-bone"
            }`}
          >
            <span className="block opacity-70">{String(i + 1).padStart(2, "0")}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* panel */}
      <div className="border-x border-b border-steel/20 bg-panel p-8 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="space-y-4">
              {tab.body.map((p, i) => (
                <p key={i} className="text-bone/80">
                  {p}
                </p>
              ))}
            </div>

            {tab.quote && (
              <figure className="mt-8 border-l-2 border-acid pl-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
                  Intercepted / Field Testimony
                </span>
                <blockquote className="mt-3 font-display text-xl uppercase leading-snug text-bone sm:text-2xl">
                  {tab.quote}
                </blockquote>
                <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-acid">
                  {quoteAttribution}
                </figcaption>
              </figure>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
