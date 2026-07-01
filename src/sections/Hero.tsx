import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown, Trophy } from 'lucide-react'
import { Container, PrimaryButton, SecondaryButton, TextReveal, Badge } from '@/components/common'
import { HeroIllustration } from '@/components/hero/HeroIllustration'
import { HERO_PRIZE, HERO_FACTS } from '@/data/hero'
import { SECTION_IDS, SITE } from '@/constants/site'
import { scrollToSection } from '@/utils/scroll'
import { cn } from '@/utils/cn'
import { fadeUp, staggerContainer } from '@/constants/motion'

export function Hero() {
  return (
    <section
      id={SECTION_IDS.home}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-10 pt-24 sm:pt-28"
    >
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
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

            <h1 className="mt-6 flex flex-wrap items-baseline justify-center gap-x-[0.16em] font-display text-[clamp(3rem,10vw,5rem)] font-black uppercase leading-[0.95] tracking-[-0.02em] lg:flex-nowrap lg:justify-start lg:text-[6.3vw] xl:text-[5rem]">
              <TextReveal text="TakeOver" immediate className="text-gradient-soft" />
              <span className="text-gradient-brand">'26</span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-balance text-lg font-medium text-ember-50/80 sm:text-xl lg:text-2xl"
            >
              {SITE.tagline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-ember-50/55 sm:text-base"
            >
              Join {SITE.organizer}'s flagship hackathon to build intelligent products, solve
              industry-scale challenges, and compete for{' '}
              <span className="font-semibold text-ember-300">{SITE.prizePool}</span> in prizes.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
            >
              <PrimaryButton
                onClick={() => scrollToSection(SECTION_IDS.themes)}
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Explore Themes
              </PrimaryButton>
              <SecondaryButton
                href={SITE.registerUrl}
                external
                ariaLabel="Register for TakeOver'26 (opens registration form in a new tab)"
              >
                Register Now
              </SecondaryButton>
            </motion.div>

            {/* Flagship cash-prize highlight */}
            <motion.div
              variants={fadeUp}
              className="mt-7 flex w-full max-w-xl items-center gap-4 rounded-2xl bg-gradient-animated px-5 py-4 text-night-900 shadow-ember ring-1 ring-ember-200/40 sm:px-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-night-900/15">
                <Trophy className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <div className="font-display text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
                  {HERO_PRIZE.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-night-900/75 sm:text-base">
                  {HERO_PRIZE.label}
                </div>
              </div>
            </motion.div>

            {/* Supporting facts */}
            <motion.ul variants={fadeUp} className="mt-3 flex w-full max-w-xl flex-wrap gap-2.5">
              {HERO_FACTS.map((fact) => (
                <li
                  key={fact.label}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full border px-4 py-2',
                    fact.highlight
                      ? 'border-ember-400/50 bg-ember-500/15'
                      : 'border-white/10 bg-white/5'
                  )}
                >
                  <span
                    className={cn(
                      'font-display text-base font-bold uppercase leading-none tracking-tight',
                      fact.highlight ? 'text-ember-200' : 'text-ember-50'
                    )}
                  >
                    {fact.value}
                  </span>
                  <span className="text-xs font-medium text-ember-50/60">{fact.label}</span>
                </li>
              ))}
            </motion.ul>
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
