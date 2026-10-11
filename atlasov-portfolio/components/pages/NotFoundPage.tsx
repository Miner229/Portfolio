import ArrowLink from "@/components/ArrowLink";
import { localePath, type Lang } from "@/data/i18n";
import { ui } from "@/data/ui";

export default function NotFoundPage({ lang }: { lang: Lang }) {
  const t = ui[lang].notFound;
  return (
    <div className="mx-auto w-full max-w-[1160px] px-5 py-24 sm:px-8 md:py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 max-w-[18ch] text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-[1.08] tracking-[-0.025em]">{t.title}</h1>
      <p className="mt-6 max-w-[34rem] text-[1.15rem] text-muted">{t.text}</p>
      <div className="mt-10">
        <ArrowLink href={localePath(lang, "/")}>{t.back}</ArrowLink>
      </div>
    </div>
  );
}
