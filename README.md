# TakeOver'26 — NIAT Flagship Hackathon Landing Page

A production-grade, award-style landing page for **TakeOver'26**, NIAT's flagship hackathon.
Built as an immersive, animated single-page experience with a component-first architecture.

> Build the Future with AI, Innovation & Technology · Compete for ₹2.5 Lakhs in prizes.

## Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** (CSS-first `@theme` design tokens)
- **Framer Motion** (reusable animation variants)
- **lucide-react** (icons)
- `clsx` + `tailwind-merge` (the `cn()` helper)

## Getting Started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # typecheck (tsc -b) + production build
npm run preview    # preview the production build
npm run typecheck  # type-check only
```

## Design System

The brand palette is derived from the provided swatches and extended into full tonal ramps
in [`src/styles/globals.css`](src/styles/globals.css) via Tailwind v4 `@theme`:

| Token        | Base      | Role                          |
| ------------ | --------- | ----------------------------- |
| `night-800`  | `#1e0d10` | Primary surface (Night Rider) |
| `ink-950`    | `#000000` | Deepest background            |
| `ember-500`  | `#f59814` | Primary accent (Buttercup)    |
| `punch-500`  | `#da2c2c` | Secondary accent (Punch)      |
| `ember-50`   | `#fff6e9` | Foreground text               |

Design tokens cover spacing, radius, blur, shadow (glow system), animation timing and
reusable effects (`.glass`, `.text-gradient-brand`, `.bg-grid`, `.border-animated`,
`.noise-overlay`, `.shimmer-sweep`). Nothing is hardcoded repeatedly.

## Architecture

```
src/
  components/
    common/      # GlassCard, Button, SectionHeading, Accordion, PrizeCard,
                 # TimelineItem, AnimatedCounter, FloatingParticles, TextReveal, …
    layout/      # Navbar, Footer, PageWrapper, SectionContainer, GlobalBackground
    hero/        # HeroIllustration, FloatingBadges
  sections/      # Hero, About, Themes, Timeline, Prizes, Support, Eligibility, Faq, RegisterCta
  hooks/         # useScrollSpy, useScrolled, useMousePosition, useMagnetic, usePrefersReducedMotion
  constants/     # motion variants, site config (nav, social, section ids)
  data/          # content separated from presentation (about, prizes, timeline, faq, …)
  utils/         # cn(), scrollToSection()
  styles/        # globals.css (Tailwind v4 + design tokens)
```

### Principles

- **Component-first** — nothing meaningful lives in `App.tsx`; it only composes sections.
- **Reusable everything** — repeated UI is a component; repeated motion is a variant.
- **Content/data separation** — all copy lives in `src/data` typed with interfaces.
- **Performance** — below-the-fold sections are `React.lazy` code-split; pointer-driven
  effects use Framer motion values (no re-renders); particles are memoised & deterministic.
- **Accessibility** — semantic landmarks, ARIA on the accordion/nav/drawer, visible focus
  states, a skip link, and full `prefers-reduced-motion` support.

## Responsiveness

Mobile-first and verified for zero horizontal overflow at
320 / 375 / 425 / 768 / 1024 / 1280 / 1440 / 1920 px. The navbar collapses into an animated
glass drawer, the timeline switches from alternating to a single vertical rail, and the
prize podium stacks gracefully.
