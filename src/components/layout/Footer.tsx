import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "B2B Appointment Setting", href: "/b2b-appointment-setting" },
    { name: "B2B Cold Calling", href: "/b2b-cold-calling" },
    { name: "Cold Email Marketing", href: "/cold-email-marketing" },
    { name: "B2B LinkedIn Outreach", href: "/b2b-linkedin-outreach" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Results", href: "/results" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms-of-use" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/sapper-logo-light.png"
              alt="Sapper"
              width={150}
              height={32}
              className="mb-4 h-8 w-auto"
            />
            <p className="text-sm text-white/60 leading-relaxed">
              Generating consistent B2B sales meetings through strategic
              omni-channel outreach.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Get Started
            </h3>
            <Link
              href="/contact"
              className="inline-block bg-cyan text-navy text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-cyan/90 transition-colors mb-6"
            >
              Book a Meeting
            </Link>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/40 hover:text-white/60 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-white/30 text-center">
            &copy; {new Date().getFullYear()} Sapper Consulting. All rights
            reserved. A division of Abstrakt Marketing Group.
          </p>
        </div>
      </div>
    </footer>
  );
}
