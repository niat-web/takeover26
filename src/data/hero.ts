export interface HeroBadge {
  label: string
  accent: 'ember' | 'punch'
  /** the flagship prize badge — rendered larger with a glowing highlight */
  highlight?: boolean
}

/** Key features & advantages that orbit the AI core in the hero. */
export const HERO_BADGES: HeroBadge[] = [
  { label: '24 Hours', accent: 'ember' },
  { label: 'AI Powered', accent: 'punch' },
  { label: 'Innovation', accent: 'punch' },
  { label: 'Build & Ship', accent: 'ember' },
  { label: 'Win ₹2.5L', accent: 'ember', highlight: true },
]

/** Flagship highlight — the cash prize, given its own prominent bar. */
export const HERO_PRIZE = {
  value: '₹2.5 Lakhs',
  label: 'Total Cash Prize Pool',
} as const

export interface HeroFact {
  value: string
  label: string
  /** stronger gold treatment for the key fact */
  highlight?: boolean
}

export const HERO_FACTS: HeroFact[] = [
  { value: '24 Hours', label: 'Build Sprint', highlight: true },
  { value: 'Online', label: 'Preliminary Round' },
  { value: 'Offline', label: 'Final · NIAT KKH, Hyderabad' },
]
