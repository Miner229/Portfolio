import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArrowLink from "@/components/ArrowLink";
import TechList from "@/components/TechList";
import VisualFrame from "@/components/visuals/VisualFrame";
import { pageMetadata } from "@/lib/metadata";
import { localePath, type Lang } from "@/data/i18n";
import { getProject, projects } from "@/data/projects";
import { ui } from "@/data/ui";

export function caseParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function caseMetadata(lang: Lang, slug: string): Metadata {
  const project = getProject(slug);
  if (!project) return {};
  const t = ui[lang];
  return pageMetadata(lang, `/work/${slug}`, `${project.name[lang]}: ${t.case.suffix}`, project.purpose[lang], "article");
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-12 md:py-12">
      <h2 className="text-lg font-medium text-muted md:col-span-3">{title}</h2>
      <div className="md:col-span-9">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="max-w-[42rem] space-y-2.5">
      {items.map((i) => (
        <li key={i} className="relative pl-5 before:absolute before:left-0 before:text-accent before:content-['–']">
          {i}
        </li>
      ))}
    </ul>
  );
}

function Paras({ items }: { items: string[] }) {
  return (
    <div className="max-w-[42rem] space-y-4">
      {items.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

export default function CasePage({ lang, slug }: { lang: Lang; slug: string }) {
  const project = getProject(slug);
  if (!project) notFound();

  const t = ui[lang];
  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto w-full max-w-[1160px] px-5 sm:px-8">
      <header className="pb-12 pt-10 md:pb-16 md:pt-16">
        <ArrowLink href={localePath(lang, "/projects")} direction="left">
          {t.case.back}
        </ArrowLink>
        <p className="mb-4 mt-12 font-mono text-[0.78rem] text-accent">{project.badge[lang]}</p>
        <h1 className="max-w-[22ch] text-[clamp(2.1rem,5vw,3.7rem)] font-medium leading-[1.1] tracking-[-0.025em]">{project.name[lang]}</h1>
        <p className="mt-6 max-w-[40rem] text-[1.2rem] text-muted">{project.purpose[lang]}</p>
      </header>

      <div className="group/feature pb-14">
        <VisualFrame project={project} lang={lang} />
      </div>

      <Block title={t.case.overview}>
        <Paras items={project.study.overview[lang]} />
      </Block>
      <Block title={t.case.role}>
        <Paras items={project.study.role[lang]} />
      </Block>
      <Block title={t.case.work}>
        <Bullets items={project.contribution[lang]} />
      </Block>
      <Block title={t.case.decisions}>
        <Bullets items={project.study.decisions[lang]} />
      </Block>
      <Block title={t.case.delivered}>
        <Bullets items={project.study.delivered[lang]} />
      </Block>
      <Block title={t.case.stack}>
        <TechList items={project.stack} label={t.technologies} />
      </Block>

      <nav aria-label={t.case.nav} className="flex flex-col gap-6 border-t border-line py-10 sm:flex-row sm:items-center sm:justify-between">
        <ArrowLink href={localePath(lang, "/projects")} direction="left">
          {t.case.backWork}
        </ArrowLink>
        <p className="text-[0.95rem] text-muted">
          {t.case.next}:{" "}
          <Link
            href={localePath(lang, `/work/${next.slug}`)}
            className="border-b border-ink font-medium text-ink hover:border-accent hover:text-accent"
          >
            {next.name[lang]}
          </Link>
        </p>
      </nav>
    </article>
  );
}
