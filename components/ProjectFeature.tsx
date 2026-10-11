import type { Project } from "@/data/projects";
import ArrowLink from "./ArrowLink";
import Reveal from "./Reveal";
import TechList from "./TechList";
import VisualFrame from "./visuals/VisualFrame";

export default function ProjectFeature({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="group/feature border-t border-line py-12 first:border-t-0 first:pt-0 md:py-16 md:first:pt-0">
      <Reveal className="grid gap-8 md:grid-cols-12 md:items-start md:gap-12">
        <div className={`md:col-span-5 ${flip ? "md:order-2" : ""}`}>
          <p className="mb-4 font-mono text-[0.78rem] text-accent">{project.badge}</p>
          <h3 className="text-[1.75rem] font-medium leading-tight tracking-tight md:text-[2rem]">
            {project.name}
          </h3>
          <p className="mt-3 text-muted">{project.purpose}</p>
          <p className="mb-2 mt-7 text-[0.95rem] font-medium">My contribution</p>
          <ul className="space-y-2 text-[0.98rem]">
            {project.highlights.map((h) => (
              <li key={h} className="relative pl-5 before:absolute before:left-0 before:text-accent before:content-['–']">
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <TechList items={project.stack} />
          </div>
          <div className="mt-7">
            <ArrowLink href={`/work/${project.slug}`}>Read case study</ArrowLink>
          </div>
        </div>
        <div className={`md:col-span-7 ${flip ? "md:order-1" : ""}`}>
          <VisualFrame project={project} />
        </div>
      </Reveal>
    </article>
  );
}
