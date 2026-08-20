# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project overview

A single-page marketing/landing site for "Vantora Creator OS," a Notion template product for content creators. There is no backend, no database, and no auth — the page is purely static marketing content with outbound checkout links.

### Tech stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes, no separate stylesheet per component) |
| Language | TypeScript 5, strict mode |
| Deployment | Netlify |

## Directory structure

```
├── public/
│   ├── favicon.ico
│   └── placeholder.png
├── src/
│   ├── components/
│   │   └── FaqAccordion.tsx   # Client-side accordion for the FAQ section
│   ├── routes/
│   │   ├── __root.tsx         # Root layout: HTML shell, meta tags, Inter font link
│   │   └── index.tsx          # The entire landing page (all sections)
│   ├── router.tsx             # TanStack Router setup
│   └── styles.css             # Tailwind import + CSS custom properties for brand colors
├── netlify.toml                # Build command, publish dir, dev server settings
├── vite.config.ts               # Vite plugins: TanStack Start, Tailwind, Netlify
└── tsconfig.json                 # `@/*` path alias for `src/*`
```

## Key decisions

- **Single route.** The whole site lives in `src/routes/index.tsx` as one long page of sections (header, hero, problem, solution, what's included, pricing, FAQ, footer) — there is intentionally no multi-page routing.
- **No backend/persistence.** This is a static marketing page; checkout is handled entirely by an external Gumroad link (`GUMROAD_URL` constant in `index.tsx`), not by any Netlify function or database.
- **Brand colors** are defined as CSS custom properties in `src/styles.css` (`--color-navy`, `--color-blue`, `--color-accent`, `--color-accent-dark`, `--color-bg`) and also referenced directly via Tailwind arbitrary-value classes (e.g. `bg-[#1a1a2e]`, `text-[#e94560]`) throughout `index.tsx`.
- **Font** is Inter, loaded via a Google Fonts `<link>` in `__root.tsx`'s `head()` config rather than a local font file.
- **FAQ accordion** (`FaqAccordion.tsx`) is a small client component using local `useState`; no animation library.

## Conventions

- Components: PascalCase, colocated in `src/components/`
- Routes: kebab-case files under `src/routes/`
- Import paths use the `@/` alias for `src/`
- Tailwind utility classes only — avoid introducing a separate CSS file per component

## Placeholders to replace before launch

- `GUMROAD_URL` in `src/routes/index.tsx` — currently a placeholder Gumroad link
- Hero section mockup — currently a styled placeholder box, meant to be replaced with a real product screenshot
- Footer Twitter/X and YouTube links — currently `#`
