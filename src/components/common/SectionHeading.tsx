import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { Badge } from './Badge'
import { fadeUp, staggerContainer, VIEWPORT } from '@/constants/motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}

/** Consistent section header: animated eyebrow, gradient title, subtitle. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <motion.header
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={cn(
        'flex max-w-3xl flex-col gap-5',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <motion.div variants={fadeUp}>
          <Badge>{eyebrow}</Badge>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
      >
        <span className="inline-block text-gradient-soft">{title}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-pretty text-base leading-relaxed text-ember-50/60 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  )
}
