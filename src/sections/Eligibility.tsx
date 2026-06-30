import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionContainer } from '@/components/layout'
import { SectionHeading, GlassCard, GlowBackground } from '@/components/common'
import { ELIGIBILITY_RULES, ELIGIBILITY_COPY } from '@/data/eligibility'
import { SECTION_IDS } from '@/constants/site'
import { staggerContainer, fadeUp, VIEWPORT } from '@/constants/motion'

export function Eligibility() {
  return (
    <SectionContainer id={SECTION_IDS.eligibility} bleed>
      <GlowBackground variant="ember" className="-left-32 bottom-0" />

      <SectionHeading
        eyebrow={ELIGIBILITY_COPY.eyebrow}
        title={ELIGIBILITY_COPY.heading}
        subtitle={ELIGIBILITY_COPY.body}
      />

      <motion.ul
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2"
      >
        {ELIGIBILITY_RULES.map((rule) => (
          <motion.li key={rule.title} variants={fadeUp} className="h-full">
            <GlassCard glow className="flex h-full items-start gap-4 p-6">
              <motion.span
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={VIEWPORT}
                transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-animated text-night-900 shadow-ember"
              >
                <Check className="h-5 w-5" strokeWidth={3} />
              </motion.span>
              <div>
                <h3 className="font-display text-base font-semibold text-ember-50 sm:text-lg">
                  {rule.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ember-50/60">{rule.description}</p>
              </div>
            </GlassCard>
          </motion.li>
        ))}
      </motion.ul>
    </SectionContainer>
  )
}
