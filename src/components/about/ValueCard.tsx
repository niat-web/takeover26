import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeUp } from '@/constants/motion'
import type { ValueProp } from '@/data/about'

interface ValueCardProps {
  value: ValueProp
}

/**
 * Premium "Why Participate?" card — glassmorphism surface, gradient icon with
 * a soft pulsing glow, a glowing title divider, and a gold hover lift + glow.
 */
export function ValueCard({ value }: ValueCardProps) {
  const { icon: Icon, tag, title, points } = value

  return (
    <motion.li variants={fadeUp} className="h-full">
      <div className="group relative flex h-full flex-col rounded-[26px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-ember-400/40 hover:bg-white/[0.08] hover:shadow-[0_0_48px_-8px_rgba(224,170,31,0.45)] sm:p-8">
        {/* Gradient icon with soft glow */}
        <div className="relative mb-6 w-fit">
          <span
            aria-hidden
            className="absolute -inset-2 rounded-full bg-ember-500/30 blur-lg animate-pulse-glow"
          />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-animated text-night-900 shadow-ember">
            <Icon className="h-7 w-7" strokeWidth={2} />
          </span>
        </div>

        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ember-300/80">
          {tag}
        </span>

        <h4 className="mt-2 font-display text-xl font-bold leading-tight text-ember-50 sm:text-2xl">
          {title}
        </h4>

        {/* Glowing divider */}
        <span
          aria-hidden
          className="mt-4 block h-0.5 w-10 rounded-full bg-gradient-to-r from-ember-400 to-punch-500 shadow-[0_0_10px_rgba(224,170,31,0.7)] transition-all duration-300 group-hover:w-16"
        />

        <ul className="mt-5 flex flex-col gap-3">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-ember-50/70"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" strokeWidth={2.5} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  )
}
