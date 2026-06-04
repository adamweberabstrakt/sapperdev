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

---

# Page 2 — B2B Appointment Setting (/b2b-appointment-setting)

## Status: SHIPPED to production
Brief: combine current Sapper /solutions/ content + new focus on technicality &
list quality, organized in the flow/depth of leadium.com/services/appointment-setting,
rendered in brand v2.

## Done
- [x] Pull Leadium page (flow/structure only) + current Sapper /solutions/ content
- [x] Hero + proof strip (2,000+ clients / 80+ industries / 50 states / 500K+ meetings)
- [x] Differentiators (no spray, no bought lists)
- [x] List-quality engine centerpiece: 125M+ records → ICP → enrich → verify → intent → cleanse → human QA, with reused DossierCard
- [x] 5-step "operation" process; coordinated channels (links to service pages)
- [x] Deliverables / what-you-get; testimonials + industry metrics
- [x] FAQ (native details, server-rendered); final CTA
- [x] Clean build; H1 + 8 H2s + 6 FAQs in static HTML; pushed to main

## Review / decisions
- Leadium used for STRUCTURE only — all copy original or adapted from Sapper's own content.
- Removed legacy "Bionic" brand references; kept testimonial substance + attribution.
- Pricing table from current /solutions/ deliberately OMITTED (gated-to-consult, Leadium-style).
  Easy to add later if you want public pricing.
- Single-file change (page.tsx) — reused existing v2 tokens/components, no shared edits.
- "Direct Mail" channel links to /contact (no dedicated page yet).

---

# Page 3 — Results (parent) + Case Study children + ChiliPiper booking

## Status: SHIPPED to production
Brief: restructure /results like leadium.com/case-studies as a PARENT for case-study
child pages, embed video (youtu.be/GMiD_HGFi94), and route all primary CTAs to ChiliPiper.

## Done
- [x] Pull Leadium case-studies (structure) + use real Sapper results
- [x] Results parent: hero, embedded video (click-to-load facade), proof stats, case-study grid, testimonials, CTA
- [x] /results/[slug] child pages (6 industries) via generateStaticParams (SSG) + generateMetadata
- [x] New caseStudies.ts data (additive; existing CASE_STUDIES untouched)
- [x] BookingButton: ChiliPiper router + GTM "meeting_booked" event + /contact fallback
- [x] VideoEmbed: privacy-enhanced, click-to-load (no iframe until clicked)
- [x] Swap primary CTAs (home, appointment) to BookingButton; loader -> afterInteractive
- [x] Clean build (22 pages); pushed to main

## ChiliPiper — wired to existing config, NEEDS confirmation (see chat)
- Uses concierge.js @ abstraktmg.chilipiper.com + router "sapper_router_1" (already in repo)
- Open question: does the router pop & book with NO form/lead data? Needs live test.
- Conversion: fires dataLayer "meeting_booked" — needs a GTM trigger+tag to count it.

## Next phase
- [ ] Confirm ChiliPiper router behavior; finish site-wide CTA swap (other pages/Navbar)
- [ ] Build cold-calling / cold-email / LinkedIn service pages (reuse appointment pattern)
- [ ] Reskin Navbar/Footer + inner pages to v2
- [ ] (Later) form fills for soft conversions / list signups

---

# Update — Logo set, Lead Qualification page, language scrub

## Status: SHIPPED to production
- [x] Add logo set to /public/images (mark, dark, lime, light)
- [x] Header uses lime logo; footer uses light logo (on navy)
- [x] New /lead-qualification page in v2 (intercept→identify→score→qualify→route,
      speed-to-lead band, criteria + dossier, outcomes, FAQ, CTA) — modeled on
      Leadium's Inbound Lead Qualification page, with intel/precision framing
- [x] Added Lead Qualification to Services nav dropdown
- [x] Scrubbed "assault" -> "attack"; softened gun-leaning terms
      (weapon -> edge, "fires at" -> "locks onto", "fire in" -> "move in",
      "fires from" -> "follows from"). Code identifier fireChiliPiper left as-is.
- [x] Clean build (23 pages); pushed to main

## Notes
- "this page" interpreted as Leadium /services/inbound-lead-qualification (confirm).
- Footer logo set to light as a sensible default — change if you want lime there too.
