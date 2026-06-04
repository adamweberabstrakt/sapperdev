import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-ink text-bone">
      <div className="absolute inset-0 bg-tactical-grid" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/40 to-ink" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">Error / 404</p>
        <h1 className="mt-6 font-display text-7xl uppercase leading-none sm:text-8xl">
          Signal lost<span className="text-acid">.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-bone/70">
          That target isn&apos;t on the map. The page may have moved, or it never existed.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded-md bg-acid px-6 py-3 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-acid/90">
            Back to base
          </Link>
          <Link href="/results" className="rounded-md border-2 border-acid px-6 py-3 text-sm font-bold uppercase tracking-wider text-acid transition-colors hover:bg-acid hover:text-ink">
            See results
          </Link>
        </div>
      </div>
    </section>
  );
}
