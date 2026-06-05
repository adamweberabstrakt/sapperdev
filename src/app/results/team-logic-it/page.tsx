import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";
import CountUpGauge from "@/components/results/CountUpGauge";
import CaseFileTabs, { type CaseTab } from "@/components/results/CaseFileTabs";

export const metadata = {
  title: "TeamLogic IT Case Study — 70% of Annual Sales",
  description:
    "How a managed IT franchise with no sales background used Northbound to generate 70% of its annual sales and land its two highest-paying clients.",
};

const TAGS = ["Managed IT Services", "Portland, Oregon", "70+ Locations"];

const HIGHLIGHTS = [
  { num: "70%", label: "of annual sales from Northbound leads" },
  { num: "2", label: "highest-paying clients landed" },
  { num: "1", label: "dedicated point person" },
];

const TABS: CaseTab[] = [
  {
    id: "challenge",
    label: "The Challenge",
    body: [
      "TeamLogic IT is a managed services provider with 70+ U.S. locations — cloud, data backup, cybersecurity, and VOIP. Owner Dan Thomas is an IT expert, not a salesperson.",
      "When Dan opened his franchise, prospecting meant going door to door so people could see his face. It worked, but it was costly, slow, and impossible to scale. He came to Northbound skeptical that email could do any better.",
    ],
    quote: "Walking an office park has very little return. Email marketing is a lot more effective.",
  },
  {
    id: "why",
    label: "Why Northbound",
    body: [
      "Northbound became Dan's outsourced lead generation team — building a customized, data-driven outreach engine that put meetings with qualified prospects straight in his inbox.",
      "Instead of hiring full-time staff he didn't need, Dan paid for exactly the expertise he did: a pipeline that runs like a well-oiled machine.",
    ],
    quote: "There's no way I could hire an employee for that. I invest in Northbound instead.",
  },
  {
    id: "experience",
    label: "The Experience",
    body: [
      "Dan got one dedicated point person who knew him, his business, and his prospects — managing every campaign and acting as the voice of his company.",
      "That continuity built trust. Northbound's outreach landed him larger clients in his target market, including his two highest-paying accounts.",
    ],
    quote: "I couldn't have grown my business to where it is without Northbound.",
  },
];

export default function TeamLogicCaseStudy() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Link href="/results" className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel transition-colors hover:text-acid">
            ← Case Files
          </Link>
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <AnimateIn>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
                Case File / TeamLogic IT
              </p>
              <h1 className="mt-6 font-display text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
                70% of annual sales, <span className="text-acid">from Northbound leads.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-bone/70">
                An IT expert with no sales background opened a franchise — and Northbound&apos;s prospecting became the engine behind the majority of its revenue.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {TAGS.map((t) => (
                  <span key={t} className="border border-steel/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                    {t}
                  </span>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn delay={0.12}>
              <div className="border-t-2 border-acid bg-panel p-8 ring-1 ring-steel/20">
                <CountUpGauge value={70} suffix="%" label="of annual sales attributed to Northbound" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-y border-steel/20 bg-panel text-bone">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px border-steel/20 bg-steel/20 sm:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="bg-panel px-6 py-10 text-center">
              <p className="font-display text-5xl leading-none text-acid">{h.num}</p>
              <p className="mx-auto mt-3 max-w-[12rem] font-mono text-[11px] uppercase tracking-[0.18em] text-steel">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE CASE FILE */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Mission Debrief</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Open the <span className="text-acid">file.</span></h2>
            <p className="mt-4 max-w-2xl text-bone/60">Select a section to read the operation.</p>
          </AnimateIn>
          <div className="mt-10">
            <CaseFileTabs tabs={TABS} quoteAttribution="Dan Thomas — Owner, TeamLogic IT" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Your Operation Next</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">
              Put Northbound on <span className="text-acid">your pipeline.</span>
            </h2>
            <div className="mt-10"><BookingButton>Book a strategy call</BookingButton></div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
