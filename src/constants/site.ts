/* ============================================================
   Global site configuration & navigation source of truth.
   ============================================================ */

export const SITE = {
  name: "TakeOver'26",
  organizer: 'NIAT',
  tagline: 'Accelerate Business Growth Through AI & Innovation',
  prizePool: '₹2.5 Lakhs',
  registerUrl: 'https://forms.ccbp.in/take_over_2026_registration_form',
  communityUrl: '#register',
  email: 'learning.outcome@nxtwave.co.in',
} as const

/** Section ids — single source used by nav, scroll-spy and section anchors. */
export const SECTION_IDS = {
  home: 'home',
  about: 'about',
  themes: 'themes',
  timeline: 'timeline',
  prizes: 'prizes',
  support: 'support',
  eligibility: 'eligibility',
  faq: 'faq',
  register: 'register',
} as const

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS]

export interface NavLink {
  label: string
  id: SectionId
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', id: SECTION_IDS.home },
  { label: 'About', id: SECTION_IDS.about },
  { label: 'Themes', id: SECTION_IDS.themes },
  { label: 'Timeline', id: SECTION_IDS.timeline },
  { label: 'Prizes', id: SECTION_IDS.prizes },
  { label: 'Support', id: SECTION_IDS.support },
  { label: 'Eligibility', id: SECTION_IDS.eligibility },
  { label: 'FAQ', id: SECTION_IDS.faq },
]

export interface SocialLink {
  label: string
  href: string
  /** lucide-react icon name resolved at the call site */
  icon: 'discord' | 'instagram' | 'linkedin' | 'mail'
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Discord', href: '#', icon: 'discord' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${SITE.email}`, icon: 'mail' },
]
