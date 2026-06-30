import { cn } from '@/utils/cn'

interface AnimatedGridProps {
  className?: string
  /** fade the grid out toward the edges with a radial mask */
  masked?: boolean
}

/** Subtle animated perspective grid used in backgrounds. */
export function AnimatedGrid({ className, masked = true }: AnimatedGridProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 bg-grid animate-grid-pan',
        masked &&
          '[mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_30%,transparent_75%)]',
        className
      )}
    />
  )
}
