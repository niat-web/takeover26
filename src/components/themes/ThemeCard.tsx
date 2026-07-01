import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GlassCard } from '@/components/common'
import { fadeUp } from '@/constants/motion'
import type { Theme } from '@/data/themes'

interface ThemeCardProps {
  theme: Theme
}

/** A single hackathon theme — gold icon tile, number, hover glow. */
export function ThemeCard({ theme }: ThemeCardProps) {
  const { icon: Icon, no, title, description } = theme
  return (
    <motion.li
      variants={fadeUp}
      className="basis-full sm:basis-[calc(50%-0.625rem)] lg:basis-[calc(33.333%-0.834rem)]"
    >
      <GlassCard glow className="group relative flex h-full flex-col gap-4 p-7">
        {/* watermark number */}
        <span className="pointer-events-none absolute right-5 top-3 font-display text-5xl font-bold text-ember-500/10 transition-colors duration-300 group-hover:text-ember-500/20">
          {no}
        </span>

        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-ember-400/25 bg-gradient-to-br from-ember-500/15 to-punch-500/15 text-ember-300 shadow-ember transition-transform duration-300 group-hover:-translate-y-0.5">
          <Icon className="h-7 w-7" strokeWidth={1.6} />
        </span>

        <h3 className="font-display text-lg font-semibold leading-tight text-ember-50">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-ember-50/60">{description}</p>

        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold uppercase tracking-[0.15em] text-ember-400/0 transition-colors duration-300 group-hover:text-ember-400">
          Explore <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </GlassCard>
    </motion.li>
  )
}
