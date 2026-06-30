export type PrizeTier = 'gold' | 'silver' | 'bronze'

export interface Prize {
  rank: string
  place: string
  amount: string
  tier: PrizeTier
  /** centerpiece card rendered larger on desktop */
  featured?: boolean
  perks: string[]
}

export const PRIZES: Prize[] = [
  {
    rank: '02',
    place: '2nd Prize',
    amount: '₹75,000',
    tier: 'silver',
    perks: ['Silver Trophy', 'Certificates', 'Premium Swag'],
  },
  {
    rank: '01',
    place: '1st Prize',
    amount: '₹1,00,000',
    tier: 'gold',
    featured: true,
    perks: ['Champion Trophy', 'Winner Certificates', 'Exclusive Goodies', 'Recruiter Spotlight'],
  },
  {
    rank: '03',
    place: '3rd Prize',
    amount: '₹50,000',
    tier: 'bronze',
    perks: ['Bronze Trophy', 'Certificates', 'Swag Kit'],
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
