import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useMagnetic } from '@/hooks'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  /** open the href in a new tab with safe rel attributes */
  external?: boolean
  variant?: Variant
  className?: string
  /** enable magnetic cursor attraction */
  magnetic?: boolean
  icon?: ReactNode
  ariaLabel?: string
}

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    'bg-gradient-animated text-night-900 shadow-ember hover:shadow-[0_22px_70px_-18px_rgba(224,170,31,0.7)] font-semibold',
  secondary:
    'glass-strong text-ember-50 hover:border-ember-400/40 hover:text-white font-semibold',
  ghost: 'text-ember-50/80 hover:text-white font-medium',
}

const BASE =
  'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:ring-offset-2 focus-visible:ring-offset-night-900 shimmer-sweep'

/**
 * Unified button used everywhere. Renders an <a> when `href` is set,
 * otherwise a <button>. Magnetic + shimmer interactions baked in.
 */
export function Button({
  children,
  onClick,
  href,
  external = false,
  variant = 'primary',
  className,
  magnetic = true,
  icon,
  ariaLabel,
}: ButtonProps) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic()
  const classes = cn(BASE, VARIANT_STYLES[variant], className)

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon}
      </span>
    </>
  )

  const motionProps = {
    style: magnetic ? { x, y } : undefined,
    onMouseMove: magnetic ? onMouseMove : undefined,
    onMouseLeave: magnetic ? onMouseLeave : undefined,
    whileTap: { scale: 0.96 },
  }

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        className={classes}
        {...motionProps}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
      {...motionProps}
    >
      {content}
    </motion.button>
  )
}

/** Convenience wrappers so call sites read declaratively. */
export function PrimaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button variant="primary" {...props} />
}

export function SecondaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button variant="secondary" {...props} />
}
