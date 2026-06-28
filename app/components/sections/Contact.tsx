'use client'

import { type ReactNode } from 'react'
import { Mail, MapPin } from 'lucide-react'
import { FadeUp } from '../ui/FadeUp'

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

interface ContactItem {
  icon: ReactNode
  label: string
  value: string
  href: string | null
}

const contactItems: ContactItem[] = [
  {
    icon: <Mail size={18} strokeWidth={1.5} />,
    label: 'Email',
    value: 'dikeprecious56@gmail.com',
    href: 'mailto:dikeprecious56@gmail.com',
  },
  {
    icon: <WhatsAppIcon size={18} />,
    label: 'WhatsApp',
    value: '+234 XXX XXX XXXX',
    href: 'https://wa.me/234XXXXXXXXXX',
  },
  {
    icon: <MapPin size={18} strokeWidth={1.5} />,
    label: 'Location',
    value: 'Asaba, Delta State, Nigeria',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">

          {/* ── Left: Info ── */}
          <FadeUp className="flex flex-col gap-8">
            <div className="space-y-4 text-center sm:text-left">
              <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
                Let&apos;s Work<br />Together
              </h2>
              <p className="mx-auto max-w-[38ch] font-sans text-base leading-relaxed text-muted sm:mx-0">
                Available for freelance projects and full-time opportunities.
                If you have a project in mind, I&apos;d love to hear from you.
              </p>
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <span className="h-2 w-2 rounded-full bg-cyan" aria-hidden="true" />
                <span className="font-sans text-sm font-medium text-cyan">Open to work</span>
              </div>
            </div>

            <ul className="space-y-5">
              {contactItems.map(({ icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-rim bg-surface text-accent">
                    {icon}
                  </div>
                  <div>
                    <p className="mb-0.5 font-sans text-xs font-medium uppercase tracking-wider text-muted">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-sans text-sm font-medium text-ink transition-colors hover:text-accent"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-sans text-sm font-medium text-ink">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* ── Right: Form ── */}
          <FadeUp delay={0.15}>
            <form className="flex flex-col gap-5" action="#" method="POST" aria-label="Contact form">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-sans text-xs font-medium text-ink">Your Name</label>
                  <input
                    id="name" name="name" type="text" placeholder="Amara Okonkwo"
                    autoComplete="name" required
                    className="h-11 rounded-lg border border-rim bg-surface px-4 font-sans text-sm text-ink placeholder:text-muted/50 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-sans text-xs font-medium text-ink">Email Address</label>
                  <input
                    id="email" name="email" type="email" placeholder="amara@company.com"
                    autoComplete="email" required
                    className="h-11 rounded-lg border border-rim bg-surface px-4 font-sans text-sm text-ink placeholder:text-muted/50 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="font-sans text-xs font-medium text-ink">Subject</label>
                <input
                  id="subject" name="subject" type="text" placeholder="Project enquiry" required
                  className="h-11 rounded-lg border border-rim bg-surface px-4 font-sans text-sm text-ink placeholder:text-muted/50 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-sans text-xs font-medium text-ink">Message</label>
                <textarea
                  id="message" name="message" rows={5} placeholder="Tell me about your project..." required
                  className="resize-none rounded-lg border border-rim bg-surface px-4 py-3 font-sans text-sm text-ink placeholder:text-muted/50 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40"
                />
              </div>

              <div className="flex justify-center sm:justify-start">
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-10 font-sans text-sm font-semibold text-white shadow-[0_0_0_0_rgba(59,130,246,0)] transition-all duration-200 hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(59,130,246,0.30)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
