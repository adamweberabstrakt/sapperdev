interface Row {
  label: string;
  value: string;
  redactWidth?: string; // e.g. "w-16" — renders a redaction bar before the value
  verified?: boolean; // appends an acid check
}

interface DossierCardProps {
  record?: string;
  rows?: Row[];
  footnote?: string;
}

const DEFAULT_ROWS: Row[] = [
  { label: "Name", value: "MORALES", redactWidth: "w-16" },
  { label: "Title", value: "VP, REVENUE OPS" },
  { label: "Company", value: "LOGISTICS", redactWidth: "w-20" },
  { label: "Intent Signal", value: "RFP RESEARCH • 14D" },
  { label: "Direct Email", value: "VERIFIED", verified: true },
  { label: "Mobile", value: "IDENTIFIED", verified: true },
];

export default function DossierCard({
  record = "RECORD #4471",
  rows = DEFAULT_ROWS,
  footnote = "ONE OF 200 IN THIS HIT LIST",
}: DossierCardProps) {
  return (
    <div className="border-t-2 border-acid bg-panel font-mono text-sm shadow-2xl shadow-black/40 ring-1 ring-steel/20">
      <div className="p-6">
        {/* Header */}
        <p className="text-xs uppercase tracking-[0.2em] text-acid">
          HIT Target / {record}
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-steel">
          Status: Verified <span className="text-acid">•</span> Intent: High
        </p>

        <div className="my-5 h-px bg-steel/25" />

        {/* Rows */}
        <dl className="space-y-4">
          {rows.map((row) => (
            <div key={row.label}>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-steel">
                {row.label}
              </dt>
              <dd className="mt-1 flex items-center gap-2 font-bold text-bone">
                {row.redactWidth && (
                  <span
                    aria-hidden
                    className={`inline-block h-3.5 ${row.redactWidth} rounded-sm bg-bone/85`}
                  />
                )}
                <span>{row.value}</span>
                {row.verified && <span className="text-acid">✓</span>}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 text-center text-[11px] uppercase tracking-[0.15em] text-acid">
          {footnote}
        </p>
      </div>
    </div>
  );
}
