# Alexei Atlasov: portfolio website

A mostly static portfolio built with Next.js (App Router), TypeScript and Tailwind CSS 4.
There is no database and no backend. Pages are pre-rendered at build time.

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

Fonts (Schibsted Grotesk, DM Mono) are fetched from Google Fonts during `npm run build` and then self-hosted, so the first build needs internet access.

## Editing content

All text lives in `data/`. Components do not need to change.

| File | Content |
| --- | --- |
| `data/site.ts` | Name, headline, intro, About text, navigation, contact details |
| `data/projects.ts` | The three case studies (home page and case-study pages) and the four additional projects |
| `data/experience.ts` | Employment history |
| `data/skills.ts` | Skill groups |

## Download CV

The Download CV button appears automatically when this file exists:

```
public/Alexei-Atlasov-CV.pdf
```

Only add a CV that carries the name Alexei Atlasov. Without the file, the button is omitted from the navigation and the introduction. Rebuild after adding it.

## Contact details

None have been supplied, so there is no contact section and no contact form. To add links, fill in `contact.email`, `contact.linkedin` and `contact.github` in `data/site.ts`. Links then appear in the About section and the footer. Empty values are never rendered.

## Screenshots

The case studies currently show interface illustrations labelled "Illustrative interface" with fictional data. To use a real screenshot, put the image in `public/` and add this to the project in `data/projects.ts`:

```ts
screenshot: { src: "/screens/mtt.png", alt: "Describe the screen", width: 1600, height: 1000 },
```

The illustration is then replaced and the caption changes to "Screenshot". Check that you have the client's permission first.

## Site URL

Set the public address so sharing images and metadata use the right domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example npm run build
```

## Static export

To produce a plain `out/` folder for any static host, uncomment `output: "export"` and `images: { unoptimized: true }` in `next.config.mjs`, then run `npm run build`.

## Motion and accessibility

- The introduction animates with CSS only. Project sections reveal once on scroll.
- With `prefers-reduced-motion: reduce`, all movement is removed and content shows immediately.
- Without JavaScript, all content stays visible. The hidden starting state only applies after a script adds the `js` class to `<html>`.
- The mobile menu is a button with `aria-expanded`, closes with Escape, and anchor links account for the sticky header height.
