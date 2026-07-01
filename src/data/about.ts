import type { LucideIcon } from 'lucide-react'
import { GraduationCap, Users, Lightbulb, TrendingUp } from 'lucide-react'

export interface Stat {
  /** numeric target for the animated counter */
  value: number
  prefix?: string
  suffix?: string
  /** render the value with one decimal place */
  decimals?: number
  label: string
}

export const ABOUT_STATS: Stat[] = [
  { value: 2.5, prefix: '₹', suffix: 'L', decimals: 1, label: 'Total Prize Pool' },
  { value: 24, suffix: 'h', label: 'Offline Finale' },
  { value: 5, suffix: '+', label: 'Innovation Themes' },
]

export interface ValueProp {
  icon: LucideIcon
  title: string
  description: string
}

export const ABOUT_VALUES: ValueProp[] = [
  {
    icon: GraduationCap,
    title: 'Learning',
    description:
      'Sharpen your engineering craft with hands-on building, daily mentorship and real product feedback.',
  },
  {
    icon: Users,
    title: 'Networking',
    description:
      'Collaborate with the most ambitious builders at NIAT and grow a network that compounds.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Turn a spark of an idea into a working prototype that solves a problem people actually have.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description:
      'Ship a portfolio-defining project, win recognition, and open doors to opportunities ahead.',
  },
]

export const ABOUT_COPY = {
  eyebrow: 'About the Hackathon',
  heading: "What is TakeOver'26?",
  body: "TakeOver'26 is NIAT's flagship hackathon with one clear mission — accelerate business growth through AI and innovation. Over an intense 24-hour build sprint, backed by daily expert mentorship, teams turn bold ideas into intelligent products that help real businesses digitize, scale and grow — all while competing for a prize pool worth ₹2.5 Lakhs.",
} as const
