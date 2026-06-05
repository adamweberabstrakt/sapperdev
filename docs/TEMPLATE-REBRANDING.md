# Rebranding This Template for a New Client

This codebase is a **config-driven template**. The same code renders as Sapper
(with Sapper's config) or any client (with theirs). Rebranding happens in three
layers, from "change one value" to "write new copy."

## Layer 1 — Brand config (the big lever)

**File:** `src/config/site.config.ts` — the single source of truth.

Editing this one file rebrands the entire site **chrome, theme, and SEO** with
no component changes. It cascades automatically to:

- **Theme** — `brandColors` + `fonts` are read by `tailwind.config.ts`, so colors
  and type change site-wide.
- **Chrome** — Navbar logo, Footer logo + attribution line.
- **Metadata** — page titles, Open Graph, Twitter cards (`layout.tsx`).
- **SEO files** — `sitemap.xml`, `robots.txt`, the generated OG image, JSON-LD
  (all derive from `url`, `name`, `tagline`, `location`).
- **Contact routing** — the `/api/contact` sender + recipient.
- **Integrations** — ChiliPiper, GTM, booking URL.
- **NAP** — address, phone, social links everywhere they appear.

What to set per client: `name`, `shortName`, `tagline`, `url`, `contact`,
`location`, `social`, `integrations`, `logos`, `legal.attribution` (set to `""`
if the client has no parent brand), `mail`, `stats`, `brandColors`, `fonts`.

**Also swap the logo files** referenced by `logos.*` into `public/images/`
(keep the same filenames, or update the paths in config).

## Layer 2 — Content data files

**Folder:** `src/lib/` (+ the scroll-story components).

These are structured data / example content meant to be **replaced** per client.
The components that render them are generic; only the data is brand-specific:

- `lib/constants.ts` — `NAV_LINKS` (nav structure + labels).
- `lib/team.ts` — team members + bios.
- `lib/caseStudies.ts` — case studies / "Mission Reports."
- `lib/blog.ts` — static blog seed (or switch to the client's Sanity project).
- `components/method/MethodScrollStory.tsx`,
  `components/stories/DemandGenScrollStory.tsx` — the scroll-animation **copy**
  (beat titles + lines). The animation engine/atoms are reusable; the narrative
  is client-specific.

## Layer 3 — Page copy

**Folder:** `src/app/**/page.tsx`.

Each page's structure (sections, components, animations, layout) is reusable; the
**headlines and body copy** are written per client. This is the layer that still
needs real writing — the template gives you the skeleton, not the words.

## Rebrand process (new client)

1. **Copy the repo** — create the client repo from this base; add this base as an
   `upstream` remote so the client site can pull future framework improvements
   (see `docs/TENANCY-AND-PORTABILITY.md`).
2. **Layer 1** — fill in `site.config.ts`; drop the client's logos into
   `public/images/`.
3. **Layer 2** — replace the `lib/` content files and the scroll-story copy.
4. **Layer 3** — rewrite the page copy in `src/app/`.
5. **Content + hosting** — stand up the client's Sanity project (or stay static),
   set env vars, point the domain, update `siteConfig.url`.
6. **Ship** — `npm run build` (must be green) → deploy.

## Quick verification that Layer 1 is fully wired

After changing only `site.config.ts`, these should reflect the new brand with no
other edits: browser tab title, footer logo + attribution, the `/opengraph-image`
preview, `/sitemap.xml` URLs, and the site's accent colors. If any still show the
old brand, that value isn't routed through config yet — file it as a bug.
