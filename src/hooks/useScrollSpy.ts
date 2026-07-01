import { useEffect, useState } from 'react'

/**
 * Scroll-spy: returns the id of the section currently in view.
 *
 * Uses a deterministic trigger-line approach — the active section is the last
 * one whose top edge has scrolled above a line placed `offsetRatio` down the
 * viewport. This is reliable across sections of any height and naturally
 * handles lazily-mounted sections (elements are queried live each frame).
 * Scroll work is throttled to one rAF per frame to stay at 60fps.
 */
export function useScrollSpy(ids: string[], offsetRatio = 0.45): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    let frame = 0

    const compute = () => {
      const line = window.innerHeight * offsetRatio
      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top - line <= 0) current = id
      }
      setActiveId(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        compute()
        frame = 0
      })
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ids, offsetRatio])

  return activeId
}
