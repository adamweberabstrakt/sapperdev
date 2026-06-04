import { SITE_STATS } from "@/lib/constants";
import Section from "@/components/ui/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";
import DossierCard from "@/components/home/DossierCard";

export const metadata = {
  title: "Lead Qualification",
  description:
    "Speed-to-lead qualification with military precision. Sapper intercepts, identifies, scores, and qualifies every inbound lead against your ICP — so only confirmed, sales-ready targets reach your closers.",
};

const PROOF = SITE_STATS;

const PROCESS = [
  { n: "01", title: "Intercept", desc: "Every inbound lead is captured the moment it lands — forms, ads, chat, calls — around the clock." },
  { n: "02", title: "Identify", desc: "We enrich and verify who they really are: company, role, and fit against your ICP." },
  { n: "03", title: "Score", desc: "Real intent is separated from noise, so low-fit and junk never reach your team." },
  { n: "04", title: "Qualify", desc: "A fast human conversation confirms need, timing, and authority — not a bot, not a ticket." },
  { n: "05", title: "Route", desc: "Only confirmed, sales-ready targets reach your closers — booked straight to the calendar." },
];

const CRITERIA = [
  { title: "Fit", desc: "Does the company match your ideal client profile — industry, size, geography, tech?" },
  { title: "Intent", desc: "Are they actively researching, or just kicking tires? The signals decide." },
  { title: "Authority", desc: "Are we talking to a decision-maker, or a gatekeeper who cannot say yes?" },
  { title: "Timing", desc: "Is there a real window to buy — or is this a someday-maybe?" },
];

const LEAD_RECORD_ROWS = [
  { label: "Status", value: "QUALIFIED", verified: true },
  { label: "ICP Fit", value: "CONFIRMED", verified: true },
  { label: "Intent", value: "HIGH • ACTIVE" },
  { label: "Authority", value: "DECISION-MAKER", verified: true },
  { label: "Timing", value: "0–30 DAYS" },
  { label: "Routed To", value: "SALES • UNDER 5 MIN", verified: true },
];

const OUTCOMES = [
  "Your closers only meet real, ready buyers — no junk, no tire-kickers.",
  "No inbound lead goes cold in the gap between click and call.",
  "Ad spend is protected: low-intent traffic is filtered before it costs your team time.",
  "Every qualified lead is tracked, scored, and routed with a full record.",
];

const FAQS = [
  { q: "How fast do you respond to an inbound lead?", a: "Speed is the whole point. The goal is a first response in minutes, not days — the odds of qualifying a lead drop sharply the longer it sits untouched." },
  { q: "What makes a lead qualified?", a: "We confirm four things before anything reaches your closers: fit against your ICP, genuine intent, real timing, and decision-making authority. Miss the bar and it is not routed as sales-ready." },
  { q: "What happens to leads that do not qualify?", a: "They are not discarded — low-fit or early-stage leads are tagged and can be nurtured or recycled, while your reps stay focused on the ready ones." },
  { q: "Does this work with our CRM and forms?", a: "Yes. We plug into your inbound sources and CRM so qualified leads — with their full record — land where your team already works." },
  { q: "How does this help filter paid-traffic spam?", a: "Qualification is the filter. Low-intent and junk clicks never become sales tasks, so your team and your reporting reflect real, ready buyers." },
];

export default function LeadQualification() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">
            Service File / Lead Qualification
          </p>
          <h1
            className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up"
            style={{ animationDelay: "0.08s" }}
          >
            Lock onto real buyers.{" "}
            <span className="text-acid">Screen out the noise.</span>
          </h1>
          <p
            className="mt-8 max-w-2xl text-lg text-bone/70 sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.16s" }}
          >
            {"Every inbound lead is identified, verified, scored against your ICP, and qualified in minutes. Only confirmed, sales-ready targets reach your closers — everything else gets filtered before it wastes a second."}
          </p>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.24s" }}>
            <BookingButton>Book a strategy call</BookingButton>
          </div>
        </div>
      </section>

      {/* ===== SPEED-TO-LEAD BAND ===== */}
      <section className="border-y border-steel/20 bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              Speed-To-Lead / First Response
            </p>
            <h2 className="mt-5 max-w-4xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              First response in minutes. <span className="text-acid">Not days.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-bone/70">
              {"Most inbound dies in the gap between the click and the call. A lead that sits for a day is a lead that has already moved on. We close that gap — fast, every time — so intent never goes cold."}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
            The Operation / How It Works
          </p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
            Five steps. <span className="text-acid">Zero noise.</span>
          </h2>
        </AnimateIn>
        <div className="mt-12 grid gap-px border border-steel/20 bg-steel/20 md:grid-cols-2 lg:grid-cols-5">
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

      {/* ===== CRITERIA + DOSSIER ===== */}
      <section className="bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateIn>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
                Target Confirmation / Criteria
              </p>
              <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
                What we <span className="text-acid">confirm.</span>
              </h2>
              <div className="mt-8 grid gap-px border border-steel/20 bg-steel/20 sm:grid-cols-2">
                {CRITERIA.map((c) => (
                  <div key={c.title} className="bg-panel p-6">
                    <h3 className="font-display text-xl uppercase text-bone">{c.title}</h3>
                    <p className="mt-2 text-sm text-bone/65">{c.desc}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.15} className="lg:sticky lg:top-24">
              <DossierCard
                record="LEAD / TARGET CONFIRMATION"
                rows={LEAD_RECORD_ROWS}
                footnote="ROUTED TO YOUR CLOSERS — NOT YOUR TICKET QUEUE"
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== OUTCOMES ===== */}
      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
            The Payoff / Why It Matters
          </p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
            Closers close. <span className="text-acid">Noise gets filtered.</span>
          </h2>
        </AnimateIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {OUTCOMES.map((o, i) => (
            <AnimateIn key={o} delay={i * 0.07}>
              <div className="flex h-full items-start gap-4 border-t-2 border-acid bg-panel p-6 ring-1 ring-steel/15">
                <span className="font-mono text-acid">✓</span>
                <span className="text-bone/85">{o}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* ===== PROOF STRIP ===== */}
      <section className="border-y border-steel/20 bg-ink text-bone">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          {PROOF.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 0.1}>
              <p className="font-display text-4xl leading-none text-bone sm:text-5xl">
                {s.num}
                <span className="text-acid">{s.suffix}</span>
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                {s.label}
              </p>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <Section bg="ink">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              Intel / FAQ
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              Questions, <span className="text-acid">answered.</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div>
              {FAQS.map((f) => (
                <details key={f.q} className="group border-t border-steel/20 py-5 last:border-b">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-xl uppercase text-bone">{f.q}</span>
                    <span className="font-mono text-2xl leading-none text-acid transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-bone/70">{f.a}</p>
                </details>
              ))}
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden border-t border-steel/20 bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              Prepared for Exec Review
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">
              Stop losing leads <span className="text-acid">in the gap.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-bone/70">
              {"Put a precision qualification layer between your inbound and your closers — and only spend time on the buyers worth your team's attention."}
            </p>
            <div className="mt-10">
              <BookingButton>Book a strategy call</BookingButton>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
