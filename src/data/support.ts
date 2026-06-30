import type { LucideIcon } from 'lucide-react'
import {
  Layers,
  BrainCircuit,
  CircleCheckBig,
  PackageSearch,
  Code,
  Headset,
} from 'lucide-react'

export interface SupportFeature {
  icon: LucideIcon
  title: string
  description: string
}

export const SUPPORT_FEATURES: SupportFeature[] = [
  {
    icon: Layers,
    title: 'Architecture Help',
    description: 'Design scalable systems with guidance on structure, data flow and trade-offs.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Guidance',
    description: 'Integrate models the right way — prompting, pipelines and practical AI patterns.',
  },
  {
    icon: CircleCheckBig,
    title: 'Idea Validation',
    description: 'Pressure-test your concept early so you build something people genuinely need.',
  },
  {
    icon: PackageSearch,
    title: 'Product Reviews',
    description: 'Refine UX and scope with reviews that keep your product sharp and focused.',
  },
  {
    icon: Code,
    title: 'Code Reviews',
    description: 'Get feedback on quality, performance and best practices from senior engineers.',
  },
  {
    icon: Headset,
    title: 'Mentor Support',
    description: 'Live help when you are stuck — every single day of the build window.',
  },
]

export const SUPPORT_COPY = {
  eyebrow: 'We Build With You',
  heading: 'Technical Mentorship',
  schedule: 'Daily · 7:00 PM – 8:00 PM IST',
} as const
