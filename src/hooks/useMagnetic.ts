import { useRef } from 'react'
import { useMotionValue, useSpring, type MotionValue } from 'framer-motion'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

interface Magnetic {
  ref: React.RefObject<HTMLElement | null>
  x: MotionValue<number>
  y: MotionValue<number>
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void
  onMouseLeave: () => void
}

/**
 * Magnetic hover effect — the element is gently pulled toward the cursor.
 * `strength` controls how far it travels (px fraction of offset).
 * Works on any element (button or anchor).
 */
export function useMagnetic(strength = 0.35): Magnetic {
  const ref = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - (rect.left + rect.width / 2)
    const offsetY = e.clientY - (rect.top + rect.height / 2)
    x.set(offsetX * strength)
    y.set(offsetY * strength)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, x, y, onMouseMove, onMouseLeave }
}
