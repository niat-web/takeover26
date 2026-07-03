import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Lock, X, ArrowUpRight } from 'lucide-react'
import { SITE } from '@/constants/site'
import { EASE } from '@/constants/motion'

/**
 * Floating glass toast announcing that registration has closed and pointing
 * entrants to the idea-submission form. Dismissible; matches the site's
 * glass + ember accent system.
 */
export function RegistrationNotice() {
  const [open, setOpen] = useState(true)

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: 0.4, duration: 0.6, ease: EASE.out },
          }}
          exit={{ opacity: 0, y: 24, scale: 0.95, transition: { duration: 0.3, ease: EASE.out } }}
          className="glass-strong shadow-glass fixed inset-x-4 bottom-4 z-[60] mx-auto flex max-w-sm items-start gap-3 rounded-2xl px-4 py-3.5 ring-1 ring-ember-400/20 sm:inset-x-auto sm:bottom-6 sm:right-6"
        >
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ember-500/15 text-ember-300 ring-1 ring-ember-400/30">
            <Lock className="h-4 w-4" />
          </span>

          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-2 text-sm font-bold text-white">
              Registration Closed
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-400" />
              </span>
            </p>
            <p className="mt-1 text-xs leading-relaxed text-ember-50/70">
              Registrations are now closed — teams can submit their idea.
            </p>
            <a
              href={SITE.submitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ember-300 transition-colors hover:text-ember-200"
            >
              Submit your idea
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Dismiss registration notification"
            className="-mr-1 -mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-ember-50/50 transition-colors hover:bg-white/5 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
