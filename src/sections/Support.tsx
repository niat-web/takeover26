import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { SectionContainer } from '@/components/layout'
import { SectionHeading, GlassCard, GlowBackground, Badge } from '@/components/common'
import { SUPPORT_FEATURES, SUPPORT_COPY } from '@/data/support'
import { SECTION_IDS } from '@/constants/site'
import { staggerContainer, fadeUp, VIEWPORT } from '@/constants/motion'

export function Support() {
  return (
    <SectionContainer id={SECTION_IDS.support} bleed>
      <GlowBackground variant="punch" className="-right-32 top-1/4" />

      <SectionHeading
        eyebrow={SUPPORT_COPY.eyebrow}
        title={SUPPORT_COPY.heading}
        subtitle="Senior engineers in your corner — every single day of the build."
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mt-8 flex justify-center"
      >
        <Badge className="border-punch-400/30 bg-punch-500/10 text-punch-200">
          <Clock className="h-3.5 w-3.5" />
          {SUPPORT_COPY.schedule}
        </Badge>
      </motion.div>

      <motion.ul
        variants={staggerContainer(0.09)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mt-14 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SUPPORT_FEATURES.map(({ icon: Icon, title, description }) => (
          <motion.li key={title} variants={fadeUp} className="h-full">
            <GlassCard glow className="flex h-full flex-col gap-4 p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-ember-400/25 bg-gradient-to-br from-ember-500/15 to-punch-500/15 text-ember-300">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg font-semibold text-ember-50">{title}</h3>
              <p className="text-sm leading-relaxed text-ember-50/60">{description}</p>
            </GlassCard>
          </motion.li>
        ))}
      </motion.ul>
    </SectionContainer>
  )
}
