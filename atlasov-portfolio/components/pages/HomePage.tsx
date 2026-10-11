import ArrowLink from "@/components/ArrowLink";
import ProjectFeature from "@/components/ProjectFeature";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SectionIndex from "@/components/SectionIndex";
import TechStrip from "@/components/TechStrip";
import { getCvHref } from "@/lib/cv";
import { localePath, type Lang } from "@/data/i18n";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { site, telegramHandle, telegramHref, ticker } from "@/data/site";
import { skills } from "@/data/skills";
import { ui } from "@/data/ui";

const btn = "px-6 py-3 font-medium";
const outline = `${btn} border border-ink hover:border-accent hover:text-accent focus-visible:border-accent`;

export default function HomePage({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const cv = getCvHref(lang);
  const name = lang === "ru" ? "Алексей Атласов" : site.name;
  const items = [
    { id: "intro", label: t.index.intro },
    { id: "work", label: t.index.work },
    { id: "experience", label: t.index.experience },
    { id: "skills", label: t.index.skills },
    { id: "about", label: t.index.about },
    { id: "contact", label: t.index.contact },
  ];

  return (
    <>
      <SectionIndex items={items} label={t.sectionsNav} />
      <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-8">
        {/* Introduction */}
        <section id="intro" aria-labelledby="intro-title" className="pb-14 pt-14 md:pb-20 md:pt-24">
          <p className="hero-in text-lg font-medium text-accent">
            {name}, {site.role[lang]}
          </p>
          <h1
            id="intro-title"
            className="hero-in mt-5 max-w-[19ch] text-[clamp(2.4rem,6vw,4.9rem)] font-medium leading-[1.06] tracking-[-0.03em]"
            style={{ animationDelay: "60ms" }}
          >
            {site.headline[lang]}
          </h1>
          <p
            className="hero-in mt-8 max-w-[40rem] text-[1.2rem] leading-relaxed text-muted md:text-[1.3rem]"
            style={{ animationDelay: "200ms" }}
          >
            {site.intro[lang]}
          </p>
          <div className="hero-in mt-10 flex flex-wrap gap-4" style={{ animationDelay: "300ms" }}>
            <a href="#work" className={`${btn} bg-ink text-paper hover:bg-accent focus-visible:bg-accent`}>
              {t.viewWork}
            </a>
            <a href={telegramHref} target="_blank" rel="noopener noreferrer" className={outline}>
              {t.telegramCta}
            </a>
            {cv && (
              <a href={cv} download className={outline}>
                {t.downloadCv}
              </a>
            )}
          </div>
          <dl
            className="hero-in mt-14 grid gap-x-10 gap-y-5 border-t border-line pt-6 text-[0.95rem] sm:grid-cols-2 lg:grid-cols-4"
            style={{ animationDelay: "400ms" }}
          >
            {[
              [t.hero.experienceLabel, t.hero.experienceValue],
              [t.hero.roleLabel, t.hero.roleValue],
              [t.hero.stackLabel, "C#/.NET, Vue, React, Python, Node.js"],
              [t.hero.locationLabel, t.hero.locationValue],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-muted">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <TechStrip items={ticker} label={t.tickerLabel} />

        {/* Selected work */}
        <section id="work" aria-labelledby="work-title" className="pt-16 md:pt-24">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4 md:mb-14">
            <h2 id="work-title" className="text-lg font-medium text-muted">
              {t.sections.work}
            </h2>
            <ArrowLink href={localePath(lang, "/projects")}>{t.allProjects}</ArrowLink>
          </div>
          {projects.map((p, i) => (
            <ProjectFeature key={p.slug} project={p} index={i} total={projects.length} lang={lang} />
          ))}
        </section>

        {/* Experience */}
        <Section id="experience" title={t.sections.experience}>
          <ol>
            {experience.map((job) => (
              <li key={job.company} className="grid gap-2 border-t border-line py-7 first:border-t-0 first:pt-0 md:grid-cols-9 md:gap-8">
                <p className="font-mono text-[0.82rem] text-muted md:col-span-2 md:pt-1.5">{job.dates[lang]}</p>
                <div className="md:col-span-7">
                  <h3 className="text-xl font-medium leading-snug">{job.company}</h3>
                  <p className="text-muted">{job.role[lang]}</p>
                  <ul className="mt-4 space-y-2 text-[0.98rem]">
                    {job.points[lang].map((pt) => (
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
        <Section id="skills" title={t.sections.skills}>
          <dl>
            {skills.map((s) => (
              <div key={s.group.en} className="grid gap-1 border-t border-line py-5 first:border-t-0 first:pt-0 md:grid-cols-9 md:gap-8">
                <dt className="font-medium md:col-span-2">{s.group[lang]}</dt>
                <dd className="text-[0.98rem] text-muted md:col-span-7">{s.items[lang]}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* About */}
        <Section id="about" title={t.sections.about}>
          <div className="max-w-[40rem] space-y-5 text-[1.08rem]">
            {site.about[lang].map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-16 md:py-24">
          <Reveal>
            <h2
              id="contact-title"
              className="max-w-[20ch] text-[clamp(2rem,4.8vw,3.7rem)] font-medium leading-[1.08] tracking-[-0.03em]"
            >
              {t.cta.title}
            </h2>
            <p className="mt-6 max-w-[36rem] text-[1.15rem] text-muted">{t.cta.text}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href={telegramHref} target="_blank" rel="noopener noreferrer" className={`${btn} bg-ink text-paper hover:bg-accent focus-visible:bg-accent`}>
                {t.telegramCta}
              </a>
              <span className="font-mono text-[0.95rem]">{telegramHandle}</span>
              <ArrowLink href={localePath(lang, "/projects")}>{t.allProjects}</ArrowLink>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
