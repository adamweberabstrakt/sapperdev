import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { POSTS, CATEGORIES } from "@/lib/blog";
import { CASE_STUDIES_DETAILED } from "@/lib/caseStudies";

const STATIC_ROUTES = [
  "", "/b2b-appointment-setting", "/account-based-marketing", "/demand-generation",
  "/lead-qualification", "/b2b-cold-calling", "/cold-email-marketing",
  "/b2b-linkedin-outreach", "/b2b-direct-mail", "/data-enrichment",
  "/process", "/industries", "/results", "/results/team-logic-it",
  "/about", "/team", "/contact", "/blog", "/privacy-policy", "/terms-of-use",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();
  const entries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: r === "" || r === "/blog" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
  CATEGORIES.forEach((c) =>
    entries.push({ url: `${base}/blog/category/${c.slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.5 })
  );
  POSTS.forEach((p) =>
    entries.push({ url: `${base}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "monthly", priority: 0.6 })
  );
  CASE_STUDIES_DETAILED.forEach((cs) =>
    entries.push({ url: `${base}/results/${cs.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 })
  );
  return entries;
}
