import { type Block } from "@/lib/blog";

export default function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return <h2 key={i} className="!mt-12 font-display text-2xl uppercase leading-tight text-bone sm:text-3xl">{b.text}</h2>;
          case "h3":
            return <h3 key={i} className="!mt-8 font-mono text-sm uppercase tracking-[0.18em] text-acid">{b.text}</h3>;
          case "p":
            return <p key={i} className="text-[17px] leading-relaxed text-bone/75">{b.text}</p>;
          case "ul":
            return (
              <ul key={i} className="space-y-2.5">
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-3 text-bone/75">
                    <span className="mt-1.5 font-mono text-acid">→</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return <div key={i} className="border-l-2 border-acid bg-panel p-5 text-bone/85">{b.text}</div>;
          case "table":
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr>
                      {b.headers.map((h, j) => (
                        <th key={j} className="whitespace-nowrap border-b border-steel/30 py-3 pr-4 font-mono text-[11px] uppercase tracking-[0.14em] text-acid">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c} className={`border-b border-steel/15 py-3 pr-4 ${c === 0 ? "font-medium text-bone" : "text-bone/70"}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
