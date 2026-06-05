"use client";

import { usePathname } from "next/navigation";
import { NO_NAV_ROUTES } from "@/lib/navConfig";

/** Applies the navbar offset everywhere except no-nav routes (e.g. PPC LPs). */
export default function SiteMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const noNav = NO_NAV_ROUTES.includes(pathname);
  return <main className={noNav ? "" : "pt-16"}>{children}</main>;
}
