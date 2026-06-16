import AnimateIn from "@/components/ui/AnimateIn";
import TargetRadar from "@/components/contact/TargetRadar";
import ContactForm from "@/components/contact/ContactForm";
import BookingButton from "@/components/ui/BookingButton";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: "Contact",
  description:
    "Reach the Sapper team — 400+ U.S.-based pros in St. Louis. Tell us about your pipeline and a strategist reaches out, or book a strategy call directly.",
};

const INTEL = [
  "U.S.-based team — no offshore call center.",
  `${siteConfig.location.teamSize} people in our ${siteConfig.location.city} office.`,
  `Right here in ${siteConfig.location.region}.`,
];

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">
            Contact / Acquire Target
          </p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.08s" }}>
            Find the right target. <span className="text-acid">Book the call.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/70 sm:text-xl animate-fade-up" style={{ animationDelay: "0.16s" }}>
            {`A ${siteConfig.location.basedIn} team of ${siteConfig.location.teamSize}, working from our ${siteConfig.location.city} office. Send us the basics or grab a time directly — either way, we lock onto your pipeline.`}
          </p>
        </div>
      </section>

      {/* RADAR + BOOKING */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left: radar + intel */}
            <AnimateIn>
              <TargetRadar />
              <ul className="mt-8 space-y-4">
                {INTEL.map((line) => (
                  <li key={line} className="flex items-start gap-3 border-t border-steel/20 pt-4">
                    <span className="mt-1 font-mono text-acid">✓</span>
                    <span className="text-bone/85">{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
                <a href={siteConfig.contact.phoneHref} className="transition-colors hover:text-acid">
                  {siteConfig.contact.phone}
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="transition-colors hover:text-acid">
                  {siteConfig.contact.email}
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-acid">
                  LinkedIn
                </a>
              </div>
              <a href={siteConfig.location.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 block font-mono text-[11px] uppercase tracking-[0.18em] text-steel transition-colors hover:text-acid">
                {siteConfig.location.full}
              </a>
            </AnimateIn>

            {/* Right: contact form — posts to /api/contact (Resend) and routes + books via the real ChiliPiper router */}
            <div>
              <AnimateIn delay={0.12}>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
                  Open a Channel / Tell Us the Target
                </p>
                <h2 className="mt-4 font-display text-3xl uppercase leading-[0.98] sm:text-4xl">
                  Start the <span className="text-acid">pursuit.</span>
                </h2>
                <p className="mt-3 max-w-md text-sm text-bone/60">
                  Send the basics and a strategist reaches out to map your appointment goal.
                </p>
              </AnimateIn>
              <div className="mt-6">
                <ContactForm />
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
                  Prefer to pick a time yourself?
                </span>
                <BookingButton variant="outline-acid">Book directly</BookingButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
