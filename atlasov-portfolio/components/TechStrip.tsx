/** Slow text-only ticker. Pauses on hover/focus; static and wrapped under reduced motion. */
export default function TechStrip({ items, label }: { items: string[]; label: string }) {
  const list = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 gap-x-10 pr-10 font-mono text-[0.85rem] text-muted ${hidden ? "ticker-dup" : ""}`}
    >
      {items.map((t) => (
        <li key={t} className="whitespace-nowrap">
          {t}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="ticker overflow-hidden border-y border-line py-4" role="region" aria-label={label} tabIndex={0}>
      <div className="ticker-track">
        {list(false)}
        {list(true)}
      </div>
    </div>
  );
}
