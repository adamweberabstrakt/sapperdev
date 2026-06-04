import Link from "next/link";
import { CATEGORIES } from "@/lib/blog";

export default function CategoryNav({ active }: { active: string }) {
  const tabClass = (key: string) =>
    `whitespace-nowrap border-b-2 px-1 pb-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
      active === key ? "border-acid text-acid" : "border-transparent text-steel hover:text-bone"
    }`;
  return (
    <div className="flex flex-wrap gap-x-7 gap-y-2 border-b border-steel/20">
      <Link href="/blog" className={tabClass("all")}>All</Link>
      {CATEGORIES.map((c) => (
        <Link key={c.slug} href={`/blog/category/${c.slug}`} className={tabClass(c.slug)}>
          {c.label}
        </Link>
      ))}
    </div>
  );
}
