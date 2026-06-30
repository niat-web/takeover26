import type { Transition, Variants } from 'framer-motion'

/* ============================================================
   Centralized animation tokens & reusable Framer Motion variants.
   No magic numbers scattered across components.
   ============================================================ */

export const DURATION = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
} as const

type Bezier = [number, number, number, number]

export const EASE = {
  out: [0.16, 1, 0.3, 1] as Bezier,
  inOut: [0.65, 0, 0.35, 1] as Bezier,
}

export const springSoft: Transition = {
  type: 'spring',
  stiffness: 120,
  damping: 18,
  mass: 0.9,
}

const baseTransition: Transition = {
  duration: DURATION.base,
  ease: EASE.out,
}

/** Default viewport config for scroll-reveal — animate once, slightly early. */
export const VIEWPORT = { once: true, amount: 0.25 } as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -36 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: baseTransition },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: baseTransition },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: baseTransition },
}

export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: 'blur(14px)', y: 24 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
}

/** Container that staggers its children on reveal. */
export const staggerContainer = (stagger = 0.1, delayChildren = 0.05): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

/** Per-word text reveal child. */
export const textRevealChild: Variants = {
  hidden: { opacity: 0, y: '60%', filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: '0%',
    filter: 'blur(0px)',
    transition: { duration: DURATION.base, ease: EASE.out },
  },
}

/** Reusable hover-lift interaction for cards/buttons. */
export const hoverLift = {
  whileHover: { y: -6, transition: { duration: DURATION.fast, ease: EASE.out } },
  whileTap: { scale: 0.98 },
} as const

/** Map a named direction to its variant — keeps callers declarative. */
export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale' | 'blur' | 'fade'

export const revealVariants: Record<RevealDirection, Variants> = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
  blur: blurReveal,
  fade: fadeIn,
}
