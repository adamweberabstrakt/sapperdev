import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import CategoryNav from "@/components/blog/CategoryNav";
import PostCard, { PostCardMedia } from "@/components/blog/PostCard";
import { getAllPosts, getFeatured, categoryLabel, fmtDate } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description:
    "Field notes on B2B outbound — research, client success, news, and press from Sapper Consulting.",
};

export default function Blog() {
  const featured = getFeatured();
  const posts = getAllPosts().filter((p) => p.slug !== featured.slug);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel animate-fade-up">Insights / The Brief</p>
          <h1 className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.08s" }}>
            Field notes on <span className="text-acid">B2B outbound.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/70 animate-fade-up" style={{ animationDelay: "0.16s" }}>
            {"Research, client success, company news, and press — the thinking behind the meetings we book."}
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <AnimateIn>
            <Link href={`/blog/${featured.slug}`} className="group grid items-center gap-8 border-t-2 border-acid bg-panel p-6 lg:grid-cols-2 lg:p-8">
              <PostCardMedia category={categoryLabel(featured.category)} large />
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">Featured · {categoryLabel(featured.category)}</span>
                <h2 className="mt-4 font-display text-3xl uppercase leading-[0.98] text-bone transition-colors group-hover:text-acid sm:text-4xl">{featured.title}</h2>
                <p className="mt-4 text-bone/70">{featured.excerpt}</p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-steel">{featured.author} · {fmtDate(featured.date)} · {featured.readTime}</p>
                <span className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-acid">Read the brief →</span>
              </div>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* CATEGORY NAV + GRID */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <CategoryNav active="all" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <AnimateIn key={p.slug} delay={(i % 3) * 0.06}>
                <PostCard post={p} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
