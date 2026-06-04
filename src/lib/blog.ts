import { sanityEnabled } from "@/sanity/config";
import { fetchAllPosts, fetchPost } from "@/sanity/blog";

/**
 * Static blog data — shaped to map cleanly onto Sanity later.
 * Each post's `content` is an array of blocks (a mini portable-text), so swapping
 * this array for a Sanity fetch is a drop-in change; the layouts stay the same.
 */

export type BlogCategory = "research" | "success" | "news" | "pr";

export const CATEGORIES: { slug: BlogCategory; label: string; blurb: string }[] = [
  { slug: "research", label: "Research", blurb: "Data-backed guides, playbooks, and outbound benchmarks." },
  { slug: "success", label: "Success", blurb: "Client wins and the campaigns behind them." },
  { slug: "news", label: "News", blurb: "What's new at Sapper and across B2B outbound." },
  { slug: "pr", label: "PR", blurb: "Press releases and media coverage." },
];

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  date: string; // ISO
  readTime: string;
  featured?: boolean;
  coverImage?: string;
  content: Block[];
};

const GENERIC: Block[] = [
  { type: "p", text: "This is placeholder copy for layout review. Final content will flow in from the CMS once Sanity is connected — headings, paragraphs, lists, tables, and callouts all render from the same block model used by the article below." },
  { type: "callout", text: "Placeholder post — here to show how this category and the single-post layout look before content is wired up." },
  { type: "p", text: "Every channel works the same named decision-makers — until the meetings land. That's the through-line for everything Sapper publishes here." },
];

export const POSTS: BlogPost[] = [
  {
    slug: "best-lead-generation-companies-manufacturing",
    title: "The 8 Best Lead Generation Companies for Manufacturing (2026)",
    excerpt:
      "Most lead gen programs are built for SaaS buyers — not plant managers and procurement directors. Here's how the top manufacturing outbound agencies actually compare.",
    category: "research",
    author: "Jeff Winters",
    date: "2026-03-10",
    readTime: "13 min read",
    featured: true,
    content: [
      { type: "h2", text: "How to book meetings with manufacturing decision-makers" },
      { type: "p", text: "If you sell into manufacturing, you've probably already tried the obvious stuff — an agency, some email sequences, maybe LinkedIn — and the results were underwhelming. Most lead generation programs are built for SaaS buyers, not plant managers and procurement directors who've had the same vendor since 2011." },
      { type: "p", text: "This list was built for VPs of Sales and CROs selling into manufacturing — industrial software, component parts, engineering services, packaging, or supply chain solutions. These are the agencies that actually understand the vertical." },
      { type: "h2", text: "How we built this list" },
      { type: "p", text: "We reviewed Clutch and G2 reviews, public case studies, agency documentation, and analyst commentary, then scored each agency across five criteria that matter specifically in manufacturing." },
      {
        type: "table",
        headers: ["Criteria", "Weight", "What we looked at"],
        rows: [
          ["Manufacturing experience", "25%", "Sub-sector depth, case studies, buyer-title targeting"],
          ["Channel mix", "25%", "Calling, email, LinkedIn, direct mail, event support"],
          ["Lead & list quality", "20%", "Manual research, ICP alignment, data verification"],
          ["Proven results", "20%", "Verified outcomes, review ratings, meeting data"],
          ["Accountability", "10%", "Guarantees, reporting, contract flexibility"],
        ],
      },
      { type: "callout", text: "Disclosure: Sapper produced this article and included itself in the ranking — applying the same scoring criteria to our own program that we applied to every other agency on the list." },
      { type: "h2", text: "The scoring results" },
      {
        type: "table",
        headers: ["Agency", "Mfg.", "Channels", "List", "Results", "Acct.", "Total"],
        rows: [
          ["Sapper Consulting", "25", "23", "18", "19", "10", "95"],
          ["Abstrakt Marketing Group", "22", "24", "18", "18", "9", "91"],
          ["Belkins", "21", "22", "19", "18", "9", "89"],
          ["CIENCE", "19", "23", "19", "17", "7", "85"],
          ["Martal Group", "20", "21", "18", "17", "8", "84"],
          ["Callbox", "20", "22", "17", "16", "7", "82"],
        ],
      },
      { type: "h2", text: "Why manufacturing is a different animal" },
      { type: "p", text: "The buyers you're trying to reach — VP of Operations, Procurement Managers, Plant Managers, Directors of Supply Chain — aren't refreshing their inbox. They're on the floor. A cold email from someone they've never heard of gets deleted without much thought, and many still prefer a phone call over a long email thread." },
      { type: "p", text: "Most agencies have quietly drifted to email-only programs because they're cheaper to run and easier to report on. The agencies that actually perform cold call without apologizing for it, build lists through manual research instead of bulk exports, and have run enough manufacturing campaigns to know a CFO message will miss a VP of Operations." },
      { type: "h2", text: "1. Sapper Consulting — 95/100" },
      { type: "h3", text: "Best overall for manufacturing sales development" },
      { type: "p", text: "Sapper has run outbound programs since 2013 — manufacturing campaigns through multiple economic cycles and every major shift in inbox deliverability. Over 100,000 B2B meetings booked across 1,500+ clients, spanning ERP/MES/automation software, injection molders, component suppliers, industrial services, packaging, and supply chain consultants." },
      { type: "callout", text: "What separates Sapper: campaigns open with direct mail, then follow with cold calling, email, and LinkedIn in a coordinated sequence — so the first call is a warm call. Particularly effective with manufacturing buyers who are less digitally saturated." },
      { type: "p", text: "Real results from one client in a single month — four 5-star meetings across automotive, aerospace, and industrial machinery, sourced from LinkedIn and email:" },
      { type: "ul", items: [
        "5-star meeting, opportunity created, currently quoting — Product Development, Automotive Parts.",
        "5-star meeting, opportunity created — Supply Chain Manager, Aerospace & Defense.",
        "5-star meeting, RFQ in progress — Purchaser, Industrial Machinery & Equipment.",
        "5-star meeting, quoting a project — Product Design Engineer, Industrial Machinery.",
      ] },
      { type: "p", text: "The guarantee: if Sapper doesn't hit your annual meeting goal, they work the following quarter for free — no conditions buried in the contract." },
    ],
  },
  {
    slug: "2026-state-of-b2b-outbound",
    title: "The 2026 State of B2B Outbound",
    excerpt: "What's working in outbound this year — channel mix, deliverability, and why coordinated cadences beat single-channel blasts.",
    category: "research",
    author: "Sapper Team",
    date: "2026-02-18",
    readTime: "9 min read",
    content: GENERIC,
  },
  {
    slug: "managed-it-firm-70-percent-annual-sales",
    title: "How a Managed IT Firm Booked 70% of Its Annual Sales with Sapper",
    excerpt: "An IT expert with no sales background opened a franchise — and Sapper's prospecting became the engine behind the majority of its revenue.",
    category: "success",
    author: "Amie Milner",
    date: "2026-02-02",
    readTime: "6 min read",
    content: GENERIC,
  },
  {
    slug: "aerospace-supplier-pipeline-90-days",
    title: "Aerospace Supplier Fills Its Pipeline in 90 Days",
    excerpt: "A direct-mail-led cadence into procurement teams turned a cold target list into booked RFQs in a single quarter.",
    category: "success",
    author: "Tony Auck",
    date: "2026-01-21",
    readTime: "5 min read",
    content: GENERIC,
  },
  {
    slug: "sapper-expands-st-louis-team",
    title: "Sapper Expands Its St. Louis Outbound Team to 400+",
    excerpt: "Continued growth in our U.S.-based operation means more researchers, SDRs, and strategists working client pipelines every day.",
    category: "news",
    author: "Sapper Team",
    date: "2026-01-09",
    readTime: "3 min read",
    content: GENERIC,
  },
  {
    slug: "sapper-joins-abstrakt",
    title: "Sapper Joins Forces with Abstrakt Marketing Group",
    excerpt: "Combining a data-driven outbound engine with Abstrakt's scale and multi-channel reach to fix B2B pipeline at scale.",
    category: "news",
    author: "Sapper Team",
    date: "2025-11-12",
    readTime: "4 min read",
    content: GENERIC,
  },
  {
    slug: "sapper-top-manufacturing-lead-gen-company",
    title: "Sapper Named a Top Lead Generation Company for Manufacturing",
    excerpt: "Recognized for manufacturing-specific outbound and a direct-mail-led, multi-channel approach to booking decision-maker meetings.",
    category: "pr",
    author: "Sapper Team",
    date: "2026-03-12",
    readTime: "2 min read",
    content: GENERIC,
  },
  {
    slug: "sapper-featured-direct-mail-led-outbound",
    title: "Sapper Featured on the Return of Direct-Mail-Led Outbound",
    excerpt: "Why a physical touch before the first call is winning attention with buyers who've tuned out the inbox.",
    category: "pr",
    author: "Sapper Team",
    date: "2026-02-26",
    readTime: "3 min read",
    content: GENERIC,
  },
];

// Helpers — async so they can read from Sanity when configured, else fall back
// to the static POSTS above. CATEGORIES stay static (fixed brand buckets).
const staticSorted = () =>
  [...POSTS].sort((a, b) => +new Date(b.date) - +new Date(a.date));

export async function getAllPosts(): Promise<BlogPost[]> {
  if (sanityEnabled) {
    const remote = await fetchAllPosts();
    if (remote && remote.length) return remote;
  }
  return staticSorted();
}
export async function getPost(slug: string): Promise<BlogPost | undefined> {
  if (sanityEnabled) {
    const remote = await fetchPost(slug);
    if (remote) return remote;
  }
  return POSTS.find((p) => p.slug === slug);
}
export async function getPostsByCategory(cat: BlogCategory): Promise<BlogPost[]> {
  return (await getAllPosts()).filter((p) => p.category === cat);
}
export async function getFeatured(): Promise<BlogPost> {
  const all = await getAllPosts();
  return all.find((p) => p.featured) ?? all[0];
}
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const categoryLabel = (slug: BlogCategory) => getCategory(slug)?.label ?? slug;
export const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
