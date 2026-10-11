import ProjectFeature from "@/components/ProjectFeature";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TechList from "@/components/TechList";
import { getCvHref } from "@/lib/cv";
import { about, site } from "@/data/site";
import { additionalProjects, projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";

export default function Home() {
  const cvHref = getCvHref();
  const { email, linkedin, github } = site.contact;
  const contacts = [
    email && { href: `mailto:${email}`, label: email },
    linkedin && { href: linkedin, label: "LinkedIn" },
    github && { href: github, label: "GitHub" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-8">
      {/* Introduction */}
      <section aria-labelledby="intro-title" className="pb-16 pt-14 md:pb-24 md:pt-24">
        <p className="hero-in text-lg font-medium text-accent">
          {site.name}, {site.role}
        </p>
        <h1
          id="intro-title"
          className="hero-in mt-5 max-w-[19ch] text-[clamp(2.5rem,6.4vw,5.1rem)] font-medium leading-[1.04] tracking-[-0.03em]"
          style={{ animationDelay: "60ms" }}
        >
          {site.headline}
        </h1>
        <p
          className="hero-in mt-8 max-w-[40rem] text-[1.2rem] leading-relaxed text-muted md:text-[1.3rem]"
          style={{ animationDelay: "200ms" }}
        >
          {site.intro}
        </p>
        <div className="hero-in mt-10 flex flex-wrap gap-4" style={{ animationDelay: "300ms" }}>
          <a
            href="#work"
            className="bg-ink px-6 py-3 font-medium text-paper hover:bg-accent focus-visible:bg-accent"
          >
            View selected work
          </a>
          {cvHref && (
            <a
              href={cvHref}
              download
              className="border border-ink px-6 py-3 font-medium hover:border-accent hover:text-accent focus-visible:border-accent"
            >
              Download CV
            </a>
          )}
        </div>
        <dl
          className="hero-in mt-16 grid gap-x-10 gap-y-5 border-t border-line pt-6 text-[0.95rem] sm:grid-cols-3"
          style={{ animationDelay: "400ms" }}
        >
          <div>
            <dt className="text-muted">Commercial experience</dt>
            <dd className="font-medium">Since 2018</dd>
          </div>
          <div>
            <dt className="text-muted">Current role</dt>
            <dd className="font-medium">Smart Team Service</dd>
          </div>
          <div>
            <dt className="text-muted">Main stack</dt>
            <dd className="font-medium">C#/.NET, Vue, React, Python, Node.js</dd>
          </div>
        </dl>
      </section>

      {/* Selected work */}
      <section id="work" aria-labelledby="work-title" className="border-t border-line pt-14 md:pt-20">
        <div className="mb-10 md:mb-14">
          <h2 id="work-title" className="text-lg font-medium text-muted">
            Selected work
          </h2>
        </div>
        {projects.map((p, i) => (
          <ProjectFeature key={p.slug} project={p} index={i} />
        ))}
      </section>

      {/* Additional projects */}
      <Section id="more" title="More projects">
        <Reveal>
          <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {additionalProjects.map((p) => (
              <li key={p.name} className="border-t border-line pt-4">
                <h3 className="text-lg font-medium leading-snug">{p.name}</h3>
                {p.note && <p className="mt-1 font-mono text-[0.75rem] text-accent">{p.note}</p>}
                <p className="mb-3 mt-2 text-[0.98rem] text-muted">{p.description}</p>
                <TechList items={p.stack} />
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <ol>
          {experience.map((job) => (
            <li key={job.company} className="grid gap-2 border-t border-line py-7 first:border-t-0 first:pt-0 md:grid-cols-9 md:gap-8">
              <p className="font-mono text-[0.82rem] text-muted md:col-span-2 md:pt-1.5">{job.dates}</p>
              <div className="md:col-span-7">
                <h3 className="text-xl font-medium leading-snug">{job.company}</h3>
                <p className="text-muted">{job.role}</p>
                <ul className="mt-4 space-y-2 text-[0.98rem]">
                  {job.points.map((pt) => (
                    <li key={pt} className="relative pl-5 before:absolute before:left-0 before:text-accent before:content-['–']">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Technical skills">
        <dl>
          {skills.map((s) => (
            <div key={s.group} className="grid gap-1 border-t border-line py-5 first:border-t-0 first:pt-0 md:grid-cols-9 md:gap-8">
              <dt className="font-medium md:col-span-2">{s.group}</dt>
              <dd className="text-[0.98rem] text-muted md:col-span-7">{s.items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* About */}
      <Section id="about" title="About">
        <div className="max-w-[40rem] space-y-5 text-[1.08rem]">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {contacts.length > 0 && (
            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              {contacts.map((c) => (
                <li key={c.href}>
                  <a href={c.href} className="border-b border-ink hover:border-accent hover:text-accent">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>
    </div>
  );
}
