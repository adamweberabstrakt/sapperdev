import Image from "next/image";
import Link from "next/link";
import BookingButton from "@/components/ui/BookingButton";
import { siteConfig } from "@/config/site.config";

const COLUMNS = [
  {
    label: "Solutions",
    links: [
      { name: "Appointment Setting", href: "/b2b-appointment-setting" },
      { name: "Account-Based Marketing", href: "/account-based-marketing" },
      { name: "Demand Generation", href: "/demand-generation" },
      { name: "Lead Qualification", href: "/lead-qualification" },
    ],
  },
  {
    label: "Tactics",
    links: [
      { name: "Cold Calling", href: "/b2b-cold-calling" },
      { name: "Cold Email", href: "/cold-email-marketing" },
      { name: "LinkedIn Outreach", href: "/b2b-linkedin-outreach" },
      { name: "Direct Mail", href: "/b2b-direct-mail" },
      { name: "Data Enrichment", href: "/data-enrichment" },
    ],
  },
  {
    label: "Company",
    links: [
      { name: "Our Method", href: "/process" },
      { name: "Industries", href: "/industries" },
      { name: "Blog", href: "/blog" },
      { name: "Results", href: "/results" },
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-acid bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            {siteConfig.logos.footer ? (
              <Image src={siteConfig.logos.footer} alt={siteConfig.shortName} width={150} height={32} className="h-8 w-auto" />
            ) : (
              <span className="font-display text-2xl uppercase tracking-tight text-bone">
                {siteConfig.shortName}<span className="text-acid">.</span>
              </span>
            )}
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone/55">
              {"One coordinated pursuit of the accounts you've always wanted — B2B appointment setting built on a verified, intent-scored dream-ICP target list."}
            </p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
              {`${siteConfig.location.basedIn} · ${siteConfig.location.teamSize} in ${siteConfig.location.city}`}
            </p>
            <a href={siteConfig.location.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-bone/55 transition-colors hover:text-acid">
              {siteConfig.location.full}
            </a>
            <div className="mt-4 flex gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-acid">LinkedIn ↗</a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-acid">Facebook ↗</a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.label}>
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-acid">{col.label}</h3>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-bone/65 transition-colors hover:text-bone">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact + CTA strip */}
        <div className="mt-12 flex flex-col gap-6 border-t border-steel/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
            <a href={siteConfig.contact.phoneHref} className="transition-colors hover:text-acid">{siteConfig.contact.phone}</a>
            <a href={`mailto:${siteConfig.contact.email}`} className="transition-colors hover:text-acid">{siteConfig.contact.email}</a>
          </div>
          <BookingButton>Book a strategy call</BookingButton>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-steel/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel/70">
            © {year} {siteConfig.name}{siteConfig.legal.attribution ? ` · ${siteConfig.legal.attribution}` : ""}
          </p>
          <div className="flex gap-6 font-mono text-[11px] uppercase tracking-[0.16em] text-steel/70">
            <Link href="/privacy-policy" className="transition-colors hover:text-bone">Privacy</Link>
            <Link href="/terms-of-use" className="transition-colors hover:text-bone">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
