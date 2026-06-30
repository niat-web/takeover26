import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'
import { Container, PrimaryButton, SecondaryButton, TextReveal, Badge } from '@/components/common'
import { HeroIllustration } from '@/components/hero/HeroIllustration'
import { HERO_STATS } from '@/data/hero'
import { SECTION_IDS, SITE } from '@/constants/site'
import { scrollToSection } from '@/utils/scroll'
import { fadeUp, staggerContainer } from '@/constants/motion'

export function Hero() {
  return (
    <section
      id={SECTION_IDS.home}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 sm:pt-32"
    >
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Left: copy */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.div variants={fadeUp}>
              <Badge>
                <Sparkles className="h-3.5 w-3.5" /> {SITE.organizer}'s Flagship Hackathon
              </Badge>
            </motion.div>

            <h1 className="mt-6 font-display text-[clamp(3rem,9vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight">
              <TextReveal text="TakeOver" immediate className="text-gradient-soft" />
              <span className="text-gradient-brand">'26</span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-balance text-lg font-medium text-ember-50/80 sm:text-xl lg:text-2xl"
            >
              {SITE.tagline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-ember-50/55 sm:text-base"
            >
              Join {SITE.organizer}'s flagship hackathon to build impactful products, collaborate
              with talented innovators, and compete for{' '}
              <span className="font-semibold text-ember-300">{SITE.prizePool}</span> in prizes.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
            >
              <PrimaryButton
                onClick={() => scrollToSection(SECTION_IDS.themes)}
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Explore Themes
              </PrimaryButton>
              <SecondaryButton onClick={() => scrollToSection(SECTION_IDS.register)}>
                Register Now
              </SecondaryButton>
            </motion.div>

            {/* Inline stats */}
            <motion.dl
              variants={fadeUp}
              className="mt-12 grid w-full max-w-md grid-cols-3 gap-4 sm:gap-6"
            >
              {HERO_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={i > 0 ? 'border-l border-white/10 pl-4 sm:pl-6' : ''}
                >
                  <dt className="font-display text-2xl font-bold text-gradient-brand sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs text-ember-50/55 sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Right: illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={() => scrollToSection(SECTION_IDS.about)}
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ember-50/50 transition-colors hover:text-ember-300 sm:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.button>
    </section>
  )
}
