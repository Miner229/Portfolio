import Image from "next/image";
import type { Lang } from "@/data/i18n";
import type { Project } from "@/data/projects";
import { ui } from "@/data/ui";
import BonusVisual from "./BonusVisual";
import CrmVisual from "./CrmVisual";
import MttVisual from "./MttVisual";

const visuals = { crm: CrmVisual, mtt: MttVisual, bonus: BonusVisual } as const;

/** Shows a real screenshot when one is configured, otherwise a labelled illustration. */
export default function VisualFrame({ project, lang }: { project: Project; lang: Lang }) {
  const t = ui[lang].visual;
  const Visual = visuals[project.visual];
  const shot = project.screenshot;
  return (
    <figure className="m-0">
      <div className="overflow-hidden border border-line bg-panel">
        <div className="transition-transform duration-500 ease-out group-hover/feature:scale-[1.015] group-focus-within/feature:scale-[1.015]">
          {shot ? (
            <Image
              src={shot.src}
              alt={shot.alt[lang]}
              width={shot.width}
              height={shot.height}
              sizes="(min-width: 1160px) 680px, 100vw"
              className="h-auto w-full"
            />
          ) : (
            <div role="img" aria-label={t[project.visual]}>
              <Visual lang={lang} />
            </div>
          )}
        </div>
      </div>
      <figcaption className="mt-2 font-mono text-[0.72rem] text-muted">{shot ? t.screenshot : t.illustrative}</figcaption>
    </figure>
  );
}
