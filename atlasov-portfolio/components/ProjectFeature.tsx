import type { Lang } from "@/data/i18n";
import { localePath } from "@/data/i18n";
import type { Project } from "@/data/projects";
import { ui } from "@/data/ui";
import ArrowLink from "./ArrowLink";
import Reveal from "./Reveal";
import TechList from "./TechList";
import VisualFrame from "./visuals/VisualFrame";

const pad = (n: number) => String(n).padStart(2, "0");

export default function ProjectFeature({
  project,
  index,
  total,
  lang,
}: {
  project: Project;
  index: number;
  total: number;
  lang: Lang;
}) {
  const t = ui[lang];
  const flip = index % 2 === 1;
  return (
    <article className="group/feature border-t border-line py-12 first:border-t-0 first:pt-0 md:py-16 md:first:pt-0">
      <Reveal className="grid gap-8 md:grid-cols-12 md:items-start md:gap-12">
        <div className={`md:col-span-5 ${flip ? "md:order-2" : ""}`}>
          <p className="mb-4 font-mono text-[0.78rem] text-accent">
            {pad(index + 1)} / {pad(total)} <span aria-hidden="true">·</span> {project.badge[lang]}
          </p>
          <h3 className="text-[1.75rem] font-medium leading-tight tracking-tight md:text-[2rem]">{project.name[lang]}</h3>
          <p className="mt-3 text-muted">{project.purpose[lang]}</p>
          <p className="mb-2 mt-7 text-[0.95rem] font-medium">{t.contribution}</p>
          <ul className="space-y-2 text-[0.98rem]">
            {project.highlights[lang].map((h) => (
              <li key={h} className="relative pl-5 before:absolute before:left-0 before:text-accent before:content-['–']">
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <TechList items={project.stack} label={t.technologies} />
          </div>
          <div className="mt-7">
            <ArrowLink href={localePath(lang, `/work/${project.slug}`)}>{t.readCase}</ArrowLink>
          </div>
        </div>
        <div className={`md:col-span-7 ${flip ? "md:order-1" : ""}`}>
          <VisualFrame project={project} lang={lang} />
        </div>
      </Reveal>
    </article>
  );
}
