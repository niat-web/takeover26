import { cn } from '@/utils/cn'

interface GlowBackgroundProps {
  className?: string
  /** color of the glow blob */
  variant?: 'ember' | 'punch' | 'mixed'
}

/** A soft, animated radial glow blob for section ambiance. */
export function GlowBackground({ className, variant = 'mixed' }: GlowBackgroundProps) {
  const color =
    variant === 'ember'
      ? 'bg-ember-500/25'
      : variant === 'punch'
        ? 'bg-punch-500/25'
        : 'bg-gradient-to-br from-ember-500/25 to-punch-500/25'

  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute -z-10 h-[32rem] w-[32rem] rounded-full blur-[140px] animate-pulse-glow',
        color,
        className
      )}
    />
  )
}
