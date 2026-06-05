"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useInView,
  animate,
  type MotionValue,
} from "framer-motion";
import BookingButton from "@/components/ui/BookingButton";

/* ------------------------------------------------------------------ types */
export type Beat = {
  step: string;
  title: string;
  line: string;
  /** Progress window [start, end] in 0..1 where this caption shows. */
  win: [number, number];
  cta?: boolean;
};

export type ScrollStoryProps = {
  label: string;
  srHeading: string;
  beats: Beat[];
  scene: (progress: MotionValue<number>) => ReactNode;
  staticScene: (index: number) => ReactNode;
  staticTitle: ReactNode;
  viewBox?: string;
  heightVh?: number;
  ctaLabel?: string;
  onCta?: () => void;
  /** "scroll" pins and scrubs on scroll (marketing pages); "autoplay" plays
   *  once when scrolled into view (PPC landing pages). */
  trigger?: "scroll" | "autoplay";
  /** Autoplay duration in seconds (defaults to ~1.8s per beat). */
  duration?: number;
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
  progress, step, title, line, win, cta, ctaLabel, onCta, last,
}: Beat & { progress: MotionValue<number>; ctaLabel: string; onCta: () => void; last: boolean }) {
  const [a, b] = win;
  // The final beat holds (doesn't fade out) so the CTA stays put at the end.
  const opacity = useTransform(
    progress,
    last ? [a, a + 0.03] : [a, a + 0.03, b - 0.04, b],
    last ? [0, 1] : [0, 1, 1, 0]
  );
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

type StageConfig = {
  label: string; beats: Beat[]; viewBox: string;
  scene: (p: MotionValue<number>) => ReactNode; ctaLabel: string; onCta: () => void;
};
type StageProps = StageConfig & { progress: MotionValue<number> };

/** The visual stage; shared by both trigger modes. */
function StageInner({ progress, label, beats, viewBox, scene, ctaLabel, onCta }: StageProps) {
  return (
    <>
      <div className="absolute inset-0 bg-tactical-grid opacity-60" />
      <CornerTicks />
      <p className="absolute left-4 top-8 z-10 font-mono text-[11px] uppercase tracking-[0.25em] text-acid sm:left-8">
        {label}
      </p>

      <div className="absolute inset-0 z-0 flex items-center justify-center px-4">
        <svg viewBox={viewBox} preserveAspectRatio="xMidYMid meet" className="h-full max-h-[66vh] w-full max-w-5xl">
          {scene(progress)}
        </svg>
      </div>

      <div className="absolute inset-x-0 bottom-16 z-10 mx-auto max-w-3xl px-4 sm:px-8">
        {beats.map((b, i) => (
          <Caption key={i} progress={progress} ctaLabel={ctaLabel} onCta={onCta} last={i === beats.length - 1} {...b} />
        ))}
      </div>

      <motion.div style={{ scaleX: progress }} className="absolute bottom-0 left-0 z-20 h-1 w-full origin-left bg-acid" />
    </>
  );
}

function SrNarrative({ srHeading, beats }: { srHeading: string; beats: Beat[] }) {
  return (
    <>
      <h2 className="sr-only">{srHeading}</h2>
      <ol className="sr-only">
        {beats.map((b, i) => (
          <li key={i}>{`${b.step}: ${b.title} ${b.line}`}</li>
        ))}
      </ol>
    </>
  );
}

/* ------------------------------------------------------------ scroll mode */
function ScrollStage(p: StageConfig & { srHeading: string; heightVh: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <section ref={ref} style={{ height: `${p.heightVh}vh` }} className="relative bg-ink text-bone">
      <SrNarrative srHeading={p.srHeading} beats={p.beats} />
      <div className="sticky top-0 h-screen overflow-hidden" aria-hidden>
        <StageInner {...p} progress={scrollYProgress} />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- autoplay mode */
function AutoplayStage(p: StageConfig & { srHeading: string; duration: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const progress = useMotionValue(0);
  useEffect(() => {
    if (inView) {
      const controls = animate(progress, 1, { duration: p.duration, ease: "linear" });
      return () => controls.stop();
    }
    progress.set(0);
  }, [inView, p.duration, progress]);
  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-ink text-bone">
      <SrNarrative srHeading={p.srHeading} beats={p.beats} />
      <div className="absolute inset-0" aria-hidden>
        <StageInner {...p} progress={progress} />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- static fallback */
function StaticStory(p: { label: string; beats: Beat[]; staticScene: (i: number) => ReactNode; staticTitle: ReactNode; ctaLabel: string }) {
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
  trigger = "scroll",
  duration,
}: ScrollStoryProps) {
  const hydrated = useHydrated();
  const reduce = useReducedMotion();
  const compact = useMediaQuery("(max-width: 640px)");

  if (!hydrated || reduce || compact) {
    return <StaticStory label={label} beats={beats} staticScene={staticScene} staticTitle={staticTitle} ctaLabel={ctaLabel} />;
  }

  const stage = { label, beats, viewBox, scene, ctaLabel, onCta };
  if (trigger === "autoplay") {
    return <AutoplayStage {...stage} srHeading={srHeading} duration={duration ?? beats.length * 1.8} />;
  }
  return <ScrollStage {...stage} srHeading={srHeading} heightVh={heightVh ?? beats.length * 110} />;
}
