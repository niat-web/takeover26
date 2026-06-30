import { motion } from 'framer-motion'
import { Lock, Sparkles } from 'lucide-react'
import { SectionContainer } from '@/components/layout'
import { SectionHeading, GlassCard, GlowBackground } from '@/components/common'
import { THEME_PLACEHOLDERS, THEMES_COPY } from '@/data/themes'
import { SECTION_IDS } from '@/constants/site'
import { staggerContainer, fadeUp, VIEWPORT } from '@/constants/motion'

export function Themes() {
  return (
    <SectionContainer id={SECTION_IDS.themes} bleed>
      <GlowBackground variant="punch" className="right-0 top-10" />

      <SectionHeading eyebrow={THEMES_COPY.eyebrow} title={THEMES_COPY.heading} />

      {/* Glowing "coming soon" banner */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto mt-10 max-w-xl"
      >
        <div className="border-animated relative overflow-hidden rounded-full">
          <div className="flex items-center justify-center gap-3 rounded-full bg-night-800/80 px-6 py-3.5 text-center backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-ember-300" />
            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-gradient-brand sm:text-base">
              {THEMES_COPY.status}
            </span>
            <Sparkles className="h-4 w-4 text-punch-300" />
          </div>
        </div>
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto mt-5 max-w-lg text-center text-sm leading-relaxed text-ember-50/55 sm:text-base"
      >
        {THEMES_COPY.body}
      </motion.p>

      {/* Blurred placeholder cards */}
      <motion.ul
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mt-14 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {THEME_PLACEHOLDERS.map((theme) => (
          <motion.li key={theme.id} variants={fadeUp} className="h-full">
            <GlassCard interactive className="relative flex h-56 flex-col justify-between p-6">
              {/* Obfuscated ghost label */}
              <span className="select-none text-xs font-semibold uppercase tracking-[0.2em] text-ember-50/30 blur-[6px]">
                {theme.ghost}
              </span>

              <div className="flex flex-1 items-center justify-center">
                <motion.span
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: theme.id * 0.3 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-ember-400/25 bg-night-800/70 text-ember-300 shadow-ember"
                >
                  <Lock className="h-7 w-7" strokeWidth={1.6} />
                </motion.span>
              </div>

              <div className="space-y-2">
                <span className="block h-2 w-2/3 rounded-full bg-white/10 blur-[2px]" />
                <span className="block h-2 w-1/2 rounded-full bg-white/10 blur-[2px]" />
              </div>

              {/* frosted veil */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-night-900/40 to-transparent" />
            </GlassCard>
          </motion.li>
        ))}
      </motion.ul>
    </SectionContainer>
  )
}
