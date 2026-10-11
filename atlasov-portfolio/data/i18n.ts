export type Lang = "en" | "ru";
export const langs: Lang[] = ["en", "ru"];
export type L<T = string> = Record<Lang, T>;

/** Shorthand for a localised value: l("English", "Русский"). */
export function l<T>(en: T, ru: T): L<T> {
  return { en, ru };
}

/** English lives at the root (/projects), Russian under /ru (/ru/projects). */
export function localePath(lang: Lang, path = "/", hash?: string): string {
  const base = lang === "en" ? path : path === "/" ? "/ru" : `/ru${path}`;
  return hash ? `${base}#${hash}` : base;
}
