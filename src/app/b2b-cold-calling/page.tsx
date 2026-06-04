import Link from "next/link";
import Section from "@/components/ui/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";

export const metadata = {
  title: "B2B Cold Calling",
  description:
    "Structured, sequenced B2B cold calling into a verified target list. Trained callers reach decision-makers, not gatekeepers — part of a coordinated outreach motion that books meetings.",
};

const PROCESS = [
  { n: "01", title: "Build the list", desc: "Verified direct dials and identified mobiles, cut to your exact ICP — not a bought list." },
  { n: "02", title: "Set the cadence", desc: "Sequenced, well-timed touches so prospects hear from you at the right moment, not at random." },
  { n: "03", title: "Real conversations", desc: "Trained callers carry your pitch and get past gatekeepers to the decision-maker." },
  { n: "04", title: "Book & hand off", desc: "Qualified meetings land on your calendar with full context for your closer." },
];

const BENEFITS = [
  "Decision-makers, not gatekeepers.",
  "A sequenced cadence that actually connects.",
  "Trained, professional callers carrying your message.",
  "One channel of a coordinated motion — synced with email and LinkedIn.",
];

const FAQS = [
  { q: "Who makes the calls?", a: "Trained outbound callers who learn your offer and your market — carrying your pitch, not a generic script." },
  { q: "How do you reach decision-makers?", a: "We dial verified direct lines and identified mobiles from a list cut to your ICP, with a cadence built to get past gatekeepers." },
  { q: "Is calling enough on its own?", a: "It works best as part of a coordinated motion. Calls hit harder when email and LinkedIn have already warmed the same named buyers." },
];

export default function ColdCalling() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">
            Engagement Channel / Cold Calling
          </p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.08s" }}>
            Cold calling that gets <span className="text-acid">real conversations.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/70 sm:text-xl animate-fade-up" style={{ animationDelay: "0.16s" }}>
            {"Sequenced, disciplined dials into a verified target list — straight to decision-makers, not gatekeepers. Every call is part of a coordinated motion, not a one-off blast."}
          </p>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.24s" }}>
            <BookingButton>Book a strategy call</BookingButton>
          </div>
        </div>
      </section>

      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">The Operation / How It Works</p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Four steps to a <span className="text-acid">live conversation.</span></h2>
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

      <section className="bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Why It Works</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Disciplined. <span className="text-acid">Not a boiler room.</span></h2>
          </AnimateIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <AnimateIn key={b} delay={i * 0.07}>
                <div className="flex h-full items-start gap-4 border-t-2 border-acid bg-ink p-6 ring-1 ring-steel/15">
                  <span className="font-mono text-acid">✓</span>
                  <span className="text-bone/85">{b}</span>
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
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">Put callers on your <span className="text-acid">best accounts.</span></h2>
            <div className="mt-10"><BookingButton>Book a strategy call</BookingButton></div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
