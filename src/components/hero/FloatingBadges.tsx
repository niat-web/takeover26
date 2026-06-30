import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { HERO_BADGES } from '@/data/hero'

/** Holographic badges that float around the hero illustration. */
export function FloatingBadges() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {HERO_BADGES.map((badge) => (
        <motion.div
          key={badge.label}
          className="absolute"
          style={{ top: badge.top, left: badge.left }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: badge.delay + 0.8 },
            scale: { duration: 0.6, delay: badge.delay + 0.8 },
            y: { duration: 5 + badge.delay, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md shadow-lg whitespace-nowrap',
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
        </motion.div>
      ))}
    </div>
  )
}
