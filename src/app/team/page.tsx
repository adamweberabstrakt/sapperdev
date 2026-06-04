import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";
import { TEAM, type TeamMember } from "@/lib/team";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: "Team",
  description:
    "The operators behind the meetings. A U.S.-based team of 400+ in St. Louis, led day to day by General Manager Amie Milner.",
};

function Badge({ initials, size = "lg" }: { initials: string; size?: "lg" | "sm" }) {
  const box = size === "lg" ? "h-24 w-24" : "h-16 w-16";
  const text = size === "lg" ? "text-3xl" : "text-xl";
  return (
    <div className={`relative flex ${box} items-center justify-center bg-ink ring-1 ring-steel/30`}>
      <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l border-t border-acid" />
      <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-acid" />
      <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-acid" />
      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-acid" />
      <span className={`font-display ${text} text-acid`}>{initials}</span>
    </div>
  );
}

function ProfileLink({ m }: { m: TeamMember }) {
  if (!m.linkedin) return null;
  return (
    <a
      href={m.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-steel transition-colors hover:text-acid"
    >
      LinkedIn ↗
    </a>
  );
}

export default function Team() {
  const featured = TEAM.filter((m) => m.featured);
  const rest = TEAM.filter((m) => !m.featured);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">
            Personnel / Roster
          </p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.08s" }}>
            The operators behind the <span className="text-acid">meetings.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/70 sm:text-xl animate-fade-up" style={{ animationDelay: "0.16s" }}>
            {`A ${siteConfig.location.basedIn} team of ${siteConfig.location.teamSize}, working from our ${siteConfig.location.city} office in ${siteConfig.location.region} — led day to day by General Manager Amie Milner.`}
          </p>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.24s" }}>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-acid px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-acid transition-colors hover:bg-acid hover:text-ink"
            >
              See the full team on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED — head of the team */}
      <section className="bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {featured.map((m) => (
            <AnimateIn key={m.name}>
              <div className="flex flex-col items-start gap-8 border-t-2 border-acid bg-ink p-8 sm:flex-row sm:items-center sm:p-10">
                <Badge initials={m.initials} />
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">Command / Head of Team</span>
                  <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">{m.name}</h2>
                  <p className="mt-2 font-mono text-sm uppercase tracking-[0.18em] text-steel">{m.title}</p>
                  <p className="mt-4 max-w-2xl text-bone/70">
                    Runs day-to-day operations across every campaign — making sure the right targets get reached and clients see meetings on the calendar.
                  </p>
                  <ProfileLink m={m} />
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ROSTER GRID */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Key Operators</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">Leadership <span className="text-acid">on record.</span></h2>
          </AnimateIn>
          <div className="mt-12 grid gap-px border border-steel/20 bg-steel/20 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((m, i) => (
              <AnimateIn key={m.name} delay={i * 0.08} className="h-full bg-ink">
                <div className="h-full bg-ink p-8">
                  <Badge initials={m.initials} size="sm" />
                  <h3 className="mt-5 font-display text-2xl uppercase text-bone">{m.name}</h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">{m.title}</p>
                  <ProfileLink m={m} />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* 400+ BAND */}
      <section className="border-y border-steel/20 bg-panel text-bone">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">{siteConfig.location.basedIn} / {siteConfig.location.city}</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              Backed by a {siteConfig.location.teamSize} person <span className="text-acid">team.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-bone/70">
              {`The leaders above sit on top of a ${siteConfig.location.teamSize} person, ${siteConfig.location.basedIn} team working from our ${siteConfig.location.city} office — researchers, SDRs, copywriters, and strategists running your outreach every day.`}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Request Briefing</p>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">Meet your <span className="text-acid">team.</span></h2>
            <div className="mt-10"><BookingButton>Book a strategy call</BookingButton></div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
