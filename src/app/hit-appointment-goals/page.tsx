import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";
import MethodScrollStory from "@/components/method/MethodScrollStory";

export const metadata = {
  title: "Hit Your Appointment Goals | Our Method — Northbound",
  description:
    "Set an appointment goal. We build the demand-gen outbound engine that hits it — LinkedIn-led awareness, 500 guaranteed dials, intent-triggered email, and a scored target list you keep. Live in 14 days.",
  // PPC landing page — keep it out of organic search so it doesn't compete with the site.
  robots: { index: false, follow: true },
};

const TRUTHS = [
  {
    n: "TRUTH 01",
    title: "Brand trust must be created.",
    body: "Nobody buys from a name they've never heard. Awareness isn't a nice-to-have — it's the thing that makes every channel after it actually work.",
  },
  {
    n: "TRUTH 02",
    title: "The list is everything.",
    body: "A verified, intent-scored, dream-ICP list — built from the customers you already keep — beats volume every time. It's impossible to copy, and it's the spine of the whole engine.",
  },
];

const CHANNELS = [
  {
    n: "01",
    kicker: "The Engine",
    title: "LinkedIn.",
    body: "Demand-gen, organic-first. Brand personas publish insight into your dream ICP's feed twice a week — building the awareness every other channel rides on, before a single dial. Managed paid spend amplifies only what the market already chose, then retargets the warmed audience.",
  },
  {
    n: "02",
    kicker: "The Pressure",
    title: "Calling.",
    body: "500 guaranteed dials into a named, scored list that already knows your name. We reach decision-makers — not gatekeepers — who've been seeing your brand in-feed for weeks. The call was never cold.",
  },
  {
    n: "03",
    kicker: "The Cadence",
    title: "Email.",
    body: "Intent-triggered sequences that fire at the exact names showing signal. When a contact engages on LinkedIn, the email cadence meets them while you're top of mind — verified addresses, warmed domains, built to land in the inbox.",
  },
  {
    n: "04",
    kicker: "The Pattern-Break",
    title: "Direct mail.",
    body: "Something physical, memorable, and impossible to delete — reserved for the accounts already showing intent, so spend lands where it converts.",
  },
];

const INCLUDED = [
  ["LinkedIn brand-persona campaign", "Minimum 2 posts/week per profile — demand-gen awareness inside your dream ICP's feed."],
  ["$2,500 managed LinkedIn ad spend", "Paid amplification + retargeting behind your best-performing organic content."],
  ["500 guaranteed dials", "Structured calling into the warm list — reinforcing the awareness, not replacing it."],
  ["A shared appointment goal", "One target we drive toward every week, with full pipeline transparency."],
  ["Your scored, enriched HIT List", "Your perfect-fit dream list — companies scored and enriched — handed over at the end. Yours to keep."],
];

export default function HitAppointmentGoals() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid animate-fade-up">
            Our Method · Demand-Gen Outbound
          </p>
          <h1
            className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up"
            style={{ animationDelay: "0.08s" }}
          >
            Hit your appointment goals <span className="text-acid">by design.</span>
          </h1>
          <p
            className="mt-8 max-w-2xl text-lg text-bone/75 animate-fade-up"
            style={{ animationDelay: "0.16s" }}
          >
            One coordinated pursuit of the accounts you've always wanted. We make you the brand they
            already know — before you ever dial. This isn't spray-and-pray. It's creating the right time.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.24s" }}>
            <BookingButton>Set your appointment goal</BookingButton>
          </div>

          <div
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-steel/20 bg-steel/20 sm:grid-cols-4 animate-fade-up"
            style={{ animationDelay: "0.32s" }}
          >
            {[
              ["14 days", "to live"],
              ["500", "guaranteed dials"],
              ["$2,500", "managed ad spend"],
              ["target list", "yours to keep"],
            ].map(([big, small]) => (
              <div key={small} className="bg-ink px-5 py-6">
                <p className="font-display text-3xl text-acid sm:text-4xl">{big}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-steel">{small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE ENGINE, IN MOTION — autoplay scroll story */}
      <section className="border-t border-steel/20 bg-ink text-bone">
        <div className="mx-auto max-w-7xl px-4 pt-20 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid">How It Works</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
            One loop. Every channel <span className="text-acid">reinforces.</span>
          </h2>
        </div>
      </section>
      <MethodScrollStory trigger="autoplay" duration={9} />

      {/* TWO TRUTHS */}
      <section className="bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Who We Are · 15 Years In</p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              15 years of outbound taught us <span className="text-acid">two things.</span>
            </h2>
          </AnimateIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TRUTHS.map((t, i) => (
              <AnimateIn key={t.n} delay={i * 0.1}>
                <div className="h-full border border-steel/20 bg-ink p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid">{t.n}</p>
                  <h3 className="mt-4 font-display text-2xl uppercase leading-[0.95] sm:text-3xl">{t.title}</h3>
                  <p className="mt-4 text-bone/70">{t.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR CHANNELS */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid">The Cadence · Fires at Intent</p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              LinkedIn leads. The rest <span className="text-acid">close in.</span>
            </h2>
          </AnimateIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {CHANNELS.map((c, i) => (
              <AnimateIn key={c.n} delay={i * 0.07}>
                <div className="h-full border border-steel/20 bg-panel p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-4xl text-acid">{c.n}</span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">{c.kicker}</p>
                      <h3 className="font-display text-2xl uppercase leading-[0.95]">{c.title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-bone/70">{c.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Engagement · One Engine, Four Months</p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              Live in <span className="text-acid">14 days.</span> In-market for four months.
            </h2>
            <p className="mt-5 max-w-2xl text-bone/70">
              Two weeks from yes to live. Week one we construct the engine — reverse-engineer your dream ICP,
              stand up the brand personas, build the scored target list, load the content and cadence. Week two it
              goes live: posts publish, retargeting wires up, calling and email fire.
            </p>
          </AnimateIn>
          <div className="mt-12 grid gap-px overflow-hidden border border-steel/20 bg-steel/20">
            {INCLUDED.map(([title, body], i) => (
              <AnimateIn key={title} delay={i * 0.05}>
                <div className="flex flex-col gap-2 bg-ink px-6 py-6 sm:flex-row sm:items-center sm:gap-8">
                  <p className="flex items-center gap-3 font-display text-lg uppercase sm:w-1/3">
                    <span className="text-acid">✓</span> {title}
                  </p>
                  <p className="text-bone/70 sm:flex-1">{body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-steel/20 bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid">Become the brand they buy from</p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
            Tell us your appointment goal. <span className="text-acid">We'll build the engine that hits it.</span>
          </h2>
          <div className="mt-10 flex justify-center">
            <BookingButton>Book a strategy call</BookingButton>
          </div>
        </div>
      </section>
    </>
  );
}
