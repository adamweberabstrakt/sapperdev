import { notFound } from "next/navigation";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import BookingButton from "@/components/ui/BookingButton";
import PostBody from "@/components/blog/PostBody";
import PostCard, { PostCardMedia } from "@/components/blog/PostCard";
import { getAllPosts, getPost, getPostsByCategory, categoryLabel, fmtDate } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  return post ? { title: post.title, description: post.excerpt } : { title: "Blog" };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();
  const related = (await getPostsByCategory(post.category)).filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/30 to-ink" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 pt-24 pb-10 sm:px-6 sm:pt-28 lg:px-8">
          <Link href={`/blog/category/${post.category}`} className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel transition-colors hover:text-acid">
            ← {categoryLabel(post.category)}
          </Link>
          <h1 className="mt-6 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">{post.title}</h1>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
            {post.author} · {fmtDate(post.date)} · {post.readTime}
          </p>
        </div>
      </section>

      {/* MEDIA */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <PostCardMedia category={categoryLabel(post.category)} image={post.coverImage} large />
      </div>

      {/* BODY */}
      <article className="bg-ink text-bone">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <PostBody blocks={post.content} />

          <div className="mt-14 border-t-2 border-acid bg-panel p-8 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">Ready when you are</p>
            <h2 className="mt-4 font-display text-3xl uppercase leading-[0.98] text-bone">Pursue your <span className="text-acid">dream accounts.</span></h2>
            <div className="mt-7"><BookingButton>Book a strategy call</BookingButton></div>
          </div>
        </div>
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="border-t border-steel/20 bg-ink text-bone">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">More in {categoryLabel(post.category)}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
