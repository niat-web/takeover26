import type { ReactNode } from 'react'
import { motion, useMotionTemplate } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useMousePosition } from '@/hooks'

interface GlassCardProps {
  children: ReactNode
  className?: string
  /** lift the card on hover */
  interactive?: boolean
  /** render a cursor-following radial glow inside the card */
  glow?: boolean
  /** animated conic gradient border */
  animatedBorder?: boolean
}

/**
 * The core surface primitive: frosted glass + optional pointer glow,
 * hover-lift and animated border. Reused by nearly every section.
 */
export function GlassCard({
  children,
  className,
  interactive = true,
  glow = false,
  animatedBorder = false,
}: GlassCardProps) {
  const { ref, x, y } = useMousePosition()
  const background = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(245,152,20,0.14), transparent 70%)`

  return (
    <motion.div
      ref={ref}
      whileHover={interactive ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl glass shadow-glass',
        animatedBorder && 'border-animated',
        className
      )}
    >
      {glow && (
        <motion.div
          aria-hidden
          style={{ background }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}
