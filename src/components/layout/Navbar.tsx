"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-navy"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/sapper-logo-lime.png" alt="Sapper" width={150} height={32} className="h-8 w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.groups ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                      isActive(link.href) ? "text-cyan" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-[640px] rounded-lg border border-gray-100 bg-white p-5 shadow-xl animate-fade-in">
                      <div className="grid grid-cols-[1fr_1fr_1.2fr] gap-5">
                        {link.groups.map((g) => (
                          <div key={g.label}>
                            <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-navy/40">{g.label}</p>
                            {g.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`block rounded px-2 py-2 text-sm transition-colors ${
                                  isActive(item.href) ? "text-cyan bg-navy/5" : "text-navy hover:bg-light-gray"
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                        {link.feature && (
                          <Link href={link.feature.href} className="flex flex-col justify-between rounded-md bg-navy p-4">
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan">{link.feature.label}</span>
                            <span className="mt-2 text-sm leading-snug text-white/75">{link.feature.desc}</span>
                            <span className="mt-3 text-xs font-medium text-cyan">Explore →</span>
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
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.href) ? "text-cyan" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            <Link href="/contact" className="ml-4 bg-cyan text-navy text-sm font-semibold px-5 py-2 rounded-md hover:bg-cyan/90 transition-colors">
              Book a Meeting
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="md:hidden bg-navy border-t border-white/10 px-4 pb-4">
          <div className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) =>
              link.groups ? (
                <div key={link.name}>
                  {link.groups.map((g) => (
                    <div key={g.label}>
                      <p className="px-3 py-2 text-xs font-semibold text-white/50 uppercase tracking-wider">
                        {link.name} · {g.label}
                      </p>
                      {g.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-3 py-2 text-sm pl-6 ${isActive(item.href) ? "text-cyan" : "text-white/80"}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                  {link.feature && (
                    <Link href={link.feature.href} className="block px-3 py-2 pl-6 text-sm text-cyan">
                      {link.feature.label} →
                    </Link>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 text-sm ${isActive(link.href) ? "text-cyan" : "text-white/80"}`}
                >
                  {link.name}
                </Link>
              )
            )}

            <div className="pt-2">
              <Link href="/contact" className="block text-center bg-cyan text-navy text-sm font-semibold px-6 py-2.5 rounded-md">
                Book a Meeting
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
