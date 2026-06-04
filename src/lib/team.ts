export type TeamMember = {
  name: string;
  title: string;
  initials: string;
  featured?: boolean;
  /** Local headshot path. Falls back to an initials badge when absent. */
  photo?: string;
  /** Individual LinkedIn profile URL. Only rendered when present —
   *  add verified URLs here; do not guess. */
  linkedin?: string;
};

/**
 * Sapper / Bionic leadership, sourced from abstraktmg.com/leadership-team.
 * Anyone tagged "(Bionic)" there is a Sapper key player. Expand by dropping in
 * more members (name / title / photo / linkedin) — the page renders each.
 */
export const TEAM: TeamMember[] = [
  { name: "Amie Milner", title: "General Manager", initials: "AM", featured: true, photo: "/images/team/amie-milner.webp", linkedin: "https://www.linkedin.com/in/amiemilner/" },
  { name: "Tony Auck", title: "Vice President of Executive Sales", initials: "TA", photo: "/images/team/tony-auck.webp", linkedin: "https://www.linkedin.com/in/tony-auck-mba-43965b90/" },
  { name: "Alexandra Guarino", title: "Director of Partner Success", initials: "AG", photo: "/images/team/alex-guarino.png", linkedin: "https://www.linkedin.com/in/alexandraguarino5/" },
  { name: "Doug Jennings", title: "Director of Operations", initials: "DJ", photo: "/images/team/doug-jennings.png", linkedin: "https://www.linkedin.com/in/douglasjennings314/" },
  { name: "Natalie Archer", title: "Senior Sales Representative", initials: "NA", photo: "/images/team/natalie-archer.png", linkedin: "https://www.linkedin.com/in/nataliechristinearcher/" },
  { name: "Jeff Winters", title: "Founder", initials: "JW", photo: "/images/team/jeff-winters.webp", linkedin: "https://www.linkedin.com/in/jeffreyscottwinters/" },
];
