import AnimateIn from "@/components/ui/AnimateIn";
import TargetRadar from "@/components/contact/TargetRadar";
import BookingCalendar from "@/components/booking/BookingCalendar";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: "Contact",
  description:
    "Book a strategy call with Sapper. A U.S.-based team of 400+ in St. Louis, ready to lock onto your pipeline. Pick a time on the calendar — no forms, no phone tag.",
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
            {`A ${siteConfig.location.basedIn} team of ${siteConfig.location.teamSize}, working from our ${siteConfig.location.city} office. Pick a time below and we will lock onto your pipeline — no forms, no phone tag.`}
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

            {/* Right: inline calendar */}
            <div>
              <AnimateIn delay={0.12}>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
                  Direct Booking / Secure Channel
                </p>
                <h2 className="mt-4 font-display text-3xl uppercase leading-[0.98] sm:text-4xl">
                  Lock a <span className="text-acid">time.</span>
                </h2>
              </AnimateIn>
              {/* iframe kept OUT of the Framer transform: transformed ancestors swallow iframe clicks */}
              <div className="relative z-10 mt-6">
                <BookingCalendar className="h-[620px] w-full overflow-hidden border border-steel/20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
