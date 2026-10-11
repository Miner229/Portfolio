import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Footer() {
  const { email, linkedin, github } = site.contact;
  const contacts = [
    email && { href: `mailto:${email}`, label: "Email" },
    linkedin && { href: linkedin, label: "LinkedIn" },
    github && { href: github, label: "GitHub" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-[0.95rem]">
          <span className="font-medium">{site.name}</span>
          <span className="text-muted"> · {site.role}</span>
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-accent focus-visible:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
            {contacts.map((c) => (
              <li key={c.href}>
                <a href={c.href} className="hover:text-accent focus-visible:text-accent">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
