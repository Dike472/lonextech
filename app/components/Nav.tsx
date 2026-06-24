'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  /* Intersection Observer for active-link highlighting */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const isActive = (href: string) => activeSection === href.slice(1)

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 h-16 border-b border-rim/50 bg-bg/80 backdrop-blur-[12px]">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo + wordmark */}
          <a href="/" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/logo-recolored.png"
              alt="Lonextech logo"
              width={279}
              height={322}
              className="h-9 w-auto sm:h-10"
              priority
            />
            <span className="font-heading text-xl font-bold tracking-[-0.03em] text-ink">
              Lonex<span className="text-accent">tech</span>
            </span>
          </a>

          {/* Desktop nav — visible at lg (1024px+) */}
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-sans text-sm transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-accent'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden h-9 items-center justify-center rounded-lg bg-accent px-5 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:inline-flex"
            >
              Hire Me
            </a>

            {/* Hamburger / X button — 44px touch target, only on mobile */}
            <button
              type="button"
              onClick={toggleMenu}
              className="relative flex h-11 w-11 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-ink lg:hidden"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {/* Top bar */}
              <motion.span
                className="absolute block h-0.5 w-[18px] rounded-full bg-current"
                animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
              />
              {/* Middle bar */}
              <motion.span
                className="absolute block h-0.5 w-[18px] rounded-full bg-current"
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.14 }}
              />
              {/* Bottom bar */}
              <motion.span
                className="absolute block h-0.5 w-[18px] rounded-full bg-current"
                animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown menu — solid background, sits directly below header */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-0 top-16 z-40 border-b border-rim lg:hidden"
            style={{ backgroundColor: 'rgba(5,7,13,0.97)' }}
          >
            <nav
              className="mx-auto max-w-7xl px-4 pb-2 pt-1 sm:px-6"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex min-h-[44px] items-center border-b border-rim/30 font-sans text-sm transition-colors last:border-0 ${
                    isActive(link.href)
                      ? 'text-accent'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="py-3">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-accent px-6 font-sans text-sm font-semibold text-white transition-colors hover:bg-accent/90"
                >
                  Hire Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
