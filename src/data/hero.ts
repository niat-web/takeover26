export interface HeroBadge {
  label: string
  /** position offsets in % relative to the illustration stage */
  top: string
  left: string
  delay: number
  accent: 'ember' | 'punch'
}

export const HERO_BADGES: HeroBadge[] = [
  { label: '48 Hours', top: '6%', left: '-6%', delay: 0, accent: 'ember' },
  { label: 'AI', top: '20%', left: '88%', delay: 0.6, accent: 'punch' },
  { label: 'Innovation', top: '74%', left: '-8%', delay: 1.1, accent: 'punch' },
  { label: 'Build', top: '52%', left: '92%', delay: 0.3, accent: 'ember' },
  { label: 'Win ₹2.5L', top: '92%', left: '60%', delay: 0.9, accent: 'ember' },
]

export interface HeroStat {
  value: string
  label: string
}

export const HERO_STATS: HeroStat[] = [
  { value: '₹2.5L', label: 'Prize Pool' },
  { value: '48h', label: 'Build Sprint' },
  { value: 'NIAT', label: 'Hyderabad' },
]
