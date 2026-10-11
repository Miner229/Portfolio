import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowLink from "@/components/ArrowLink";
import TechList from "@/components/TechList";
import VisualFrame from "@/components/visuals/VisualFrame";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.name} case study`;
  return {
    title,
    description: project.purpose,
    openGraph: { title: `${title} | ${site.name}`, description: project.purpose, type: "article" },
  };
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

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto w-full max-w-[1160px] px-5 sm:px-8">
      <header className="pb-12 pt-10 md:pb-16 md:pt-16">
        <ArrowLink href="/#work" direction="left">
          Selected work
        </ArrowLink>
        <p className="mb-4 mt-12 font-mono text-[0.78rem] text-accent">{project.badge}</p>
        <h1 className="max-w-[22ch] text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-[1.08] tracking-[-0.025em]">
          {project.name}
        </h1>
        <p className="mt-6 max-w-[40rem] text-[1.2rem] text-muted">{project.purpose}</p>
      </header>

      <div className="group/feature pb-14">
        <VisualFrame project={project} />
      </div>

      <Block title="Overview">
        <div className="max-w-[42rem] space-y-4">
          {project.study.overview.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Block>
      <Block title="My role and scope">
        <div className="max-w-[42rem] space-y-4">
          {project.study.role.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Block>
      <Block title="Main implementation work">
        <Bullets items={project.contribution} />
      </Block>
      <Block title="Technical constraints and decisions">
        <Bullets items={project.study.decisions} />
      </Block>
      <Block title="Delivered functionality and results">
        <Bullets items={project.study.delivered} />
      </Block>
      <Block title="Stack">
        <TechList items={project.stack} />
      </Block>

      <nav aria-label="Case studies" className="flex flex-col gap-6 border-t border-line py-10 sm:flex-row sm:items-center sm:justify-between">
        <ArrowLink href="/#work" direction="left">
          Back to selected work
        </ArrowLink>
        <p className="text-[0.95rem] text-muted">
          Next:{" "}
          <Link href={`/work/${next.slug}`} className="border-b border-ink font-medium text-ink hover:border-accent hover:text-accent">
            {next.name}
          </Link>
        </p>
      </nav>
    </article>
  );
}
