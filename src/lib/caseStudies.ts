export interface CaseStudy {
  slug: string;
  industry: string;
  metric: string; // headline number for cards
  summary: string; // card line + meta description
  challenge: string;
  approach: string;
  result: string;
}

// Detailed, public-facing case studies (sourced from Sapper client results).
// Kept separate from constants.CASE_STUDIES so existing pages are untouched.
export const CASE_STUDIES_DETAILED: CaseStudy[] = [
  {
    slug: "cybersecurity",
    industry: "Cybersecurity",
    metric: "$360K",
    summary:
      "A 3-year, $360,000 contract closed from some of the very first meetings booked.",
    challenge:
      "A cybersecurity provider needed to land enterprise accounts with long, complex buying cycles — the kind of deals that rarely come inbound.",
    approach:
      "We targeted security and IT leadership at fit-profile companies, verified direct contact data, and sequenced coordinated outreach across channels.",
    result:
      "One of the first meetings booked turned into a 3-year contract worth $360,000, with deals landing from two separate companies.",
  },
  {
    slug: "it-msp",
    industry: "IT / MSP",
    metric: "$212K",
    summary:
      "$212,000 in recurring business generated in the first year, plus a steady proposal pipeline.",
    challenge:
      "An IT managed-services provider wanted predictable recurring revenue from brand-new logos.",
    approach:
      "We identified businesses fitting the ideal client profile and ran coordinated outreach to IT and operations leaders.",
    result:
      "Within the first year the program generated $212,000 in yearly recurring business, along with multiple active proposals.",
  },
  {
    slug: "manufacturing",
    industry: "Manufacturing",
    metric: "31 meetings",
    summary:
      "31 booked meetings in five months led to three closed deals, including a recurring $50,000 order.",
    challenge:
      "A manufacturer struggled to reach plant and procurement decision-makers consistently and at scale.",
    approach:
      "We built a precision list of target accounts and ran a steady, coordinated outbound cadence into verified decision-makers.",
    result:
      "In five months the program booked 31 meetings and closed 3 deals — including a $50,000 project with a recurring annual order.",
  },
  {
    slug: "roofing",
    industry: "Roofing",
    metric: "$300K",
    summary:
      "A phased commercial project kicked off with a $300,000 deal and more in the pipeline.",
    challenge:
      "A commercial roofing company wanted larger, multi-phase projects instead of one-off repairs.",
    approach:
      "We identified facility and property decision-makers in-territory and ran a multi-channel motion combining direct mail, email, and calling.",
    result:
      "Early meetings opened a phased project starting with a $300,000 deal. Separately, a $3,900 repair lead grew into a $122,000 reroof plus a referral.",
  },
  {
    slug: "commercial-cleaning",
    industry: "Commercial Cleaning",
    metric: "$125K+",
    summary:
      "Three deals worth over $125,000 closed while the program beat its meeting goals.",
    challenge:
      "A commercial cleaning company needed a reliable flow of qualified facility-management conversations.",
    approach:
      "We targeted facility and operations decision-makers and kept the calendar full with multi-channel outreach.",
    result:
      "The program exceeded its meeting goals and closed 3 deals worth more than $125,712 — including a single $102,000 contract.",
  },
  {
    slug: "recruiting",
    industry: "Recruiting",
    metric: "$40K",
    summary:
      "A first-month booked meeting turned into a $40,000 proposal for a hard-to-fill role.",
    challenge:
      "A recruiting firm needed to reach hiring decision-makers for niche, high-value placements.",
    approach:
      "We built a targeted list of companies hiring for those roles and opened with a warm, well-timed call into verified contacts.",
    result:
      "In their first month, the very first meeting we booked produced a $40,000 proposal for a unique position — secured off a single warm call.",
  },
];
