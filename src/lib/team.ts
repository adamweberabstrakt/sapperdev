export type TeamMember = {
  name: string;
  title: string;
  initials: string;
  featured?: boolean;
  /** Local headshot path. Falls back to an initials badge when absent. */
  photo?: string;
  /** Individual LinkedIn profile URL. Only rendered when present. */
  linkedin?: string;

  // --- Dossier profile (enables an individual page at /team/[slug]) ---
  /** Set a slug to generate a dossier page for this member. */
  slug?: string;
  /** Dossier flavor label, e.g. "COMMAND / 001". */
  codename?: string;
  /** 1-2 sentence field summary. */
  summary?: string;
  location?: string;
  education?: string;
  /** Field strengths - review/replace with real ones. */
  strengths?: string[];
  /** Specializations / areas of operation. */
  focus?: string[];
  /** Service record / track-record bullets. */
  dossier?: string[];
  /** Playful, flattering "known weakness" (dossier conceit). Review before launch. */
  weakness?: string;
};

/**
 * Placeholder leadership roster for the base template. Replace with the client's
 * real team. Members without a `photo` render an initials badge; add a `slug`
 * plus the dossier fields to generate an individual /team/[slug] profile page.
 */
export const TEAM: TeamMember[] = [
  { name: "Team Member One", title: "Chief Executive Officer", initials: "T1", featured: true },
  { name: "Team Member Two", title: "VP of Sales", initials: "T2", featured: true },
  { name: "Team Member Three", title: "Director of Operations", initials: "T3" },
  { name: "Team Member Four", title: "Head of Marketing", initials: "T4" },
];

export const getMember = (slug: string) => TEAM.find((m) => m.slug === slug);
