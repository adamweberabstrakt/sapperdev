# ScrollStory framework

Reusable, scroll- or autoplay-driven SVG "explainer" animations that show how
services coordinate. One **engine** + a library of **scene atoms**; each story is
a small content file. Built once, reused across client sites and landing pages.

Live examples in this repo:

- `src/components/method/MethodScrollStory.tsx` — the Sapper "build the list" story (home + process).
- `src/components/stories/DemandGenScrollStory.tsx` — the two-stack Demand Gen story (`/demand-generation`).

---

## Architecture

| File | Role |
| --- | --- |
| `scrollstory/ScrollStory.tsx` | **Engine.** Pinned/autoplay stage, captions, progress bar, screen-reader summary, CTA, and the static (mobile / reduced-motion / SSR) fallback. Never edited per-story. |
| `scrollstory/atoms.tsx` | **Scene atoms.** Reusable motion primitives. Colors default to `siteConfig.brandColors`; positions/timing are props. |
| `method/…`, `stories/…` | **Stories.** Brand icons + layout data + beats + a `scene()` and `staticScene()`, handed to `<ScrollStory>`. |

The engine automatically renders a **static, captioned fallback** (and exposes a
screen-reader narrative) on phones (`<=640px`), with reduced-motion, and during
SSR — so every story is accessible and crawlable with zero extra work.

---

## Authoring a new story

1. Create `src/components/stories/MyServiceScrollStory.tsx` (`"use client"`).
2. Define **layout data** (node positions in a `0 0 1000 600` viewBox) and any
   **brand-specific icons** (small SVG components — these are content, not atoms).
3. Define **`beats`** (`Beat[]`): each has `step`, `title`, `line`, a `win`
   (`[start,end]` in 0..1 progress), and optional `cta`.
4. Write **`scene(progress)`** composing atoms (draw connectors/lines first so
   nodes sit on top). Stagger each atom's `appear` window to match its beat.
5. Write **`staticScene(index)`** — one simple static frame per beat for the fallback.
6. Export a component that returns `<ScrollStory ... />`.
7. Drop the component onto a page (after the hero is typical).

Keep density under control by letting earlier `PulseLine`s `dim` as later beats
arrive (see Demand Gen).

### Minimal example

```tsx
"use client";
import { type MotionValue } from "framer-motion";
import ScrollStory, { type Beat } from "@/components/scrollstory/ScrollStory";
import { IconNode, PulseLine } from "@/components/scrollstory/atoms";

const BEATS: Beat[] = [
  { step: "01 / Step", title: "Headline.", line: "Supporting line.", win: [0, 0.5] },
  { step: "02 / Step", title: "Payoff.", line: "Closing line.", win: [0.5, 1], cta: true },
];

function scene(p: MotionValue<number>) {
  return (
    <>
      <PulseLine progress={p} from={{ x: 150, y: 300 }} to={{ x: 500, y: 300 }} appear={[0.1, 0.3]} />
      <IconNode progress={p} x={150} y={300} label="SOURCE" appear={[0.05, 0.2]}>
        <circle r={12} fill="none" stroke="#B6F22B" strokeWidth={2} />
      </IconNode>
    </>
  );
}
function staticScene() { return <svg viewBox="0 0 400 300" className="h-44 w-full" />; }

export default function MyServiceScrollStory() {
  return (
    <ScrollStory
      label="Operation / My Service"
      srHeading="How my service works"
      beats={BEATS}
      scene={scene}
      staticScene={staticScene}
      staticTitle={<>My <span className="text-acid">service.</span></>}
    />
  );
}
```

---

## Engine props (`<ScrollStory>`)

| Prop | Required | Notes |
| --- | --- | --- |
| `label` | ✓ | Mono kicker, e.g. `"Operation / The Pursuit"`. |
| `srHeading` | ✓ | Heading announced to screen readers. |
| `beats` | ✓ | `Beat[]`. The number of beats sets default scroll height + autoplay duration. |
| `scene` | ✓ | `(progress) => ReactNode` — the animated SVG children. |
| `staticScene` | ✓ | `(index) => ReactNode` — one static frame per beat. |
| `staticTitle` | ✓ | Heading for the fallback section. |
| `viewBox` | | Defaults to `"0 0 1000 600"`. |
| `heightVh` | | Scroll mode height; defaults to `beats.length * 110`. |
| `ctaLabel` / `onCta` | | Defaults to `"Book a strategy call"` / opens the booking modal. |
| `trigger` | | `"scroll"` (default, marketing pages) or `"autoplay"` (PPC LPs). |
| `duration` | | Autoplay seconds; defaults to `beats.length * 1.8`. |

### Trigger modes

- **`scroll`** — a tall pinned section; the visitor scrubs the timeline by scrolling.
  Best for home/service/process pages.
- **`autoplay`** — a single-viewport section that plays once when scrolled into
  view (and replays on re-entry). Best for **PPC landing pages**, where you can't
  rely on a long scroll. Use fewer beats (2–4) and the CTA holds on the final beat.

---

## Atom catalog (`scrollstory/atoms.tsx`)

| Atom | Use |
| --- | --- |
| `PulseLine` | Connector with a faint base + animated pulse. `dim` quiets the pulse as a new flow appears; `bend` curves it (loop-backs); `color` overrides. |
| `IconNode` | Labeled square badge that scales in; pass the icon as `children`. |
| `PulseNode` | Circular hub with a pulsing ring; inner icon as `children`. |
| `Origin` | A source object that fades + shrinks away as entities emerge. |
| `Reticle` | A lock bracket around a box, with optional label. |
| `EntityCluster` | Entities emerge → scatter → filter (rejected fall away, accepted recolor + grid). Tunable via `accept`/`reject`/`windows`. The "universe → qualified" beat. |
| `TravelGlyph` | A glyph that travels A→B, recoloring on arrival. |
| `Counter` | Scroll-driven count-up over a window (e.g. "0 → 18"). |
| `Ripple` | Expanding concentric rings — reach / awareness. |
| `Tag` | Appear-gated mono label for in-scene callouts. |
| `Glyph` | Static glyph (used in fallback frames). |

Colors default to the brand config, so dropping a story onto another client site
is mostly a `siteConfig.brandColors` swap plus the brand-specific icons.
