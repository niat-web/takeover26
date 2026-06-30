import { useEffect, useRef } from 'react'
import { useMotionValue, type MotionValue } from 'framer-motion'

interface MouseGlow {
  ref: React.RefObject<HTMLDivElement | null>
  x: MotionValue<number>
  y: MotionValue<number>
}

/**
 * Tracks the pointer position relative to a container element.
 * Returns motion values so consumers animate without re-rendering (60fps).
 */
export function useMousePosition(): MouseGlow {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const handleMove = (e: PointerEvent) => {
      const rect = node.getBoundingClientRect()
      x.set(e.clientX - rect.left)
      y.set(e.clientY - rect.top)
    }

    node.addEventListener('pointermove', handleMove)
    return () => node.removeEventListener('pointermove', handleMove)
  }, [x, y])

  return { ref, x, y }
}
