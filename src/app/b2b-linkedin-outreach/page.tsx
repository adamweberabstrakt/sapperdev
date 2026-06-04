import Section from "@/components/ui/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";

export const metadata = {
  title: "B2B LinkedIn Outreach",
  description:
    "Brand-persona-led B2B LinkedIn outreach and content that builds trust with your ICP before the pitch — coordinated with calling and email to book more meetings.",
};

const PROCESS = [
  { n: "01", title: "Persona setup", desc: "We optimize brand personas that represent your company with a professional edge." },
  { n: "02", title: "Targeted connections", desc: "Connection requests go only to decision-makers that match your ICP." },
  { n: "03", title: "Value-first content", desc: "Posts and messages build credibility, so buyers know your brand before you reach out." },
  { n: "04", title: "Conversations to meetings", desc: "Warm, relevant conversations convert into booked meetings on your calendar." },
];

const BENEFITS = [
  "Trust built before the pitch lands.",
  "Brand personas with a professional edge.",
  "Connections targeted to your exact ICP.",
  "Coordinated with email and calling against the same buyers.",
];

const FAQS = [
  { q: "Whose profiles are used?", a: "Optimized brand personas that represent your company professionally — building recognition and trust with your market." },
  { q: "Is this automated spam?", a: "No. Messaging is streamlined but relevant and human, focused on starting real conversations, not blasting connection requests." },
  { q: "How does content help?", a: "Consistent, value-first posting warms your audience so that when you reach out, your buyers already recognize and trust the brand." },
];

export default function LinkedInOutreach() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">
            Engagement Channel / LinkedIn
          </p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.08s" }}>
            Build trust <span className="text-acid">before the pitch.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/70 sm:text-xl animate-fade-up" style={{ animationDelay: "0.16s" }}>
            {"Brand-persona-led connecting and content that warms your buyers — so by the time you talk, they already know you. Streamlined messaging with a professional edge."}
          </p>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.24s" }}>
            <BookingButton>Book a strategy call</BookingButton>
          </div>
        </div>
      </section>

      <Section bg="ink">
        <AnimateIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">The Operation / How It Works</p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Bring your brand <span className="text-acid">to life.</span></h2>
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
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Familiar. <span className="text-acid">Then in front of them.</span></h2>
          </AnimateIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <AnimateIn key={b} delay={i * 0.07}>
                <div className="flex h-full items-start gap-4 border-t-2 border-acid bg-ink p-6 ring-1 ring-steel/15">
                  <span className="font-mono text-acid">✓</span>
                  <span className="text-bone/85">{b}</span>
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
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">Warm your buyers <span className="text-acid">on LinkedIn.</span></h2>
            <div className="mt-10"><BookingButton>Book a strategy call</BookingButton></div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
