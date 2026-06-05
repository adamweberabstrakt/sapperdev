"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { NO_NAV_ROUTES } from "@/lib/navConfig";
import { siteConfig } from "@/config/site.config";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  const openBooking = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
    window.dispatchEvent(new CustomEvent("open-booking"));
  };

  if (NO_NAV_ROUTES.includes(pathname)) return null;

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-steel/20 bg-ink/95 backdrop-blur-md" : "bg-ink"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src={siteConfig.logos.header} alt={siteConfig.shortName} width={150} height={32} className="h-8 w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) =>
              link.groups ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(link.href) ? "text-acid" : "text-bone/70 hover:text-bone"
                    }`}
                  >
                    {link.name}
                    <svg className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-0 top-full mt-2 w-[640px] border-t-2 border-acid bg-panel p-5 shadow-xl ring-1 ring-steel/20 animate-fade-in">
                      <div className="grid grid-cols-[1fr_1fr_1.2fr] gap-5">
                        {link.groups.map((g) => (
                          <div key={g.label}>
                            <p className="px-2 pb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-acid">{g.label}</p>
                            {g.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`block rounded px-2 py-2 text-sm transition-colors ${
                                  isActive(item.href) ? "bg-ink text-acid" : "text-bone/80 hover:bg-ink hover:text-acid"
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                        {link.feature && (
                          <Link href={link.feature.href} className="flex flex-col justify-between border border-steel/20 bg-ink p-4 transition-colors hover:border-acid/40">
                            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">{link.feature.label}</span>
                            <span className="mt-2 text-sm leading-snug text-bone/70">{link.feature.desc}</span>
                            <span className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-acid">Explore →</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href) ? "text-acid" : "text-bone/70 hover:text-bone"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            <button
              onClick={openBooking}
              className="ml-4 rounded-md bg-acid px-5 py-2 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-acid/90"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-bone md:hidden" aria-label="Toggle menu">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-steel/20 bg-ink px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) =>
              link.groups ? (
                <div key={link.name}>
                  {link.groups.map((g) => (
                    <div key={g.label}>
                      <p className="px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
                        {link.name} · {g.label}
                      </p>
                      {g.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block py-2 pl-6 pr-3 text-sm ${isActive(item.href) ? "text-acid" : "text-bone/80"}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                  {link.feature && (
                    <Link href={link.feature.href} className="block py-2 pl-6 pr-3 font-mono text-xs uppercase tracking-[0.18em] text-acid">
                      {link.feature.label} →
                    </Link>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 text-sm ${isActive(link.href) ? "text-acid" : "text-bone/80"}`}
                >
                  {link.name}
                </Link>
              )
            )}

            <div className="pt-3">
              <button
                onClick={openBooking}
                className="w-full rounded-md bg-acid px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-ink"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
