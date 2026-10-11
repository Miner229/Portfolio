const rows = [
  { id: "R-101", who: "Employee A", status: "Approved" },
  { id: "R-102", who: "Employee B", status: "Pending" },
  { id: "R-103", who: "Employee C", status: "Rejected" },
  { id: "R-104", who: "Employee D", status: "Pending" },
];

const badge = (s: string) =>
  s === "Approved"
    ? "bg-accent text-paper"
    : s === "Rejected"
      ? "border border-ink text-ink"
      : "border border-dashed border-muted text-muted";

export default function BonusVisual() {
  return (
    <div className="grid gap-px bg-line text-[0.78rem] leading-snug sm:grid-cols-[1.25fr_1fr]">
      <div className="bg-panel p-4">
        <p className="mb-3 font-medium">Requests</p>
        <ul>
          {rows.map((r) => (
            <li key={r.id} className="flex items-center justify-between gap-3 border-b border-line/70 py-2 last:border-0">
              <span className="min-w-0 truncate">
                <span className="font-mono text-[0.7rem] text-muted">{r.id}</span>
                <span className="ml-2">{r.who}</span>
              </span>
              <span className={`shrink-0 px-2 py-0.5 font-mono text-[0.66rem] ${badge(r.status)}`}>{r.status}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-panel p-4">
        <p className="mb-3 font-medium">Manager decision</p>
        <p className="mb-3 text-muted">R-102 · Employee B</p>
        <div className="mb-3 flex gap-2">
          <span className="bg-accent px-3 py-1.5 text-paper">Approve</span>
          <span className="border border-ink px-3 py-1.5">Reject</span>
        </div>
        <p className="mb-1 font-mono text-[0.68rem] text-muted">Internal note</p>
        <div className="border border-line px-2.5 py-2 text-muted">Sample note for the record</div>
        <p className="mt-3 font-mono text-[0.68rem] text-muted">Decision is shown to the employee</p>
      </div>
    </div>
  );
}
