import { motion } from 'framer-motion'
import { AnimatedGrid } from '@/components/common'

/**
 * Fixed, full-viewport ambient background shared by the whole site:
 * aurora blobs, moving gradient mesh, subtle grid, light rays and noise.
 * Sits behind all content (-z-10) and never intercepts pointer events.
 */
export function GlobalBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-night-800 noise-overlay"
    >
      {/* Base vertical depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-night-900 via-night-800 to-ink-950" />

      {/* Aurora blobs */}
      <motion.div
        className="absolute -left-32 -top-32 h-[42rem] w-[42rem] rounded-full bg-ember-600/20 blur-[150px] animate-aurora"
        style={{ animationDelay: '0s' }}
      />
      <motion.div
        className="absolute -right-40 top-1/4 h-[38rem] w-[38rem] rounded-full bg-punch-600/20 blur-[150px] animate-aurora"
        style={{ animationDelay: '-7s' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full bg-ember-500/15 blur-[160px] animate-aurora"
        style={{ animationDelay: '-13s' }}
      />

      {/* Animated subtle grid */}
      <AnimatedGrid />

      {/* Light rays from the top */}
      <div className="absolute inset-x-0 top-0 flex justify-center gap-24 opacity-60">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-[60vh] w-px bg-gradient-to-b from-ember-400/40 to-transparent animate-ray"
            style={
              {
                '--ray-rot': `${(i - 1) * 8}deg`,
                animationDelay: `${i * 1.5}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Top + bottom vignette for depth */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950/80 to-transparent" />
    </div>
  )
}
