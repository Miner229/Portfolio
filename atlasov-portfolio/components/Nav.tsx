"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { langs, type Lang } from "@/data/i18n";

type Props = {
  lang: Lang;
  name: string;
  initials: string;
  homeHref: string;
  links: { href: string; label: string; match?: string }[];
  cvHref: string | null;
  telegram: { href: string; label: string };
  labels: { menu: string; close: string; cv: string; language: string; main: string };
};

function otherPath(pathname: string, to: Lang): string {
  const base = pathname.replace(/^\/ru(?=\/|$)/, "") || "/";
  return to === "en" ? base : base === "/" ? "/ru" : `/ru${base}`;
}

function LangSwitch({ lang, label }: { lang: Lang; label: string }) {
  const pathname = usePathname() || "/";
  return (
    <div role="group" aria-label={label} translate="no" className="flex items-center gap-1.5 font-mono text-[0.8rem]">
      {langs.map((l, i) => (
        <Fragment key={l}>
          {i > 0 && (
            <span aria-hidden="true" className="text-line">
              /
            </span>
          )}
          {l === lang ? (
            <span aria-current="true" className="font-medium text-ink">
              {l.toUpperCase()}
            </span>
          ) : (
            <a href={otherPath(pathname, l)} lang={l} hrefLang={l} className="text-muted hover:text-accent focus-visible:text-accent">
              {l.toUpperCase()}
            </a>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default function Nav({ lang, name, initials, homeHref, links, cvHref, telegram, labels }: Props) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const pathname = usePathname() || "/";

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

  const linkClass = "border-b-2 border-transparent py-1 text-[0.95rem] text-ink hover:text-accent focus-visible:text-accent";
  const btnClass =
    "border border-ink px-3 py-1.5 text-[0.9rem] font-medium text-ink hover:border-accent hover:text-accent focus-visible:border-accent";
  const current = (m?: string) => (m && pathname.startsWith(m) ? ("page" as const) : undefined);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <nav aria-label={labels.main} className="mx-auto flex h-16 max-w-[1160px] items-center justify-between px-5 sm:px-8">
        <Link href={homeHref} className="flex items-baseline gap-2.5" onClick={() => setOpen(false)}>
          <span className="font-medium">{name}</span>
          <span aria-hidden="true" className="text-line">/</span>
          <span className="font-mono text-sm text-accent">{initials}</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={current(l.match)}
                  className={`${linkClass} ${current(l.match) ? "!border-accent" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <LangSwitch lang={lang} label={labels.language} />
          {cvHref && (
            <a href={cvHref} download className={btnClass}>
              {labels.cv}
            </a>
          )}
          <a href={telegram.href} target="_blank" rel="noopener noreferrer" className="bg-ink px-3.5 py-1.5 text-[0.9rem] font-medium text-paper hover:bg-accent focus-visible:bg-accent">
            {telegram.label}
          </a>
        </div>

        <div className="flex items-center gap-5 lg:hidden">
          <LangSwitch lang={lang} label={labels.language} />
          <button
            ref={button}
            type="button"
            className="-mr-2 p-2 text-[0.95rem] font-medium"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? labels.close : labels.menu}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        inert={!open}
        className={`absolute inset-x-0 top-full grid transition-[grid-template-rows,opacity] duration-200 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1 border-b border-line bg-paper px-5 pb-5 pt-2 sm:px-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={current(l.match)} className="block py-2.5 text-lg" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="flex flex-wrap items-center gap-3 pt-3">
              <a href={telegram.href} target="_blank" rel="noopener noreferrer" className="bg-ink px-4 py-2 font-medium text-paper">
                {telegram.label}
              </a>
              {cvHref && (
                <a href={cvHref} download className={`${btnClass} py-2`}>
                  {labels.cv}
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
