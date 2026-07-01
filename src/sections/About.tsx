import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/layout'
import {
  SectionHeading,
  GlassCard,
  GlowBackground,
  AnimatedCounter,
  Reveal,
} from '@/components/common'
import { ABOUT_COPY, ABOUT_STATS, ABOUT_VALUES } from '@/data/about'
import { SECTION_IDS } from '@/constants/site'
import { staggerContainer, fadeUp, VIEWPORT } from '@/constants/motion'

export function About() {
  return (
    <SectionContainer id={SECTION_IDS.about} bleed>
      <GlowBackground variant="ember" className="-left-40 top-0" />

      <SectionHeading
        eyebrow={ABOUT_COPY.eyebrow}
        title={ABOUT_COPY.heading}
        subtitle={ABOUT_COPY.body}
      />

      {/* Stats */}
      <motion.dl
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5"
      >
        {ABOUT_STATS.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp}>
            <GlassCard glow className="flex flex-col items-center gap-2 p-6 text-center">
              <dt className="font-display text-3xl font-extrabold text-gradient-brand sm:text-4xl">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </dt>
              <dd className="text-sm text-ember-50/60">{stat.label}</dd>
            </GlassCard>
          </motion.div>
        ))}
      </motion.dl>

      {/* Why participate */}
      <div className="mt-20">
        <Reveal className="mb-10 text-center">
          <h3 className="font-display text-2xl font-bold text-ember-50 sm:text-3xl">
            Why Participate?
          </h3>
        </Reveal>

        <motion.ul
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {ABOUT_VALUES.map(({ icon: Icon, title, description }) => (
            <motion.li key={title} variants={fadeUp} className="h-full">
              <GlassCard glow className="flex h-full flex-col gap-4 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-ember-400/25 bg-ember-500/10 text-ember-300">
                  <Icon className="h-6 w-6" />
                </span>
                <h4 className="font-display text-lg font-semibold text-ember-50">{title}</h4>
                <p className="text-sm leading-relaxed text-ember-50/60">{description}</p>
              </GlassCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SectionContainer>
  )
}
