import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";
import { SITE_STATS } from "@/lib/constants";

export const metadata = {
  title: "Industries",
  description:
    "Northbound books meetings across 80+ industries. The HIT method — a verified, intent-scored dream-ICP list worked by every channel — adapts to the buyers and decision-makers in your vertical.",
};

const INDUSTRIES = [
  "Accounting", "Architecture", "Automotive", "Cleaning", "Construction",
  "Engineering", "Finance", "Flooring", "HVAC", "Insurance",
  "IT / MSP", "Landscaping", "LED Lighting", "Logistics", "Manufacturing",
  "Marketing Agencies", "Outsourced HR", "Painting", "Paving", "Roofing",
  "Security", "Software", "Solar", "Telecom",
];

export default function Industries() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">Target Map / Industries</p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.08s" }}>
            Your market. <span className="text-acid">Our target list.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/70 sm:text-xl animate-fade-up" style={{ animationDelay: "0.16s" }}>
            {"We book meetings across 80+ industries. The same HIT method — a verified, intent-scored dream-ICP list worked by every channel — adapts to the decision-makers and buying triggers in your vertical."}
          </p>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.24s" }}><BookingButton>Book a strategy call</BookingButton></div>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Verticals We Work</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Industries on <span className="text-acid">record.</span></h2>
          </AnimateIn>
          <div className="mt-12 grid grid-cols-2 gap-px border border-steel/20 bg-steel/20 sm:grid-cols-3 lg:grid-cols-4">
            {INDUSTRIES.map((name, i) => (
              <AnimateIn key={name} delay={(i % 8) * 0.04} className="h-full bg-ink">
                <div className="flex h-full items-center gap-3 bg-ink p-5">
                  <span className="font-mono text-[11px] text-acid/40">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-lg uppercase leading-tight text-bone">{name}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.1}>
            <p className="mt-8 max-w-2xl text-sm text-bone/55">
              {"Don't see yours? We've booked meetings in 80+ industries. If your buyers are B2B decision-makers, we can build the list."}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* PROOF */}
      <section className="border-y border-steel/20 bg-panel text-bone">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
          {SITE_STATS.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 0.07}>
              <p className="font-display text-4xl leading-none text-bone sm:text-5xl">{s.num}<span className="text-acid">{s.suffix}</span></p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-steel">{s.label}</p>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Prepared for Exec Review</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">Pursue buyers in <span className="text-acid">your vertical.</span></h2>
            <div className="mt-10"><BookingButton>Book a strategy call</BookingButton></div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
