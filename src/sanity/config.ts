// Sanity is OPTIONAL. With no env vars set, the blog falls back to the static
// posts in src/lib/blog.ts. Set these in Vercel (and .env.local) to go live:
//   NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
export const sanityEnabled = Boolean(projectId);
