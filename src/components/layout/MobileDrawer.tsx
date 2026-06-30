import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/utils/cn'
import { NAV_LINKS, SITE } from '@/constants/site'
import { PrimaryButton } from '@/components/common'
import { staggerContainer, fadeRight } from '@/constants/motion'

interface MobileDrawerProps {
  open: boolean
  activeId: string
  onNavigate: (id: string) => void
  onClose: () => void
}

const overlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const panel = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'spring' as const, stiffness: 160, damping: 24 } },
  exit: { x: '100%', transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const } },
}

/** Full-height glass drawer for mobile navigation. */
export function MobileDrawer({ open, activeId, onNavigate, onClose }: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 lg:hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            variants={overlay}
            onClick={onClose}
            className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
          />
          <motion.nav
            variants={panel}
            exit="exit"
            aria-label="Mobile"
            className="absolute right-0 top-0 flex h-dvh w-[82%] max-w-sm flex-col glass-strong px-7 pb-10 pt-24"
          >
            <motion.ul
              variants={staggerContainer(0.07, 0.1)}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1"
            >
              {NAV_LINKS.map((link) => {
                const active = activeId === link.id
                return (
                  <motion.li key={link.id} variants={fadeRight}>
                    <button
                      type="button"
                      onClick={() => onNavigate(link.id)}
                      className={cn(
                        'flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-lg font-medium transition-colors',
                        active
                          ? 'bg-ember-500/10 text-white'
                          : 'text-ember-50/70 hover:bg-white/5 hover:text-white'
                      )}
                    >
                      {link.label}
                      <ArrowRight
                        className={cn(
                          'h-4 w-4 transition-opacity',
                          active ? 'opacity-100 text-ember-400' : 'opacity-0'
                        )}
                      />
                    </button>
                  </motion.li>
                )
              })}
            </motion.ul>

            <div className="mt-auto pt-8">
              <PrimaryButton
                magnetic={false}
                className="w-full"
                onClick={() => onNavigate(SITE.registerUrl.replace('#', ''))}
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Register Now
              </PrimaryButton>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
