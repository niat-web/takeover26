import { ArrowUp } from 'lucide-react'
import { Container } from '@/components/common'
import { NAV_LINKS, SECTION_IDS, SITE, SOCIAL_LINKS } from '@/constants/site'
import { scrollToSection } from '@/utils/scroll'
import { Logo } from './Logo'
import { SocialIcon } from './SocialIcon'

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-night-900/60 backdrop-blur-xl">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-ember-50/55">
              {SITE.organizer}'s flagship hackathon. Build impactful products with AI, innovation
              and technology — and compete for {SITE.prizePool} in prizes.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ember-50/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-ember-400/40 hover:text-ember-300"
                >
                  <SocialIcon name={social.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
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
            <span className="text-sm text-ember-50/60">NIAT KKH, Hyderabad</span>
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
            Crafted with <span className="text-punch-400">♦</span> for builders.
          </p>
        </div>
      </Container>
    </footer>
  )
}
