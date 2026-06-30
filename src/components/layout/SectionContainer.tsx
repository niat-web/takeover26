import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { Container } from '@/components/common'

interface SectionContainerProps {
  id: string
  children: ReactNode
  className?: string
  /** inner Container className for width/spacing tweaks */
  innerClassName?: string
  /** vertical rhythm preset */
  spacing?: 'default' | 'compact' | 'loose'
  /** allow background decorations to bleed outside */
  bleed?: boolean
}

const SPACING: Record<NonNullable<SectionContainerProps['spacing']>, string> = {
  compact: 'py-16 sm:py-20',
  default: 'py-20 sm:py-28 lg:py-32',
  loose: 'py-24 sm:py-32 lg:py-40',
}

/**
 * Standard <section> wrapper: consistent vertical rhythm, scroll anchor,
 * and a centered Container. Every page section is built on this.
 */
export function SectionContainer({
  id,
  children,
  className,
  innerClassName,
  spacing = 'default',
  bleed = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn('relative', SPACING[spacing], bleed && 'overflow-hidden', className)}
    >
      <Container className={innerClassName}>{children}</Container>
    </section>
  )
}
