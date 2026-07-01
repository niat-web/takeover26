import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  ShoppingBag,
  Boxes,
  Wallet,
  CalendarClock,
  ChartColumn,
  Globe,
} from 'lucide-react'

export interface Theme {
  /** display number 01–07 */
  no: string
  icon: LucideIcon
  title: string
  description: string
}

export const THEMES: Theme[] = [
  {
    no: '01',
    icon: Bot,
    title: 'AI Automation & Intelligent Agents',
    description:
      'Autonomous agents and smart workflows that take the busywork off real teams.',
  },
  {
    no: '02',
    icon: ShoppingBag,
    title: 'Commerce & Customer Growth',
    description:
      'Storefronts, marketing and retention engines that turn visitors into loyal customers.',
  },
  {
    no: '03',
    icon: Boxes,
    title: 'Operations, Inventory & ERP',
    description:
      'Connect supply, stock and back-office operations into one streamlined system.',
  },
  {
    no: '04',
    icon: Wallet,
    title: 'Finance & Business Management',
    description:
      'Invoicing, expenses and cashflow tools that keep a business financially sharp.',
  },
  {
    no: '05',
    icon: CalendarClock,
    title: 'Booking, Scheduling & Workforce',
    description:
      'Appointments, rosters and workforce coordination — without the chaos.',
  },
  {
    no: '06',
    icon: ChartColumn,
    title: 'Analytics & Decision Intelligence',
    description:
      'Turn raw data into dashboards and insights leaders can act on instantly.',
  },
  {
    no: '07',
    icon: Globe,
    title: 'Digital Presence & Customer Experience',
    description:
      'Websites, apps and experiences that make brands unmissable online.',
  },
]

export const THEMES_COPY = {
  eyebrow: 'Tracks & Challenges',
  heading: 'Hackathon Themes',
  track: 'Business Digitization',
  body: 'Build for the way modern businesses actually run. Pick a theme, ship a working product, and take over.',
} as const
