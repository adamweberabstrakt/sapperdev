import { projectId, dataset, apiVersion, sanityEnabled } from "./config";

/** Lightweight read-only GROQ fetch against Sanity's CDN. Returns null on any
 *  failure so callers can fall back to static content. No SDK dependency. */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, string> = {}
): Promise<T | null> {
  if (!sanityEnabled) return null;
  const search = new URLSearchParams({ query });
  for (const [k, v] of Object.entries(params)) search.set(`$${k}`, JSON.stringify(v));
  const url = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}?${search.toString()}`;
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    return (json.result ?? null) as T;
  } catch {
    return null;
  }
}
