import type { ReactNode } from 'react'
import { GlobalBackground } from './GlobalBackground'

interface PageWrapperProps {
  children: ReactNode
}

/** Top-level shell: mounts the shared background and a skip link. */
export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="relative min-h-dvh">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ember-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-night-900"
      >
        Skip to content
      </a>
      <GlobalBackground />
      {children}
    </div>
  )
}
