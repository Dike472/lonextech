'use client'

import { FadeUp } from '../ui/FadeUp'

const testimonials = [
  {
    quote:
      'Dike delivered our client portal in record time and the quality was excellent. His attention to detail and communication throughout the project made the entire process smooth.',
    author: 'Amara Okonkwo',
    role: 'CEO',
    initials: 'AO',
  },
  {
    quote:
     'Dike built my SMS verification platformgrations, and automated refunds all working flawlessly in production. The attention to detail and the speed of delivery genuinely impressed us. A developer who understands both the technical and business side.',
    author: 'Uduak Lambert',
    company: 'Lammysms',
    role: 'Owner',
    initials: 'UL',
    
  },
  {
    quote:
      "The marketplace website Dike delivered exceeded my expectations. The wallet system, product listings, all worked perfectly from day one. Clean code, responsive design, and zero handholding required — he just got it done.",
    author: 'Uduak Lambert',
    company: 'Lammylogs',
    role: 'Owner',
    initials: 'UL',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <FadeUp className="mb-14 text-center sm:text-left lg:mb-16">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            What Clients Say
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={i * 0.1} className="flex">
              <blockquote className="flex h-full w-full flex-col gap-5 rounded-2xl border border-rim bg-surface p-6 lg:p-7">
                <span
                  aria-hidden="true"
                  className="select-none font-heading text-5xl font-bold leading-none text-accent/30"
                >
                  &#8220;
                </span>

                <p className="flex-1 font-sans text-sm leading-relaxed text-muted">
                  {t.quote}
                </p>

                <footer className="flex items-center gap-3 border-t border-rim pt-5">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 font-heading text-sm font-bold text-accent"
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <cite className="not-italic font-sans text-sm font-semibold text-ink">
                      {t.author}
                    </cite>
                    <p className="font-sans text-xs text-muted">
                      {t.role}{t.company ? `, ${t.company}` : ''}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
