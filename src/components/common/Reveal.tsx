import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { revealVariants, VIEWPORT, type RevealDirection } from '@/constants/motion'

interface RevealProps {
  children: ReactNode
  /** direction / style of the entrance animation */
  direction?: RevealDirection
  delay?: number
  className?: string
  /** re-trigger every time it enters the viewport */
  once?: boolean
}

/**
 * Drop-in scroll-reveal wrapper. Single component powers every
 * fade-up / fade-left / scale / blur entrance across the site.
 */
export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={revealVariants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...VIEWPORT, once }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
