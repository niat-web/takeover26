export interface TimelineEvent {
  /** emoji marker for the milestone */
  emoji: string
  title: string
  /** optional supporting line (e.g. what happens at the event) */
  description?: string
  date?: string
  time?: string
  location?: string
  /** highlight the key offline / climax events */
  highlight?: boolean
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    emoji: '📢',
    title: 'Registration Opens',
    date: 'Now Live',
  },
  {
    emoji: '🗓',
    title: 'Registration Closes',
    date: '2 July 2026',
    time: '11:59 PM IST',
  },
  {
    emoji: '💡',
    title: 'Theme Reveal',
    date: 'Live Now',
  },
  {
    emoji: '👨‍🏫',
    title: 'Daily Technical Mentorship',
    date: 'Every Day',
    time: '7:00 PM – 8:00 PM IST',
  },
  {
    emoji: '🚀',
    title: 'Idea Submission Deadline',
    date: '6 July 2026',
    time: '11:59 PM IST',
  },
  {
    emoji: '🎉',
    title: 'Finalists Announced',
    date: '7 July 2026',
  },
  {
    emoji: '🔥',
    title: 'Grand Finale & Showdown',
    description: 'On-stage final round — build, pitch and battle it out.',
    date: '17 July 2026',
    location: 'NIAT KKH, Hyderabad',
    highlight: true,
  },
  {
    emoji: '🏆',
    title: 'Winners & Prize Ceremony',
    description: '1st, 2nd & 3rd prize winners announced.',
    date: '18 July 2026',
    location: 'NIAT KKH, Hyderabad',
    highlight: true,
  },
]
