import { motion } from 'framer-motion'
import { SectionContainer } from '@/components/layout'
import {
  SectionHeading,
  GlassCard,
  GlowBackground,
  AnimatedCounter,
  Reveal,
} from '@/components/common'
import { ValueCard } from '@/components/about/ValueCard'
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
      <div className="relative mt-24">
        {/* subtle animated grid + radial glow behind the cards */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-12 bottom-0 -z-10">
          <div className="absolute inset-0 bg-grid animate-grid-pan opacity-[0.12] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_45%,#000_15%,transparent_75%)]" />
          <div className="absolute left-1/2 top-1/2 h-80 w-[46rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-500/10 blur-[130px]" />
        </div>

        <Reveal direction="up" className="mx-auto mb-12 max-w-3xl text-center">
          <h3 className="inline-block font-display text-3xl font-bold uppercase tracking-tight text-gradient-soft sm:text-4xl">
            {ABOUT_COPY.whyHeading}
          </h3>
          <p className="mt-4 text-pretty text-base leading-relaxed text-ember-50/60 sm:text-lg">
            {ABOUT_COPY.whySubtitle}
          </p>
        </Reveal>

        <motion.ul
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {ABOUT_VALUES.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </motion.ul>
      </div>
    </SectionContainer>
  )
}
