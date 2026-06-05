import { SITE_STATS } from "@/lib/constants";
import Link from "next/link";
import Section from "@/components/ui/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";
import VideoEmbed from "@/components/ui/VideoEmbed";
import { CASE_STUDIES_DETAILED, missionLabel } from "@/lib/caseStudies";

export const metadata = {
  title: "Results",
  description:
    "Real Sapper client results across 80+ industries: booked meetings, recurring revenue, and closed deals from coordinated outbound built on verified target lists.",
};

const STATS = SITE_STATS;

const TESTIMONIALS = [
  { quote: "Our ROI has continued to be above 5 to 1 on revenue to expenses — we are now in our fourth year.", name: "Gary S.", role: "Rick Consulting Partners" },
  { quote: "We are seeing a 4.5-month timeline to close in an industry with a 12–18 month average sales cycle.", name: "Ian M.", role: "COO, AM Data Service" },
  { quote: "A steady flow of quality contacts, excellent follow-through, and quick to realign to new target priorities.", name: "Alan M.", role: "President, TransportGistics" },
];

export default function Results() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">
            Dossier / After-Action Reports
          </p>
          <h1
            className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up"
            style={{ animationDelay: "0.08s" }}
          >
            Results, <span className="text-acid">on the record.</span>
          </h1>
          <p
            className="mt-8 max-w-2xl text-lg text-bone/70 sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.16s" }}
          >
            {"2,000+ clients across 80+ industries in all 50 states. These are real campaigns — the meetings we booked and the revenue they became."}
          </p>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.24s" }}>
            <BookingButton>Book a strategy call</BookingButton>
          </div>
        </div>
      </section>

      {/* ===== VIDEO ===== */}
      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
            Briefing / See It In Action
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl uppercase leading-[0.95] sm:text-4xl">
            How Sapper fills a pipeline.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.1} className="mt-8">
          <VideoEmbed id="GMiD_HGFi94" title="How Sapper fills a pipeline" />
        </AnimateIn>
      </Section>

      {/* ===== STATS ===== */}
      <section className="border-y border-steel/20 bg-ink text-bone">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          {STATS.map((s, i) => (
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

      {/* ===== CASE STUDY GRID ===== */}
      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
            Case Files / By Industry
          </p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
            Missions on <span className="text-acid">record.</span>
          </h2>
        </AnimateIn>

        {/* Featured interactive case file */}
        <AnimateIn delay={0.05}>
          <Link
            href="/results/team-logic-it"
            className="group mt-10 flex flex-col justify-between gap-6 border-t-2 border-acid bg-panel p-8 transition-colors hover:bg-panel/70 sm:flex-row sm:items-center"
          >
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">
                Featured Case File / Interactive
              </span>
              <h3 className="mt-3 font-display text-2xl uppercase leading-[0.98] sm:text-3xl">
                TeamLogic IT — 70% of annual sales from Sapper leads
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-bone/70">
                A managed IT franchise with no sales background — and how the operation landed its two highest-paying clients.
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-steel transition-colors group-hover:text-acid">
              Open the file →
            </span>
          </Link>
        </AnimateIn>

        <div className="mt-12 grid gap-px border border-steel/20 bg-steel/20 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES_DETAILED.map((cs, i) => (
            <AnimateIn key={cs.slug} delay={i * 0.07} className="h-full bg-ink">
              <Link
                href={`/results/${cs.slug}`}
                className="group flex h-full flex-col bg-ink p-8 transition-colors hover:bg-panel"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                  {missionLabel(cs)}
                </span>
                <p className="mt-4 font-display text-5xl text-acid">{cs.metric}</p>
                <p className="mt-4 flex-1 text-sm text-bone/70">{cs.summary}</p>
                <span className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-steel transition-colors group-hover:text-acid">
                  Read the file →
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              In Their Words
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              Why clients <span className="text-acid">stay.</span>
            </h2>
          </AnimateIn>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col border-t-2 border-acid bg-ink p-8 ring-1 ring-steel/15">
                  <blockquote className="text-bone/85">{t.quote}</blockquote>
                  <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
                    {t.name} — {t.role}
                  </figcaption>
                </figure>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden border-t border-steel/20 bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              Prepared for Exec Review
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">
              Your results, <span className="text-acid">next.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-bone/70">
              {"Bring us your dream accounts. We will build the list, run the motion, and book the meetings."}
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
