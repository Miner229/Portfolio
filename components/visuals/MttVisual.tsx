const queue = [
  { t: "Payment status", c: "Chat", active: true },
  { t: "Tariff question", c: "Phone", active: false },
  { t: "Service access", c: "Message", active: false },
];

export default function MttVisual() {
  return (
    <div className="grid gap-px bg-line text-[0.78rem] leading-snug sm:grid-cols-[0.9fr_1.1fr_1fr]">
      <div className="hidden bg-panel p-4 sm:block">
        <p className="mb-3 font-medium">Requests</p>
        <ul className="space-y-2">
          {queue.map((q) => (
            <li
              key={q.t}
              className={`border px-2.5 py-2 ${q.active ? "border-accent" : "border-line"}`}
            >
              <span className="block">{q.t}</span>
              <span className="font-mono text-[0.68rem] text-muted">{q.c}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-panel p-4">
        <p className="mb-3 font-medium">Customer card</p>
        <dl className="space-y-2">
          {[
            ["Customer", "Sample Customer"],
            ["Account", "C-2077"],
            ["Plan", "Standard"],
            ["Channel", "Chat"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-3 border-b border-line/70 pb-1.5 last:border-0">
              <dt className="text-muted">{k}</dt>
              <dd className="min-w-0 truncate text-right">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="bg-panel p-4">
        <p className="mb-3 font-medium">Request form</p>
        <div className="mb-3 border border-line px-2.5 py-2 text-muted">Reason for contact</div>
        <div className="mb-4 border border-line px-2.5 py-2 text-muted">Comment</div>
        <ol className="flex items-center gap-1.5 font-mono text-[0.66rem]">
          <li className="text-accent">Received</li>
          <li aria-hidden="true" className="text-muted">›</li>
          <li className="border-b border-accent text-accent">In progress</li>
          <li aria-hidden="true" className="text-muted">›</li>
          <li className="text-muted">Resolved</li>
        </ol>
      </div>
    </div>
  );
}
