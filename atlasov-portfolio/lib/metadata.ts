import type { Metadata, Viewport } from "next";
import { langs, localePath, type Lang } from "@/data/i18n";
import { site } from "@/data/site";

const ogLocale = { en: "en_GB", ru: "ru_RU" } as const;

export const viewport: Viewport = { themeColor: "#f5f1ea" };

/** Site-wide metadata for one language (used by each root layout). */
export function baseMetadata(lang: Lang): Metadata {
  const title = site.title[lang];
  const description = site.description[lang];
  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s | ${site.name}` },
    description,
    authors: [{ name: site.name }],
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      locale: ogLocale[lang],
      alternateLocale: [ogLocale[lang === "en" ? "ru" : "en"]],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** Per-page metadata with canonical and hreflang links between the two languages. */
export function pageMetadata(
  lang: Lang,
  path: string,
  title?: string,
  description?: string,
  type: "website" | "article" = "website",
): Metadata {
  const languages: Record<string, string> = {};
  for (const l of langs) languages[l] = localePath(l, path);
  languages["x-default"] = localePath("en", path);
  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: { canonical: localePath(lang, path), languages },
    openGraph: {
      type,
      siteName: site.name,
      locale: ogLocale[lang],
      url: localePath(lang, path),
      title: title ? `${title} | ${site.name}` : site.title[lang],
      description: description ?? site.description[lang],
    },
  };
}
