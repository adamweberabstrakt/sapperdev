import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TEAM, getMember } from "@/lib/team";
import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/blog/PostCard";
import BookingButton from "@/components/ui/BookingButton";
import { siteConfig } from "@/config/site.config";

export function generateStaticParams() {
  return TEAM.filter((m) => m.slug).map((m) => ({ slug: m.slug as string }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const m = getMember(params.slug);
  if (!m) return { title: "Team" };
  return {
    title: `${m.name} — ${m.title}`,
    description: m.summary ?? `${m.name}, ${m.title} at ${siteConfig.name}.`,
  };
}

function CornerTicks() {
  return (
    <>
      <span className="absolute left-0 top-0 z-10 h-3 w-3 border-l-2 border-t-2 border-acid" />
      <span className="absolute right-0 top-0 z-10 h-3 w-3 border-r-2 border-t-2 border-acid" />
      <span className="absolute bottom-0 left-0 z-10 h-3 w-3 border-b-2 border-l-2 border-acid" />
      <span className="absolute bottom-0 right-0 z-10 h-3 w-3 border-b-2 border-r-2 border-acid" />
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid">{children}</p>
  );
}

export default async function TeamProfile({ params }: { params: { slug: string } }) {
  const m = getMember(params.slug);
  if (!m || !m.slug) notFound();

  const authored = (await getAllPosts()).filter((p) => p.author === m.name);
  const first = m.name.split(" ")[0];

  return (
    <>
      {/* HERO / DOSSIER HEADER */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/40 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Link
            href="/team"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel transition-colors hover:text-acid"
          >
            ← Personnel / Roster
          </Link>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end">
            {/* ID badge */}
            <div className="relative h-44 w-44 shrink-0 overflow-hidden bg-panel ring-1 ring-acid/40">
              <CornerTicks />
              {m.photo ? (
                <Image src={m.photo} alt={m.name} fill sizes="176px" className="object-cover grayscale" />
              ) : (
                <span className="flex h-full w-full items-center justify-center font-display text-6xl text-acid">
                  {m.initials}
                </span>
              )}
            </div>

            <div>
              <Label>{m.codename ?? "Personnel File"}</Label>
              <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] sm:text-6xl">{m.name}</h1>
              <p className="mt-3 font-mono text-sm uppercase tracking-[0.18em] text-steel">{m.title}</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-bone/60">
                <span><span className="text-acid">Status:</span> Active</span>
                {m.location && <span><span className="text-acid">Base:</span> {m.location}</span>}
                {m.education && <span><span className="text-acid">Training:</span> {m.education}</span>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIELD SUMMARY */}
      {m.summary && (
        <section className="border-t border-steel/15 bg-panel text-bone">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <Label>Field Summary</Label>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-bone/80">{m.summary}</p>
          </div>
        </section>
      )}

      {/* STRENGTHS + SPECIALIZATIONS */}
      {(m.strengths?.length || m.focus?.length) && (
        <section className="bg-ink text-bone">
          <div className="mx-auto grid max-w-5xl gap-px border border-steel/20 bg-steel/20 px-0 sm:grid-cols-2">
            {m.strengths?.length ? (
              <div className="bg-ink p-8 sm:p-10">
                <Label>Field Strengths</Label>
                <ul className="mt-6 space-y-3">
                  {m.strengths.map((s) => (
                    <li key={s} className="flex gap-3 text-bone/80">
                      <span className="mt-1 font-mono text-acid">▸</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {m.focus?.length ? (
              <div className="bg-ink p-8 sm:p-10">
                <Label>Areas of Operation</Label>
                <ul className="mt-6 space-y-3">
                  {m.focus.map((f) => (
                    <li key={f} className="flex gap-3 text-bone/80">
                      <span className="mt-1 font-mono text-acid">▸</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      )}

      {/* SERVICE RECORD */}
      {m.dossier?.length ? (
        <section className="border-t border-steel/15 bg-panel text-bone">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <Label>Service Record</Label>
            <ul className="mt-6 space-y-4">
              {m.dossier.map((d, i) => (
                <li key={d} className="flex gap-4 border-b border-steel/15 pb-4 text-bone/80">
                  <span className="font-mono text-sm text-acid">{String(i + 1).padStart(2, "0")}</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* KNOWN WEAKNESS */}
      {m.weakness && (
        <section className="bg-ink text-bone">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="relative border-l-2 border-acid bg-panel p-8">
              <Label>Known Weakness</Label>
              <p className="mt-4 font-display text-2xl uppercase leading-tight text-bone sm:text-3xl">{m.weakness}</p>
            </div>
          </div>
        </section>
      )}

      {/* COMMS / CHANNELS */}
      <section className="border-t border-steel/15 bg-panel text-bone">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <Label>Comms / Channels</Label>
          <div className="mt-6 flex flex-wrap gap-3">
            {m.linkedin && (
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-acid px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-acid transition-colors hover:bg-acid hover:text-ink"
              >
                LinkedIn ↗
              </a>
            )}
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-steel/40 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-steel transition-colors hover:border-acid hover:text-acid"
            >
              {siteConfig.shortName} on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* INTEL FILED BY — authorship hub */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <Label>Intel Filed by {first}</Label>
          <h2 className="mt-5 font-display text-3xl uppercase leading-[0.95] sm:text-4xl">
            Reports on <span className="text-acid">record.</span>
          </h2>
          {authored.length ? (
            <div className="mt-10 grid gap-px border border-steel/20 bg-steel/20 sm:grid-cols-2 lg:grid-cols-3">
              {authored.map((post) => (
                <div key={post.slug} className="h-full bg-ink">
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-8 max-w-2xl font-mono text-sm uppercase tracking-[0.14em] text-steel">
              No reports filed under this name yet. Field intel will appear here as it is published.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-steel/15 bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <Label>Request Briefing</Label>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
            Put this team <span className="text-acid">on your pipeline.</span>
          </h2>
          <div className="mt-10">
            <BookingButton>Book a strategy call</BookingButton>
          </div>
        </div>
      </section>
    </>
  );
}
