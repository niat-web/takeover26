import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'
import { SectionContainer } from '@/components/layout'
import { SectionHeading, GlowBackground } from '@/components/common'
import { ThemeCard } from '@/components/themes/ThemeCard'
import { THEMES, THEMES_COPY } from '@/data/themes'
import { SECTION_IDS } from '@/constants/site'
import { staggerContainer, fadeUp, VIEWPORT } from '@/constants/motion'

export function Themes() {
  return (
    <SectionContainer id={SECTION_IDS.themes} bleed>
      <GlowBackground variant="punch" className="right-0 top-10" />

      <SectionHeading eyebrow={THEMES_COPY.eyebrow} title={THEMES_COPY.heading} subtitle={THEMES_COPY.body} />

      {/* Business Digitization track banner */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto mt-10 w-fit"
      >
        <div className="border-animated relative overflow-hidden rounded-full">
          <div className="flex items-center gap-3 rounded-full bg-night-800/80 px-6 py-3 backdrop-blur-md">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-animated text-night-900">
              <Rocket className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-50/50">
              Track
            </span>
            <span className="font-display text-base font-bold uppercase tracking-wide text-gradient-brand sm:text-lg">
              {THEMES_COPY.track}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Theme cards — flex-wrap keeps the trailing card centered */}
      <motion.ul
        variants={staggerContainer(0.09)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-center gap-5"
      >
        {THEMES.map((theme) => (
          <ThemeCard key={theme.no} theme={theme} />
        ))}
      </motion.ul>
    </SectionContainer>
  )
}
