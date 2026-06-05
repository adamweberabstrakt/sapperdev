"use client";

import { type ReactNode } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { siteConfig } from "@/config/site.config";

const C = siteConfig.brandColors as Record<string, string>;
const ACID = C.acid, STEEL = C.steel, DANGER = C.danger, PANEL = C.panel;

/* Shared glyph artwork (currentColor so callers control fill). */
function PersonPaths() {
  return (
    <>
      <circle cx="0" cy="-9" r="9" fill="currentColor" />
      <path d="M-15,19 C-15,1 15,1 15,19 Z" fill="currentColor" />
    </>
  );
}

/** Static glyph (used in fallback frames). */
export function Glyph({ shape = "person", color = STEEL }: { shape?: "person"; color?: string }) {
  return (
    <g style={{ color }}>
      <PersonPaths />
    </g>
  );
}

/* ----------------------------------------------------------- connectors */
/**
 * A connector with a faint static base + an animated traveling pulse.
 * `dim` fades the pulse down (base stays) so an earlier flow quiets as a new
 * one appears.
 */
export function PulseLine({
  progress, from, to, appear, dur = 1.6, dim, color = ACID,
}: {
  progress: MotionValue<number>;
  from: { x: number; y: number };
  to: { x: number; y: number };
  appear: [number, number];
  dur?: number;
  dim?: { at: [number, number]; to: number };
  color?: string;
}) {
  const baseOpacity = useTransform(progress, appear, [0, 0.3]);
  const pulseOpacity = useTransform(
    progress,
    dim ? [appear[0], appear[1], dim.at[0], dim.at[1]] : appear,
    dim ? [0, 1, 1, dim.to] : [0, 1]
  );
  return (
    <g>
      <motion.line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={STEEL} strokeWidth={1.5} style={{ opacity: baseOpacity }} />
      <motion.line
        x1={from.x} y1={from.y} x2={to.x} y2={to.y}
        stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeDasharray="6 80"
        style={{ opacity: pulseOpacity }}
        animate={{ strokeDashoffset: [86, 0] }}
        transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
      />
    </g>
  );
}

/* --------------------------------------------------------------- nodes */
/** A labeled square badge that scales/fades in over `appear`. Icon = children. */
export function IconNode({
  progress, x, y, label, appear, children,
}: {
  progress: MotionValue<number>;
  x: number; y: number; label: string; appear: [number, number]; children: ReactNode;
}) {
  const opacity = useTransform(progress, appear, [0, 1]);
  const scale = useTransform(progress, appear, [0.6, 1]);
  return (
    <motion.g style={{ x, y, opacity, scale }}>
      <rect x="-27" y="-27" width="54" height="54" rx="10" fill={PANEL} stroke={ACID} strokeWidth="2" />
      {children}
      <text y="44" textAnchor="middle" className="font-mono" fontSize="13" fill={STEEL} letterSpacing="1.5">{label}</text>
    </motion.g>
  );
}

/** A circular hub node with a continuously pulsing ring. Inner icon = children. */
export function PulseNode({
  progress, x, y, appear, label, children, r = 20,
}: {
  progress: MotionValue<number>;
  x: number; y: number; appear: [number, number]; label?: string; children?: ReactNode; r?: number;
}) {
  const opacity = useTransform(progress, appear, [0, 1]);
  const scale = useTransform(progress, appear, [0.6, 1]);
  return (
    <motion.g style={{ x, y, opacity, scale }}>
      <motion.circle cx="0" cy="0" r={r} fill="none" stroke={ACID} strokeWidth="2" animate={{ scale: [1, 1.9], opacity: [0.6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }} />
      <circle cx="0" cy="0" r={r} fill={PANEL} stroke={ACID} strokeWidth="2" />
      {children}
      {label && (
        <text y="40" textAnchor="middle" className="font-mono" fontSize="13" fill={STEEL} letterSpacing="1.5">{label}</text>
      )}
    </motion.g>
  );
}

/** An origin object (e.g. a source list) that fades + shrinks away. children = artwork. */
export function Origin({
  progress, x, y, fade = [0.05, 0.13], children,
}: {
  progress: MotionValue<number>;
  x: number; y: number; fade?: [number, number]; children: ReactNode;
}) {
  const opacity = useTransform(progress, fade, [1, 0]);
  const scale = useTransform(progress, fade, [1, 0.5]);
  return (
    <motion.g style={{ x, y, opacity, scale }}>
      {children}
    </motion.g>
  );
}

/** A reticle/bracket that locks around a bounding box, with optional label. */
export function Reticle({
  progress, box, appear, label, L = 26,
}: {
  progress: MotionValue<number>;
  box: { x1: number; y1: number; x2: number; y2: number };
  appear: [number, number]; label?: string; L?: number;
}) {
  const { x1, y1, x2, y2 } = box;
  const opacity = useTransform(progress, appear, [0, 1]);
  return (
    <motion.g style={{ opacity }}>
      <motion.g animate={{ opacity: [1, 0.45, 1] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} stroke={ACID} strokeWidth={2.5} fill="none">
        <path d={`M${x1},${y1 + L} V${y1} H${x1 + L}`} />
        <path d={`M${x2 - L},${y1} H${x2} V${y1 + L}`} />
        <path d={`M${x1},${y2 - L} V${y2} H${x1 + L}`} />
        <path d={`M${x2 - L},${y2} H${x2} V${y2 - L}`} />
      </motion.g>
      {label && (
        <text x={(x1 + x2) / 2} y={y2 + 26} textAnchor="middle" className="font-mono" fontSize="13" fill={ACID} letterSpacing="2">{label}</text>
      )}
    </motion.g>
  );
}

/* ------------------------------------------------------------ entities */
export type Entity = { id: number | string; ux: number; uy: number; good: boolean; gx: number; gy: number };

export type ClusterWindows = {
  in: [number, number];
  scatter: [number, number];
  goodResolve: number;
  badHold: number;
  end: number;
  acceptColor: [number, number];
  rejectColor: [number, number];
  rejectOut: [number, number];
};
const DEFAULT_WINDOWS: ClusterWindows = {
  in: [0.03, 0.12],
  scatter: [0.08, 0.2],
  goodResolve: 0.3,
  badHold: 0.32,
  end: 0.4,
  acceptColor: [0.3, 0.38],
  rejectColor: [0.28, 0.34],
  rejectOut: [0.34, 0.4],
};

function ClusterEntity({
  progress, e, center, w, accept, reject, dropY,
}: {
  progress: MotionValue<number>; e: Entity; center: { x: number; y: number };
  w: ClusterWindows; accept: string; reject: string; dropY: number;
}) {
  const kf = e.good ? [w.scatter[0], w.scatter[1], w.goodResolve, w.end] : [w.scatter[0], w.scatter[1], w.badHold, w.end];
  const xVal = e.good ? [center.x, e.ux, e.ux, e.gx] : [center.x, e.ux, e.ux, e.ux];
  const yVal = e.good ? [center.y, e.uy, e.uy, e.gy] : [center.y, e.uy, e.uy, e.uy + dropY];
  const x = useTransform(progress, kf, xVal);
  const y = useTransform(progress, kf, yVal);
  const opacity = useTransform(progress, e.good ? w.in : [w.in[0], w.in[1], w.rejectOut[0], w.rejectOut[1]], e.good ? [0, 1] : [0, 1, 1, 0]);
  const color = useTransform(progress, e.good ? w.acceptColor : w.rejectColor, e.good ? [STEEL, accept] : [STEEL, reject]);
  return (
    <motion.g style={{ x, y, opacity, color }}>
      <PersonPaths />
    </motion.g>
  );
}

/**
 * A cluster of entities that emerge from a center, scatter across the field,
 * then filter: rejected ones recolor + fall away, accepted ones recolor + snap
 * into a tidy grid. The core "universe → qualified list" beat.
 */
export function EntityCluster({
  progress, entities, center = { x: 500, y: 300 }, accept = ACID, reject = DANGER, dropY = 260, windows,
}: {
  progress: MotionValue<number>; entities: Entity[];
  center?: { x: number; y: number }; accept?: string; reject?: string; dropY?: number;
  windows?: Partial<ClusterWindows>;
}) {
  const w = { ...DEFAULT_WINDOWS, ...windows };
  return (
    <>
      {entities.map((e) => (
        <ClusterEntity key={e.id} progress={progress} e={e} center={center} w={w} accept={accept} reject={reject} dropY={dropY} />
      ))}
    </>
  );
}

/** A glyph that travels from `from` to `to`, recoloring as it arrives. */
export function TravelGlyph({
  progress, from, to, appear, fromColor = STEEL, toColor = ACID,
}: {
  progress: MotionValue<number>;
  from: { x: number; y: number }; to: { x: number; y: number };
  appear: [number, number]; fromColor?: string; toColor?: string;
}) {
  const [a, b] = appear;
  const x = useTransform(progress, [a, b], [from.x, to.x]);
  const y = useTransform(progress, [a, b], [from.y, to.y]);
  const opacity = useTransform(progress, [a, a + 0.03], [0, 1]);
  const color = useTransform(progress, [a + 0.04, b], [fromColor, toColor]);
  return (
    <motion.g style={{ x, y, opacity, color }}>
      <PersonPaths />
    </motion.g>
  );
}
