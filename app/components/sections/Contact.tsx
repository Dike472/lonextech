'use client'

import { motion } from 'motion/react'
import { Mail, MessageSquare, MapPin } from 'lucide-react'

const contactItems = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'dikeprecious56@gmail.com',
    href: 'mailto:dikeprecious56@gmail.com',
  },
  {
    Icon: MessageSquare,
    label: 'WhatsApp',
    value: '+234 XXX XXX XXXX',
    href: 'https://wa.me/234XXXXXXXXXX',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Asaba, Delta State, Nigeria',
    href: null,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 lg:py-32">
      {/* Subtle radial glow — depth without noise */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {/* ── Left: Info ── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4">
              <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
                Let&apos;s Work<br />Together
              </h2>
              <p className="max-w-[38ch] font-sans text-base leading-relaxed text-muted">
                Available for freelance projects and full-time opportunities.
                If you have a project in mind, I&apos;d love to hear from you.
              </p>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan" aria-hidden="true" />
                <span className="font-sans text-sm font-medium text-cyan">
                  Open to work
                </span>
              </div>
            </div>

            <ul className="space-y-5">
              {contactItems.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface border border-rim text-accent">
                    <Icon size={18} strokeWidth={1.5} />
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
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.form
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
            action="#"
            method="POST"
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-sans text-xs font-medium text-ink">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Amara Okonkwo"
                  autoComplete="name"
                  required
                  className="h-11 rounded-lg border border-rim bg-surface px-4 font-sans text-sm text-ink placeholder:text-muted/50 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-sans text-xs font-medium text-ink">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="amara@company.com"
                  autoComplete="email"
                  required
                  className="h-11 rounded-lg border border-rim bg-surface px-4 font-sans text-sm text-ink placeholder:text-muted/50 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="font-sans text-xs font-medium text-ink">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project enquiry"
                required
                className="h-11 rounded-lg border border-rim bg-surface px-4 font-sans text-sm text-ink placeholder:text-muted/50 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-sans text-xs font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
                className="resize-none rounded-lg border border-rim bg-surface px-4 py-3 font-sans text-sm text-ink placeholder:text-muted/50 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40"
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-10 font-sans text-sm font-semibold text-white shadow-[0_0_0_0_rgba(59,130,246,0)] transition-all duration-200 hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(59,130,246,0.30)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
