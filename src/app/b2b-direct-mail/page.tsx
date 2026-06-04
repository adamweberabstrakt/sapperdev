import Section from "@/components/ui/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";

export const metadata = {
  title: "B2B Direct Mail",
  description:
    "Targeted, data-driven B2B direct mail that cuts through digital noise and lands on the decision-maker's desk — synced with your email, LinkedIn, and calls.",
};

const PROCESS = [
  { n: "01", title: "Target the list", desc: "Mail goes only to high-fit, verified contacts — built from the same enriched data driving every other channel." },
  { n: "02", title: "Design the send", desc: "A piece worth opening, tied to your offer and timed to your outreach cadence." },
  { n: "03", title: "Land the desk", desc: "Physical mail reaches people screen fatigue has tuned out — and gets remembered." },
  { n: "04", title: "Follow through", desc: "We sync the mail with email, LinkedIn, and calls so the touch is reinforced, not isolated." },
];

const BENEFITS = [
  "Cuts through inbox and feed fatigue.",
  "Tangible and memorable — it gets kept.",
  "Targeted by the same data as the rest of your motion.",
  "Reinforced by digital follow-up, not standalone.",
];

const FAQS = [
  { q: "Is direct mail outdated?", a: "That is exactly why it works now. With everyone fighting for the inbox, a physical touch stands out and gets remembered." },
  { q: "Who do you mail?", a: "Only verified, high-fit contacts from your enriched target data — not a rented mailing list." },
  { q: "Does it work on its own?", a: "It works best coordinated. Mail opens the door; email, LinkedIn, and calls walk through it." },
];

export default function DirectMail() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">Physical Channel / Direct Mail</p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.08s" }}>
            The channel that beats the <span className="text-acid">inbox.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/70 sm:text-xl animate-fade-up" style={{ animationDelay: "0.16s" }}>
            {"A tangible, well-timed package cuts through the digital noise and lands on the decision-maker's desk — and it hits harder when it is synced with your email, LinkedIn, and calls."}
          </p>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.24s" }}><BookingButton>Book a strategy call</BookingButton></div>
        </div>
      </section>

      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">The Operation / How It Works</p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Mail with a <span className="text-acid">data edge.</span></h2>
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
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Tangible <span className="text-acid">cuts through.</span></h2>
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
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">Land on the <span className="text-acid">right desks.</span></h2>
            <div className="mt-10"><BookingButton>Book a strategy call</BookingButton></div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
