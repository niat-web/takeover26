# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page, heavily-animated marketing site for **TakeOver'26**, NIAT's flagship hackathon.
React 19 + TypeScript + Vite, Tailwind CSS v4, Framer Motion, lucide-react.

## Commands

```bash
npm run dev        # Vite dev server → http://localhost:5173
npm run build      # tsc -b (typecheck all projects) then vite build
npm run typecheck  # tsc -b only
npm run lint       # eslint .
npm run preview    # serve the production build
```

There is **no test suite** configured — `build`/`typecheck` are the correctness gate.
The dev server auto-picks the next free port if 5173 is taken.

## Architecture (the big picture)

- **`App.tsx` only composes.** It renders `PageWrapper → Navbar → <sections> → Footer`.
  Every section lives in `src/sections/*` and all below-the-fold sections are
  `React.lazy` code-split inside a single `<Suspense>`.
- **Design tokens are the single source of truth for theming** and live in
  `src/styles/globals.css` under Tailwind v4 `@theme` (fonts, color ramps, radius, blur,
  shadows, animation keyframes). Components never hardcode brand colors — they use token
  utilities (`bg-ember-500`, `text-punch-300`, `bg-night-800`, …). **To recolor the whole
  site, change the `--color-*` ramps; the palette flows everywhere from there.**
  - Color token *names* are semantic aliases, not literal hues: `ember` = primary accent,
    `punch` = secondary accent, `night`/`ink` = dark surfaces. Reskinning = editing values,
    not renaming classes.
  - A few glow values are duplicated as raw rgba in `globals.css` (`--shadow-ember`,
    `--shadow-punch`) and in `GlassCard.tsx` / `Button.tsx`. Keep these in sync with the ramp.
- **Content is data-driven.** All copy/prizes/timeline/FAQ/etc. are typed arrays in
  `src/data/*.ts`; sections map over them. Edit data files to change content, not JSX.
- **Navigation is single-sourced** in `src/constants/site.ts` (`SECTION_IDS`, `NAV_LINKS`).
  These ids drive the section anchors, the `useScrollSpy` active-link highlight, and
  `scrollToSection()` in `src/utils/scroll.ts`. Add a section → add its id here + a `<section id>`.
- **Animation is centralized** in `src/constants/motion.ts` (reusable Framer `Variants` +
  `DURATION`/`EASE`/`VIEWPORT` tokens). Reuse via `common/Reveal`, `common/TextReveal`,
  `common/SectionHeading` instead of writing ad-hoc variants. Pointer-driven effects
  (`useMousePosition`, `useMagnetic`) use motion values so they animate without re-rendering.
- **Layout shell:** `components/layout/PageWrapper` mounts the fixed `GlobalBackground`
  (aurora/mesh/grid/rays/noise) and a skip link behind all content. `Navbar` morphs to glass
  on scroll and opens `MobileDrawer` on mobile.

## Conventions & gotchas

- Import via the `@/` alias (`@` → `src`). Barrel files re-export each folder
  (`components/common/index.ts`, `hooks/index.ts`, etc.).
- Compose classes with `cn()` from `src/utils/cn.ts` (clsx + tailwind-merge). No inline styles
  for static styling; inline `style` is only for motion values / computed positions.
- **`background-clip:text` gradients (`.text-gradient-*`) must sit on an `inline-block`/block
  element** — on a plain inline `<span>` the text renders transparent (invisible). See
  `TextReveal` / `SectionHeading`.
- **lucide-react is v1.x here:** several icon names differ from older majors — use `Code`
  (not `Code2`), `ChartColumn` (not `BarChart3`), `CircleCheckBig` (not `CheckCircle2`).
  Brand icons (Discord/Instagram/LinkedIn) are not shipped — they are hand-rolled SVGs in
  `components/layout/SocialIcon.tsx`.
- TypeScript 6 deprecates `baseUrl`; path aliases are declared under `paths` in
  `tsconfig.app.json` and resolve relative to that file.
- `prefers-reduced-motion` is honored globally in `globals.css`; reusable hooks also expose
  `usePrefersReducedMotion` for JS-driven animations.
- Fonts are loaded in `index.html` (Google Fonts) and mapped to `--font-display` / `--font-sans`
  in `globals.css`. The site intentionally uses one unified typeface family everywhere.
