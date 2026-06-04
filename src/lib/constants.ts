import { siteConfig } from "@/config/site.config";

type NavChild = { name: string; href: string };
type NavItem = {
  name: string;
  href: string;
  children?: NavChild[];
  groups?: { label: string; items: NavChild[] }[];
  feature?: { label: string; desc: string; href: string };
};

export const NAV_LINKS: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Appointment Setting",
    href: "/b2b-appointment-setting",
    groups: [
      {
        label: "Solutions",
        items: [
          { name: "Appointment Setting", href: "/b2b-appointment-setting" },
          { name: "Account-Based Marketing", href: "/account-based-marketing" },
          { name: "Demand Generation", href: "/demand-generation" },
          { name: "Lead Qualification", href: "/lead-qualification" },
        ],
      },
      {
        label: "Tactics",
        items: [
          { name: "Cold Calling", href: "/b2b-cold-calling" },
          { name: "Cold Email", href: "/cold-email-marketing" },
          { name: "LinkedIn Outreach", href: "/b2b-linkedin-outreach" },
          { name: "Direct Mail", href: "/b2b-direct-mail" },
          { name: "Data Enrichment", href: "/data-enrichment" },
        ],
      },
    ],
    feature: {
      label: "The HIT Method",
      desc: "How the pursuit works — six stages, one target list.",
      href: "/process",
    },
  },
  { name: "Industries", href: "/industries" },
  { name: "Blog", href: "/blog" },
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

// Derived from the single site config (kept for backward-compatible imports).
export const SITE_CONFIG = {
  name: siteConfig.name,
  tagline: siteConfig.tagline,
  email: siteConfig.contact.email,
  chilipiper: {
    domain: siteConfig.integrations.chilipiperDomain,
    router: siteConfig.integrations.chilipiperRouter,
  },
  gtmId: siteConfig.integrations.gtmId,
};

// Headline proof stats — single source of truth lives in site.config.
export const SITE_STATS = siteConfig.stats;
