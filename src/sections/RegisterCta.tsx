import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container, Button, FloatingParticles, TextReveal } from '@/components/common'
import { SECTION_IDS, SITE } from '@/constants/site'
import { fadeUp, staggerContainer, VIEWPORT } from '@/constants/motion'

export function RegisterCta() {
  return (
    <section id={SECTION_IDS.register} className="relative py-20 sm:py-28 lg:py-32">
      <Container>
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative overflow-hidden rounded-3xl border border-ember-400/20 px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          {/* Animated gradient backdrop */}
          <div className="absolute inset-0 -z-10 bg-gradient-animated opacity-90" />
          <div className="absolute inset-0 -z-10 bg-night-900/55" />
          <div className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000,transparent)]" />
          <FloatingParticles count={20} className="-z-10" />

          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm"
          >
            Registration is Live
          </motion.span>

          <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            <TextReveal text="Ready to Build Something Incredible?" />
          </h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-pretty text-base text-white/80 sm:text-lg"
          >
            Assemble your team, pick your weapon, and take over. {SITE.prizePool} in prizes and a
            stage to prove what you can build are waiting.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <Button
              variant="ghost"
              href={SITE.registerUrl}
              external
              ariaLabel="Register for TakeOver'26 (opens registration form in a new tab)"
              className="group gap-3 rounded-full bg-white px-9 py-4 text-base font-bold uppercase tracking-wide text-night-900 shadow-[0_22px_60px_-14px_rgba(0,0,0,0.75)] ring-2 ring-white/60 hover:text-night-900 sm:px-11 sm:py-5 sm:text-lg"
              icon={
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              }
            >
              Register Now
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
