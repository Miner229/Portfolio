export default function TechList({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul aria-label="Technologies" className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[0.8rem] text-muted">
      {items.map((t) => (
        <li key={t} className="border-b border-line pb-0.5">
          {t}
        </li>
      ))}
    </ul>
  );
}
