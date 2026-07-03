import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { PageWrapper, Navbar, Footer, PageLoader, RegistrationNotice } from '@/components/layout'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'

/* Below-the-fold sections are code-split and loaded on demand. */
const Themes = lazy(() => import('@/sections/Themes').then((m) => ({ default: m.Themes })))
const Timeline = lazy(() => import('@/sections/Timeline').then((m) => ({ default: m.Timeline })))
const Prizes = lazy(() => import('@/sections/Prizes').then((m) => ({ default: m.Prizes })))
const Support = lazy(() => import('@/sections/Support').then((m) => ({ default: m.Support })))
const Eligibility = lazy(() =>
  import('@/sections/Eligibility').then((m) => ({ default: m.Eligibility }))
)
const Faq = lazy(() => import('@/sections/Faq').then((m) => ({ default: m.Faq })))
const RegisterCta = lazy(() =>
  import('@/sections/RegisterCta').then((m) => ({ default: m.RegisterCta }))
)

/** Minimal placeholder that preserves vertical rhythm while a chunk loads. */
function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden />
}

export default function App() {
  const [loading, setLoading] = useState(true)

  // Lock scroll and pin to top while the intro loader is on screen.
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    if (loading) window.scrollTo(0, 0)
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <PageWrapper>
      <AnimatePresence>
        {loading && <PageLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<SectionFallback />}>
          <Themes />
          <Timeline />
          <Prizes />
          <Support />
          <Eligibility />
          <Faq />
          <RegisterCta />
        </Suspense>
      </main>
      <Footer />
      {!loading && <RegistrationNotice />}
    </PageWrapper>
  )
}
