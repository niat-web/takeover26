import { ArrowUp, Heart } from 'lucide-react'
import { Container } from '@/components/common'
import { NAV_LINKS, SECTION_IDS, SITE } from '@/constants/site'
import { scrollToSection } from '@/utils/scroll'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-night-900/60 backdrop-blur-xl">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-ember-50/55">
              {SITE.organizer}'s flagship hackathon — empowering local businesses to accelerate
              growth through Innovation and AI.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-50/40">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-ember-50/60 transition-colors hover:text-ember-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact / CTA */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-50/40">
              Get in Touch
            </h3>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-ember-50/60 transition-colors hover:text-ember-300"
            >
              {SITE.email}
            </a>
            <button
              type="button"
              onClick={() => scrollToSection(SECTION_IDS.home)}
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-ember-50/80 transition-all hover:-translate-y-0.5 hover:text-white"
            >
              Back to top <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-ember-50/45 sm:flex-row">
          <p>
            © {2026} {SITE.name} · {SITE.organizer}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Created with{' '}
            <Heart className="h-4 w-4 fill-punch-400 text-punch-400" /> by NxtWave
          </p>
        </div>
      </Container>
    </footer>
  )
}
