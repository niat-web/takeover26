export type PrizeTier = 'gold' | 'silver' | 'bronze'

export interface Prize {
  rank: string
  /** placement label, e.g. "Winner (1st)" */
  place: string
  amount: string
  tier: PrizeTier
  /** centerpiece card rendered larger on desktop */
  featured?: boolean
  perks: string[]
  /**
   * Optional trophy image path. When omitted, a placeholder trophy icon is
   * shown in the reserved slot — drop an image here to swap it in cleanly.
   */
  image?: string
}

export const PRIZES: Prize[] = [
  {
    rank: '02',
    place: 'First Runner-Up (2nd)',
    amount: '₹75K',
    tier: 'silver',
    perks: ['Certificates', 'Premium Swag'],
  },
  {
    rank: '01',
    place: 'Winner (1st)',
    amount: '₹1 Lakh',
    tier: 'gold',
    featured: true,
    perks: ['Winner Certificates', 'Exclusive Goodies'],
  },
  {
    rank: '03',
    place: 'Second Runner-Up (3rd)',
    amount: '₹50K',
    tier: 'bronze',
    perks: ['Certificates', 'Swag Kit'],
  },
]

export interface AdditionalAward {
  title: string
  description: string
}

export const ADDITIONAL_AWARDS: AdditionalAward[] = [
  { title: '₹25,000', description: 'Special category & track awards' },
  { title: 'Goodies', description: 'Exclusive merch for standout teams' },
  { title: 'Certificates', description: 'Verified participation for everyone' },
  { title: 'Swag', description: 'Limited-edition TakeOver kits' },
]
