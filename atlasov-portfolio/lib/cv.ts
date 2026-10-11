import { existsSync } from "node:fs";
import path from "node:path";
import type { Lang } from "@/data/i18n";

/** Drop PDFs with these exact names into /public. */
export const CV_FILES: Record<Lang, string> = {
  en: "Alexei-Atlasov-CV.pdf",
  ru: "Alexei-Atlasov-CV-ru.pdf",
};

const exists = (name: string) => existsSync(path.join(process.cwd(), "public", name));

/** Public URL of the CV for this language, or null. Russian falls back to the English file. */
export function getCvHref(lang: Lang): string | null {
  if (exists(CV_FILES[lang])) return `/${CV_FILES[lang]}`;
  if (lang !== "en" && exists(CV_FILES.en)) return `/${CV_FILES.en}`;
  return null;
}
