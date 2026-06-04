# Sanity Studio — Sapper blog

The website reads the blog from Sanity when `NEXT_PUBLIC_SANITY_PROJECT_ID` is set
(see `.env.example`). Until then it uses the static posts in `src/lib/blog.ts`.
No code changes are needed to go live — just create the project, add these schemas,
publish posts, and set the env vars in Vercel.

## 1. Create the Studio
```bash
npm create sanity@latest -- --template clean --create-project "Sapper Blog" --dataset production
```
Note the **Project ID** it prints.

## 2. Set env vars (Vercel + .env.local)
```
NEXT_PUBLIC_SANITY_PROJECT_ID=<your project id>
NEXT_PUBLIC_SANITY_DATASET=production
```
In the Sanity project settings → API → CORS, add your site origin(s).

## 3. Schemas (must match the site's query/mapper in src/sanity/blog.ts)

`schemaTypes/post.ts`
```ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({
      name: "category",
      type: "string",
      options: { list: [
        { title: "Research", value: "research" },
        { title: "Success", value: "success" },
        { title: "News", value: "news" },
        { title: "PR", value: "pr" },
      ] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "author", type: "string", initialValue: "Sapper Team" }),
    defineField({ name: "date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "readTime", type: "string", description: 'e.g. "6 min read"' }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({ name: "coverImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "body", type: "array", of: [
      { type: "block", styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
      ], lists: [{ title: "Bullet", value: "bullet" }] },
      { type: "callout" },
      { type: "table" },
    ] }),
  ],
});
```

`schemaTypes/callout.ts`
```ts
import { defineType, defineField } from "sanity";
export default defineType({
  name: "callout", title: "Callout", type: "object",
  fields: [defineField({ name: "text", type: "text", rows: 3 })],
});
```

`schemaTypes/table.ts`  (rows of cells; the FIRST row is treated as headers)
```ts
import { defineType, defineField } from "sanity";
export default defineType({
  name: "table", title: "Table", type: "object",
  fields: [defineField({
    name: "rows", type: "array",
    of: [{ type: "object", name: "row", fields: [
      { name: "cells", type: "array", of: [{ type: "string" }] },
    ] }],
  })],
});
```

Register all three in `schemaTypes/index.ts`:
```ts
import post from "./post";
import callout from "./callout";
import table from "./table";
export const schemaTypes = [post, callout, table];
```

## 4. Publish
Create posts in the Studio and publish. The site picks them up automatically
(60s ISR). Categories are fixed in code (Research / Success / News / PR) and are
NOT managed in Sanity. Cover images render on cards and the post hero; tables and
callouts render via the existing block renderer.
