import {
  motion,
  useTime,
  useTransform,
  useMotionTemplate,
  type MotionValue,
} from 'framer-motion'
import { Trophy } from 'lucide-react'
import { cn } from '@/utils/cn'
import { usePrefersReducedMotion } from '@/hooks'
import { HERO_BADGES, type HeroBadge } from '@/data/hero'

/* Orbit geometry (percent of the illustration stage) + timing. */
const RADIUS_X = 39
const RADIUS_Y = 37
const PERIOD_MS = 30_000
const TWO_PI = Math.PI * 2

interface OrbitingBadgeProps {
  badge: HeroBadge
  index: number
  count: number
  time: MotionValue<number>
  reduced: boolean
}

/**
 * A single badge travelling a pseudo-3D orbit: it grows and brightens as it
 * swings to the front (bottom) and shrinks/fades as it recedes to the back
 * (top) — giving the "come and go" moving-circle feel.
 */
function OrbitingBadge({ badge, index, count, time, reduced }: OrbitingBadgeProps) {
  const phase = (index / count) * TWO_PI

  const angle = useTransform(time, (t) =>
    reduced ? phase : phase + (t / PERIOD_MS) * TWO_PI
  )
  const leftPct = useTransform(angle, (a) => 50 + Math.sin(a) * RADIUS_X)
  const topPct = useTransform(angle, (a) => 50 - Math.cos(a) * RADIUS_Y)
  /** 0 = back (top), 1 = front (bottom) */
  const depth = useTransform(angle, (a) => (1 - Math.cos(a)) / 2)

  const baseScale = badge.highlight ? 0.98 : 0.72
  const scale = useTransform(depth, (d) => baseScale + d * 0.34)
  const opacity = useTransform(depth, (d) =>
    badge.highlight ? 0.78 + d * 0.22 : 0.4 + d * 0.6
  )
  const zIndex = useTransform(depth, (d) => 10 + Math.round(d * 20))

  const left = useMotionTemplate`${leftPct}%`
  const top = useMotionTemplate`${topPct}%`

  return (
    <motion.div
      className="absolute"
      style={{ left, top, x: '-50%', y: '-50%', scale, opacity, zIndex }}
    >
      {badge.highlight ? (
        <div className="relative">
          {/* pulsing halo */}
          <motion.span
            aria-hidden
            className="absolute -inset-3 rounded-full bg-ember-500/40 blur-md"
            animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0.15, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-animated px-4 py-2 text-sm font-bold text-night-900 shadow-ember ring-1 ring-ember-200/50">
            <Trophy className="h-4 w-4" />
            {badge.label}
          </span>
        </div>
      ) : (
        <span
          className={cn(
            'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md shadow-lg',
            badge.accent === 'ember'
              ? 'border-ember-400/40 bg-ember-500/15 text-ember-200'
              : 'border-punch-400/40 bg-punch-500/15 text-punch-200'
          )}
        >
          <span
            className={cn(
              'h-1.5 w-1.5 rounded-full',
              badge.accent === 'ember' ? 'bg-ember-400' : 'bg-punch-400'
            )}
          />
          {badge.label}
        </span>
      )}
    </motion.div>
  )
}

/** Feature/advantage badges orbiting the hero's AI core. */
export function FloatingBadges() {
  const reduced = usePrefersReducedMotion()
  const time = useTime()

  return (
    <div className="pointer-events-none absolute inset-0 z-20" aria-hidden>
      {HERO_BADGES.map((badge, i) => (
        <OrbitingBadge
          key={badge.label}
          badge={badge}
          index={i}
          count={HERO_BADGES.length}
          time={time}
          reduced={reduced}
        />
      ))}
    </div>
  )
}
