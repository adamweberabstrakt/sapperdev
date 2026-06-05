"use client";

import { type MotionValue } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import ScrollStory, { type Beat } from "@/components/scrollstory/ScrollStory";
import {
  PulseLine, IconNode, PulseNode, Reticle, Glyph, EntityCluster, TravelGlyph, Counter, Ripple, Tag,
  type Entity,
} from "@/components/scrollstory/atoms";

const { acid, steel, panel } = siteConfig.brandColors as Record<string, string>;

/* ------------------------------------------------------------------ layout */
const SITE = { x: 500, y: 300 };
const KDM = { x: 500, y: 462 };
const ENRICH = { x: 705, y: 300 };

// Outbound stack (left) — engages the known ICP.
const OUTBOUND = [
  { x: 95, y: 120, icon: "phone", label: "COLD CALL" },
  { x: 95, y: 240, icon: "at", label: "EMAIL" },
  { x: 95, y: 360, icon: "li", label: "LINKEDIN" },
  { x: 95, y: 480, icon: "mail", label: "DIRECT MAIL" },
] as const;

// Demand stack (right) — captures unknown audience to expand the ICP.
const DEMAND = [
  { x: 905, y: 120, icon: "content", label: "CONTENT" },
  { x: 905, y: 240, icon: "ads", label: "ADS" },
  { x: 905, y: 360, icon: "social", label: "SOCIAL" },
  { x: 905, y: 480, icon: "video", label: "VIDEO" },
] as const;

const VISITORS: Entity[] = [
  [380, 200], [560, 185], [635, 250], [650, 360], [560, 415], [405, 415], [345, 335], [610, 175], [455, 205],
].map(([ux, uy], id) => ({ id, ux, uy, good: true, gx: ux, gy: uy }));

const VISITOR_WINDOWS = {
  in: [0.16, 0.24] as [number, number],
  scatter: [0.16, 0.26] as [number, number],
  goodResolve: 0.3,
  badHold: 0.3,
  end: 0.4,
  acceptColor: [0.3, 0.38] as [number, number],
  rejectColor: [0.3, 0.38] as [number, number],
  rejectOut: [0.38, 0.4] as [number, number],
};

const BEATS: Beat[] = [
  { step: "01 / The Motion", title: "Two forces, one market.", line: "Demand gen runs two coordinated stacks at once: outbound working your known targets, and advertising capturing an audience that was never on your list.", win: [0.0, 0.14] },
  { step: "02 / Awareness", title: "Create the demand.", line: "Every touch drives activity to your site and builds awareness across the market — including buyers who weren't in your ICP yet.", win: [0.14, 0.26] },
  { step: "03 / Capture & Retarget", title: "Nobody leaves cold.", line: "Site visitors are captured into retargeting audiences. Ads keep working them while outbound stays in motion — no one slips away unengaged.", win: [0.26, 0.4] },
  { step: "04 / 18 Touches", title: "We stack them on purpose.", line: "It takes ~18 coordinated touch points, on average, before a senior decision-maker is ready to talk. We engineer those touches instead of hoping for them.", win: [0.4, 0.56] },
  { step: "05 / The Flywheel", title: "The audience compounds.", line: "Digital traffic gets enriched and matched to real buyers, who feed back into outbound — every cycle expands the ICP and sharpens the targeting.", win: [0.56, 0.78] },
  { step: "06 / Create the Right Time", title: "Not right-time. Right-time made.", line: "This isn't spray-and-pray hoping to catch someone ready. We create demand across the market, then capture it the moment intent appears.", win: [0.78, 1.0], cta: true },
];

/* --------------------------------------------------- brand-specific icons */
function TacticIcon({ name }: { name: string }) {
  switch (name) {
    case "phone":
      return (
        <g fill="none" stroke={acid} strokeWidth={2.5} strokeLinejoin="round">
          <rect x="-9" y="-15" width="18" height="30" rx="3" />
          <circle cx="0" cy="10" r="1.6" fill={acid} stroke="none" />
        </g>
      );
    case "at":
      return (
        <g fill="none" stroke={acid} strokeWidth={2.5}>
          <circle cx="0" cy="0" r="13" />
          <circle cx="2" cy="1" r="5" />
          <path d="M7,1 q5,1 5,-5" />
        </g>
      );
    case "li":
      return (
        <g>
          <rect x="-14" y="-14" width="28" height="28" rx="4" fill={acid} />
          <text x="0" y="6" textAnchor="middle" fontSize="15" fontWeight={700} fill={panel}>in</text>
        </g>
      );
    case "mail":
      return (
        <g fill="none" stroke={acid} strokeWidth={2.5} strokeLinejoin="round">
          <rect x="-15" y="-11" width="30" height="22" rx="2" />
          <path d="M-15,-8 L0,4 L15,-8" />
        </g>
      );
    case "content":
      return (
        <g fill="none" stroke={acid} strokeWidth={2.3} strokeLinejoin="round" strokeLinecap="round">
          <path d="M-11,-15 H6 L13,-8 V15 H-11 Z" />
          <path d="M6,-15 V-8 H13" />
          <line x1="-6" y1="-1" x2="8" y2="-1" />
          <line x1="-6" y1="5" x2="8" y2="5" />
          <line x1="-6" y1="11" x2="3" y2="11" />
        </g>
      );
    case "ads":
      return (
        <g>
          <rect x="-15" y="-12" width="30" height="24" rx="3" fill="none" stroke={acid} strokeWidth={2.3} />
          <text x="0" y="5" textAnchor="middle" fontSize="13" fontWeight={700} fill={acid}>AD</text>
        </g>
      );
    case "social":
      return (
        <g fill="none" stroke={acid} strokeWidth={2.3} strokeLinejoin="round">
          <path d="M0,12 C-15,2 -9,-13 0,-5 C9,-13 15,2 0,12 Z" />
        </g>
      );
    default: // video
      return (
        <g fill="none" stroke={acid} strokeWidth={2.3} strokeLinejoin="round">
          <rect x="-15" y="-12" width="30" height="24" rx="3" />
          <path d="M-4,-6 L8,0 L-4,6 Z" fill={acid} stroke="none" />
        </g>
      );
  }
}

const WebIcon = (
  <g fill="none" stroke={acid} strokeWidth="2">
    <circle cx="0" cy="0" r="13" />
    <ellipse cx="0" cy="0" rx="5.5" ry="13" />
    <line x1="-13" y1="0" x2="13" y2="0" />
    <line x1="-11" y1="-7" x2="11" y2="-7" />
    <line x1="-11" y1="7" x2="11" y2="7" />
  </g>
);

const Target = (
  <g fill="none" stroke={acid} strokeWidth="2">
    <circle cx="0" cy="0" r="7" />
    <circle cx="0" cy="0" r="2.5" fill={acid} stroke="none" />
  </g>
);

/* --------------------------------------------------------------- the scene */
function scene(progress: MotionValue<number>) {
  return (
    <>
      {/* convergence: both stacks drive into the site (dim once the counter beat starts) */}
      {OUTBOUND.map((t, i) => (
        <PulseLine key={`op${i}`} progress={progress} from={{ x: t.x, y: t.y }} to={SITE} appear={[0.06 + i * 0.01, 0.16]} dur={1.4 + i * 0.15} dim={{ at: [0.4, 0.48], to: 0.1 }} />
      ))}
      {DEMAND.map((t, i) => (
        <PulseLine key={`dp${i}`} progress={progress} from={{ x: t.x, y: t.y }} to={SITE} appear={[0.08 + i * 0.01, 0.18]} dur={1.5 + i * 0.15} dim={{ at: [0.4, 0.48], to: 0.1 }} />
      ))}

      {/* awareness */}
      <Ripple progress={progress} x={SITE.x} y={SITE.y} appear={[0.16, 0.24]} maxR={180} />
      <EntityCluster progress={progress} entities={VISITORS} center={SITE} windows={VISITOR_WINDOWS} />

      {/* retarget: ads re-engage visitors */}
      <PulseLine progress={progress} from={{ x: DEMAND[1].x, y: DEMAND[1].y }} to={{ x: 560, y: 415 }} appear={[0.3, 0.4]} dur={1.3} dim={{ at: [0.5, 0.58], to: 0.12 }} />

      {/* 18 touches on a focal decision-maker */}
      <PulseLine progress={progress} from={{ x: OUTBOUND[3].x, y: OUTBOUND[3].y }} to={KDM} appear={[0.42, 0.52]} dur={1.1} dim={{ at: [0.6, 0.66], to: 0.12 }} />
      <PulseLine progress={progress} from={{ x: DEMAND[3].x, y: DEMAND[3].y }} to={KDM} appear={[0.44, 0.52]} dur={1.2} dim={{ at: [0.6, 0.66], to: 0.12 }} />
      <TravelGlyph progress={progress} from={KDM} to={KDM} appear={[0.4, 0.46]} />
      <Counter progress={progress} x={SITE.x} y={70} to={18} at={[0.42, 0.54]} label="TOUCH POINTS" />
      <Reticle progress={progress} box={{ x1: 430, y1: 402, x2: 570, y2: 520 }} appear={[0.53, 0.6]} label="MEETING ACCEPTED" />

      {/* flywheel: digital → enrich → matched buyers feed back into outbound */}
      <PulseLine progress={progress} from={{ x: DEMAND[1].x, y: DEMAND[1].y }} to={ENRICH} appear={[0.58, 0.66]} dur={1.4} />
      <PulseLine progress={progress} from={ENRICH} to={{ x: OUTBOUND[0].x, y: OUTBOUND[0].y }} appear={[0.62, 0.72]} dur={1.9} bend={-170} />
      <TravelGlyph progress={progress} from={ENRICH} to={{ x: 95, y: 300 }} appear={[0.66, 0.78]} />
      <TravelGlyph progress={progress} from={ENRICH} to={{ x: 95, y: 360 }} appear={[0.7, 0.82]} />
      <PulseNode progress={progress} x={ENRICH.x} y={ENRICH.y} appear={[0.58, 0.66]} label="ENRICH → MATCH">{Target}</PulseNode>

      {/* site hub */}
      <PulseNode progress={progress} x={SITE.x} y={SITE.y} appear={[0.05, 0.13]} label="YOUR SITE">{WebIcon}</PulseNode>

      {/* tactic nodes */}
      {OUTBOUND.map((t, i) => (
        <IconNode key={`on${i}`} progress={progress} x={t.x} y={t.y} label={t.label} appear={[0.02 + i * 0.015, 0.12]}>
          <TacticIcon name={t.icon} />
        </IconNode>
      ))}
      {DEMAND.map((t, i) => (
        <IconNode key={`dn${i}`} progress={progress} x={t.x} y={t.y} label={t.label} appear={[0.04 + i * 0.015, 0.14]}>
          <TacticIcon name={t.icon} />
        </IconNode>
      ))}

      {/* create / capture framing */}
      <Tag progress={progress} x={905} y={560} appear={[0.8, 0.88]} text="CREATE DEMAND" />
      <Tag progress={progress} x={95} y={560} appear={[0.8, 0.88]} text="CAPTURE DEMAND" />
    </>
  );
}

/* ----------------------------------------------------------- static frames */
function box(cx: number, cy: number) {
  return <rect x={cx - 15} y={cy - 15} width={30} height={30} rx={6} fill={panel} stroke={acid} strokeWidth={2} />;
}

function staticScene(index: number) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" className="h-44 w-full" aria-hidden>
      {index === 0 && (
        <>
          {[60, 120, 180, 240].map((cy) => (
            <g key={`o${cy}`}>
              <line x1={50} y1={cy} x2={200} y2={150} stroke={acid} strokeOpacity={0.4} strokeWidth={1.5} strokeDasharray="4 6" />
              {box(50, cy)}
            </g>
          ))}
          {[60, 120, 180, 240].map((cy) => (
            <g key={`d${cy}`}>
              <line x1={350} y1={cy} x2={200} y2={150} stroke={acid} strokeOpacity={0.4} strokeWidth={1.5} strokeDasharray="4 6" />
              {box(350, cy)}
            </g>
          ))}
          <circle cx={200} cy={150} r={18} fill={panel} stroke={acid} strokeWidth={2} />
        </>
      )}
      {index === 1 && (
        <>
          {[40, 80, 120].map((r, i) => (
            <circle key={i} cx={200} cy={150} r={r} fill="none" stroke={acid} strokeOpacity={0.5 - i * 0.13} strokeWidth={1.5} />
          ))}
          <circle cx={200} cy={150} r={16} fill={panel} stroke={acid} strokeWidth={2} />
          {[[120, 90], [280, 100], [300, 200], [110, 210]].map(([cx, cy], i) => (
            <g key={i} transform={`translate(${cx},${cy}) scale(0.55)`}><Glyph color={acid} /></g>
          ))}
        </>
      )}
      {index === 2 && (
        <>
          {box(330, 60)}
          {[[140, 150], [200, 130], [250, 180]].map(([cx, cy], i) => (
            <g key={i}>
              <line x1={330} y1={60} x2={cx} y2={cy} stroke={acid} strokeOpacity={0.5} strokeWidth={1.5} strokeDasharray="4 6" />
              <g transform={`translate(${cx},${cy}) scale(0.6)`}><Glyph color={acid} /></g>
            </g>
          ))}
          <text x="200" y="270" textAnchor="middle" className="font-mono" fontSize="12" fill={steel} letterSpacing="2">RETARGETING</text>
        </>
      )}
      {index === 3 && (
        <>
          <text x="200" y="120" textAnchor="middle" className="font-display" fontSize="72" fill={acid}>18</text>
          <text x="200" y="145" textAnchor="middle" className="font-mono" fontSize="12" fill={steel} letterSpacing="2">TOUCH POINTS</text>
          <g transform="translate(200,200) scale(0.8)"><Glyph color={acid} /></g>
          <g stroke={acid} strokeWidth={2.5} fill="none">
            <path d="M150,175 V160 H165" /><path d="M235,160 H250 V175" />
            <path d="M150,235 V250 H165" /><path d="M250,235 V250 H235" />
          </g>
          <text x="200" y="278" textAnchor="middle" className="font-mono" fontSize="12" fill={acid} letterSpacing="2">MEETING ACCEPTED</text>
        </>
      )}
      {index === 4 && (
        <>
          {box(330, 150)}
          <circle cx={210} cy={150} r={16} fill={panel} stroke={acid} strokeWidth={2} />
          <line x1={330} y1={150} x2={226} y2={150} stroke={acid} strokeOpacity={0.5} strokeWidth={1.5} strokeDasharray="4 6" />
          <path d="M210,134 Q120,70 60,120" fill="none" stroke={acid} strokeOpacity={0.6} strokeWidth={1.5} strokeDasharray="5 6" />
          {box(60, 130)}
          {[[120, 150], [95, 110]].map(([cx, cy], i) => (
            <g key={i} transform={`translate(${cx},${cy}) scale(0.55)`}><Glyph color={acid} /></g>
          ))}
        </>
      )}
      {index === 5 && (
        <>
          {[80, 140, 200].map((cy) => box(40, cy))}
          {[80, 140, 200].map((cy) => box(360, cy))}
          <circle cx={200} cy={140} r={18} fill={panel} stroke={acid} strokeWidth={2} />
          <text x="360" y="250" textAnchor="middle" className="font-mono" fontSize="11" fill={acid} letterSpacing="1.5">CREATE</text>
          <text x="40" y="250" textAnchor="middle" className="font-mono" fontSize="11" fill={acid} letterSpacing="1.5">CAPTURE</text>
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ export */
export default function DemandGenScrollStory() {
  return (
    <ScrollStory
      label="Operation / Demand Engine"
      srHeading="How Sapper's demand generation engine works"
      beats={BEATS}
      scene={scene}
      staticScene={staticScene}
      staticTitle={<>Create demand. <span className="text-acid">Capture it.</span></>}
    />
  );
}
