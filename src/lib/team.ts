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
 * Sapper / Bionic leadership. Dossier copy below is DRAFTED from public LinkedIn
 * profiles and roles - review and replace strengths/weakness/summary as needed.
 */
export const TEAM: TeamMember[] = [
  {
    name: "Amie Milner",
    title: "General Manager",
    initials: "AM",
    featured: true,
    photo: "/images/team/amie-milner.webp",
    linkedin: "https://www.linkedin.com/in/amiemilner/",
    slug: "amie-milner",
    codename: "COMMAND / 001",
    summary:
      "General Manager of Sapper. Runs day-to-day operations across every campaign - making sure the right accounts get reached and clients see meetings land on the calendar. Previously led marketing and sales enablement at Abstrakt Marketing Group.",
    location: "St. Louis, Missouri",
    education: "B.A., Webster University",
    strengths: [
      "Operational command across concurrent campaigns",
      "Sales enablement and team performance",
      "Translating client goals into outreach that books",
      "Cross-channel campaign orchestration",
    ],
    focus: ["Day-to-day operations", "Campaign quality control", "Client outcomes"],
    dossier: [
      "General Manager, Sapper Consulting",
      "Former EVP of Marketing / VP of Sales Enablement, Abstrakt Marketing Group",
      "Built and scaled sales-enablement programs",
      "St. Louis-based",
    ],
    weakness: "Cannot rest while a client's pipeline sits empty.",
  },
  {
    name: "Tony Auck",
    title: "Vice President of Executive Sales",
    initials: "TA",
    photo: "/images/team/tony-auck.webp",
    linkedin: "https://www.linkedin.com/in/tony-auck-mba-43965b90/",
    slug: "tony-auck",
    codename: "SALES / 002",
    summary:
      "Vice President of Executive Sales. Leads high-level sales conversations and helps revenue teams fix what a single channel can't - pairing calling, email, LinkedIn, and direct mail into one coordinated pursuit.",
    location: "St. Louis, Missouri",
    education: "MBA",
    strengths: [
      "Executive-level sales conversations",
      "Omnichannel outbound strategy",
      "Pipeline development",
      "Objection handling and negotiation",
    ],
    focus: ["Executive sales", "New-client strategy", "Outbound orchestration"],
    dossier: [
      "VP of Executive Sales, Abstrakt / Sapper",
      "MBA",
      "Speaks and writes on modern omnichannel outbound",
      "St. Louis-based",
    ],
    weakness: "Treats \u201cwe already tried an SDR vendor\u201d as a personal challenge.",
  },
  {
    name: "Alexandra Guarino",
    title: "Director of Partner Success",
    initials: "AG",
    photo: "/images/team/alex-guarino.png",
    linkedin: "https://www.linkedin.com/in/alexandraguarino5/",
    slug: "alexandra-guarino",
    codename: "SUCCESS / 003",
    summary:
      "Director of Partner Success. Owns the client relationship after kickoff - keeping campaigns aligned to goals and making sure partners see results, not just activity.",
    location: "St. Louis, Missouri",
    strengths: [
      "Client retention and partner success",
      "Aligning campaigns to client goals",
      "Cross-functional coordination",
      "Turning results into renewals",
    ],
    focus: ["Partner success", "Account health", "Client outcomes"],
    dossier: [
      "Director of Partner Success, Sapper Consulting",
      "Former Senior Director of Partner Success, Abstrakt Marketing Group",
      "St. Louis-based",
    ],
    weakness: "Takes a stalled client pipeline personally.",
  },
  {
    name: "Doug Jennings",
    title: "Director of Operations",
    initials: "DJ",
    photo: "/images/team/doug-jennings.png",
    linkedin: "https://www.linkedin.com/in/douglasjennings314/",
    slug: "doug-jennings",
    codename: "OPS / 004",
    summary:
      "Director of Operations. Keeps the engine running - the research, data, and processes that turn a target list into booked meetings at scale.",
    location: "St. Louis, Missouri",
    education: "B.S. Business Administration (Marketing), University of Missouri",
    strengths: [
      "Operational scale and process design",
      "Data and list quality",
      "CRM and reporting (Salesforce)",
      "Throughput and distribution",
    ],
    focus: ["Operations", "Process and data", "Throughput at scale"],
    dossier: [
      "Director of Operations, Abstrakt Marketing Group",
      "Prior: Partner Operations Manager; Sr. Partner Account Manager",
      "B.S., University of Missouri-Columbia",
      "At Abstrakt since 2018",
    ],
    weakness: "Allergic to a messy data set.",
  },
  {
    name: "Natalie Archer",
    title: "Senior Sales Representative",
    initials: "NA",
    photo: "/images/team/natalie-archer.png",
    linkedin: "https://www.linkedin.com/in/nataliechristinearcher/",
    slug: "natalie-archer",
    codename: "SALES / 005",
    summary:
      "Sales leader who came up through the ranks - SDR to AE in a year - and now drives executive sales. Knows the outbound playbook from the first dial to the closed deal.",
    location: "St. Louis, Missouri",
    education: "Webster University",
    strengths: [
      "Full-cycle outbound, dial to close",
      "Prospecting and pipeline generation",
      "Fast ramp and coachability",
      "Building client relationships",
    ],
    focus: ["Executive sales", "Outbound prospecting", "New business"],
    dossier: [
      "Executive sales, Abstrakt / Sapper",
      "SDR to AE in one year (Abstrakt employee spotlight)",
      "Recognized top producer",
      "Webster University",
    ],
    weakness: "Will out-prospect you, then ask how she can improve.",
  },
  {
    name: "Jeff Winters",
    title: "Founder",
    initials: "JW",
    photo: "/images/team/jeff-winters.webp",
    linkedin: "https://www.linkedin.com/in/jeffreyscottwinters/",
    slug: "jeff-winters",
    codename: "FOUNDER / 000",
    summary:
      "Founder of Sapper Consulting and Chief Revenue Officer at Abstrakt Marketing Group. Built Sapper from the ground up into one of the fastest-growing companies in the Midwest, pioneering a multi-channel approach to booking B2B meetings.",
    location: "St. Louis, Missouri",
    education: "Olin Business School, Washington University in St. Louis",
    strengths: [
      "Revenue generation and go-to-market strategy",
      "Sales psychology and negotiation",
      "Building and scaling outbound teams",
      "Multi-channel outbound: direct mail, calling, email, LinkedIn",
    ],
    focus: ["Company strategy", "Outbound methodology", "Thought leadership"],
    dossier: [
      "Founder, Sapper Consulting (2014)",
      "Chief Revenue Officer, Abstrakt Marketing Group",
      "Grew Sapper to one of the fastest-growing firms in the Midwest (Inc. 5000)",
      "Bylined on outbound sales in Forbes and Entrepreneur",
    ],
    weakness: "Physically incapable of leaving a sales meeting unbooked.",
  },
];

export const getMember = (slug: string) => TEAM.find((m) => m.slug === slug);
