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
  { value: 20, suffix: '+', label: 'Teams Registered' },
  { value: 5, suffix: '+', label: 'Innovation Themes' },
]

export interface ValueProp {
  icon: LucideIcon
  /** short category label, e.g. "Learning" */
  tag: string
  /** punchy headline, e.g. "Learn by Building" */
  title: string
  /** conversion-focused benefit bullets */
  points: string[]
}

export const ABOUT_VALUES: ValueProp[] = [
  {
    icon: GraduationCap,
    tag: 'Learning',
    title: 'Learn by Building',
    points: [
      'Build production-ready projects, not tutorials.',
      'Get hands-on guidance from experienced mentors.',
      'Improve through real code reviews and feedback.',
    ],
  },
  {
    icon: Users,
    tag: 'Networking',
    title: 'Meet Exceptional Builders',
    points: [
      'Collaborate with ambitious students and innovators.',
      'Connect with mentors and industry professionals.',
      'Build relationships that extend beyond the event.',
    ],
  },
  {
    icon: Lightbulb,
    tag: 'Innovation',
    title: 'Turn Ideas Into Reality',
    points: [
      'Solve meaningful, real-world challenges.',
      'Prototype, test, and iterate quickly.',
      'Transform concepts into working products.',
    ],
  },
  {
    icon: TrendingUp,
    tag: 'Career Growth',
    title: 'Stand Out',
    points: [
      'Build a portfolio that gets noticed.',
      'Showcase your skills to recruiters and mentors.',
      'Open doors to internships, jobs, and future collaborations.',
    ],
  },
]

export const ABOUT_COPY = {
  eyebrow: 'About the Hackathon',
  heading: "What is TakeOver'26?",
  body: "TakeOver'26 is NIAT's flagship hackathon with one clear mission — accelerate business growth through AI and innovation. Over an intense 24-hour build sprint, backed by daily expert mentorship, teams turn bold ideas into intelligent products that help real businesses digitize, scale and grow — all while competing for a prize pool worth ₹2.5 Lakhs.",
  whyHeading: 'Why Participate?',
  whySubtitle:
    'Build real products. Learn from experienced mentors. Connect with ambitious builders. Leave with skills, confidence, and opportunities that last beyond the event.',
} as const
