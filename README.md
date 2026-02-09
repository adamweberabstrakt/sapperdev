# Sapper Consulting — Website

Modern B2B pipeline generation site built with Next.js 14, Tailwind CSS, and deployed on Vercel.

## Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** Resend (email notifications) + ChiliPiper (meeting scheduling)
- **Analytics:** Google Tag Manager (GTM-MQLB3J4)
- **Hosting:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file:

```
RESEND_API_KEY=your_resend_api_key_here
```

Without the Resend API key, the contact form will log submissions to console instead of sending emails.

## Project Structure

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Home
│   ├── about/              # About page
│   ├── team/               # Team page
│   ├── contact/            # Contact page
│   ├── results/            # Results/case studies
│   ├── b2b-appointment-setting/  # Main services page
│   ├── b2b-cold-calling/         # Cold calling (future)
│   ├── cold-email-marketing/     # Email marketing (future)
│   ├── b2b-linkedin-outreach/    # LinkedIn outreach (future)
│   ├── privacy-policy/           # Privacy policy
│   ├── terms-of-use/             # Terms of use
│   └── api/contact/              # Contact form API route
├── components/
│   ├── layout/             # Navbar, Footer, CookieBanner
│   ├── ui/                 # Button, Section, AnimateIn, ContactForm
│   ├── sections/           # Page-specific sections (Phase 3+)
│   └── integrations/       # ChiliPiper, Chatbot
├── lib/
│   └── constants.ts        # Site data (nav, team, case studies)
└── public/
    └── images/             # Logo, team photos
```

## Brand

- **Navy:** #0B2E57
- **Cyan:** #00D0FF
- **Purple:** #A82EFF
- **Light Gray:** #F4F4F4
- **Font:** Inter

## Integrations

- **ChiliPiper:** Fires on contact form submit (abstraktmg / sapper_router_1)
- **Google Tag Manager:** GTM-MQLB3J4 (head + noscript)
- **Chatbot:** Drift placeholder (pending demo)
- **Cookie Consent:** Custom banner component
