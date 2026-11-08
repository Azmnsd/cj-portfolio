# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build (Turbopack); produces a static export to `out/` because `next.config.ts` sets `output: 'export'`
- `npm start` — serve a built non-export Next.js app (note: incompatible with the `output: 'export'` config; use a static file server against `out/` instead for production previews)
- `npm run lint` — ESLint over the repo (config: `next/core-web-vitals` + `next/typescript`)

There is no test framework configured.

## Architecture

This is a personal portfolio built with **Next.js 15 App Router + React 19 + Tailwind CSS v4**, deployed as a fully **static export** (`next.config.ts` → `output: 'export'`). The static-export mode has hard constraints to keep in mind when adding features:

- No API routes, no Server Actions, no runtime SSR — every route must be statically renderable.
- `images.unoptimized: true` is required and already set; remote `next/image` sources must be added to `images.remotePatterns` in `next.config.ts` (currently: `cdn.dribbble.com`, `images.unsplash.com`, `www.amandahum.com`).
- Dynamic routes need `generateStaticParams`.

### Routing layout

Top-level `app/` routes are flat, one folder per project case-study page (`gaia`, `jude`, `anastasia`, `daily-ui`, plus `about`). The home page [app/page.tsx](app/page.tsx) hard-codes the cards and maps each card title to its destination route via a chained ternary in `ScrollCard` — when adding a new project, update both the card array and that ternary, and add the slug to `DEFAULT_PROJECTS` in [components/ProjectPager.tsx](components/ProjectPager.tsx).

[app/layout.tsx](app/layout.tsx) is the only layout; it renders `<Navbar />` and `<Footer />` around `{children}` for every route.

### Custom navigation transition

[components/Navbar.tsx](components/Navbar.tsx) implements a hand-rolled page-transition system instead of relying on Next.js defaults:

- Link clicks are intercepted (`e.preventDefault()`), a fake progress bar is animated, and `router.push` is deferred ~400ms so the fade-out is visible.
- `pathname` change in a `useEffect` finalizes the bar and resets state.
- [components/ProjectPager.tsx](components/ProjectPager.tsx) writes `navDirection` into `sessionStorage` before navigating between project pages so the destination page can animate in from the correct side.
- [components/PageTransition.tsx](components/PageTransition.tsx) exists as a Framer Motion `AnimatePresence` wrapper but is **not** mounted in `layout.tsx` — wire it in only if you actually want route-level enter/exit animations on top of the Navbar's existing scheme.

Any new internal navigation should go through this Navbar/ProjectPager flow (not bare `<Link>`), or the progress bar and direction-aware transitions will be inconsistent.

### Styling

Tailwind v4 via `@tailwindcss/postcss`. Theme tokens live in [app/globals.css](app/globals.css) using the v4 `@theme inline` block (CSS-first config); a legacy `tailwind.config.js` is also present but mostly empty — prefer editing `globals.css` for theme changes. The site is dark-only (`--background: black`); there is no light theme despite the `prefers-color-scheme: dark` block.

Two PostCSS configs exist (`postcss.config.js` and `postcss.config.mjs`) with the same plugin set. Next.js picks one; if you need to change PostCSS plugins, edit both or remove the `.js` to avoid drift.

### Dependencies of note

- `framer-motion` for card scroll-in and route transitions
- `react-intersection-observer` for triggering `ScrollCard` animations on viewport entry
- `lucide-react` available but currently unused in committed components

### Path alias

`@/*` maps to the repo root (see [tsconfig.json](tsconfig.json)).
