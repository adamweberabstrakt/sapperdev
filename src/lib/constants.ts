export const NAV_LINKS = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/b2b-appointment-setting",
    children: [
      { name: "B2B Appointment Setting", href: "/b2b-appointment-setting" },
      { name: "B2B Cold Calling", href: "/b2b-cold-calling" },
      { name: "Cold Email Marketing", href: "/cold-email-marketing" },
      { name: "B2B LinkedIn Outreach", href: "/b2b-linkedin-outreach" },
      { name: "Lead Qualification", href: "/lead-qualification" },
    ],
  },
  { name: "Results", href: "/results" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export const TEAM_MEMBERS = [
  {
    name: "Jeff Winters",
    title: "Founder",
    photo: "/images/team/jeff-winters.webp",
    bio: "Jeff founded Sapper Consulting with a mission to solve the biggest challenge in B2B sales — consistent pipeline generation.",
  },
  {
    name: "Amie Milner",
    title: "General Manager",
    photo: "/images/team/amie-milner.webp",
    bio: "Amie oversees daily operations and ensures our clients see measurable results from every campaign.",
  },
  {
    name: "Tony Auck",
    title: "Director of Executive Sales",
    photo: "/images/team/tony-auck.webp",
    bio: "Tony leads our executive sales strategy, connecting with decision-makers across complex B2B sectors.",
  },
  {
    name: "Natalie Archer",
    title: "Senior Sales Representative",
    photo: null,
    initials: "NA",
    bio: "Natalie drives client success through strategic outreach and relationship building.",
  },
];

export const CASE_STUDIES = [
  {
    industry: "Manufacturing",
    challenge:
      "Struggling to reach plant managers and procurement leads at scale.",
    result: "42 qualified meetings in 90 days, 8 closed deals.",
    metric: "42 meetings",
  },
  {
    industry: "IT Services",
    challenge:
      "Internal team couldn't maintain consistent outreach across channels.",
    result:
      "Omni-channel campaign generated 67 meetings in 6 months with enterprise targets.",
    metric: "67 meetings",
  },
  {
    industry: "Logistics",
    challenge:
      "Needed to break into new geographic markets with no existing relationships.",
    result:
      "Built pipeline in 3 new regions, resulting in $1.2M in new revenue.",
    metric: "$1.2M revenue",
  },
];

export const SITE_CONFIG = {
  name: "Sapper Consulting",
  tagline: "B2B Pipeline Generation",
  email: "adam.weber@abstraktmg.com",
  chilipiper: {
    domain: "abstraktmg",
    router: "sapper_router_1",
  },
  gtmId: "GTM-MQLB3J4",
};
