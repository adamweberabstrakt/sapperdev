import Section from "@/components/ui/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";

export const metadata = {
  title: "Account-Based Marketing",
  description:
    "Target the named accounts you actually want and reach every buyer inside them — direct mail, LinkedIn, email, and calls coordinated against one list until you are in the room.",
};

const PROCESS = [
  { n: "01", title: "Define the targets", desc: "We build your named-account list to a tight ICP — the companies worth winning, not a spray-and-pray universe." },
  { n: "02", title: "Map the committee", desc: "Identify every decision-maker and influencer inside each account, so no seat at the table goes untouched." },
  { n: "03", title: "Coordinate channels", desc: "Direct mail, LinkedIn, email, and calls move together against the same accounts — one message, many touches." },
  { n: "04", title: "Book & expand", desc: "Meetings land with the right people, and we keep working the account to expand once you are in." },
];

const BENEFITS = [
  "Focus spend on accounts that can actually close.",
  "Every buyer in the committee reached — not just one contact.",
  "One coordinated message across every channel.",
  "Built on enriched, verified account data.",
];

const FAQS = [
  { q: "How big should the account list be?", a: "ABM rewards focus. We would rather run a sharp list of high-fit accounts hard than spread thin across thousands." },
  { q: "How is this different from regular outreach?", a: "Regular outreach targets individuals. ABM targets whole companies — every relevant buyer inside an account, coordinated, until you land the meeting." },
  { q: "Do you work with our sales team?", a: "Yes. We hand off qualified meetings with full context and keep the account warm for expansion." },
];

export default function ABM() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">Coordinated Motion / ABM</p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.08s" }}>
            Win the accounts you <span className="text-acid">actually want.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/70 sm:text-xl animate-fade-up" style={{ animationDelay: "0.16s" }}>
            {"Pick the companies that matter, then hit every buyer inside them — across direct mail, LinkedIn, email, and the phone — with one coordinated message until you are in the room."}
          </p>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.24s" }}><BookingButton>Book a strategy call</BookingButton></div>
        </div>
      </section>

      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">The Operation / How It Works</p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Whole accounts, <span className="text-acid">not single contacts.</span></h2>
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
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Focus beats <span className="text-acid">volume.</span></h2>
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
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">Go win your <span className="text-acid">top accounts.</span></h2>
            <div className="mt-10"><BookingButton>Book a strategy call</BookingButton></div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
