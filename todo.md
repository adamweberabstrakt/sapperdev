# Sapper Consulting — Homepage Build & Brand Standards v2

## Goal
Bold "tactical dossier" homepage positioning Sapper as the #1 outbound B2B
appointment-setting firm — because the data + list targeting is unmatched.
Token-driven brand standards reusable for other org brands (WordPress replacement).

## Status: SHIPPED to production (main → sapperdev.vercel.app)

## Brand Standards v2 (additive — legacy tokens untouched)
Colors: ink #0B1B30 (page) · panel #11243D (cards) · acid #B6F22B (accent) ·
steel #6B829E (labels) · bone #F5F7FA (text).
Type: display = Anton · mono/labels = Space Mono · body = Inter.
Motifs: mono kicker labels, acid dash dividers, redacted dossier card, stat row.

## Build plan
- [x] 0. Read frontend-design skill; add tokens to tailwind.config + fonts to layout
- [x] 1. Hero — display headline + mono kicker + "coordinated assault" tagline + CTAs
- [x] 2. "The List Is Everything" — headline + 4 value bullets + redacted DossierCard
- [x] 3. After-Action stats row (15+ / 500K+ / 25M+ / 100s)
- [x] 4. Coordinated motion / channels (links to 4 service pages)
- [x] 5. Account-Based Marketing section (4-step named-account assault)
- [x] 6. Results / proof (from CASE_STUDIES)
- [x] 7. Final CTA band ("prepared for exec review" → /contact)
- [x] 8. next build (clean), confirm SEO headings in static HTML, push live

## Files touched
- tailwind.config.ts ...... +v2 color + font tokens (additive)
- src/app/layout.tsx ...... +Anton & Space Mono in Google Fonts link
- src/app/globals.css ..... +fade-up keyframes, tactical-grid, reduced-motion
- src/components/ui/Section.tsx ... +"ink" bg option (additive)
- src/components/ui/Button.tsx .... +"acid"/"outline-acid" variants (additive)
- src/components/home/DossierCard.tsx ... NEW reusable redacted record card
- src/app/page.tsx ........ full homepage (was placeholder)
- .gitignore .............. NEW (was missing — protected node_modules/.next)

## Review
- Build passed clean (16/16 routes, no lint/type errors). Homepage is static,
  server-rendered H1 + 5 H2s now in HTML (old page rendered headings client-side
  = SEO gap; fixed).
- ICP exec brief treated as INTERNAL source: used for positioning only. Pricing,
  owner names, pilot/CEO framing, and the "dials-only guarantee" deliberately
  kept OFF the public site.
- Simplification vs. plan: merged the separate "data edge" section into
  "The List Is Everything" to avoid redundancy (one fewer section, same message).
- Scoped to the homepage. Other pages (About/Team/Results/Services) + Navbar/Footer
  still use legacy navy/cyan/purple — intentional, additive approach. Full re-skin
  is a later phase.

## Next phase (not done yet)
- [ ] Reconcile Navbar/Footer + service/about/team/results pages to v2 tokens
- [ ] Replace logo SVG if a v2 mark exists
- [ ] Extract theme config (colors/fonts/copy) into one place for multi-brand reuse
- [ ] Wire CTAs to ChiliPiper booking directly (currently route to /contact)
