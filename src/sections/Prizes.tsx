import { motion } from 'framer-motion'
import { Gift } from 'lucide-react'
import { SectionContainer } from '@/components/layout'
import { SectionHeading, PrizeCard, GlassCard, GlowBackground } from '@/components/common'
import { PRIZES, ADDITIONAL_AWARDS } from '@/data/prizes'
import { SECTION_IDS, SITE } from '@/constants/site'
import { staggerContainer, fadeUp, VIEWPORT } from '@/constants/motion'

export function Prizes() {
  return (
    <SectionContainer id={SECTION_IDS.prizes} bleed>
      <GlowBackground variant="ember" className="left-1/2 top-0 -translate-x-1/2" />

      <SectionHeading
        eyebrow="Rewards"
        title="Prizes Worth ₹2.5 Lakhs"
        subtitle={`Build something incredible and walk away with a share of ${SITE.prizePool}, trophies, goodies and recognition.`}
      />

      {/* Podium */}
      <div className="mt-20 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PRIZES.map((prize, i) => (
          <PrizeCard key={prize.place} prize={prize} index={i} />
        ))}
      </div>

      {/* Additional awards */}
      <div className="mt-16">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-8 flex items-center justify-center gap-2.5 text-center font-display text-xl font-bold text-ember-50 sm:text-2xl"
        >
          <Gift className="h-5 w-5 text-ember-300" />
          Additional Awards
        </motion.h3>

        <motion.ul
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {ADDITIONAL_AWARDS.map((award) => (
            <motion.li key={award.title} variants={fadeUp} className="h-full">
              <GlassCard glow className="flex h-full flex-col items-center gap-2 p-6 text-center">
                <span className="font-display text-2xl font-extrabold text-gradient-brand">
                  {award.title}
                </span>
                <span className="text-xs leading-relaxed text-ember-50/55">
                  {award.description}
                </span>
              </GlassCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SectionContainer>
  )
}
