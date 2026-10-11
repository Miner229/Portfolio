import Link from "next/link";
import { getCvHref } from "@/lib/cv";
import { localePath, type Lang } from "@/data/i18n";
import { contactLinks, site } from "@/data/site";
import { ui } from "@/data/ui";

export default function Footer({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const cv = getCvHref(lang);
  const links = [
    { href: localePath(lang, "/projects"), label: t.nav.projects },
    { href: localePath(lang, "/", "experience"), label: t.nav.experience },
    { href: localePath(lang, "/", "about"), label: t.nav.about },
    { href: localePath(lang, "/", "contact"), label: t.nav.contact },
  ];
  const linkClass = "hover:text-accent focus-visible:text-accent";
  return (
    <footer className="mt-8 border-t border-line">
      <div className="mx-auto grid max-w-[1160px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="text-lg font-medium">{site.name}</p>
          <p className="mt-1 text-muted">{site.role[lang]}</p>
          <p className="mt-4 max-w-[28rem] text-[0.95rem] text-muted">{t.footer.tagline}</p>
        </div>
        <nav aria-label={t.footerNav} className="md:col-span-3">
          <p className="mb-3 font-mono text-[0.78rem] text-muted">{t.footer.navigation}</p>
          <ul className="space-y-2 text-[0.95rem]">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="mb-3 font-mono text-[0.78rem] text-muted">{t.footer.contact}</p>
          <ul className="space-y-2 text-[0.95rem]">
            {contactLinks().map((c) => (
              <li key={c.key}>
                <a href={c.href} {...(c.key !== "email" ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={linkClass}>
                  {c.label}
                </a>
              </li>
            ))}
            {cv && (
              <li>
                <a href={cv} download className={linkClass}>
                  {t.downloadCv}
                </a>
              </li>
            )}
            <li className="text-muted">{t.hero.locationValue}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-[1160px] px-5 py-5 font-mono text-[0.78rem] text-muted sm:px-8">
          © {new Date().getFullYear()} {lang === "ru" ? "Алексей Атласов" : site.name}
        </p>
      </div>
    </footer>
  );
}
