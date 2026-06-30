export interface TimelineEvent {
  /** emoji marker for the milestone */
  emoji: string
  title: string
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
    date: 'Coming Soon',
  },
  {
    emoji: '👨‍🏫',
    title: 'Daily Technical Mentorship',
    date: 'Every Day',
    time: '7:00 PM – 8:00 PM IST',
  },
  {
    emoji: '🚀',
    title: 'Project Submission Deadline',
    date: '6 July 2026',
    time: '11:59 PM IST',
  },
  {
    emoji: '🏢',
    title: 'Offline Hackathon · Day 1',
    date: '17 July 2026',
    location: 'NIAT KKH, Hyderabad',
    highlight: true,
  },
  {
    emoji: '🏆',
    title: 'Offline Hackathon · Day 2',
    date: '18 July 2026',
    location: 'NIAT KKH, Hyderabad',
    highlight: true,
  },
]
