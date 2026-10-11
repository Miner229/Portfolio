import Image from "next/image";
import type { Project } from "@/data/projects";
import CrmVisual from "./CrmVisual";
import MttVisual from "./MttVisual";
import BonusVisual from "./BonusVisual";

const visuals = { crm: CrmVisual, mtt: MttVisual, bonus: BonusVisual } as const;
const labels = {
  crm: "Illustrative interface: customer records and migration stages",
  mtt: "Illustrative interface: operator workspace with customer information and requests",
  bonus: "Illustrative interface: employee requests and approval statuses",
} as const;

/** Shows a real screenshot when one is configured, otherwise a labelled illustration. */
export default function VisualFrame({ project }: { project: Project }) {
  const Visual = visuals[project.visual];
  const shot = project.screenshot;
  return (
    <figure className="m-0">
      <div className="overflow-hidden border border-line bg-panel">
        <div className="transition-transform duration-500 ease-out group-hover/feature:scale-[1.015] group-focus-within/feature:scale-[1.015]">
          {shot ? (
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              sizes="(min-width: 1160px) 680px, 100vw"
              className="h-auto w-full"
            />
          ) : (
            <div role="img" aria-label={labels[project.visual]}>
              <Visual />
            </div>
          )}
        </div>
      </div>
      <figcaption className="mt-2 font-mono text-[0.72rem] text-muted">
        {shot ? "Screenshot" : "Illustrative interface · fictional sample data, not a client screenshot"}
      </figcaption>
    </figure>
  );
}
