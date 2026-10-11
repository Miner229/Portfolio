import { getCvHref } from "@/lib/cv";
import { mono, sans } from "@/lib/fonts";
import { localePath, type Lang } from "@/data/i18n";
import { site, telegramHref } from "@/data/site";
import { ui } from "@/data/ui";
import Footer from "./Footer";
import Nav from "./Nav";

/** The whole HTML document for one language. Used by each root layout. */
export default function RootDocument({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = ui[lang];
  const links = [
    { href: localePath(lang, "/projects"), label: t.nav.projects, match: localePath(lang, "/projects") },
    { href: localePath(lang, "/", "experience"), label: t.nav.experience },
    { href: localePath(lang, "/", "about"), label: t.nav.about },
    { href: localePath(lang, "/", "contact"), label: t.nav.contact },
  ];
  return (
    <html lang={lang} className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          {t.skip}
        </a>
        <Nav
          lang={lang}
          name={lang === "ru" ? "Алексей Атласов" : site.name}
          initials={site.initials}
          homeHref={localePath(lang, "/")}
          links={links}
          cvHref={getCvHref(lang)}
          telegram={{ href: telegramHref, label: t.telegramCta }}
          labels={{ menu: t.menu, close: t.close, cv: t.downloadCv, language: t.langLabel, main: t.mainNav }}
        />
        <main id="main">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
