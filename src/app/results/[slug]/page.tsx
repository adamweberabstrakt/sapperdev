import Link from "next/link";
import { notFound } from "next/navigation";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";
import { CASE_STUDIES_DETAILED } from "@/lib/caseStudies";

export function generateStaticParams() {
  return CASE_STUDIES_DETAILED.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = CASE_STUDIES_DETAILED.find((c) => c.slug === params.slug);
  if (!cs) return {};
  return {
    title: `${cs.industry} Case Study`,
    description: cs.summary,
  };
}

const BLOCKS = [
  { key: "challenge" as const, label: "The Challenge" },
  { key: "approach" as const, label: "The Operation" },
  { key: "result" as const, label: "The Result" },
];

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = CASE_STUDIES_DETAILED.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
          <Link
            href="/results"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel transition-colors hover:text-acid"
          >
            ← All Case Files
          </Link>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
            Case File / {cs.industry}
          </p>
          <p className="mt-4 font-display text-6xl text-acid sm:text-7xl">{cs.metric}</p>
          <h1 className="mt-4 font-display text-3xl uppercase leading-[0.95] sm:text-4xl">
            {cs.summary}
          </h1>
        </div>
      </section>

      {/* DETAIL BLOCKS */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-4xl space-y-12 px-4 py-20 sm:px-6 lg:px-8">
          {BLOCKS.map((b, i) => (
            <AnimateIn key={b.key} delay={i * 0.08}>
              <div className="border-l-2 border-acid pl-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
                  {b.label}
                </p>
                <p className="mt-3 text-lg text-bone/85">{cs[b.key]}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-steel/20 bg-panel text-bone">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl uppercase leading-[0.95] sm:text-5xl">
            Want results like <span className="text-acid">{cs.industry}?</span>
          </h2>
          <div className="mt-8">
            <BookingButton>Book a strategy call</BookingButton>
          </div>
        </div>
      </section>
    </>
  );
}
