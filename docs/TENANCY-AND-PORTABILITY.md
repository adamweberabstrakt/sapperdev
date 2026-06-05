# Tenancy &amp; Portability

How client sites built on this foundation stay **isolated**, **independently
owned**, and **fully removable** if a client leaves — while still sharing one
codebase, content model, and toolset.

## Three independent isolation axes

Each client is isolated on three separate layers. None of them depends on
another, so any one site can be detached cleanly.

| Layer | Per client | Shared | Isolation guarantee |
| --- | --- | --- | --- |
| **Code** | A fork of the base template repo | Base architecture, ScrollStory framework, UI components | Each repo is independent; pulls base improvements via a merge, never a hard dependency |
| **Content** | Its **own Sanity project** | The content **schema** (model) + Studio config | Separate projects cannot see each other — no `client_id` filter to get wrong, no shared token |
| **Hosting** | Its own Netlify site (own domain, env vars, deploys) | Nothing at runtime | Independent builds, billing, and blast radius |

## Why per-client Sanity projects (not one shared database)

- **No cross-client access — structurally.** A client's editor login is scoped
  to their project only. There is no shared dataset or row-level rule that could
  leak one client's content to another.
- **Portable.** Offboarding = transfer the Sanity project to the client and hand
  over their repo. Nothing in our infrastructure has to keep running.
- **Degrades gracefully.** The Sanity integration is env-gated with a **static
  fallback** (`src/lib/blog.ts`, `src/sanity/`). With no Sanity env vars set, the
  site runs entirely from static content — so a handed-off site works even if the
  client never stands up their own CMS.

Avoid: a single shared dataset/DB with a tenant column. It makes us the
guarantor of perfect isolation (a bug becomes a leak) and makes extraction
painful — both of which violate the "independent &amp; removable" requirement.

### The one legitimate shared store

Agency-owned, **read-only** content published once and shown on many sites (e.g.
shared resources) may live in a *separate* shared Sanity project that sites read
read-only. It is our content, identical everywhere, and never per-client — so it
cannot compromise isolation. Keep it strictly separate from client content.

## Editing model

- Clients make **basic edits** (text, images) via Sanity Studio, with an
  **editor** role scoped to *their* project.
- The agency does most edits and **all structural/schema changes** (restricted to
  agency admins).

## Per-client setup checklist

1. **Repo** — create the client repo from the base template; add the base as an
   `upstream` remote so it can pull future improvements:
   `git remote add upstream <base-repo-url>` then `git fetch upstream && git merge upstream/main`.
2. **Brand/config** — set values in `src/config/site.config.ts` (name, NAP,
   integrations, brand colors) and swap logos/images. Values are per-client; the
   *shape* is shared.
3. **Content** — create the client's Sanity project, deploy the shared schema,
   set `NEXT_PUBLIC_SANITY_PROJECT_ID` (+ dataset) in the site's env. Leave unset
   to ship on static content.
4. **Access** — invite the client to *their* project as `editor` only.
5. **Hosting** — create a dedicated Netlify site, set env vars, point the domain,
   and update `siteConfig.url`.

## Offboarding (client leaves)

1. Transfer the client's **Sanity project** ownership to them.
2. Hand over their **Git repo** (or let them fork it out).
3. They set env vars and deploy anywhere. No shared runtime dependency breaks.
