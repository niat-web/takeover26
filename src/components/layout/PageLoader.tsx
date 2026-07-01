import { useEffect, useState } from 'react'
import { animate, motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks'
import { SITE } from '@/constants/site'

interface PageLoaderProps {
  onComplete: () => void
  /** total run time of the fill in seconds */
  duration?: number
}

/* Hourglass geometry (SVG user units) — single source so sand & frame align. */
const TOP_Y = 22
const NECK_Y = 84
const BOTTOM_Y = 146
const LEFT_X = 28
const RIGHT_X = 92
const CENTER_X = 60
const HALF_W = CENTER_X - LEFT_X // 32
const TOP_H = NECK_Y - TOP_Y // 62
const BOTTOM_H = BOTTOM_Y - NECK_Y // 62

/** Remaining sand in the TOP bulb — a triangle shrinking toward the neck. */
function topSandPoints(p: number): string {
  const surfaceY = TOP_Y + p * TOP_H
  const t = (surfaceY - TOP_Y) / TOP_H
  const leftX = LEFT_X + HALF_W * t
  const rightX = RIGHT_X - HALF_W * t
  return `${leftX},${surfaceY} ${rightX},${surfaceY} ${CENTER_X},${NECK_Y}`
}

/** Accumulated sand in the BOTTOM bulb — a triangle filling from the base up. */
function bottomSandPoints(p: number): string {
  const level = BOTTOM_Y - p * BOTTOM_H
  const t = (level - NECK_Y) / BOTTOM_H
  const leftX = CENTER_X - HALF_W * t
  const rightX = CENTER_X + HALF_W * t
  return `${leftX},${level} ${rightX},${level} ${RIGHT_X},${BOTTOM_Y} ${LEFT_X},${BOTTOM_Y}`
}

/**
 * Full-screen intro loader: an hourglass whose sand drains from the upper
 * funnel to the lower one, synced to a 0–100% loading counter.
 */
export function PageLoader({ onComplete, duration = 2.4 }: PageLoaderProps) {
  const reduced = usePrefersReducedMotion()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (reduced) {
      setProgress(1)
      const t = setTimeout(onComplete, 300)
      return () => clearTimeout(t)
    }
    let done = false
    const finish = () => {
      if (done) return
      done = true
      onComplete()
    }
    const controls = animate(0, 1, {
      duration,
      ease: [0.45, 0, 0.2, 1],
      onUpdate: setProgress,
      onComplete: () => setTimeout(finish, 350),
    })
    // Safety net: if rAF is throttled (backgrounded tab), never trap the user
    // on the loader — force-reveal shortly after the intended duration.
    const fallback = setTimeout(() => {
      setProgress(1)
      finish()
    }, duration * 1000 + 1200)
    return () => {
      controls.stop()
      clearTimeout(fallback)
    }
  }, [onComplete, duration, reduced])

  const percent = Math.round(progress * 100)
  const streaming = progress > 0.02 && progress < 0.99

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 noise-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-ember-500/15 blur-[120px]" />

      <div className="relative flex flex-col items-center gap-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-sm font-semibold uppercase tracking-[0.5em] text-ember-200/80"
        >
          TakeOver<span className="text-gradient-brand">'26</span>
        </motion.span>

        <svg
          viewBox="0 0 120 170"
          className="h-44 w-44 drop-shadow-[0_10px_40px_rgba(224,170,31,0.35)]"
          role="img"
          aria-label={`Loading ${percent}%`}
        >
          <defs>
            <linearGradient id="loader-gold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f5df8f" />
              <stop offset="0.5" stopColor="#e0aa1f" />
              <stop offset="1" stopColor="#db8210" />
            </linearGradient>
            <linearGradient id="loader-sand" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f5df8f" />
              <stop offset="1" stopColor="#db8210" />
            </linearGradient>
            {/* Clip sand to the glass so it never spills past the frame */}
            <clipPath id="top-bulb">
              <polygon points={`${LEFT_X},${TOP_Y} ${RIGHT_X},${TOP_Y} ${CENTER_X},${NECK_Y}`} />
            </clipPath>
            <clipPath id="bottom-bulb">
              <polygon
                points={`${CENTER_X},${NECK_Y} ${RIGHT_X},${BOTTOM_Y} ${LEFT_X},${BOTTOM_Y}`}
              />
            </clipPath>
          </defs>

          {/* Glass bulbs (subtle fill) */}
          <polygon
            points={`${LEFT_X},${TOP_Y} ${RIGHT_X},${TOP_Y} ${CENTER_X},${NECK_Y}`}
            className="fill-ember-500/5"
          />
          <polygon
            points={`${CENTER_X},${NECK_Y} ${RIGHT_X},${BOTTOM_Y} ${LEFT_X},${BOTTOM_Y}`}
            className="fill-ember-500/5"
          />

          {/* Sand */}
          <polygon points={topSandPoints(progress)} fill="url(#loader-sand)" clipPath="url(#top-bulb)" />
          <polygon
            points={bottomSandPoints(progress)}
            fill="url(#loader-sand)"
            clipPath="url(#bottom-bulb)"
          />

          {/* Falling stream + grains */}
          {streaming && (
            <g clipPath="url(#bottom-bulb)">
              <motion.line
                x1={CENTER_X}
                y1={NECK_Y}
                x2={CENTER_X}
                y2={BOTTOM_Y - 6}
                stroke="url(#loader-sand)"
                strokeWidth={1.6}
                strokeLinecap="round"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              {[0, 1, 2].map((i) => (
                <motion.circle
                  key={i}
                  cx={CENTER_X}
                  r={1.4}
                  fill="#f5df8f"
                  initial={{ cy: NECK_Y }}
                  animate={{ cy: [NECK_Y, BOTTOM_Y - 10], opacity: [0, 1, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.3, ease: 'easeIn' }}
                />
              ))}
            </g>
          )}

          {/* Gold frame — outlines + end caps */}
          <g fill="none" stroke="url(#loader-gold)" strokeWidth={3} strokeLinejoin="round">
            <polygon points={`${LEFT_X},${TOP_Y} ${RIGHT_X},${TOP_Y} ${CENTER_X},${NECK_Y}`} />
            <polygon
              points={`${CENTER_X},${NECK_Y} ${RIGHT_X},${BOTTOM_Y} ${LEFT_X},${BOTTOM_Y}`}
            />
          </g>
          <g fill="url(#loader-gold)">
            <rect x={LEFT_X - 8} y={TOP_Y - 9} width={RIGHT_X - LEFT_X + 16} height={7} rx={3.5} />
            <rect x={LEFT_X - 8} y={BOTTOM_Y + 2} width={RIGHT_X - LEFT_X + 16} height={7} rx={3.5} />
          </g>
        </svg>

        {/* Percentage + progress bar */}
        <div className="flex flex-col items-center gap-3">
          <span className="font-display text-5xl font-bold tabular-nums text-gradient-soft">
            {percent}
            <span className="text-3xl text-ember-400">%</span>
          </span>
          <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-animated"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="font-display text-xs uppercase tracking-[0.35em] text-ember-50/40">
            Loading Experience
          </span>
        </div>
      </div>

      <span className="sr-only" aria-live="polite">
        Loading {SITE.name} — {percent} percent
      </span>
    </motion.div>
  )
}
