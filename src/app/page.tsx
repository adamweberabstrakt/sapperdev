import Link from "next/link";
import Button from "@/components/ui/Button";
import BookingButton from "@/components/ui/BookingButton";
import Section from "@/components/ui/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import DossierCard from "@/components/home/DossierCard";
import { CASE_STUDIES } from "@/lib/constants";

export const metadata = {
  description:
    "Outbound B2B appointment setting built on a verified, intent-scored dream-ICP target list. One coordinated assault — calling, email, and LinkedIn — against your named decision-makers.",
};

const LIST_BULLETS = [
  "Cleansed, intent-sought, dream-ICP list. Not bought and cloned.",
  "Coordinated motion across every channel. Not single-channel spray.",
  "Decision-makers. Not gatekeepers.",
  "Brand-persona trust, built deliberately — so your buyers believe you.",
];

const STATS = [
  { num: "15", suffix: "+", label: "Years" },
  { num: "500K", suffix: "+", label: "Meetings Booked" },
  { num: "25M", suffix: "+", label: "Decision-Makers" },
  { num: "100", suffix: "s", label: "Industries" },
];

const CHANNELS = [
  {
    index: "01",
    title: "Structured Calling",
    href: "/b2b-cold-calling",
    desc: "Disciplined dials into the HIT list — decision-makers, not gatekeepers.",
  },
  {
    index: "02",
    title: "Cold Email Bursts",
    href: "/cold-email-marketing",
    desc: "Fast, campaign-based air cover that keeps the phone warm.",
  },
  {
    index: "03",
    title: "LinkedIn Personas",
    href: "/b2b-linkedin-outreach",
    desc: "Brand personas posting and connecting to build buyer trust.",
  },
  {
    index: "04",
    title: "Appointment Setting",
    href: "/b2b-appointment-setting",
    desc: "Every motion engineered toward one outcome: meetings on your calendar.",
  },
];

const ABM_STEPS = [
  { n: "01", title: "Pick the targets", desc: "You choose the dream accounts. The named list is the mission." },
  { n: "02", title: "Build the HIT list", desc: "We verify emails, identify mobiles, and score real intent." },
  { n: "03", title: "Coordinated assault", desc: "Calls, email, and LinkedIn fire against the same buyers." },
  { n: "04", title: "Meetings booked", desc: "Decision-makers land on your calendar — and the list is yours." },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">
            <span>Operation 001 / High Impact Target</span>
            <span className="hidden sm:inline">Internal // Sapper</span>
          </div>

          <h1
            className="mt-8 max-w-5xl font-display text-5xl uppercase leading-[0.92] sm:text-7xl lg:text-8xl animate-fade-up"
            style={{ animationDelay: "0.08s" }}
          >
            One coordinated assault on the{" "}
            <span className="text-acid">accounts</span> you&apos;ve always wanted.
          </h1>

          <p
            className="mt-8 max-w-2xl text-lg text-bone/70 sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.16s" }}
          >
            Outbound B2B appointment setting built on a dream-ICP target list
            that&apos;s verified, intent-scored, and impossible to copy. The list
            is the weapon — every channel fires at the same named decision-makers.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.24s" }}
          >
            <BookingButton>Book a strategy call</BookingButton>
            <Button href="/results" variant="outline-acid">See the results</Button>
          </div>

          <div
            className="mt-16 flex items-center gap-2 animate-fade-up"
            style={{ animationDelay: "0.32s" }}
          >
            <span className="h-1 w-8 bg-acid" />
            <span className="h-1 w-8 bg-acid" />
            <span className="h-1 w-8 bg-acid" />
            <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              High Impact Target
            </span>
          </div>
        </div>
      </section>

      {/* ===== THE LIST IS EVERYTHING ===== */}
      <Section bg="ink">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              Field Report / The List
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
              15 years of outbound.
              <br />
              One conclusion:
              <br />
              <span className="text-acid">The list is everything.</span>
            </h2>
            <ul className="mt-8 space-y-5">
              {LIST_BULLETS.map((b) => (
                <li key={b} className="flex gap-4">
                  <span className="mt-2.5 h-1 w-6 shrink-0 bg-acid" aria-hidden />
                  <span className="text-lg font-medium text-bone/90">{b}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn direction="left" delay={0.15}>
            <DossierCard />
          </AnimateIn>
        </div>
      </Section>

      {/* ===== AFTER ACTION / STATS ===== */}
      <section className="border-y border-steel/20 bg-ink text-bone">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
            After Action / 15 Years
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.1}>
                <p className="font-display text-5xl leading-none text-bone sm:text-6xl">
                  {s.num}
                  <span className="text-acid">{s.suffix}</span>
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                  {s.label}
                </p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COORDINATED MOTION / CHANNELS ===== */}
      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
            The Motion / Coordinated
          </p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
            Every channel. <span className="text-acid">One target list.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-bone/70">
            We don&apos;t spray one channel and hope. Calls, email, and LinkedIn
            fire in coordinated motion against the same named decision-makers — so
            your brand shows up everywhere they look.
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-px border border-steel/20 bg-steel/20 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c, i) => (
            <AnimateIn key={c.index} delay={i * 0.08} className="h-full bg-ink">
              <Link
                href={c.href}
                className="group block h-full bg-ink p-8 transition-colors hover:bg-panel"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-acid">
                  {c.index}
                </span>
                <h3 className="mt-4 font-display text-2xl uppercase text-bone">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-bone/65">{c.desc}</p>
                <span className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-steel transition-colors group-hover:text-acid">
                  Deploy →
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* ===== ACCOUNT-BASED MARKETING ===== */}
      <section className="bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              Account-Based / Named Targets
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              Account-based marketing,
              <br />
              <span className="text-acid">run like a hit list.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-bone/70">
              You name the accounts. We build the enriched HIT list around them —
              verified emails, identified mobiles, live intent signals — then run
              every channel against the same decision-makers until the meetings
              land. The enriched list is yours to keep, even if you stop here.
            </p>
          </AnimateIn>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ABM_STEPS.map((s, i) => (
              <AnimateIn key={s.n} delay={i * 0.1}>
                <span className="font-display text-5xl text-acid/30">{s.n}</span>
                <h3 className="mt-2 font-display text-xl uppercase text-bone">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-bone/65">{s.desc}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTS ===== */}
      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
            Proof / After-Action Reports
          </p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
            Missions on record.
          </h2>
        </AnimateIn>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {CASE_STUDIES.map((cs, i) => (
            <AnimateIn key={cs.industry} delay={i * 0.1}>
              <div className="h-full border-t-2 border-acid bg-panel p-8 ring-1 ring-steel/15">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                  {cs.industry}
                </p>
                <p className="mt-4 font-display text-4xl text-acid">{cs.metric}</p>
                <p className="mt-4 text-sm text-bone/70">
                  <span className="text-bone/50">Challenge: </span>
                  {cs.challenge}
                </p>
                <p className="mt-3 text-sm text-bone/85">{cs.result}</p>
              </div>
            </AnimateIn>
          ))}
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
              Ready to hit your <span className="text-acid">dream accounts?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-bone/70">
              One coordinated assault. One target list. Every channel pointed at
              the decision-makers you actually want.
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
