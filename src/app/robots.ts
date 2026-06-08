import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Parked: block all crawlers (site is not for indexing).
  return { rules: { userAgent: "*", disallow: "/" } };
}
