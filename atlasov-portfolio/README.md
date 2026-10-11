# Alexei Atlasov: portfolio website (EN / RU)

A mostly static, bilingual portfolio built with Next.js (App Router), TypeScript and Tailwind CSS 4.
No database and no backend. Pages are pre-rendered at build time.

## Requirements

- Node.js 20 or newer
- npm

## Commands

```bash
npm install        # install dependencies
npm run dev        # development server at http://localhost:3000
npm run typecheck  # TypeScript check
npm run build      # production build
npm run start      # serve the production build
```

Fonts (Onest, JetBrains Mono) are fetched from Google Fonts during `npm run build` and then self-hosted, so the first build needs internet access. Both include Cyrillic.

## Languages

| Language | Address examples |
| --- | --- |
| English (default) | `/`, `/projects`, `/work/mtt-commix` |
| Russian | `/ru`, `/ru/projects`, `/ru/work/mtt-commix` |

The language switch in the header links to the same page in the other language. Each language has its own root layout (`app/(en)` and `app/(ru)/ru`) with thin page files that render shared components, so no cookies or middleware are needed. Pages declare `hreflang` alternates for search engines.

## Editing content

All text lives in `data/`. Every visible string is written once per language with `l("English", "Русский")`.

| File | Content |
| --- | --- |
| `data/site.ts` | Name, headline, intro, About text, Telegram and other contacts, technology strip |
| `data/ui.ts` | Interface labels: navigation, buttons, section titles, 404 text, footer |
| `data/projects.ts` | The three case studies and the four additional projects |
| `data/experience.ts` | Employment history |
| `data/skills.ts` | Skill groups |

The Russian spelling of the name ("Алексей Атласов") is used in the Russian version. Change it in `data/site.ts` (titles), `components/RootDocument.tsx`, `components/Footer.tsx` and `components/pages/HomePage.tsx` if you prefer another spelling.

## Contacts

Telegram (`@Osyaass`) is configured in `data/site.ts` under `contact.telegram`. It appears in the navigation, the introduction, the contact section and the footer, and links to `https://t.me/Osyaass`.
Optional `email`, `linkedin` and `github` values appear in the footer when filled in. Empty values are never rendered. There is no contact form.

## Download CV

Add either or both files to `public/`:

```
public/Alexei-Atlasov-CV.pdf       # English
public/Alexei-Atlasov-CV-ru.pdf    # Russian (the English file is used if this one is missing)
```

The Download CV buttons appear automatically when a file exists. Rebuild after adding it. Only add a CV that carries the name Alexei Atlasov.

## Screenshots

The case studies show interface illustrations labelled "Illustrative interface" with fictional data. To use a real screenshot, put the image in `public/` and add this to the project in `data/projects.ts`:

```ts
screenshot: { src: "/screens/mtt.png", alt: l("Describe the screen", "Опишите экран"), width: 1600, height: 1000 },
```

Check that you have the client's permission first.

## Site URL

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example npm run build
```

## Layout and motion notes

- A fixed dot index on the right (wide screens only) follows the scroll position on the home page. Labels appear on hover and focus.
- The technology strip under the introduction is the only element that moves continuously. It pauses on hover and focus and becomes a static wrapped list with `prefers-reduced-motion`. To remove it, delete `<TechStrip ... />` in `components/pages/HomePage.tsx`.
- Without JavaScript, all content stays visible. The hidden starting state of scroll reveals only applies after a script adds the `js` class to `<html>`.
- With `prefers-reduced-motion: reduce`, all movement is removed.
