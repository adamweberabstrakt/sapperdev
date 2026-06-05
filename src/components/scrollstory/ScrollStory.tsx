"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import BookingButton from "@/components/ui/BookingButton";

/* ------------------------------------------------------------------ types */
export type Beat = {
  step: string;
  title: string;
  line: string;
  /** Scroll-progress window [start, end] in 0..1 where this caption is shown. */
  win: [number, number];
  /** Render the CTA button on this beat. */
  cta?: boolean;
};

export type ScrollStoryProps = {
  /** Mono kicker label, e.g. "Operation / The Pursuit". */
  label: string;
  /** Heading announced to screen readers (the visual stage is decorative). */
  srHeading: string;
  beats: Beat[];
  /** Animated SVG scene; receives the shared scroll progress. */
  scene: (progress: MotionValue<number>) => ReactNode;
  /** One static frame per beat, for the no-motion / mobile / SSR fallback. */
  staticScene: (index: number) => ReactNode;
  /** Heading for the static fallback section. */
  staticTitle: ReactNode;
  viewBox?: string;
  heightVh?: number;
  ctaLabel?: string;
  onCta?: () => void;
};

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

const defaultCta = () => window.dispatchEvent(new CustomEvent("open-booking"));

/* ------------------------------------------------------------------ shared */
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

function Caption({
  progress, step, title, line, win, cta, ctaLabel, onCta,
}: Beat & { progress: MotionValue<number>; ctaLabel: string; onCta: () => void }) {
  const [a, b] = win;
  const opacity = useTransform(progress, [a, a + 0.03, b - 0.04, b], [0, 1, 1, 0]);
  const y = useTransform(progress, [a, a + 0.045], [18, 0]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-x-0 bottom-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid">{step}</p>
      <h3 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-bone sm:text-4xl">{title}</h3>
      <p className="mt-3 max-w-2xl text-bone/70">{line}</p>
      {cta && (
        <button
          type="button"
          tabIndex={-1}
          onClick={onCta}
          className="mt-6 inline-flex items-center gap-2 bg-acid px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-bone"
        >
          {ctaLabel}{" →"}
        </button>
      )}
    </motion.div>
  );
}

/* --------------------------------------------------------- animated story */
function AnimatedStory(p: Required<Pick<ScrollStoryProps, "label" | "srHeading" | "beats" | "scene" | "viewBox" | "heightVh" | "ctaLabel" | "onCta">>) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} style={{ height: `${p.heightVh}vh` }} className="relative bg-ink text-bone">
      <h2 className="sr-only">{p.srHeading}</h2>
      <ol className="sr-only">
        {p.beats.map((b, i) => (
          <li key={i}>{`${b.step}: ${b.title} ${b.line}`}</li>
        ))}
      </ol>

      <div className="sticky top-0 h-screen overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-tactical-grid opacity-60" />
        <CornerTicks />
        <p className="absolute left-4 top-8 z-10 font-mono text-[11px] uppercase tracking-[0.25em] text-acid sm:left-8">
          {p.label}
        </p>

        <div className="absolute inset-0 z-0 flex items-center justify-center px-4">
          <svg viewBox={p.viewBox} preserveAspectRatio="xMidYMid meet" className="h-full max-h-[66vh] w-full max-w-5xl">
            {p.scene(scrollYProgress)}
          </svg>
        </div>

        <div className="absolute inset-x-0 bottom-16 z-10 mx-auto max-w-3xl px-4 sm:px-8">
          {p.beats.map((b, i) => (
            <Caption key={i} progress={scrollYProgress} ctaLabel={p.ctaLabel} onCta={p.onCta} {...b} />
          ))}
        </div>

        <motion.div style={{ scaleX: scrollYProgress }} className="absolute bottom-0 left-0 z-20 h-1 w-full origin-left bg-acid" />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- static fallback */
function StaticStory(p: Required<Pick<ScrollStoryProps, "label" | "beats" | "staticScene" | "staticTitle" | "ctaLabel">>) {
  return (
    <section className="relative overflow-hidden bg-ink text-bone">
      <div className="absolute inset-0 bg-tactical-grid opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid">{p.label}</p>
        <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">{p.staticTitle}</h2>
        <ol className="mt-12 space-y-10">
          {p.beats.map((b, i) => (
            <li key={i} className="border-t border-steel/20 pt-8">
              {p.staticScene(i)}
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-acid">{b.step}</p>
              <h3 className="mt-3 font-display text-2xl uppercase leading-[0.95] text-bone sm:text-3xl">{b.title}</h3>
              <p className="mt-3 text-bone/70">{b.line}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 border-t border-steel/20 pt-10">
          <BookingButton>{p.ctaLabel}</BookingButton>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ engine */
export default function ScrollStory({
  label, srHeading, beats, scene, staticScene, staticTitle,
  viewBox = "0 0 1000 600",
  heightVh,
  ctaLabel = "Book a strategy call",
  onCta = defaultCta,
}: ScrollStoryProps) {
  const hydrated = useHydrated();
  const reduce = useReducedMotion();
  const compact = useMediaQuery("(max-width: 640px)");
  const height = heightVh ?? beats.length * 110;

  if (!hydrated || reduce || compact) {
    return <StaticStory label={label} beats={beats} staticScene={staticScene} staticTitle={staticTitle} ctaLabel={ctaLabel} />;
  }
  return (
    <AnimatedStory
      label={label} srHeading={srHeading} beats={beats} scene={scene}
      viewBox={viewBox} heightVh={height} ctaLabel={ctaLabel} onCta={onCta}
    />
  );
}
