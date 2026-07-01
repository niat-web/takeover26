import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/layout'
import { SectionHeading, GlowBackground } from '@/components/common'
import { ThemeCard } from '@/components/themes/ThemeCard'
import { THEMES, THEMES_COPY } from '@/data/themes'
import { SECTION_IDS } from '@/constants/site'
import { staggerContainer, VIEWPORT } from '@/constants/motion'

export function Themes() {
  return (
    <SectionContainer id={SECTION_IDS.themes} bleed>
      <GlowBackground variant="punch" className="right-0 top-10" />

      <SectionHeading
        eyebrow={THEMES_COPY.eyebrow}
        title={THEMES_COPY.heading}
        subtitle={THEMES_COPY.body}
      />

      {/* Theme cards — flex-wrap keeps the trailing row centered */}
      <motion.ul
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto mt-14 flex max-w-6xl flex-wrap justify-center gap-5"
      >
        {THEMES.map((theme) => (
          <ThemeCard key={theme.no} theme={theme} />
        ))}
      </motion.ul>
    </SectionContainer>
  )
}
