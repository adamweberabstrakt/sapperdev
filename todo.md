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

---

# Update — Service pages + PMax soft conversions

## Status: SHIPPED to production
- [x] /b2b-cold-calling, /cold-email-marketing, /b2b-linkedin-outreach (v2 pattern)
- [x] BehaviorTracking component (root layout): fires once per session
      - engaged_pageviews  (more than 3 page views)
      - engaged_time       (more than 60 seconds on site)
- [x] BookingButton now fires booking_started (open) + meeting_booked (success)
- [x] Clean build (23 pages); pushed to main

## dataLayer events now available for GTM (event names)
- meeting_booked   (HARD conversion — ChiliPiper booking success)
- booking_started  (soft — booking modal opened)
- engaged_pageviews(soft — >3 pageviews/session)
- engaged_time     (soft — >60s/session)

## Still to do (next sessions)
- [ ] GTM: create Custom Event triggers + GA4 event tags for the 4 events; mark key events
- [ ] Google Ads: meeting_booked = PRIMARY; others = SECONDARY (PMax training signal)
- [ ] Case study landing page, blog archive, blog post layout
- [ ] Decide headless CMS + framework (Astro vs stay on Next) BEFORE building blog

---

# Update — site.config consolidation + About + Contact

## Status: SHIPPED to production
- [x] src/config/site.config.ts — SINGLE SOURCE OF TRUTH for per-site values
      (brand, contact, location, social, integrations, stats, brand tokens, fonts)
- [x] Tailwind tokens, SITE_CONFIG, SITE_STATS, ChiliPiper, GTM id all sourced from it
- [x] Deduped proof stats (appointment/results/lead-qual) -> SITE_STATS
- [x] About page: Sapper content in Belkins flow (mission/vision, values, timeline,
      why, US-based/400+/St Louis), v2 design
- [x] Contact page: animated radar target-acquisition console (TargetRadar) +
      inline ChiliPiper calendar (ChiliPiperInline) with popup fallback;
      US-based/400+/St Louis messaging, config-driven contact details
- [x] Clean build (23 pages); pushed to main

## Framework note
- site.config.ts is the boundary for templating: a new brand overrides this one file
  (+ logo assets + its own Sanity dataset). Components stay generic.

## ChiliPiper inline — needs confirmation
- Inline embed uses concierge submit({ domElement }). If your router needs a form to
  route, ChiliPiper will render that form inline (still in-page, not a popup).
- Verify it renders as expected on /contact; if your account uses a different inline
  embed/meeting link, send it and it's a one-component swap. Fallback = popup button.

## Still to do
- [ ] Confirm ChiliPiper inline render; finish GTM conversion config (4 events)
- [ ] Case study landing, blog archive, blog layout (after Sanity)
- [ ] Wire Sanity (deferred); then blog

---

# Update — Team page + interactive TeamLogic IT case study

## Status: SHIPPED to production
- [x] /team — featured GM Amie Milner (head) + Tony Auck, Natalie Archer, Jeff Winters
      ID-badge avatars, 400+/St Louis band, "full team on LinkedIn" -> company page
- [x] src/lib/team.ts — scalable roster; per-person `linkedin` rendered only when set
- [x] /results/team-logic-it — interactive: animated count-up gauge (70%) +
      clickable case-file tabs (Challenge / Why Sapper / Experience) + quotes
- [x] Featured card on /results linking to the case study
- [x] Clean build (24 pages), pushed to main

## Team roster — NEEDS YOUR INPUT (cannot scrape LinkedIn)
- LinkedIn blocks automated access + scraping violates their ToS, so the 22
  employees can't be pulled programmatically. Did NOT invent names/titles/profile
  URLs for real people (would be false info about identifiable individuals).
- To populate the full roster + individual profile links: paste name / title /
  LinkedIn URL for each person -> drops straight into src/lib/team.ts and renders.

## ChiliPiper buttons not opening — ROOT CAUSE FOUND
- concierge.js loads (HTTP 200) and exposes ChiliPiper.submit(domain, router) with
  a call queue — so script + API + timing are all fine.
- Blocker: the router slug `sapper_router_1` is the PLACEHOLDER from the original
  repo (flagged day one). submit() has no valid router to open -> click falls through.
- FIX (one line): replace integrations.chilipiperRouter in src/config/site.config.ts
  with the real Concierge router slug from ChiliPiper admin (confirm domain = abstraktmg).
  Fixes every booking button AND the inline /contact embed at once.

---

# Update — Data enrichment + 3 service pages + Data Loop process page

## Status: SHIPPED to production (29 routes)
- [x] /data-enrichment — landing: capture website traffic data -> named targets ->
      activate across channels. Mechanism (visitor-resolution method) intentionally
      NOT explained, per direction. Problem -> steps -> channels -> proof -> FAQ -> CTA.
- [x] /account-based-marketing — ABM service page (v2 pattern)
- [x] /demand-generation — Demand Gen service page (v2 pattern)
- [x] /b2b-direct-mail — Direct Mail service page (v2 pattern)
- [x] /process — interactive Data Loop: auto-cycling + clickable stages
      (Generate -> Capture & Enrich -> Match & Activate -> Compound) around a Data Core,
      + "Outbound, run like sales ops" edge section (data quality / coordinated / compounds)
- [x] Nav: 4 new services added to dropdown + top-level Process link
- [x] Clean build, pushed to main

## Note
- Navbar/Footer still use legacy v1 styling (navy/white/cyan) while all pages are v2
  (ink/acid). Optional: align nav/footer to v2 for full cohesion.

## Still open
- [ ] ChiliPiper real router slug -> site.config.ts (user retrieving) — fixes all booking
- [ ] Team roster (name/title/LinkedIn) -> src/lib/team.ts
- [ ] Sanity wiring -> blog archive + post layout

---

# Update — ChiliPiper fix + Team (Bionic) expansion with photos

## Status: SHIPPED
- [x] ChiliPiper ROOT-CAUSE FIX: was sending default trigger + map:true (needs a form).
      Now sends trigger:"RouterLink" + lead:{PersonEmail:""}, no map — matches the
      working snippet. Applied to BookingButton, fireChiliPiper, ChiliPiperInline.
- [x] Team expanded from abstraktmg.com/leadership-team (Bionic = Sapper key player):
      Amie Milner (GM, head), Tony Auck (VP Exec Sales), Alexandra Guarino (Dir Partner
      Success, Bionic), Doug Jennings (Dir Operations, Bionic), Natalie Archer, Jeff Winters.
      Real headshots in /public/images/team, grayscale ID-badge avatars.
- [x] No individual LinkedIn URLs on the leadership page -> still need those to add per-person links.

## OPEN — menu/IA (proposed, awaiting confirmation before building)
- 3-axis model: Solutions × Tactics × Industries. Proposed mega-menu under "Appointment
  Setting" (Solutions column + Tactics column + HIT Method feature) and a new top-level
  "Industries" next to Results. Restyle nav/footer to v2 in the same pass. Then footer.
- HIT Method PDF = the "how we work" process (The Pursuit, 6 stages) -> fold into Process
  and/or Appointment Setting overview; the 6 stages map 1:1 to the Tactics.

---

# Update — 3-axis menu IA (built)

## Status: SHIPPED (30 routes)
- [x] NAV restructured to Solutions × Tactics × Industries
- [x] "Appointment Setting" desktop mega-menu: Solutions column (Appt Setting, ABM,
      Demand Gen, Lead Qualification) + Tactics column (Calling, Cold Email, LinkedIn,
      Direct Mail, Data Enrichment) + "The HIT Method" feature tile -> /process
- [x] New top-level "Industries" + /industries landing (24 verticals, v2)
- [x] Standalone "Process" top-level folded into the mega-menu feature (page still at /process)
- [x] Mobile menu shows grouped sections; clean build, pushed

## Next candidates
- [ ] Restyle Navbar + Footer to v2 (ink/acid) — they're still legacy navy/cyan — then the footer work
- [ ] Align /b2b-appointment-setting hero to the HIT Method / "The Pursuit" PDF framing
- [ ] Individual industry pages (later, likely programmatic: solution × industry)
- [ ] Per-person LinkedIn URLs for team (leadership page exposes none)
- [ ] Verify ChiliPiper buttons now open (trigger fix shipped)

---

# Update — ChiliPiper /contact bounce fix + v2 footer

## Status: SHIPPED
- [x] BookingButton: removed empty PersonEmail lead (broke routing) + removed onError
      -> /contact redirect (was the bounce). Now opens the Concierge popup; only
      falls back to /contact if the script is genuinely absent (it isn't).
- [x] ChiliPiperInline: dropped empty lead too.
- [x] Footer rebuilt in v2 (ink/acid, border-acid top): Solutions / Tactics / Company
      columns, contact + LinkedIn/Facebook from site.config, working Book-a-call CTA,
      Abstrakt division line + Privacy/Terms.

## If buttons STILL don't open (next diagnostic)
- New behavior should be: click opens popup. If instead nothing happens (no /contact),
  submit is firing but not rendering -> likely router config; try dropping `trigger`
  or confirm router "sapper_router_1" is published/Concierge-type in ChiliPiper admin.

## Next candidates
- [ ] Restyle Navbar to v2 (footer now done; navbar still legacy navy/cyan)
- [ ] Align /b2b-appointment-setting hero to the HIT Method PDF
- [ ] Per-person team LinkedIn URLs

---

# Update — Blog architecture (static, Sanity-ready)

## Status: SHIPPED for team review (43 routes)
- [x] src/lib/blog.ts — typed model: CATEGORIES (research/success/news/pr), BlogPost,
      Block union (h2/h3/p/ul/callout/table), POSTS (1 real seed + 7 placeholders),
      helpers getAllPosts/getPost/getPostsByCategory/getFeatured/getCategory.
- [x] /blog archive — featured post + category tab nav + grid (Salesforce-news style)
- [x] /blog/category/[category] — Research / Success / News / PR bucket pages
- [x] /blog/[slug] — single layout: block renderer, related posts, CTA
- [x] Seed post: Jeff Winters manufacturing lead-gen guide (tables render)
- [x] PostCard / CategoryNav / PostBody components; Blog in nav + footer
- [x] Card/post media = styled tactical placeholders (no image assets needed yet)

## Sanity swap plan (when ready)
- post document: title, slug, excerpt, category(enum), author, date, readTime, featured, body(portable text)
- Replace the helper bodies in blog.ts with GROQ queries -> pages unchanged.
- Portable-text serializers map 1:1 to the Block types already rendered.

## Still open
- [ ] Confirm ChiliPiper buttons open (empty-lead + onError redirect removed)
- [ ] Restyle Navbar to v2; align /b2b-appointment-setting to HIT Method PDF
- [ ] Real cover images for posts (when Sanity is wired)

---

# Update — ChiliPiper switched to deploy(formType: HTML) form-trigger

## Status: SHIPPED — needs a live test
- [x] BookingForm: real HTML form (firstname/lastname/email/company). On mount it
      calls ChiliPiper.deploy("abstraktmg","sapper_router_1",{formType:"HTML"}) so the
      router intercepts the form submit and opens the calendar. onSuccess -> meeting_booked.
- [x] BookingModal: mounted once in layout; opens on "open-booking" window event.
- [x] BookingButton: now opens the modal (dispatches "open-booking") instead of submit().
- [x] /contact: inline BookingForm (replaces old inline embed). Radar console kept.
- This matches the exact deploy(formType HTML) snippet ChiliPiper provided.

## If it STILL doesn't open after this
The code now does exactly what the router expects (real form + deploy intercept), so the
only remaining cause is ChiliPiper-side config:
  - Add sapperdev.vercel.app (and the production domain) to the Concierge ALLOWED DOMAINS.
  - Confirm router "sapper_router_1" is published/active.
  - Confirm the form's email field name maps (currently name="email").

## Old/orphaned (left valid, unused): ChiliPiperInline.tsx

---

# Update — Booking switched to ChiliPiper SMART LINK iframe (reliable path)

## Status: SHIPPED + verified live
- [x] site.config integrations.bookingUrl = https://abstraktmg.chilipiper.com/round-robin/sapper-demo
- [x] BookingCalendar: iframes the smart link (verified: no X-Frame-Options /
      frame-ancestors, embeds cleanly). Listens for ChiliPiper "booking-confirmed"
      postMessage (origin *.chilipiper.com) -> GTM meeting_booked.
- [x] /contact renders the calendar inline (iframe src confirmed live).
- [x] BookingButton -> opens modal -> calendar iframe (max-w-3xl, ~600px).
- Why this over deploy/router: self-contained booking page, no form, no domain
  allowlist dependency. Change the meeting type later by editing bookingUrl only.

## Orphaned (left valid, unused): BookingForm.tsx, ChiliPiperInline.tsx

---

# Update — Fix: booking calendar rendered but not clickable
- Cause: the iframe sat inside AnimateIn (a Framer Motion motion.div). Transformed
  ancestors make iframes render but reject pointer events.
- Fix: kept the heading animation, moved the calendar iframe into a plain
  relative z-10 container (no transform ancestor). /contact + modal unaffected otherwise.
- If still not interactive: (1) dismiss the cookie bar (covers bottom strip),
  (2) possible ChiliPiper domain-gating of embeds, (3) fallback = open smart link in new tab.

---

# Update — Navbar v2 restyle + real address (NAP)
- [x] Navbar restyled to v2 (ink/acid, matches footer). Dropdown mega-menu reworked to
      dark dossier panel with acid mono labels + bordered feature tile. Active = acid.
- [x] Navbar CTA "Book a Call" now opens the booking modal (dispatches open-booking),
      closing the mobile/dropdown menus first. Consistent with site-wide booking.
- [x] site.config.location: real address 701 N 1st St, Suite 201, St. Louis, MO 63102
      (+ street/zip/stateAbbr/full/mapsUrl from the Google Maps listing).
- [x] Footer + contact page show the address, linked to Google Maps (good for local NAP).

## Booking status: WORKING. Calendar interactive (Framer-transform fix). "No available
   time slots" is a ChiliPiper availability setting (assignee working hours/calendar), not site.

## Still open
- [ ] Delete orphaned booking files (BookingForm.tsx, ChiliPiperInline.tsx) once confirmed
- [ ] Rework /b2b-appointment-setting hero to HIT Method PDF
- [ ] Wire Sanity to blog model; per-person team LinkedIn URLs; revoke PAT when done

---

# REVIEW — Cleanup pass (orphan removal)
- Deleted: BookingForm.tsx, ChiliPiperInline.tsx, ContactForm.tsx (unused after smart-link iframe).
- Removed dead fireChiliPiper helper; ChiliPiper.tsx is loader-only.
- Orphan scan now clean. Build green (43 routes).

# PRODUCTION-READINESS GAPS (found in recon)
- SEO/infra MISSING: sitemap.ts, robots.ts, app icon, opengraph-image, custom not-found (404).
- layout metadata: has title/description/openGraph; VERIFY metadataBase is set (else OG/canonical are relative).
- No JSON-LD schema anywhere -> add Organization + LocalBusiness (NAP now available).
- siteConfig.url still sapperdev.vercel.app -> needs production domain.
- Legal pages privacy-policy / terms-of-use are 7-line placeholders -> need real content.
- /api/contact/route.ts (Resend) is now orphaned (no form posts to it) -> remove or add a contact form (+RESEND_API_KEY env).
- concierge.js loader still mounted but unused by the iframe booking -> optional removal (~150KB).
- ChiliPiper: set assignee availability so slots show. Per-person team LinkedIn URLs. Wire Sanity for blog. Revoke GitHub PAT.

---

# Update — SEO bundle + privacy policy ported
- [x] SEO: sitemap.ts, robots.ts, opengraph-image + twitter-image (next/og), app icon +
      apple-icon, not-found (404), JsonLd (ProfessionalService + NAP), metadataBase. Live: sitemap 38 urls.
- [x] Privacy Policy ported from sapperconsulting.com/privacy-policy (v2-styled, config-driven).
      PRIVACY_EMAIL is a placeholder (live site obfuscates it) -> CONFIRM/REPLACE.
- [ ] Terms of Use: live sapperconsulting.com has NO terms page (site: search empty; footer only
      links Privacy + Sitemap). Options: draft a standard TOS for legal review, or leave placeholder.

---

# Update — Terms of Use drafted + privacy email set
- [x] /terms-of-use: standard website TOS (12 sections, governing law = Missouri/St. Louis).
      v2-styled, config-driven. In-code note: template — have counsel review before relying on it.
- [x] Privacy contact email set to info@sapperconsulting.com (privacy + terms).
- Both legal pages are now real content (no more placeholders). Live + in sitemap.

# PRODUCTION CHECKLIST — remaining
- [ ] Counsel review of TOS; confirm privacy policy specifics.
- [ ] Production domain + update siteConfig.url (sitemap/robots/OG/schema follow automatically).
- [ ] ChiliPiper: set assignee availability so booking slots show.
- [ ] Wire Sanity to blog model + real posts/cover images; per-person team LinkedIn URLs.
- [ ] Decide on orphaned /api/contact (Resend) route; GTM->GA4 conversion config; a11y pass.
- [ ] Optional: drop unused concierge.js loader. Revoke GitHub PAT at handoff.

---

# Update — Sanity wired (env-gated) + team LinkedIn URLs
- [x] src/sanity/{config,fetch,blog}.ts: read-only GROQ fetch (no SDK dep), portable-text
      -> Block[] mapper, cover image. Active when NEXT_PUBLIC_SANITY_PROJECT_ID is set.
- [x] blog.ts helpers async (Sanity-or-static fallback). Blog pages + sitemap async. PostCard +
      post hero render coverImage when present. Build green (static fallback, 48 routes).
- [x] sanity-studio/README.md (post/callout/table schemas matching the mapper) + .env.example.
- [x] Team LinkedIn added (verified): Jeff Winters, Amie Milner, Tony Auck, Doug Jennings, Natalie Archer.
      Alexandra Guarino LEFT BLANK — no confidently-verified profile (search hit a different person).

## To go fully live on Sanity (their side)
- Create Sanity project, add schemas from sanity-studio/README.md, set env vars in Vercel,
  add CORS origin, publish posts. Site switches automatically (60s ISR).
- Optional: confirm Alexandra Guarino's LinkedIn URL to fill the last team profile.

## Review — Team dossier profile pages
- Added dossier fields to `src/lib/team.ts` (slug, codename, summary, location, education, strengths[], focus[], dossier[], weakness) + `getMember()`. All 6 leaders given slugs + drafted content from LinkedIn/roles.
- New `src/app/team/[slug]/page.tsx`: tactical "personnel file" — ID badge, field summary, strengths + areas of operation, service record, playful "known weakness," comms/channels, and an **authorship hub** ("Intel Filed by [name]") listing on-site posts where `post.author === member.name` (empty-state when none). generateStaticParams + generateMetadata.
- `src/app/team/page.tsx`: names now link to dossiers; each card shows "View dossier →" + LinkedIn.
- `src/app/sitemap.ts`: added all 6 `/team/[slug]` URLs.
- Build green; live 200s verified. **Site now = 44 content pages** (38 + 6 dossiers).
- NOTE: strengths + weaknesses are drafted placeholders for client review. Authored-post links: Amie, Jeff, Tony each have 1 post today; the other three show the empty state until they have a byline.
