import { existsSync } from "node:fs";
import path from "node:path";

/** File the CV button looks for. Drop a PDF with this exact name into /public. */
export const CV_FILE_NAME = "Alexei-Atlasov-CV.pdf";

/** Returns the public URL of the CV, or null when the file has not been added yet. */
export function getCvHref(): string | null {
  const file = path.join(process.cwd(), "public", CV_FILE_NAME);
  return existsSync(file) ? `/${CV_FILE_NAME}` : null;
}
