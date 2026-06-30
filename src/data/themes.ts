/**
 * Themes are intentionally hidden until reveal. We render premium
 * "coming soon" placeholder cards instead of real themes.
 */
export interface ThemePlaceholder {
  id: number
  /** obfuscated label shown behind the blur */
  ghost: string
}

export const THEME_PLACEHOLDERS: ThemePlaceholder[] = [
  { id: 1, ghost: 'Artificial Intelligence' },
  { id: 2, ghost: 'Developer Tooling' },
  { id: 3, ghost: 'FinTech & Commerce' },
  { id: 4, ghost: 'Health & Sustainability' },
]

export const THEMES_COPY = {
  eyebrow: 'Tracks & Challenges',
  heading: 'Hackathon Themes',
  status: 'Coming Soon',
  body: 'Themes will be revealed soon. Sharpen your tools — the challenge drops before the build begins.',
} as const
