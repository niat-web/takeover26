import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface FloatingParticlesProps {
  count?: number
  className?: string
}

interface Particle {
  id: number
  left: number
  top: number
  size: number
  duration: number
  delay: number
  ember: boolean
}

/**
 * Deterministic floating particle field (seeded, no Math.random in render
 * path beyond mount memo) — drifts gently for an ambient, alive feel.
 */
export function FloatingParticles({ count = 26, className }: FloatingParticlesProps) {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, i) => {
        // simple deterministic pseudo-spread based on index
        const seed = (i * 9301 + 49297) % 233280
        const rnd = seed / 233280
        const rnd2 = ((i * 4513 + 1031) % 977) / 977
        return {
          id: i,
          left: rnd * 100,
          top: rnd2 * 100,
          size: 2 + (i % 4),
          duration: 8 + (i % 7),
          delay: (i % 10) * 0.6,
          ember: i % 3 !== 0,
        }
      }),
    [count]
  )

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className={cn(
            'absolute rounded-full',
            p.ember ? 'bg-ember-400/60' : 'bg-punch-400/60'
          )}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
