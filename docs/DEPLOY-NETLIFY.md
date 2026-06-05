# Deploying to Netlify

This is a Next.js 14 App Router site. Netlify's **Next.js Runtime v5** supports
the App Router, time-based + on-demand ISR, and `next/image` via the Netlify
Image CDN — no code port required, just connect the repo.

## One-time setup

1. **Connect the repo** in the Netlify dashboard (New site → Import from Git).
   Netlify auto-detects Next.js, installs the runtime, runs `npm install` &amp;
   `next build`, and deploys. Every push to the connected branch redeploys.
2. **Production branch = `main`.** Set it as the production branch; `dev` and PRs
   get deploy previews automatically.
3. **Node version = 20** (set in `netlify.toml`, included in this repo).
4. **Environment variables** (Site settings → Environment):
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`,
     `NEXT_PUBLIC_SANITY_API_VERSION` — only if using live Sanity content.
   - `RESEND_API_KEY` — only if the `/api/contact` route is in use.
5. **Domain** — add the custom domain in Netlify (free auto-SSL), then update
   `siteConfig.url` in `src/config/site.config.ts` to the production URL. That one
   value cascades to the sitemap, robots, and Open Graph tags.

## Verify after the first deploy

Netlify's serverless model differs from a persistent Node server, so confirm:

- **OG image** — `src/app/opengraph-image.tsx` uses `runtime = "edge"`. Netlify
  runs edge functions, but this is the most fragile piece; if it fails to bundle,
  switch that route to the node runtime or pre-generate a static OG image.
- **Contact route** — `/api/contact` (Resend) must finish within Netlify's
  function timeout (~10s). It does; just confirm a test submission works.
- **ISR** — the 60s revalidate on Sanity fetches works on Runtime v5.
- **Pages render** — spot-check a static page, a blog post, and a scroll-story
  page (home / process / demand-generation).

## netlify.toml

Already in the repo root:

```toml
[build]
  command = "next build"

[build.environment]
  NODE_VERSION = "20"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Do **not** set a `publish` directory — the Next.js runtime manages the output.
