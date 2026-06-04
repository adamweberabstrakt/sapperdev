export type TeamMember = {
  name: string;
  title: string;
  initials: string;
  featured?: boolean;
  /** Individual LinkedIn profile URL. Only rendered when present —
   *  add verified URLs here; do not guess. */
  linkedin?: string;
};

/**
 * Verified leadership/operators. This array is the single place to expand the
 * roster — drop in the full team (name / title / linkedin) and the page renders
 * each one automatically. Priority order per current direction:
 * Amie Milner (head) -> Tony Auck -> Natalie Archer -> Jeff Winters (founder).
 */
export const TEAM: TeamMember[] = [
  { name: "Amie Milner", title: "General Manager", initials: "AM", featured: true },
  { name: "Tony Auck", title: "Director of Executive Sales", initials: "TA" },
  { name: "Natalie Archer", title: "Senior Sales Representative", initials: "NA" },
  { name: "Jeff Winters", title: "Founder", initials: "JW" },
];
