"use client";

import { type MotionValue } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import ScrollStory, { type Beat } from "@/components/scrollstory/ScrollStory";
import {
  PulseLine, IconNode, PulseNode, Origin, Reticle, Glyph, EntityCluster, TravelGlyph,
  type Entity,
} from "@/components/scrollstory/atoms";

const { acid, steel, danger, panel } = siteConfig.brandColors as Record<string, string>;

/* ------------------------------------------------------------------ layout */
const HUB = { x: 500, y: 178 };
const GC = { x: 515, y: 305 };

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
const PERSONS: Entity[] = SCATTER.map(([ux, uy, good], id) => {
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
  { x: 715, y: 255, appear: [0.7, 0.8] as [number, number] },
  { x: 715, y: 355, appear: [0.74, 0.84] as [number, number] },
];

const BEATS: Beat[] = [
  { step: "01 / The Perfect List", title: "It starts with the list.", line: "Every campaign begins with one precise, intent-built target list — not a bought-and-blasted database.", win: [0.0, 0.14] },
  { step: "02 / The Universe", title: "Map the whole market.", line: "We open it up into every potential buyer in your space — the full universe of in-market accounts.", win: [0.14, 0.26] },
  { step: "03 / Data Quality", title: "Cut everything that isn't real.", line: "Then we verify and filter. Bad data and bad-fit accounts are removed. Only real, reachable decision-makers survive.", win: [0.26, 0.4] },
  { step: "04 / Coordinated Motion", title: "Every channel. One list.", line: "Direct mail, LinkedIn, calls, and email pulse against the same verified decision-makers — one coordinated motion, not single-channel spray.", win: [0.4, 0.56] },
  { step: "05 / Always-On Recon", title: "The list feeds itself.", line: "Form fills, meeting bookings, site visits, and social signals reveal company intent. We research the buying committee and feed the right new decision-makers back into the list.", win: [0.56, 0.78] },
  { step: "06 / The Pursuit", title: "A pipeline on a loop.", line: "Outbound motion and always-on recon run at once — a self-feeding pipeline that compounds, so qualified meetings keep landing on your calendar.", win: [0.78, 1.0], cta: true },
];

/* --------------------------------------------------- brand-specific icons */
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
  return (
    <g fill="none" stroke={acid} strokeWidth={2.2} strokeLinejoin="round">
      <path d="M0,10 C-13,1 -8,-11 0,-4 C8,-11 13,1 0,10 Z" />
    </g>
  );
}

const ListCard = (
  <>
    <rect x="-58" y="-76" width="116" height="152" rx="10" fill={panel} stroke={acid} strokeWidth="2.5" />
    {[-40, -12, 16, 44].map((yy) => (
      <g key={yy}>
        <rect x="-40" y={yy - 6} width="14" height="12" rx="2" fill={acid} />
        <rect x="-18" y={yy - 4} width="58" height="8" rx="4" fill={steel} />
      </g>
    ))}
  </>
);

const Crosshair = (
  <>
    <circle cx="0" cy="0" r="7" fill="none" stroke={acid} strokeWidth="2" />
    <line x1="-12" y1="0" x2="-9" y2="0" stroke={acid} strokeWidth="2" />
    <line x1="9" y1="0" x2="12" y2="0" stroke={acid} strokeWidth="2" />
    <line x1="0" y1="-12" x2="0" y2="-9" stroke={acid} strokeWidth="2" />
    <line x1="0" y1="9" x2="0" y2="12" stroke={acid} strokeWidth="2" />
  </>
);

/* --------------------------------------------------------------- the scene */
function scene(progress: MotionValue<number>) {
  return (
    <>
      {CHANNELS.map((c, i) => (
        <PulseLine key={`cl${i}`} progress={progress} from={{ x: c.x, y: c.y }} to={GC} appear={[0.44 + i * 0.015, 0.54]} dur={1.4 + i * 0.18} dim={{ at: [0.58, 0.66], to: 0.12 }} />
      ))}
      {SOURCES.map((s, i) => (
        <PulseLine key={`sl${i}`} progress={progress} from={{ x: s.x, y: s.y }} to={HUB} appear={[0.6 + i * 0.015, 0.68]} dur={1.5 + i * 0.16} />
      ))}
      {RECRUITS.map((r, i) => (
        <PulseLine key={`rl${i}`} progress={progress} from={HUB} to={{ x: r.x, y: r.y }} appear={[0.66 + i * 0.03, 0.74]} dur={1.6} />
      ))}

      <Origin progress={progress} x={500} y={300}>{ListCard}</Origin>
      <EntityCluster progress={progress} entities={PERSONS} />
      {RECRUITS.map((r, i) => (
        <TravelGlyph key={`r${i}`} progress={progress} from={HUB} to={{ x: r.x, y: r.y }} appear={r.appear} />
      ))}

      <Reticle progress={progress} box={{ x1: 350, y1: 222, x2: 748, y2: 392 }} appear={[0.82, 0.9]} label="PIPELINE ACTIVE" />

      {CHANNELS.map((c, i) => (
        <IconNode key={`c${i}`} progress={progress} x={c.x} y={c.y} label={c.label} appear={[0.42 + i * 0.02, 0.5]}>
          <ChannelIcon name={c.icon} />
        </IconNode>
      ))}
      {SOURCES.map((s, i) => (
        <IconNode key={`s${i}`} progress={progress} x={s.x} y={s.y} label={s.label} appear={[0.58 + i * 0.02, 0.66]}>
          <SourceIcon name={s.icon} />
        </IconNode>
      ))}
      <PulseNode progress={progress} x={HUB.x} y={HUB.y} appear={[0.62, 0.7]} label="SIGNAL → KDM">{Crosshair}</PulseNode>
    </>
  );
}

/* ----------------------------------------------------------- static frames */
function staticScene(index: number) {
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
          <g key={i} transform={`translate(${cx},${cy}) scale(0.7)`}><Glyph color={steel} /></g>
        ))}
      {index === 2 && (
        <>
          {[[120, 110], [200, 110], [280, 110], [120, 185], [200, 185], [280, 185]].map(([cx, cy], i) => (
            <g key={`g${i}`} transform={`translate(${cx},${cy}) scale(0.75)`}><Glyph color={acid} /></g>
          ))}
          {[[150, 265], [250, 265]].map(([cx, cy], i) => (
            <g key={`b${i}`} transform={`translate(${cx},${cy}) scale(0.7)`} opacity={0.4}><Glyph color={danger} /></g>
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
            <g key={`g${i}`} transform={`translate(${cx},${cy}) scale(0.62)`}><Glyph color={acid} /></g>
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
            <g key={`gg${i}`} transform={`translate(${cx},${cy}) scale(0.62)`}><Glyph color={acid} /></g>
          ))}
          <g transform="translate(270,205) scale(0.62)"><Glyph color={acid} /></g>
        </>
      )}
      {index === 5 && (
        <>
          <g stroke={acid} strokeWidth={2.5} fill="none">
            <path d="M70,86 V66 H90" />
            <path d="M310,66 H330 V86" />
            <path d="M70,214 V234 H90" />
            <path d="M330,214 V234 H310" />
          </g>
          {[[140, 120], [200, 120], [260, 120], [140, 180], [200, 180], [260, 180]].map(([cx, cy], i) => (
            <g key={`p${i}`} transform={`translate(${cx},${cy}) scale(0.62)`}><Glyph color={acid} /></g>
          ))}
          <text x="200" y="262" textAnchor="middle" className="font-mono" fontSize="13" fill={acid} letterSpacing="2">PIPELINE ACTIVE</text>
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ export */
export default function MethodScrollStory() {
  return (
    <ScrollStory
      label="Operation / The Pursuit"
      srHeading="How Sapper builds your pipeline"
      beats={BEATS}
      scene={scene}
      staticScene={staticScene}
      staticTitle={<>How we build the <span className="text-acid">pipeline.</span></>}
    />
  );
}
