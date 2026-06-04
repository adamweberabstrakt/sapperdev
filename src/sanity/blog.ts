/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BlogPost, Block, BlogCategory } from "@/lib/blog";
import { sanityFetch } from "./fetch";

const POST_FIELDS = `
  "slug": slug.current,
  title,
  excerpt,
  category,
  author,
  "date": date,
  readTime,
  featured,
  "coverImage": coverImage.asset->url,
  body
`;

type RawPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author?: string;
  date?: string;
  readTime?: string;
  featured?: boolean;
  coverImage?: string;
  body?: any[];
};

export async function fetchAllPosts(): Promise<BlogPost[] | null> {
  const raw = await sanityFetch<RawPost[]>(
    `*[_type == "post" && defined(slug.current)] | order(date desc){${POST_FIELDS}}`
  );
  return raw ? raw.map(mapPost) : null;
}

export async function fetchPost(slug: string): Promise<BlogPost | null> {
  const raw = await sanityFetch<RawPost>(
    `*[_type == "post" && slug.current == $slug][0]{${POST_FIELDS}}`,
    { slug }
  );
  return raw ? mapPost(raw) : null;
}

function mapPost(r: RawPost): BlogPost {
  return {
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt,
    category: r.category,
    author: r.author || "Sapper Team",
    date: (r.date || "").slice(0, 10),
    readTime: r.readTime || "",
    featured: r.featured,
    coverImage: r.coverImage,
    content: toBlocks(r.body || []),
  };
}

const text = (children: any[] = []) => children.map((c) => c?.text ?? "").join("");
const SHAPED = ["p", "h2", "h3", "ul", "callout", "table"];

/** Maps Sanity portable text (plus custom callout/table objects) into our Block[]. */
function toBlocks(body: any[]): Block[] {
  const blocks: Block[] = [];
  let list: string[] | null = null;
  const flush = () => {
    if (list && list.length) blocks.push({ type: "ul", items: list });
    list = null;
  };
  for (const node of body) {
    if (!node || typeof node !== "object") continue;
    if (typeof node.type === "string" && SHAPED.includes(node.type)) {
      flush();
      blocks.push(node as Block);
      continue;
    }
    if (node._type === "block") {
      if (node.listItem) {
        (list ||= []).push(text(node.children));
        continue;
      }
      flush();
      const txt = text(node.children);
      if (!txt) continue;
      const style = node.style || "normal";
      if (style === "h2") blocks.push({ type: "h2", text: txt });
      else if (style === "h3") blocks.push({ type: "h3", text: txt });
      else blocks.push({ type: "p", text: txt });
    } else if (node._type === "callout") {
      flush();
      blocks.push({ type: "callout", text: node.text || text(node.children) || "" });
    } else if (node._type === "table") {
      flush();
      const rows: string[][] = (node.rows || []).map((row: any) => row.cells || []);
      if (rows.length) blocks.push({ type: "table", headers: rows[0], rows: rows.slice(1) });
    }
  }
  flush();
  return blocks;
}
