import { SectionContainer } from '@/components/layout'
import { SectionHeading, Accordion, GlowBackground, Reveal } from '@/components/common'
import { FAQ_ITEMS } from '@/data/faq'
import { SECTION_IDS } from '@/constants/site'

export function Faq() {
  return (
    <SectionContainer id={SECTION_IDS.faq} bleed>
      <GlowBackground variant="punch" className="right-0 top-1/4" />

      <SectionHeading
        eyebrow="Questions"
        title="Frequently Asked"
        subtitle="Everything you need to know before you register."
      />

      <Reveal direction="up" className="mx-auto mt-14 max-w-3xl">
        <Accordion items={FAQ_ITEMS} />
      </Reveal>
    </SectionContainer>
  )
}
