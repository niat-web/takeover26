import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/utils/cn'
import { NAV_LINKS, SECTION_IDS, SITE } from '@/constants/site'
import { useScrolled, useScrollSpy } from '@/hooks'
import { scrollToSection } from '@/utils/scroll'
import { Container, PrimaryButton } from '@/components/common'
import { Logo } from './Logo'
import { MobileDrawer } from './MobileDrawer'

export function Navbar() {
  const scrolled = useScrolled(20)
  const [menuOpen, setMenuOpen] = useState(false)

  const spyIds = useMemo(() => Object.values(SECTION_IDS), [])
  const activeId = useScrollSpy(spyIds)

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavigate = (id: string) => {
    setMenuOpen(false)
    // wait a tick so the drawer close doesn't fight the scroll
    requestAnimationFrame(() => scrollToSection(id))
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4"
      >
        <Container>
          <nav
            aria-label="Primary"
            className={cn(
              'flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5',
              scrolled
                ? 'glass-strong shadow-glass'
                : 'border border-transparent bg-transparent'
            )}
          >
            <Logo />

            {/* Desktop links */}
            <ul className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => {
                const active = activeId === link.id
                return (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => handleNavigate(link.id)}
                      aria-current={active ? 'true' : undefined}
                      className={cn(
                        'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                        active ? 'text-white' : 'text-ember-50/65 hover:text-white'
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-white/8 ring-1 ring-ember-400/30"
                          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                        />
                      )}
                      {link.label}
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-2">
              <PrimaryButton
                magnetic={false}
                className="hidden px-5 py-2.5 sm:inline-flex"
                href={SITE.registerUrl}
                external
                ariaLabel="Register for TakeOver'26 (opens registration form in a new tab)"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Register Now
              </PrimaryButton>

              {/* Animated hamburger */}
              <button
                type="button"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl glass-strong text-ember-50 lg:hidden"
              >
                <motion.span
                  initial={false}
                  animate={{ rotate: menuOpen ? 90 : 0, opacity: menuOpen ? 0 : 1 }}
                  className="absolute"
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
                <motion.span
                  initial={false}
                  animate={{ rotate: menuOpen ? 0 : -90, opacity: menuOpen ? 1 : 0 }}
                  className="absolute"
                >
                  <X className="h-5 w-5" />
                </motion.span>
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      <MobileDrawer
        open={menuOpen}
        activeId={activeId}
        onNavigate={handleNavigate}
        onClose={() => setMenuOpen(false)}
      />
    </>
  )
}
