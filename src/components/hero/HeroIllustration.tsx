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

const CODE_LINES = [
  { w: 'w-2/3', accent: true },
  { w: 'w-1/2', accent: false },
  { w: 'w-5/6', accent: false },
  { w: 'w-3/5', accent: true },
]

/**
 * Futuristic holographic illustration: a glowing AI core orbited by tech
 * icons, fronted by a glass "build" dashboard and surrounded by badges.
 * Built entirely with motion + SVG for crispness at any resolution.
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

      {/* Orbiting icons on the outer ring */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
      >
        {ORBIT_ICONS.map(({ Icon, angle, accent }) => (
          <div
            key={angle}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${angle}deg) translateX(13rem) rotate(-${angle}deg)`,
            }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
              className={cn(
                'flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border backdrop-blur-md shadow-lg',
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

      {/* Glass "build" dashboard card, front-left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-[8%] left-[2%] w-44"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-2xl glass-strong p-4 shadow-glass"
        >
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-punch-400" />
            <span className="h-2 w-2 rounded-full bg-ember-400" />
            <span className="h-2 w-2 rounded-full bg-ember-200/60" />
          </div>
          <div className="flex flex-col gap-2">
            {CODE_LINES.map((line, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className={cn(
                    'h-1.5 w-1.5 shrink-0 rounded-full',
                    line.accent ? 'bg-ember-400' : 'bg-white/20'
                  )}
                />
                <span
                  className={cn(
                    'h-1.5 rounded-full',
                    line.w,
                    line.accent ? 'bg-ember-400/50' : 'bg-white/15'
                  )}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Holographic stat card, front-right */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute right-[2%] top-[14%] w-36"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-2xl glass-strong p-4 shadow-glass"
        >
          <div className="flex items-center justify-between">
            <ChartColumn className="h-4 w-4 text-ember-300" />
            <span className="text-[10px] font-semibold text-punch-300">+128%</span>
          </div>
          <div className="mt-3 flex h-12 items-end gap-1.5">
            {[40, 70, 50, 90, 65, 100].map((h, i) => (
              <motion.span
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-ember-500/40 to-ember-400"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 1 + i * 0.08, ease: 'easeOut' }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
