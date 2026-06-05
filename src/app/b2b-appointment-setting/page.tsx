import { SITE_STATS } from "@/lib/constants";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BookingButton from "@/components/ui/BookingButton";
import Section from "@/components/ui/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import DossierCard from "@/components/home/DossierCard";

export const metadata = {
  title: "B2B Appointment Setting",
  description:
    "B2B appointment setting built on verified, intent-scored target lists. Northbound books qualified, ICP-fit meetings to your calendar through coordinated calling, email, LinkedIn, and direct mail.",
};

const PROOF = SITE_STATS;

const DIFFERENTIATORS = [
  "Verified, intent-scored target lists — not bought and cloned.",
  "Coordinated multi-channel motion — not single-channel spray.",
  "Decision-makers booked — not gatekeepers, not tire-kickers.",
];

const LIST_RECORD_ROWS = [
  { label: "ICP Fit", value: "98% MATCH", verified: true },
  { label: "Title", value: "VP, OPERATIONS" },
  { label: "Direct Email", value: "VERIFIED", verified: true },
  { label: "Mobile", value: "IDENTIFIED", verified: true },
  { label: "Intent Signal", value: "ACTIVE • 9D" },
  { label: "Source", value: "ENRICHED • QA-PASSED" },
];

const LIST_PIPELINE = [
  { step: "Source", desc: "Tap a proprietary platform of 125M+ business records." },
  { step: "Define ICP", desc: "Filter by industry, geography, revenue, headcount, tech stack, and role." },
  { step: "Enrich", desc: "Append and verify direct emails; identify mobile numbers." },
  { step: "Score intent", desc: "Layer buying signals so you hit accounts already in motion." },
  { step: "Cleanse", desc: "Suppress dupes, bad data, and do-not-contacts before a single touch." },
  { step: "Human QA", desc: "A person checks the list — because clean data is the whole game." },
];

const PROCESS = [
  { n: "01", title: "Targeted audience development", desc: "We build a hyper-targeted list from 125M+ records — industry, geography, revenue, and more." },
  { n: "02", title: "Custom, personalized outreach", desc: "AI tooling plus expert copywriting craft messages that cut through the noise." },
  { n: "03", title: "Multi-channel engagement", desc: "Direct mail, email, phone, and LinkedIn move in coordinated motion at the same buyers." },
  { n: "04", title: "Real-time reporting", desc: "A 24/7 portal and a weekly video from your account manager keep everything transparent." },
  { n: "05", title: "Qualified meetings booked", desc: "We book and confirm meetings to your calendar — and work free until we hit the promised number." },
];

const CHANNELS = [
  { index: "01", title: "Structured Calling", href: "/b2b-cold-calling", desc: "Sequenced, disciplined dials that reach real decision-makers." },
  { index: "02", title: "Cold Email", href: "/cold-email-marketing", desc: "Spam-free, custom email built for deliverability and engagement." },
  { index: "03", title: "LinkedIn", href: "/b2b-linkedin-outreach", desc: "Brand-persona messaging that brings your name to life with buyers." },
  { index: "04", title: "Direct Mail", href: "/contact", desc: "Memorable physical touches that skip the inbox and land where it counts." },
];

const DELIVERABLES = [
  "Exclusive, qualified appointments booked to your calendar",
  "A dedicated outbound team and account manager",
  "Coordinated email, calling, LinkedIn, and direct mail",
  "24/7 results portal — leads, content approval, performance, schedule",
  "A weekly video walkthrough of your campaign",
  "Landing page and sales assets to support the motion",
];

const TESTIMONIALS = [
  { quote: "Our ROI has continued to be above 5 to 1 on revenue to expenses — we are now in our fourth year.", name: "Gary S.", role: "Rick Consulting Partners" },
  { quote: "We are seeing a 4.5-month timeline to close in an industry with a 12–18 month average sales cycle.", name: "Ian M.", role: "COO, AM Data Service" },
  { quote: "A steady flow of quality contacts, excellent follow-through, and quick to realign to new target priorities.", name: "Alan M.", role: "President, TransportGistics" },
];

const METRICS = [
  { metric: "$360K", label: "3-year cybersecurity contract from early meetings" },
  { metric: "$212K", label: "yearly recurring IT/MSP business in year one" },
  { metric: "31", label: "manufacturing meetings to 3 deals in 5 months" },
];

const FAQS = [
  { q: "What makes your lists better than a bought list?", a: "We start from a proprietary platform of 125M+ records, filter to your exact ICP, then enrich and verify every contact — direct emails confirmed, mobiles identified, intent scored, and duplicates and bad data suppressed. The list is built for you, not bought and cloned." },
  { q: "How do you keep email deliverability high?", a: "Clean, verified data plus personalized, value-led messaging and disciplined sending practices keep us out of spam folders and in front of the people who matter." },
  { q: "Why combine direct mail with digital channels?", a: "Direct mail is a tangible, memorable touch that complements email, phone, and LinkedIn. Coordinated across channels, it lifts engagement and keeps your brand top of mind." },
  { q: "What kind of results should I expect?", a: "Clients routinely see strong ROI and shortened sales cycles. Results vary by market, but the model is built to put qualified, ICP-fit meetings on your calendar consistently." },
  { q: "Is there a guarantee?", a: "Yes. We commit to a promised number of meetings — and if we fall short, we keep working at no additional cost until we hit it." },
  { q: "How fast can we launch?", a: "After a short onboarding to lock your ICP, messaging, and list, campaigns typically go live within weeks." },
];

export default function AppointmentSetting() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">
            Service File / Appointment Setting
          </p>
          <h1
            className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up"
            style={{ animationDelay: "0.08s" }}
          >
            B2B appointment setting, built on the{" "}
            <span className="text-acid">best list</span> in the room.
          </h1>
          <p
            className="mt-8 max-w-2xl text-lg text-bone/70 sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.16s" }}
          >
            {"We build a verified, intent-scored target list around your exact ICP, then run coordinated outreach across every channel to put qualified, ready-to-talk meetings on your calendar. The list is the difference — everything else follows from it."}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.24s" }}>
            <BookingButton>Book a strategy call</BookingButton>
            <Button href="/results" variant="outline-acid">See the results</Button>
          </div>
        </div>
      </section>

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

      {/* ===== DIFFERENTIATORS ===== */}
      <Section bg="ink">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              The Difference / How We Work
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              No spray. <span className="text-acid">No bought lists.</span>
            </h2>
            <p className="mt-6 text-bone/70">
              {"Most appointment setting fails at the source: a recycled list blasted on one channel. We do the opposite — engineer the list first, then point a coordinated motion at the exact people who can say yes."}
            </p>
          </AnimateIn>
          <AnimateIn direction="left" delay={0.12}>
            <ul className="space-y-5">
              {DIFFERENTIATORS.map((d) => (
                <li key={d} className="flex items-start gap-4 border-t border-steel/20 pt-5">
                  <span className="mt-1 font-mono text-acid">✓</span>
                  <span className="text-lg font-medium text-bone/90">{d}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </Section>

      {/* ===== LIST-QUALITY ENGINE (centerpiece) ===== */}
      <section className="bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateIn>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
                The Engine / List Quality
              </p>
              <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
                Every meeting starts{" "}
                <span className="text-acid">with the list.</span>
              </h2>
              <p className="mt-6 text-bone/70">
                {"We tap a proprietary platform of 125M+ business records and cut it down to a precision target list. Then every contact is enriched, verified, intent-scored, and human-checked before a single touch goes out."}
              </p>
              <ol className="mt-8 space-y-4">
                {LIST_PIPELINE.map((p, i) => (
                  <li key={p.step} className="flex gap-4 border-t border-steel/20 pt-4">
                    <span className="font-mono text-sm text-acid">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display text-lg uppercase text-bone">{p.step}</p>
                      <p className="mt-1 text-sm text-bone/65">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.15} className="lg:sticky lg:top-24">
              <DossierCard
                record="RECORD / VERIFIED CONTACT"
                rows={LIST_RECORD_ROWS}
                footnote="ONE OF 125M+ RECORDS — CUT TO YOUR ICP"
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== THE OPERATION / PROCESS ===== */}
      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
            The Operation / How It Works
          </p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
            Five steps. <span className="text-acid">One full calendar.</span>
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

      {/* ===== CHANNELS ===== */}
      <section className="bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              Engagement / Coordinated Channels
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              Every channel. <span className="text-acid">One list.</span>
            </h2>
          </AnimateIn>
          <div className="mt-12 grid gap-px border border-steel/20 bg-steel/20 sm:grid-cols-2 lg:grid-cols-4">
            {CHANNELS.map((c, i) => (
              <AnimateIn key={c.index} delay={i * 0.08} className="h-full bg-panel">
                <Link
                  href={c.href}
                  className="group block h-full bg-panel p-8 transition-colors hover:bg-ink"
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-acid">{c.index}</span>
                  <h3 className="mt-4 font-display text-2xl uppercase text-bone">{c.title}</h3>
                  <p className="mt-3 text-sm text-bone/65">{c.desc}</p>
                  <span className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-steel transition-colors group-hover:text-acid">
                    Deploy →
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DELIVERABLES ===== */}
      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
            The Package / What You Get
          </p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
            A done-for-you <span className="text-acid">outbound team.</span>
          </h2>
        </AnimateIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DELIVERABLES.map((d, i) => (
            <AnimateIn key={d} delay={i * 0.06}>
              <div className="flex h-full items-start gap-4 border-t-2 border-acid bg-panel p-6 ring-1 ring-steel/15">
                <span className="font-mono text-acid">✓</span>
                <span className="text-bone/85">{d}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* ===== PROOF / RESULTS ===== */}
      <section className="bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              Proof / On The Record
            </p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              Results, <span className="text-acid">not promises.</span>
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

          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {METRICS.map((m, i) => (
              <AnimateIn key={m.metric} delay={i * 0.1}>
                <div className="border-l-2 border-acid pl-5">
                  <p className="font-display text-4xl text-acid">{m.metric}</p>
                  <p className="mt-2 text-sm text-bone/70">{m.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
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
                <details
                  key={f.q}
                  className="group border-t border-steel/20 py-5 last:border-b"
                >
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
              Ready to fill your <span className="text-acid">calendar?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-bone/70">
              {"Bring us your dream accounts. We will build the list, run the motion, and book the meetings — guaranteed."}
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
