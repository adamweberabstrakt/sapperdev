import Section from "@/components/ui/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";
import DemandGenScrollStory from "@/components/stories/DemandGenScrollStory";

export const metadata = {
  title: "Demand Generation",
  description:
    "Create demand with the right companies now, then capture it as pipeline the moment intent shows up — awareness, traffic, and outbound run as one coordinated engine.",
};

const PROCESS = [
  { n: "01", title: "Build awareness", desc: "Get your brand in front of the right companies through coordinated, multi-channel programs." },
  { n: "02", title: "Drive the right traffic", desc: "Pull high-fit companies to your site and content — not vanity clicks." },
  { n: "03", title: "Capture the intent", desc: "We identify the companies showing interest and turn that attention into named, reachable buyers." },
  { n: "04", title: "Convert to pipeline", desc: "Hand warm, in-market buyers to outbound and to your sales team as booked meetings." },
];

const BENEFITS = [
  "Demand created, not just harvested.",
  "Awareness that feeds your outbound, not a silo.",
  "High-fit traffic, not vanity metrics.",
  "A measurable line from attention to pipeline.",
];

const FAQS = [
  { q: "Is demand gen just ads?", a: "Ads are one input. Real demand generation coordinates content, channels, and outbound so attention actually becomes pipeline." },
  { q: "How fast does it work?", a: "Awareness compounds. Some intent converts quickly; the bigger payoff is a pipeline that keeps filling as the program runs." },
  { q: "How does this connect to outbound?", a: "Tightly. The companies we make aware and pull to your site become the enriched targets our outbound channels work." },
];

export default function DemandGen() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">Pipeline Engine / Demand Generation</p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.08s" }}>
            Create demand. Then <span className="text-acid">capture it.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/70 sm:text-xl animate-fade-up" style={{ animationDelay: "0.16s" }}>
            {"Most of your market is not ready to buy today. We build awareness with the right companies now, and turn that attention into pipeline the moment intent shows up."}
          </p>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.24s" }}><BookingButton>Book a strategy call</BookingButton></div>
        </div>
      </section>

      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">The Operation / How It Works</p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Attention into <span className="text-acid">pipeline.</span></h2>
        </AnimateIn>
        <div className="mt-12 grid gap-px border border-steel/20 bg-steel/20 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <AnimateIn key={p.n} delay={i * 0.08} className="h-full bg-ink">
              <div className="h-full bg-ink p-7">
                <span className="font-display text-4xl text-acid/30">{p.n}</span>
                <h3 className="mt-3 font-display text-lg uppercase text-bone">{p.title}</h3>
                <p className="mt-2 text-sm text-bone/65">{p.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* ===== DEMAND ENGINE SCROLL STORY ===== */}
      <DemandGenScrollStory />

      <section className="bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Why It Works</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Not a vanity <span className="text-acid">metric in sight.</span></h2>
          </AnimateIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <AnimateIn key={b} delay={i * 0.07}>
                <div className="flex h-full items-start gap-4 border-t-2 border-acid bg-ink p-6 ring-1 ring-steel/15">
                  <span className="font-mono text-acid">✓</span><span className="text-bone/85">{b}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <Section bg="ink">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Intel / FAQ</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Questions, <span className="text-acid">answered.</span></h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div>
              {FAQS.map((f) => (
                <details key={f.q} className="group border-t border-steel/20 py-5 last:border-b">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-xl uppercase text-bone">{f.q}</span>
                    <span className="font-mono text-2xl leading-none text-acid transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-bone/70">{f.a}</p>
                </details>
              ))}
            </div>
          </AnimateIn>
        </div>
      </Section>

      <section className="relative overflow-hidden border-t border-steel/20 bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Prepared for Exec Review</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">Build a pipeline that <span className="text-acid">keeps filling.</span></h2>
            <div className="mt-10"><BookingButton>Book a strategy call</BookingButton></div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
