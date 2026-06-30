/**
 * Smoothly scroll to a section by id, accounting for the fixed navbar.
 */
export function scrollToSection(id: string): void {
  const el = document.getElementById(id)
  if (!el) return
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' })
}
