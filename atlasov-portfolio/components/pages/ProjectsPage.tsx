import Link from "next/link";
import ArrowLink from "@/components/ArrowLink";
import Reveal from "@/components/Reveal";
import TechList from "@/components/TechList";
import { localePath, type Lang } from "@/data/i18n";
import { additionalProjects, projects } from "@/data/projects";
import { ui } from "@/data/ui";

const pad = (n: number) => String(n).padStart(2, "0");

export default function ProjectsPage({ lang }: { lang: Lang }) {
  const t = ui[lang];
  return (
    <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-8">
      <header className="pb-12 pt-12 md:pb-16 md:pt-20">
        <h1 className="text-[clamp(2.4rem,6vw,4.4rem)] font-medium leading-[1.06] tracking-[-0.03em]">{t.projectsPage.title}</h1>
        <p className="mt-6 max-w-[34rem] text-[1.2rem] text-muted">{t.projectsPage.intro}</p>
      </header>

      <section aria-labelledby="cases-title" className="border-t border-line pt-10">
        <h2 id="cases-title" className="mb-8 text-lg font-medium text-muted">
          {t.projectsPage.selected}
        </h2>
        <ol>
          {projects.map((p, i) => (
            <li key={p.slug} className="group/row border-t border-line py-9 first:border-t-0 first:pt-0">
              <Reveal className="grid gap-5 md:grid-cols-12 md:gap-10">
                <p className="font-mono text-[0.85rem] text-accent md:col-span-1 md:pt-2">
                  {pad(i + 1)} / {pad(projects.length)}
                </p>
                <div className="md:col-span-7">
                  <p className="mb-2 font-mono text-[0.78rem] text-muted">{p.badge[lang]}</p>
                  <h3 className="text-[1.6rem] font-medium leading-tight tracking-tight">
                    <Link href={localePath(lang, `/work/${p.slug}`)} className="hover:text-accent focus-visible:text-accent">
                      {p.name[lang]}
                    </Link>
                  </h3>
                  <p className="mt-3 max-w-[34rem] text-muted">{p.purpose[lang]}</p>
                </div>
                <div className="flex flex-col items-start gap-5 md:col-span-4">
                  <TechList items={p.stack} label={t.technologies} />
                  <ArrowLink href={localePath(lang, `/work/${p.slug}`)}>{t.readCase}</ArrowLink>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="more-title" className="mt-14 border-t border-line pt-10">
        <h2 id="more-title" className="mb-8 text-lg font-medium text-muted">
          {t.projectsPage.more}
        </h2>
        <Reveal>
          <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {additionalProjects.map((p) => (
              <li key={p.name.en} className="border-t border-line pt-4">
                <h3 className="text-lg font-medium leading-snug">{p.name[lang]}</h3>
                {p.note[lang] && <p className="mt-1 font-mono text-[0.75rem] text-accent">{p.note[lang]}</p>}
                <p className="mb-3 mt-2 text-[0.98rem] text-muted">{p.description[lang]}</p>
                <TechList items={p.stack} label={t.technologies} />
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
