import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface ChipProps {
  children: ReactNode
  className?: string
}

/** Compact tag for perks / keywords. */
export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-ember-50/80',
        className
      )}
    >
      {children}
    </span>
  )
}
