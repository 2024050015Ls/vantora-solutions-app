# Vantora Creator OS — Landing Page

A single-page, conversion-focused landing site for the "Vantora Creator OS" Notion template product. Presents the product's hero pitch, pain points it solves, feature grid, what's included, pricing, and an FAQ accordion, with calls to action linking out to a Gumroad checkout.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router) for routing and server rendering
- Tailwind CSS 4 for styling
- Vite 7 for building and local dev
- Deployed on Netlify

## Running locally

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:3000`.

## Building

```bash
npm run build
```

Output is written to `dist/client`, matching the `publish` directory configured in `netlify.toml`.

## Notes

- The "Get the Template" and "Buy Now" buttons link to a placeholder Gumroad URL (`GUMROAD_URL` in `src/routes/index.tsx`) — swap it for the real checkout link before launch.
- The hero mockup and social links (Twitter/X, YouTube) are placeholders and should be replaced with real assets and URLs.
