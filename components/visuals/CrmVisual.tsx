const stages = [
  { label: "Prepare new environment", state: "Done" },
  { label: "Align database content", state: "Done" },
  { label: "Parallel testing", state: "In progress" },
  { label: "Incremental transfer + rollback script", state: "Ready" },
  { label: "Cutover", state: "Planned" },
];
const records = [
  { id: "C-1042", name: "A. Sample", plan: "Standard", status: "Migrated" },
  { id: "C-1043", name: "B. Example", plan: "Family", status: "Migrated" },
  { id: "C-1044", name: "C. Demo", plan: "Standard", status: "Pending" },
  { id: "C-1045", name: "D. Placeholder", plan: "Basic", status: "Pending" },
];

export default function CrmVisual() {
  return (
    <div className="grid gap-px bg-line text-[0.78rem] leading-snug sm:grid-cols-[1fr_1.25fr]">
      <div className="bg-panel p-4">
        <p className="mb-3 font-medium">Migration stages</p>
        <ol className="space-y-2.5">
          {stages.map((s, i) => (
            <li key={s.label} className="flex items-start gap-2.5">
              <span
                className={`mt-1 size-2.5 shrink-0 rounded-full border border-accent ${
                  s.state === "Done" ? "bg-accent" : s.state === "In progress" ? "bg-accent/40" : ""
                }`}
              />
              <span className="min-w-0 flex-1">
                <span className="block">{s.label}</span>
                <span className="font-mono text-[0.68rem] text-muted">{s.state}</span>
              </span>
              <span className="sr-only">{i + 1}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="bg-panel p-4">
        <p className="mb-3 font-medium">Customer records</p>
        <table className="w-full table-fixed border-collapse text-left">
          <thead>
            <tr className="border-b border-line font-mono text-[0.68rem] text-muted">
              <th className="w-[26%] pb-1.5 font-normal">ID</th>
              <th className="w-[34%] pb-1.5 font-normal">Customer</th>
              <th className="hidden w-[20%] pb-1.5 font-normal sm:table-cell">Plan</th>
              <th className="pb-1.5 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <tr key={r.id} className="border-b border-line/70 last:border-0">
                <td className="truncate py-2 font-mono text-[0.7rem]">{r.id}</td>
                <td className="truncate py-2">{r.name}</td>
                <td className="hidden truncate py-2 text-muted sm:table-cell">{r.plan}</td>
                <td className="py-2">
                  <span className={r.status === "Migrated" ? "text-accent" : "text-muted"}>{r.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
