import Link from "next/link";
import { type BlogPost, categoryLabel, fmtDate } from "@/lib/blog";

export function PostCardMedia({
  category,
  large = false,
  image,
}: {
  category: string;
  large?: boolean;
  image?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-panel ${large ? "aspect-[16/8]" : "aspect-[16/9]"} ${image ? "bg-cover bg-center" : ""}`}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      {!image && (
        <>
          <div className="absolute inset-0 bg-tactical-grid opacity-60" aria-hidden />
          <span className="absolute bottom-3 left-4 font-display text-5xl uppercase leading-none text-bone/10 sm:text-6xl">{category}</span>
        </>
      )}
      <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-acid" />
      <span className="absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-acid" />
    </div>
  );
}

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col bg-ink ring-1 ring-steel/15 transition-colors hover:ring-acid/40"
    >
      <PostCardMedia category={categoryLabel(post.category)} image={post.coverImage} />
      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">{categoryLabel(post.category)}</span>
        <h3 className="mt-3 font-display text-xl uppercase leading-[1.05] text-bone transition-colors group-hover:text-acid">{post.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-bone/60">{post.excerpt}</p>
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
          {post.author} · {fmtDate(post.date)} · {post.readTime}
        </p>
      </div>
    </Link>
  );
}
