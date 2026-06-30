import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps {
  children: ReactNode
  className?: string
  /** show the pulsing status dot */
  dot?: boolean
}

/** Small glass pill used for eyebrows and status labels. */
export function Badge({ children, className, dot = true }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-ember-500/25 bg-ember-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ember-200 backdrop-blur-sm',
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-400 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-400" />
        </span>
      )}
      {children}
    </span>
  )
}
