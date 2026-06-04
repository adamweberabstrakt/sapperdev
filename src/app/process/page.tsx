import Section from "@/components/ui/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";
import DataLoop from "@/components/process/DataLoop";

export const metadata = {
  title: "Process — The Data Loop",
  description:
    "We run a closed data loop: generate awareness and web traffic, capture and enrich the data it produces, and feed it into direct mail, LinkedIn, email, and cold calling. Every cycle makes the next one sharper.",
};

const EDGE = [
  { title: "Data quality", desc: "First-party, enriched data most in-house teams can't build or maintain — the foundation everything else runs on." },
  { title: "Coordinated, not siloed", desc: "Every channel works the same enriched list at once, instead of four disconnected tactics fighting for the same inbox." },
  { title: "A loop that compounds", desc: "Each pass generates more signal and more awareness — so every cycle outperforms the last." },
];

export default function Process() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">The System / Our Process</p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.08s" }}>
            One data loop. <span className="text-acid">Every channel sharper.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/70 sm:text-xl animate-fade-up" style={{ animationDelay: "0.16s" }}>
            {"We do not run tactics in silos. We run a closed loop — generating awareness and traffic, capturing and enriching the data it produces, and feeding it into every outbound channel. Each cycle makes the next one better."}
          </p>
        </div>
      </section>

      {/* DATA LOOP */}
      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">The Loop / Interactive</p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">How the <span className="text-acid">data loop</span> runs.</h2>
          <p className="mt-4 max-w-2xl text-bone/60">Select a stage to follow the cycle.</p>
        </AnimateIn>
        <div className="mt-12"><DataLoop /></div>
      </Section>

      {/* THE EDGE / SALES OPS */}
      <section className="bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">The Edge / Why It Compounds</p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              Outbound, run like <span className="text-acid">sales ops.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg text-bone/75">
              {"Most teams run direct mail, LinkedIn, email, and calling as disconnected tactics. We run them as one system feeding a single, enriched data core. The advantage is not any one channel — it is the quality of the data and the discipline to use it in ways an in-house team simply cannot staff for. Think less in-house SDR desk, more special-operations unit: a small, elite team turning outbound into a repeatable operation."}
            </p>
          </AnimateIn>
          <div className="mt-12 grid gap-px border border-steel/20 bg-steel/20 sm:grid-cols-3">
            {EDGE.map((e, i) => (
              <AnimateIn key={e.title} delay={i * 0.08} className="h-full bg-ink">
                <div className="h-full bg-ink p-7">
                  <span className="font-mono text-xs tracking-[0.2em] text-acid">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-2xl uppercase text-bone">{e.title}</h3>
                  <p className="mt-3 text-sm text-bone/65">{e.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-steel/20 bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Prepared for Exec Review</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">Put the loop on <span className="text-acid">your pipeline.</span></h2>
            <div className="mt-10"><BookingButton>Book a strategy call</BookingButton></div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
