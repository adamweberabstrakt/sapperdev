"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { siteConfig } from "@/config/site.config";

const { acid, steel, danger, panel } = siteConfig.brandColors as Record<string, string>;

/* ------------------------------------------------------------------ data */
const CENTER = { x: 500, y: 300 };

// [scatterX, scatterY, isGood]
const SCATTER: [number, number, boolean][] = [
  [180, 160, false], [300, 130, true], [430, 150, false], [560, 120, true],
  [690, 160, false], [820, 140, true], [150, 285, false], [290, 260, true],
  [470, 250, false], [620, 270, true], [770, 250, false], [860, 300, true],
  [210, 400, false], [360, 425, true], [520, 405, false], [665, 415, true],
];
const GRID: [number, number][] = [
  [380, 255], [470, 255], [560, 255], [650, 255],
  [380, 355], [470, 355], [560, 355], [650, 355],
];
let gi = 0;
const PERSONS = SCATTER.map(([ux, uy, good], id) => {
  const slot = good ? GRID[gi++] : null;
  return { id, ux, uy, good, gx: slot ? slot[0] : ux, gy: slot ? slot[1] : uy };
});

type Phase = { step: string; title: string; line: string; win: [number, number] };
const PHASES: Phase[] = [
  {
    step: "01 / The Perfect List",
    title: "It starts with the list.",
    line:
      "Every campaign begins with one precise, intent-built target list — not a bought-and-blasted database.",
    win: [0.0, 0.3],
  },
  {
    step: "02 / The Universe",
    title: "Map the whole market.",
    line:
      "We open it up into every potential buyer in your space — the full universe of in-market accounts.",
    win: [0.3, 0.52],
  },
  {
    step: "03 / Data Quality",
    title: "Cut everything that isn't real.",
    line:
      "Then we verify and filter. Bad data and bad-fit accounts are removed. Only real, reachable decision-makers survive.",
    win: [0.52, 1.0],
  },
];

/* ------------------------------------------------------------------ hooks */
function useHydrated() {
  const [h, setH] = useState(false);
  useEffect(() => setH(true), []);
  return h;
}
function useMediaQuery(q: string) {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [q]);
  return m;
}

/* --------------------------------------------------------------- svg bits */
function PersonGlyph({ color = steel }: { color?: string }) {
  return (
    <g style={{ color }}>
      <circle cx="0" cy="-9" r="9" fill="currentColor" />
      <path d="M-15,19 C-15,1 15,1 15,19 Z" fill="currentColor" />
    </g>
  );
}

function Person({ p, progress }: { p: (typeof PERSONS)[number]; progress: MotionValue<number> }) {
  const kf = p.good ? [0.12, 0.3, 0.55, 0.75] : [0.12, 0.3, 0.55, 0.72];
  const xVal = p.good ? [CENTER.x, p.ux, p.ux, p.gx] : [CENTER.x, p.ux, p.ux, p.ux];
  const yVal = p.good ? [CENTER.y, p.uy, p.uy, p.gy] : [CENTER.y, p.uy, p.uy, p.uy + 260];
  const x = useTransform(progress, kf, xVal);
  const y = useTransform(progress, kf, yVal);
  const opacity = useTransform(
    progress,
    p.good ? [0.04, 0.16] : [0.04, 0.16, 0.6, 0.74],
    p.good ? [0, 1] : [0, 1, 1, 0]
  );
  const color = useTransform(
    progress,
    p.good ? [0.46, 0.58] : [0.45, 0.53],
    p.good ? [steel, acid] : [steel, danger]
  );
  return (
    <motion.g style={{ x, y, opacity, color }}>
      <circle cx="0" cy="-9" r="9" fill="currentColor" />
      <path d="M-15,19 C-15,1 15,1 15,19 Z" fill="currentColor" />
    </motion.g>
  );
}

function ListIcon({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.06, 0.18], [1, 0]);
  const scale = useTransform(progress, [0.06, 0.18], [1, 0.5]);
  return (
    <motion.g style={{ x: CENTER.x, y: CENTER.y, opacity, scale }}>
      <rect x="-58" y="-76" width="116" height="152" rx="10" fill={panel} stroke={acid} strokeWidth="2.5" />
      {[-40, -12, 16, 44].map((yy) => (
        <g key={yy}>
          <rect x="-40" y={yy - 6} width="14" height="12" rx="2" fill={acid} />
          <rect x="-18" y={yy - 4} width="58" height="8" rx="4" fill={steel} />
        </g>
      ))}
    </motion.g>
  );
}

function Caption({ progress, step, title, line, win }: Phase & { progress: MotionValue<number> }) {
  const [a, b] = win;
  const opacity = useTransform(progress, [a, a + 0.04, b - 0.05, b], [0, 1, 1, 0]);
  const y = useTransform(progress, [a, a + 0.06], [18, 0]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-x-0 bottom-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid">{step}</p>
      <h3 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-bone sm:text-4xl">{title}</h3>
      <p className="mt-3 max-w-2xl text-bone/70">{line}</p>
    </motion.div>
  );
}

function CornerTicks() {
  return (
    <>
      <span className="absolute left-0 top-0 z-10 h-4 w-4 border-l-2 border-t-2 border-acid" />
      <span className="absolute right-0 top-0 z-10 h-4 w-4 border-r-2 border-t-2 border-acid" />
      <span className="absolute bottom-0 left-0 z-10 h-4 w-4 border-b-2 border-l-2 border-acid" />
      <span className="absolute bottom-0 right-0 z-10 h-4 w-4 border-b-2 border-r-2 border-acid" />
    </>
  );
}

/* --------------------------------------------------------- animated story */
function AnimatedStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} aria-hidden style={{ height: "320vh" }} className="relative bg-ink text-bone">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-tactical-grid opacity-60" />
        <CornerTicks />
        <p className="absolute left-4 top-8 z-10 font-mono text-[11px] uppercase tracking-[0.25em] text-acid sm:left-8">
          Operation / The Pursuit
        </p>

        <div className="absolute inset-0 z-0 flex items-center justify-center px-4">
          <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" className="h-full max-h-[64vh] w-full max-w-5xl">
            <ListIcon progress={scrollYProgress} />
            {PERSONS.map((p) => (
              <Person key={p.id} p={p} progress={scrollYProgress} />
            ))}
          </svg>
        </div>

        <div className="absolute inset-x-0 bottom-16 z-10 mx-auto max-w-3xl px-4 sm:px-8">
          {PHASES.map((ph, i) => (
            <Caption key={i} progress={scrollYProgress} {...ph} />
          ))}
        </div>

        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute bottom-0 left-0 z-20 h-1 w-full origin-left bg-acid"
        />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- static fallback */
function StaticScene({ index }: { index: number }) {
  // 1: list  2: neutral cloud  3: green grid + red removed
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" className="h-44 w-full" aria-hidden>
      {index === 0 && (
        <g transform="translate(200,150)">
          <rect x="-46" y="-62" width="92" height="124" rx="8" fill={panel} stroke={acid} strokeWidth="2.5" />
          {[-32, -8, 16, 40].map((yy) => (
            <g key={yy}>
              <rect x="-32" y={yy - 5} width="12" height="10" rx="2" fill={acid} />
              <rect x="-14" y={yy - 3} width="46" height="6" rx="3" fill={steel} />
            </g>
          ))}
        </g>
      )}
      {index === 1 &&
        [[90, 90], [170, 70], [250, 95], [320, 75], [70, 165], [150, 150], [230, 170], [310, 155], [120, 235], [210, 230], [290, 235]].map(
          ([cx, cy], i) => (
            <g key={i} transform={`translate(${cx},${cy}) scale(0.7)`}>
              <PersonGlyph color={steel} />
            </g>
          )
        )}
      {index === 2 && (
        <>
          {[[120, 110], [200, 110], [280, 110], [120, 185], [200, 185], [280, 185]].map(([cx, cy], i) => (
            <g key={`g${i}`} transform={`translate(${cx},${cy}) scale(0.75)`}>
              <PersonGlyph color={acid} />
            </g>
          ))}
          {[[150, 265], [250, 265]].map(([cx, cy], i) => (
            <g key={`b${i}`} transform={`translate(${cx},${cy}) scale(0.7)`} opacity={0.4}>
              <PersonGlyph color={danger} />
            </g>
          ))}
        </>
      )}
    </svg>
  );
}

function StaticStory() {
  return (
    <section className="relative overflow-hidden bg-ink text-bone">
      <div className="absolute inset-0 bg-tactical-grid opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid">Operation / The Pursuit</p>
        <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
          How we build the <span className="text-acid">list.</span>
        </h2>
        <ol className="mt-12 space-y-10">
          {PHASES.map((ph, i) => (
            <li key={i} className="border-t border-steel/20 pt-8">
              <StaticScene index={i} />
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-acid">{ph.step}</p>
              <h3 className="mt-3 font-display text-2xl uppercase leading-[0.95] text-bone sm:text-3xl">{ph.title}</h3>
              <p className="mt-3 text-bone/70">{ph.line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ export */
export default function MethodScrollStory() {
  const hydrated = useHydrated();
  const reduce = useReducedMotion();
  const compact = useMediaQuery("(max-width: 640px)");
  if (!hydrated || reduce || compact) return <StaticStory />;
  return <AnimatedStory />;
}
