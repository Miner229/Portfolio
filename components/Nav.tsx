"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = {
  name: string;
  initials: string;
  links: { href: string; label: string }[];
  cvHref: string | null;
};

export default function Nav({ name, initials, links, cvHref }: Props) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass =
    "text-[0.95rem] text-ink hover:text-accent focus-visible:text-accent";
  const cvClass =
    "border border-ink px-3 py-1.5 text-[0.9rem] font-medium text-ink hover:border-accent hover:text-accent focus-visible:border-accent";

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-[1160px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2.5" onClick={() => setOpen(false)}>
          <span className="font-medium">{name}</span>
          <span aria-hidden="true" className="text-line">/</span>
          <span className="font-mono text-sm text-accent">{initials}</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkClass}>
                {l.label}
              </Link>
            </li>
          ))}
          {cvHref && (
            <li>
              <a href={cvHref} download className={cvClass}>
                Download CV
              </a>
            </li>
          )}
        </ul>

        <button
          ref={button}
          type="button"
          className="-mr-2 p-2 text-[0.95rem] font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <div
        id="mobile-menu"
        inert={!open}
        className={`absolute inset-x-0 top-full grid transition-[grid-template-rows,opacity] duration-200 ease-out md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1 border-b border-line bg-paper px-5 pb-5 pt-2 sm:px-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-2.5 text-lg"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            {cvHref && (
              <li className="pt-2">
                <a href={cvHref} download className={`inline-block ${cvClass}`}>
                  Download CV
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
