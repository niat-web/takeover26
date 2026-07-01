import { motion } from 'framer-motion'
import { Brain, Cpu, Code, Cloud, Boxes, ChartColumn, Bot, Sparkles } from 'lucide-react'
import { cn } from '@/utils/cn'
import { FloatingBadges } from './FloatingBadges'

const ORBIT_ICONS = [
  { Icon: Cpu, angle: 0, accent: 'ember' },
  { Icon: Cloud, angle: 60, accent: 'punch' },
  { Icon: Boxes, angle: 120, accent: 'ember' },
  { Icon: ChartColumn, angle: 180, accent: 'punch' },
  { Icon: Bot, angle: 240, accent: 'ember' },
  { Icon: Code, angle: 300, accent: 'punch' },
] as const

/**
 * Futuristic holographic illustration: a glowing AI core, an inner ring of
 * orbiting tech icons, and an outer ring of feature/advantage badges that
 * come and go around the circle (see FloatingBadges).
 */
export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <FloatingBadges />

      {/* Ambient glow */}
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-ember-500/30 to-punch-500/30 blur-[90px]" />

      {/* Orbit rings */}
      {[88, 66, 44].map((size, i) => (
        <motion.div
          key={size}
          className="absolute left-1/2 top-1/2 rounded-full border border-ember-400/15"
          style={{
            width: `${size}%`,
            height: `${size}%`,
            x: '-50%',
            y: '-50%',
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 38 + i * 12, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* Orbiting icons on the inner ring (badges orbit further out) */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
      >
        {ORBIT_ICONS.map(({ Icon, angle, accent }) => (
          <div
            key={angle}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${angle}deg) translateX(8.75rem) rotate(-${angle}deg)`,
            }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
              className={cn(
                'flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border backdrop-blur-md shadow-lg',
                accent === 'ember'
                  ? 'border-ember-400/30 bg-ember-500/10 text-ember-300'
                  : 'border-punch-400/30 bg-punch-500/10 text-punch-300'
              )}
            >
              <Icon className="h-5 w-5" />
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Central AI core */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] glass-strong shadow-ember"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-ember-500/20 to-punch-500/20" />
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative text-ember-300"
        >
          <Brain className="h-14 w-14" strokeWidth={1.4} />
        </motion.div>
        <Sparkles className="absolute right-3 top-3 h-4 w-4 text-punch-300" />
      </motion.div>
    </div>
  )
}
