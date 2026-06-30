export interface EligibilityRule {
  title: string
  description: string
}

export const ELIGIBILITY_RULES: EligibilityRule[] = [
  {
    title: 'Only NIAT Students',
    description: 'Open exclusively to currently enrolled NIAT students.',
  },
  {
    title: 'Teams of 3–5 Members',
    description: 'Form a balanced squad of three to five builders.',
  },
  {
    title: 'Working Prototype',
    description: 'Submit a functional prototype — not just slides.',
  },
  {
    title: 'Original Idea',
    description: 'Your concept and build must be genuinely your own.',
  },
  {
    title: 'AI Projects Encouraged',
    description: 'Bonus love for products that meaningfully use AI.',
  },
]

export const ELIGIBILITY_COPY = {
  eyebrow: 'Before You Register',
  heading: 'Who Can Participate',
  body: 'A quick checklist to make sure your team is ready to take over.',
} as const
