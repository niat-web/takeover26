import type { LucideIcon } from 'lucide-react'
import {
  Rocket,
  Bot,
  ShoppingBag,
  Boxes,
  Wallet,
  CalendarClock,
  ChartColumn,
  Globe,
} from 'lucide-react'

export interface Theme {
  /** display number 01–08 */
  no: string
  icon: LucideIcon
  title: string
  description: string
}

/** The eight hackathon themes for TakeOver'26. */
export const THEMES: Theme[] = [
  {
    no: '01',
    icon: Rocket,
    title: 'Business Digitization',
    description:
      'Move SMEs off paper, chats, spreadsheets and disconnected tools into modern, integrated digital workflows.',
  },
  {
    no: '02',
    icon: Bot,
    title: 'AI Automation & Intelligent Agents',
    description:
      'Autonomous agents and smart workflows that take the busywork off real teams.',
  },
  {
    no: '03',
    icon: ShoppingBag,
    title: 'Commerce & Customer Growth',
    description:
      'Storefronts, marketing and retention engines that turn visitors into loyal customers.',
  },
  {
    no: '04',
    icon: Boxes,
    title: 'Operations, Inventory & ERP',
    description:
      'Connect supply, stock and back-office operations into one streamlined system.',
  },
  {
    no: '05',
    icon: Wallet,
    title: 'Finance & Business Management',
    description:
      'Invoicing, expenses and cashflow tools that keep a business financially sharp.',
  },
  {
    no: '06',
    icon: CalendarClock,
    title: 'Booking, Scheduling & Workforce',
    description:
      'Appointments, rosters and workforce coordination — without the chaos.',
  },
  {
    no: '07',
    icon: ChartColumn,
    title: 'Analytics & Decision Intelligence',
    description:
      'Turn raw data into dashboards and insights leaders can act on instantly.',
  },
  {
    no: '08',
    icon: Globe,
    title: 'Digital Presence & Customer Experience',
    description:
      'Websites, apps and experiences that make brands unmissable online.',
  },
]

export const THEMES_COPY = {
  eyebrow: 'The Challenge',
  heading: 'Hackathon Themes',
  body: 'Eight bold themes to build across — pick your challenge and ship a product that matters.',
} as const
