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

/* ------------------------------------------------------------------ layout */
const CENTER = { x: 500, y: 300 };
const GC = { x: 515, y: 305 }; // verified-grid center (channel target)
const HUB = { x: 500, y: 178 }; // signal / KDM-match node

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

const CHANNELS = [
  { x: 150, y: 205, label: "DIRECT MAIL", icon: "mail" },
  { x: 850, y: 205, label: "LINKEDIN", icon: "li" },
  { x: 150, y: 405, label: "PHONE", icon: "phone" },
  { x: 850, y: 405, label: "EMAIL", icon: "at" },
] as const;

const SOURCES = [
  { x: 330, y: 84, label: "FORMS / MTGS", icon: "cal" },
  { x: 500, y: 70, label: "WEB VISITS", icon: "web" },
  { x: 670, y: 84, label: "SOCIAL", icon: "heart" },
] as const;

const RECRUITS = [
  { x: 715, y: 255, appear: [0.74, 0.86] as [number, number] },
  { x: 715, y: 355, appear: [0.79, 0.9] as [number, number] },
];

type Phase = { step: string; title: string; line: string; win: [number, number] };
const PHASES: Phase[] = [
  {
    step: "01 / The Perfect List",
    title: "It starts with the list.",
    line: "Every campaign begins with one precise, intent-built target list — not a bought-and-blasted database.",
    win: [0.0, 0.16],
  },
  {
    step: "02 / The Universe",
    title: "Map the whole market.",
    line: "We open it up into every potential buyer in your space — the full universe of in-market accounts.",
    win: [0.16, 0.3],
  },
  {
    step: "03 / Data Quality",
    title: "Cut everything that isn't real.",
    line: "Then we verify and filter. Bad data and bad-fit accounts are removed. Only real, reachable decision-makers survive.",
    win: [0.3, 0.46],
  },
  {
    step: "04 / Coordinated Motion",
    title: "Every channel. One list.",
    line: "Direct mail, LinkedIn, calls, and email pulse against the same verified decision-makers — one coordinated motion, not single-channel spray.",
    win: [0.46, 0.62],
  },
  {
    step: "05 / Always-On Recon",
    title: "The list feeds itself.",
    line: "Form fills, meeting bookings, site visits, and social signals reveal company intent. We research the buying committee and feed the right new decision-makers back into the list.",
    win: [0.62, 1.0],
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
function PersonShape() {
  return (
    <>
      <circle cx="0" cy="-9" r="9" fill="currentColor" />
      <path d="M-15,19 C-15,1 15,1 15,19 Z" fill="currentColor" />
    </>
  );
}
function PersonGlyph({ color = steel }: { color?: string }) {
  return (
    <g style={{ color }}>
      <PersonShape />
    </g>
  );
}

function Person({ p, progress }: { p: (typeof PERSONS)[number]; progress: MotionValue<number> }) {
  const kf = p.good ? [0.08, 0.2, 0.3, 0.4] : [0.08, 0.2, 0.32, 0.4];
  const xVal = p.good ? [CENTER.x, p.ux, p.ux, p.gx] : [CENTER.x, p.ux, p.ux, p.ux];
  const yVal = p.good ? [CENTER.y, p.uy, p.uy, p.gy] : [CENTER.y, p.uy, p.uy, p.uy + 260];
  const x = useTransform(progress, kf, xVal);
  const y = useTransform(progress, kf, yVal);
  const opacity = useTransform(
    progress,
    p.good ? [0.03, 0.12] : [0.03, 0.12, 0.34, 0.4],
    p.good ? [0, 1] : [0, 1, 1, 0]
  );
  const color = useTransform(
    progress,
    p.good ? [0.3, 0.38] : [0.28, 0.34],
    p.good ? [steel, acid] : [steel, danger]
  );
  return (
    <motion.g style={{ x, y, opacity, color }}>
      <PersonShape />
    </motion.g>
  );
}

function ListIcon({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.05, 0.14], [1, 0]);
  const scale = useTransform(progress, [0.05, 0.14], [1, 0.5]);
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

function PulseLine({
  progress, from, to, appear, dur = 1.6,
}: {
  progress: MotionValue<number>;
  from: { x: number; y: number };
  to: { x: number; y: number };
  appear: [number, number];
  dur?: number;
}) {
  const opacity = useTransform(progress, appear, [0, 1]);
  return (
    <motion.g style={{ opacity }}>
      <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={steel} strokeOpacity={0.3} strokeWidth={1.5} />
      <motion.line
        x1={from.x} y1={from.y} x2={to.x} y2={to.y}
        stroke={acid} strokeWidth={2.5} strokeLinecap="round" strokeDasharray="6 80"
        animate={{ strokeDashoffset: [86, 0] }}
        transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
      />
    </motion.g>
  );
}

function ChannelIcon({ name }: { name: string }) {
  if (name === "mail")
    return (
      <g fill="none" stroke={acid} strokeWidth={2.5} strokeLinejoin="round">
        <rect x="-15" y="-11" width="30" height="22" rx="2" />
        <path d="M-15,-8 L0,4 L15,-8" />
      </g>
    );
  if (name === "li")
    return (
      <g>
        <rect x="-14" y="-14" width="28" height="28" rx="4" fill={acid} />
        <text x="0" y="6" textAnchor="middle" fontSize="15" fontWeight={700} fill={panel}>in</text>
      </g>
    );
  if (name === "phone")
    return (
      <g fill="none" stroke={acid} strokeWidth={2.5} strokeLinejoin="round">
        <rect x="-9" y="-15" width="18" height="30" rx="3" />
        <circle cx="0" cy="10" r="1.6" fill={acid} stroke="none" />
      </g>
    );
  // at / email
  return (
    <g fill="none" stroke={acid} strokeWidth={2.5}>
      <circle cx="0" cy="0" r="13" />
      <circle cx="2" cy="1" r="5" />
      <path d="M7,1 q5,1 5,-5" />
    </g>
  );
}

function SourceIcon({ name }: { name: string }) {
  if (name === "cal")
    return (
      <g fill="none" stroke={acid} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="-12" y="-11" width="24" height="22" rx="2" />
        <line x1="-12" y1="-4" x2="12" y2="-4" />
        <line x1="-6" y1="-11" x2="-6" y2="-15" />
        <line x1="6" y1="-11" x2="6" y2="-15" />
        <path d="M-5,3 l3,4 l6,-8" />
      </g>
    );
  if (name === "web")
    return (
      <g fill="none" stroke={acid} strokeWidth={2.2} strokeLinejoin="round">
        <rect x="-13" y="-11" width="26" height="22" rx="2" />
        <line x1="-13" y1="-4" x2="13" y2="-4" />
        <circle cx="-9" cy="-7.5" r="1.2" fill={acid} stroke="none" />
        <path d="M-1,0 l9,4 l-3.5,1.4 l2,4 l-2.2,1 l-2,-4 l-3.3,2 z" fill={acid} stroke="none" />
      </g>
    );
  // heart / social
  return (
    <g fill="none" stroke={acid} strokeWidth={2.2} strokeLinejoin="round">
      <path d="M0,10 C-13,1 -8,-11 0,-4 C8,-11 13,1 0,10 Z" />
    </g>
  );
}

function IconNode({
  progress, x, y, label, appear, kind, name,
}: {
  progress: MotionValue<number>;
  x: number; y: number; label: string;
  appear: [number, number]; kind: "channel" | "source"; name: string;
}) {
  const opacity = useTransform(progress, appear, [0, 1]);
  const scale = useTransform(progress, appear, [0.6, 1]);
  return (
    <motion.g style={{ x, y, opacity, scale }}>
      <rect x="-27" y="-27" width="54" height="54" rx="10" fill={panel} stroke={acid} strokeWidth="2" />
      {kind === "channel" ? <ChannelIcon name={name} /> : <SourceIcon name={name} />}
      <text y="44" textAnchor="middle" className="font-mono" fontSize="13" fill={steel} letterSpacing="1.5">
        {label}
      </text>
    </motion.g>
  );
}

function SignalHub({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.66, 0.74], [0, 1]);
  const scale = useTransform(progress, [0.66, 0.74], [0.6, 1]);
  return (
    <motion.g style={{ x: HUB.x, y: HUB.y, opacity, scale }}>
      <motion.circle
        cx="0" cy="0" r="20" fill="none" stroke={acid} strokeWidth="2"
        animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
      />
      <circle cx="0" cy="0" r="20" fill={panel} stroke={acid} strokeWidth="2" />
      <circle cx="0" cy="0" r="7" fill="none" stroke={acid} strokeWidth="2" />
      <line x1="-12" y1="0" x2="-9" y2="0" stroke={acid} strokeWidth="2" />
      <line x1="9" y1="0" x2="12" y2="0" stroke={acid} strokeWidth="2" />
      <line x1="0" y1="-12" x2="0" y2="-9" stroke={acid} strokeWidth="2" />
      <line x1="0" y1="9" x2="0" y2="12" stroke={acid} strokeWidth="2" />
      <text y="40" textAnchor="middle" className="font-mono" fontSize="13" fill={steel} letterSpacing="1.5">
        SIGNAL → KDM
      </text>
    </motion.g>
  );
}

function Recruit({ progress, target, appear }: { progress: MotionValue<number>; target: { x: number; y: number }; appear: [number, number] }) {
  const [a, b] = appear;
  const x = useTransform(progress, [a, b], [HUB.x, target.x]);
  const y = useTransform(progress, [a, b], [HUB.y, target.y]);
  const opacity = useTransform(progress, [a, a + 0.03], [0, 1]);
  const color = useTransform(progress, [a + 0.04, b], [steel, acid]);
  return (
    <motion.g style={{ x, y, opacity, color }}>
      <PersonShape />
    </motion.g>
  );
}

function Caption({ progress, step, title, line, win }: Phase & { progress: MotionValue<number> }) {
  const [a, b] = win;
  const opacity = useTransform(progress, [a, a + 0.035, b - 0.045, b], [0, 1, 1, 0]);
  const y = useTransform(progress, [a, a + 0.05], [18, 0]);
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
    <section ref={ref} aria-hidden style={{ height: "560vh" }} className="relative bg-ink text-bone">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-tactical-grid opacity-60" />
        <CornerTicks />
        <p className="absolute left-4 top-8 z-10 font-mono text-[11px] uppercase tracking-[0.25em] text-acid sm:left-8">
          Operation / The Pursuit
        </p>

        <div className="absolute inset-0 z-0 flex items-center justify-center px-4">
          <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" className="h-full max-h-[66vh] w-full max-w-5xl">
            {/* connective pulse lines (behind) */}
            {CHANNELS.map((c, i) => (
              <PulseLine key={`cl${i}`} progress={scrollYProgress} from={{ x: c.x, y: c.y }} to={GC} appear={[0.44 + i * 0.015, 0.54]} dur={1.4 + i * 0.18} />
            ))}
            {SOURCES.map((s, i) => (
              <PulseLine key={`sl${i}`} progress={scrollYProgress} from={{ x: s.x, y: s.y }} to={HUB} appear={[0.64 + i * 0.015, 0.72]} dur={1.5 + i * 0.16} />
            ))}
            {RECRUITS.map((r, i) => (
              <PulseLine key={`rl${i}`} progress={scrollYProgress} from={HUB} to={{ x: r.x, y: r.y }} appear={[0.72 + i * 0.03, 0.8]} dur={1.6} />
            ))}

            <ListIcon progress={scrollYProgress} />
            {PERSONS.map((p) => (
              <Person key={p.id} p={p} progress={scrollYProgress} />
            ))}
            {RECRUITS.map((r, i) => (
              <Recruit key={`r${i}`} progress={scrollYProgress} target={{ x: r.x, y: r.y }} appear={r.appear} />
            ))}

            {/* nodes on top */}
            {CHANNELS.map((c, i) => (
              <IconNode key={`c${i}`} progress={scrollYProgress} x={c.x} y={c.y} label={c.label} name={c.icon} kind="channel" appear={[0.42 + i * 0.02, 0.5]} />
            ))}
            {SOURCES.map((s, i) => (
              <IconNode key={`s${i}`} progress={scrollYProgress} x={s.x} y={s.y} label={s.label} name={s.icon} kind="source" appear={[0.62 + i * 0.02, 0.7]} />
            ))}
            <SignalHub progress={scrollYProgress} />
          </svg>
        </div>

        <div className="absolute inset-x-0 bottom-16 z-10 mx-auto max-w-3xl px-4 sm:px-8">
          {PHASES.map((ph, i) => (
            <Caption key={i} progress={scrollYProgress} {...ph} />
          ))}
        </div>

        <motion.div style={{ scaleX: scrollYProgress }} className="absolute bottom-0 left-0 z-20 h-1 w-full origin-left bg-acid" />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- static fallback */
function StaticScene({ index }: { index: number }) {
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
        [[90, 90], [170, 70], [250, 95], [320, 75], [70, 165], [150, 150], [230, 170], [310, 155], [120, 235], [210, 230], [290, 235]].map(([cx, cy], i) => (
          <g key={i} transform={`translate(${cx},${cy}) scale(0.7)`}><PersonGlyph color={steel} /></g>
        ))}
      {index === 2 && (
        <>
          {[[120, 110], [200, 110], [280, 110], [120, 185], [200, 185], [280, 185]].map(([cx, cy], i) => (
            <g key={`g${i}`} transform={`translate(${cx},${cy}) scale(0.75)`}><PersonGlyph color={acid} /></g>
          ))}
          {[[150, 265], [250, 265]].map(([cx, cy], i) => (
            <g key={`b${i}`} transform={`translate(${cx},${cy}) scale(0.7)`} opacity={0.4}><PersonGlyph color={danger} /></g>
          ))}
        </>
      )}
      {index === 3 && (
        <>
          {[[60, 70], [340, 70], [60, 230], [340, 230]].map(([cx, cy], i) => (
            <g key={`l${i}`}>
              <line x1={cx} y1={cy} x2={200} y2={150} stroke={acid} strokeOpacity={0.5} strokeWidth={1.5} strokeDasharray="4 6" />
              <rect x={cx - 16} y={cy - 16} width={32} height={32} rx={6} fill={panel} stroke={acid} strokeWidth={2} />
            </g>
          ))}
          {[[170, 130], [230, 130], [170, 175], [230, 175]].map(([cx, cy], i) => (
            <g key={`g${i}`} transform={`translate(${cx},${cy}) scale(0.62)`}><PersonGlyph color={acid} /></g>
          ))}
        </>
      )}
      {index === 4 && (
        <>
          {[[110, 55], [200, 45], [290, 55]].map(([cx, cy], i) => (
            <g key={`s${i}`}>
              <line x1={cx} y1={cy} x2={200} y2={120} stroke={acid} strokeOpacity={0.5} strokeWidth={1.5} strokeDasharray="4 6" />
              <rect x={cx - 14} y={cy - 14} width={28} height={28} rx={6} fill={panel} stroke={acid} strokeWidth={2} />
            </g>
          ))}
          <circle cx={200} cy={120} r={15} fill={panel} stroke={acid} strokeWidth={2} />
          <line x1={200} y1={135} x2={270} y2={205} stroke={acid} strokeOpacity={0.5} strokeWidth={1.5} strokeDasharray="4 6" />
          {[[150, 215], [200, 215]].map(([cx, cy], i) => (
            <g key={`gg${i}`} transform={`translate(${cx},${cy}) scale(0.62)`}><PersonGlyph color={acid} /></g>
          ))}
          <g transform="translate(270,205) scale(0.62)"><PersonGlyph color={acid} /></g>
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
          How we build the <span className="text-acid">pipeline.</span>
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
