import { notFound } from "next/navigation";
import AnimateIn from "@/components/ui/AnimateIn";
import CategoryNav from "@/components/blog/CategoryNav";
import PostCard from "@/components/blog/PostCard";
import { CATEGORIES, getCategory, getPostsByCategory, type BlogCategory } from "@/lib/blog";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const c = getCategory(params.category);
  return c
    ? { title: `${c.label} — Blog`, description: c.blurb }
    : { title: "Blog" };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const cat = getCategory(params.category);
  if (!cat) notFound();
  const posts = getPostsByCategory(cat.slug as BlogCategory);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Insights / {cat.label}</p>
          <h1 className="mt-8 font-display text-5xl uppercase leading-[0.92] sm:text-6xl">{cat.label}<span className="text-acid">.</span></h1>
          <p className="mt-6 max-w-2xl text-lg text-bone/70">{cat.blurb}</p>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <CategoryNav active={cat.slug} />
          {posts.length === 0 ? (
            <p className="mt-12 font-mono text-sm uppercase tracking-[0.18em] text-steel">No posts in this bucket yet.</p>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <AnimateIn key={p.slug} delay={(i % 3) * 0.06}>
                  <PostCard post={p} />
                </AnimateIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
