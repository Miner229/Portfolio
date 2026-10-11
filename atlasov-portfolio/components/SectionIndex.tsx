"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

/** Fixed dot index (wide screens only) that follows the scroll position. Labels show on hover and focus. */
export default function SectionIndex({ items, label }: { items: Item[]; label: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    if (!els.length || !("IntersectionObserver" in window)) return;
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        const first = items.find((i) => visible.has(i.id));
        if (first) setActive(first.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={label} className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 xl:block">
      <ul className="flex flex-col gap-3.5">
        {items.map((i) => {
          const on = i.id === active;
          return (
            <li key={i.id}>
              <a href={`#${i.id}`} aria-current={on ? "true" : undefined} className="group relative flex items-center justify-end">
                <span className="pointer-events-none absolute right-6 whitespace-nowrap bg-paper px-2 py-0.5 font-mono text-[0.72rem] text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {i.label}
                </span>
                <span
                  className={`block size-2.5 rounded-full border border-accent transition-colors duration-200 ${on ? "bg-accent" : "bg-transparent group-hover:bg-accent/40"}`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
