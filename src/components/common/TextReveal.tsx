import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { staggerContainer, textRevealChild } from '@/constants/motion'

interface TextRevealProps {
  text: string
  className?: string
  /** delay before the first word animates in */
  delay?: number
  /** play immediately on mount instead of on scroll into view */
  immediate?: boolean
}

/**
 * Word-by-word blur/slide reveal for headlines. Each word is masked
 * so it rises from behind a clipping boundary.
 */
export function TextReveal({ text, className, delay = 0, immediate = false }: TextRevealProps) {
  const words = text.split(' ')

  return (
    <motion.span
      variants={staggerContainer(0.09, delay)}
      initial="hidden"
      {...(immediate
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: { once: true, amount: 0.5 } })}
      className="inline-flex flex-wrap"
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="mr-[0.25em] inline-block overflow-hidden py-[0.06em]">
          {/* The visual className lives on the glyph carrier so background-clip
              gradients paint the actual text rather than the transparent wrapper. */}
          <motion.span variants={textRevealChild} className={cn('inline-block', className)} aria-hidden>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
