'use client'

import Image from 'next/image'
import { FadeUp } from '../ui/FadeUp'

const stats = [
  { value: '12+', label: 'Projects Completed' },
  { value: '3+',  label: 'Years Experience' },
  { value: '8+',  label: 'Happy Clients' },
]

const focuses = [
  'Full-Stack Web Development',
  'UI/UX Implementation',
  'REST API Design',
  'Database Architecture',
  'Performance Optimization',
]

export default function About() {
  return (
    <section id="about" className="py-14 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[55fr_45fr] lg:gap-24 xl:gap-32">

          {/* ── Left: Content ── */}
          <div className="order-last flex flex-col items-center gap-5 text-center lg:items-start lg:gap-7 lg:order-first lg:pl-4 lg:text-left xl:pl-8">

            <FadeUp className="w-full">
              <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
                About Me
              </h2>
            </FadeUp>

            <div className="space-y-3 text-left font-sans text-sm leading-[1.75] text-muted sm:text-base lg:space-y-4">
              <FadeUp delay={0.1}>
                <p>
                  I&apos;m Dike Precious, a Full-Stack Web Developer based in Nigeria
                  with a passion for building digital products that are both
                  beautiful and functional.
                </p>
              </FadeUp>
              <FadeUp delay={0.18}>
                <p>
                  I specialise in crafting full-stack applications using Next.js
                  on the frontend and Laravel on the backend, with a strong focus
                  on clean architecture, responsive design, and developer experience.
                </p>
              </FadeUp>
              <FadeUp delay={0.26}>
                <p>
                  When I&apos;m not writing code, I enjoy exploring new technologies,
                  contributing to open-source projects, and pushing the limits of
                  what&apos;s possible on the web.
                </p>
              </FadeUp>
            </div>

            {/* Stats */}
            <div className="grid w-full grid-cols-3 gap-4 border-t border-rim pt-4 lg:pt-6">
              {stats.map((stat, i) => (
                <FadeUp key={stat.label} delay={i * 0.1}>
                  <p className="font-heading text-3xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 font-sans text-xs leading-tight text-muted">
                    {stat.label}
                  </p>
                </FadeUp>
              ))}
            </div>

            {/* Focus areas */}
            <FadeUp className="w-full space-y-3 border-t border-rim pt-4 text-left lg:pt-6" delay={0.15}>
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-muted">
                What I focus on
              </p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {focuses.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 font-sans text-sm text-ink"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          {/* ── Right: Photo column ── */}
          <FadeUp className="order-first self-start lg:order-last" delay={0.2}>
            {/* Mobile: full-width landscape crop */}
            <div className="relative h-[64vw] w-full overflow-hidden lg:hidden">
              <Image
                src="/profile-photo.png"
                alt="Dike Precious"
                fill
                sizes="(max-width: 640px) calc(100vw - 2rem), calc(100vw - 3rem)"
                className="object-cover object-[50%_20%]"
                priority
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-bg to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-bg to-transparent" />
            </div>

            {/* Desktop: portrait cutout */}
            <div
              className="relative ml-auto hidden w-fit lg:block"
              style={{
                background: 'transparent',
                border: 'none',
                boxShadow: 'none',
                WebkitMaskImage: 'radial-gradient(ellipse 72% 78% at 50% 44%, black 0%, black 52%, transparent 80%)',
                maskImage: 'radial-gradient(ellipse 72% 78% at 50% 44%, black 0%, black 52%, transparent 80%)',
              }}
            >
              <Image
                src="/profile-photo.png"
                alt="Dike Precious"
                width={407}
                height={612}
                className="h-[480px] w-auto"
                style={{
                  objectFit: 'contain',
                  background: 'transparent',
                  position: 'relative',
                  zIndex: 1,
                }}
                priority
              />
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
