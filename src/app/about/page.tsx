import Section from "@/components/ui/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";
import { SITE_STATS } from "@/lib/constants";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: "About",
  description:
    "Since day one, Sapper has redefined B2B prospecting — connecting businesses with their ideal buyers. A 400+ person, U.S.-based team in St. Louis booking 100,000+ meetings a year.",
};

const VALUES = [
  { title: "Precision", desc: "The right targets beat more targets. We obsess over list quality and ICP fit." },
  { title: "Coordination", desc: "Every channel moves together against the same buyers — never single-channel noise." },
  { title: "Transparency", desc: "A 24/7 portal, weekly updates, and full visibility. You always know what is working." },
  { title: "Results", desc: "We measure success in booked meetings and closed revenue — not activity." },
];

const TIMELINE = [
  { year: "Day One", text: "Founded to fix the hardest problem in B2B sales: consistent, predictable pipeline." },
  { year: "2021", text: "As spam filters tightened and inboxes crowded, Sapper joined forces with Abstrakt — adding scale, technology, and a true multi-channel motion." },
  { year: "Today", text: "2,000+ clients across 80+ industries in all 50 states, booked by a 400+ person, U.S.-based team in St. Louis." },
];

const WHY = [
  "100,000+ sales meetings booked every year.",
  "A forward-thinking approach built for today's harder outbound landscape.",
  "An unwavering commitment to value, trust, and measurable results.",
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">
            Field Manual / About Sapper
          </p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.08s" }}>
            Revolutionizing the way you <span className="text-acid">connect.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/70 sm:text-xl animate-fade-up" style={{ animationDelay: "0.16s" }}>
            {"Since day one, Sapper has redefined B2B prospecting — connecting businesses with their ideal buyers and booking thousands of real meetings. We do not just adapt to a harder outbound landscape. We out-target it."}
          </p>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.24s" }}>
            <BookingButton>Book a strategy call</BookingButton>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <Section bg="ink">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Our Mission</p>
            <h2 className="mt-5 font-display text-3xl uppercase leading-[0.98] sm:text-4xl">Connect you to the <span className="text-acid">accounts that matter.</span></h2>
            <p className="mt-5 text-bone/70">{"Connect businesses with their ideal prospects to drive real, measurable growth — by building the best target list in the market and running coordinated outreach against it."}</p>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Our Vision</p>
            <h2 className="mt-5 font-display text-3xl uppercase leading-[0.98] sm:text-4xl">Pipeline is <span className="text-acid">never the bottleneck.</span></h2>
            <p className="mt-5 text-bone/70">{"A world where any B2B team can reach the right decision-makers, predictably, without the guesswork — so growth stops being a gamble."}</p>
          </AnimateIn>
        </div>
      </Section>

      {/* VALUES */}
      <section className="bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">What We Stand For</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Our <span className="text-acid">values.</span></h2>
          </AnimateIn>
          <div className="mt-12 grid gap-px border border-steel/20 bg-steel/20 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.08} className="h-full bg-panel">
                <div className="h-full bg-panel p-7">
                  <span className="font-mono text-xs tracking-[0.2em] text-acid">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-2xl uppercase text-bone">{v.title}</h3>
                  <p className="mt-3 text-sm text-bone/65">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Our Story / After-Action</p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">The <span className="text-acid">trajectory.</span></h2>
        </AnimateIn>
        <div className="mt-12 border-l-2 border-steel/25 pl-8 sm:pl-10">
          {TIMELINE.map((t, i) => (
            <AnimateIn key={t.year} delay={i * 0.1}>
              <div className="relative pb-10 last:pb-0">
                <span className="absolute -left-[42px] sm:-left-[50px] mt-1 flex h-4 w-4 items-center justify-center">
                  <span className="h-3 w-3 rounded-full bg-acid ring-4 ring-ink" />
                </span>
                <p className="font-display text-3xl uppercase text-acid sm:text-4xl">{t.year}</p>
                <p className="mt-2 max-w-2xl text-bone/75">{t.text}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* WHY + STATS */}
      <section className="bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateIn>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Why Sapper</p>
              <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Proven. <span className="text-acid">At scale.</span></h2>
              <ul className="mt-8 space-y-5">
                {WHY.map((w) => (
                  <li key={w} className="flex gap-4 border-t border-steel/20 pt-5">
                    <span className="mt-1 font-mono text-acid">✓</span>
                    <span className="text-lg text-bone/85">{w}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn delay={0.12}>
              <div className="grid grid-cols-2 gap-px border border-steel/20 bg-steel/20">
                {SITE_STATS.map((s) => (
                  <div key={s.label} className="bg-ink p-8">
                    <p className="font-display text-4xl leading-none text-bone sm:text-5xl">
                      {s.num}<span className="text-acid">{s.suffix}</span>
                    </p>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-steel">{s.label}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* US-BASED / TEAM */}
      <section className="border-y border-steel/20 bg-ink text-bone">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">{siteConfig.location.basedIn} / {siteConfig.location.city}</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              {siteConfig.location.teamSize} strong. <span className="text-acid">All in {siteConfig.location.city}.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-bone/70">
              {`No offshore call center. Our ${siteConfig.location.teamSize} person team works from our ${siteConfig.location.city} office in ${siteConfig.location.region} — the people dialing, writing, and connecting on your behalf are right here.`}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Prepared for Exec Review</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">Let&apos;s get <span className="text-acid">acquainted.</span></h2>
            <div className="mt-10"><BookingButton>Book a strategy call</BookingButton></div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
