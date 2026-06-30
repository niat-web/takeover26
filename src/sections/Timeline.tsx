import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { SectionContainer } from '@/components/layout'
import { SectionHeading, TimelineItem, GlowBackground } from '@/components/common'
import { TIMELINE_EVENTS } from '@/data/timeline'
import { SECTION_IDS } from '@/constants/site'

export function Timeline() {
  const railRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 70%', 'end 60%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })

  return (
    <SectionContainer id={SECTION_IDS.timeline} bleed>
      <GlowBackground variant="mixed" className="left-1/2 top-1/3 -translate-x-1/2" />

      <SectionHeading
        eyebrow="The Journey"
        title="Event Timeline"
        subtitle="Every milestone from registration to the offline grand finale at NIAT KKH, Hyderabad."
      />

      <div ref={railRef} className="relative mt-16 flex flex-col gap-10 lg:gap-14">
        {/* Vertical rail — left on mobile, center on desktop */}
        <div className="absolute bottom-0 left-6 top-0 w-px -translate-x-1/2 bg-white/10 lg:left-1/2">
          <motion.div
            style={{ scaleY: progress }}
            className="absolute inset-0 origin-top bg-gradient-to-b from-ember-400 via-punch-500 to-ember-400"
          />
        </div>

        {TIMELINE_EVENTS.map((event, index) => (
          <TimelineItem key={event.title} event={event} index={index} />
        ))}
      </div>
    </SectionContainer>
  )
}
