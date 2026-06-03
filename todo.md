# Sapper Consulting — Homepage Build & Brand Standards v2

## Goal
Build a bold "tactical dossier" homepage positioning Sapper as the #1 outbound B2B
appointment-setting firm — because the data + list targeting is unmatched. Establish
reusable, token-driven brand standards that can later re-skin for other org brands
(WordPress-replacement framework).

## Current state (audited)
- Next.js 14 App Router + Tailwind 3 + Framer Motion + TypeScript; contact via Resend.
- Homepage (`src/app/page.tsx`) is a placeholder ("Site under construction").
- Brand tokens today: navy #0B2E57, cyan #00D0FF, purple #A82EFF; font Inter.
- Reusable infra already present: `Section`, `Button`, `AnimateIn`, `constants.ts`
  (CASE_STUDIES, TEAM_MEMBERS, SITE_CONFIG), Navbar/Footer, ChiliPiper booking.

## Decisions to confirm before building (verify-the-plan step)
- [ ] Brand color tokens (proposed below) — approve / adjust hexes
- [ ] Display + mono font choice (Anton or Archivo Black; Space Mono or IBM Plex Mono)
- [ ] Additive tokens now (recommended) vs. full re-skin of all pages immediately
- [ ] Push method (scoped session PAT, or I hand back a patch)
- [ ] ICP doc — NOT received; confirm target messaging before final copy

## Proposed Brand Standards v2 (additive — existing tokens left intact)
Colors (new tokens):
- ink        #0B1B30  (page background)
- ink-panel  #11243D  (cards / dossier panels)
- acid       ~#B6F22B (primary accent / lime — lock exact value from artwork)
- steel      #6B829E  (muted tracked labels)
- bone       #F5F7FA  (primary text on dark)
Type:
- Display / stats: heavy condensed (Anton or Archivo Black)
- Labels / dossier: mono, wide tracking (Space Mono or IBM Plex Mono)
- Body: Inter (keep)
Motifs: mono kicker labels ("OPERATION / 001"), acid dash dividers,
redacted dossier card (record #, STATUS: VERIFIED, ✓ rows), big stat row.

## Build plan — homepage (each item = one small, reviewable change)
- [ ] 0. Read frontend-design SKILL.md; add new tokens to `tailwind.config.ts` + fonts to `layout.tsx`
- [ ] 1. Hero — giant display headline + mono kicker + "coordinated assault" tagline + booking CTA
- [ ] 2. "The List Is Everything" — headline + 4 value bullets + redacted dossier card (signature section)
- [ ] 3. After-Action stats row (15+ / 500K+ / 25M+ / 100s)
- [ ] 4. Coordinated motion / channels (appt setting, cold call, email, LinkedIn → link to service pages)
- [ ] 5. Account-Based Marketing section (named-account assault: list → multi-channel → decision-makers → meetings)
- [ ] 6. Why our data / targeting is unmatched (cleansed, intent-sought, verified — not bought/cloned)
- [ ] 7. Results / proof (from CASE_STUDIES)
- [ ] 8. Final CTA band ("prepared for exec review" → book a meeting)
- [ ] 9. `next build` to confirm no breakage; QA responsive (mobile/desktop)

## Notes / open items
- ICP doc not attached — flagged to user.
- Push access: GitHub "Secrets" do NOT grant push (Actions-only). Need a session token, or hand back a patch.
- Reusability: sections are token-driven + content from `constants.ts`; theme-extraction
  into a shared config is a LATER phase, not pass 1 (keep this build simple).

## Review (filled in after build)
- _pending_
