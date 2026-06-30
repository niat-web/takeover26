import { cn } from '@/utils/cn'
import { SITE } from '@/constants/site'
import { scrollToSection } from '@/utils/scroll'
import { SECTION_IDS } from '@/constants/site'

interface LogoProps {
  className?: string
}

/** Wordmark + glyph. Clicking scrolls to the top (home). */
export function Logo({ className }: LogoProps) {
  return (
    <button
      type="button"
      onClick={() => scrollToSection(SECTION_IDS.home)}
      aria-label={`${SITE.name} — back to top`}
      className={cn('group flex items-center gap-2.5', className)}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-animated shadow-ember">
        <span className="font-display text-lg font-extrabold text-night-900">T</span>
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-ember-50">
        TakeOver
        <span className="text-gradient-brand">'26</span>
      </span>
    </button>
  )
}
