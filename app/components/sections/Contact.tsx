'use client'

import { Phone, Mail, MapPin } from 'lucide-react'
import { FadeUp } from '../ui/FadeUp'

// ── Brand social SVGs ─────────────────────────────────────────────────────────

function FiverrIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.33c-.23 0-.32.088-.32.32v5.648h-1.61v-5.648c0-.232-.09-.32-.32-.32H17.36c-.23 0-.32.088-.32.32v5.648h-1.61v-5.648c0-.232-.09-.32-.32-.32h-.648v-1.61h.65c.668 0 1.014.347 1.014 1.016 0-.67.588-1.016 1.258-1.016h1.308c.668 0 1.014.347 1.014 1.016 0-.67.588-1.016 1.258-1.016h1.33c.23 0 .32-.088.32-.32v-.648h1.61v.649c0 .668-.347 1.015-1.016 1.015v-.318zm-9.978-1.61c0 .232-.09.32-.32.32h-.33v1.61h.33c.23 0 .32.088.32.32v2.666c0 1.172.48 1.75 1.83 1.75h.75v-1.61h-.37c-.39 0-.6-.166-.6-.56v-2.246c0-.232.09-.32.32-.32h.65v-1.61h-.65c-.23 0-.32-.088-.32-.32v-.967h-1.61v.967zm-2.895 0H7.526c-.906 0-1.573.268-1.98.8v-.8H3.936v7.258h1.61V14.89c0-.906.52-1.387 1.537-1.387h1.053v-1.61l-.006-.618zm-6.57 4.193c0 .906-.47 1.357-1.42 1.357-.948 0-1.417-.45-1.417-1.357v-1.55c0-.906.47-1.356 1.418-1.356.948 0 1.418.45 1.418 1.356v1.55zm1.61-1.55c0-1.79-1.06-2.966-3.03-2.966-1.968 0-3.027 1.175-3.027 2.966v1.55c0 1.79 1.059 2.967 3.027 2.967 1.97 0 3.03-1.176 3.03-2.967v-1.55z" />
    </svg>
  )
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function DribbbleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.29 10.29 0 0 0 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.39a10.161 10.161 0 0 0 6.29 2.166 10.28 10.28 0 0 0 4.006-.806zm-9.662-2.814c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12a28.5 28.5 0 0 0-.748-1.64C8.256 11.697 3.82 11.63 3.42 11.62a10.216 10.216 0 0 0 2.923 7.016zM3.511 9.96c.41.01 4.186.048 8.104-1.076a45.948 45.948 0 0 0-3.27-4.862C5.857 5.127 4.09 7.284 3.511 9.96zm6.49-6.046c.18.243 1.714 2.38 3.293 4.926 3.126-1.172 4.45-2.952 4.61-3.19a10.2 10.2 0 0 0-7.903-1.736zM19.5 6.57c-.177.254-1.635 2.14-4.87 3.48.205.42.4.84.57 1.264.07.18.14.353.2.528 3.393-.428 6.747.257 7.08.327A10.19 10.19 0 0 0 19.5 6.57z" />
    </svg>
  )
}

function BehanceIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.49-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.65.673 1.43.673 2.33 0 .74-.14 1.38-.42 1.92-.28.54-.67.99-1.16 1.35-.49.36-1.06.63-1.71.81-.64.18-1.31.27-2.02.27H0V4.51h6.938v-.007zM16.94 4.5h6.46V6.1H16.94V4.5zM6.58 10.65H3.68V7.17h2.85c.71 0 1.27.15 1.67.46.4.31.6.78.6 1.42 0 .64-.2 1.1-.62 1.4-.41.3-.99.45-1.6.2zm9.34 1.8c-.26-.4-.68-.74-1.26-1-.58-.26-1.25-.39-2-.39-.97 0-1.77.23-2.38.69-.61.46-.91 1.13-.91 2.01 0 .79.26 1.44.77 1.95.51.51 1.2.77 2.09.77.62 0 1.16-.14 1.61-.42.45-.28.78-.67 1-.17l.36-1.55h-4.61v-1.52h6.61l.01.62c0 .75-.16 1.49-.48 2.22-.32.73-.77 1.38-1.35 1.95-.58.57-1.27 1.02-2.07 1.35-.8.33-1.68.5-2.63.5-1.01 0-1.93-.17-2.76-.51-.83-.34-1.55-.81-2.14-1.41-.59-.6-1.05-1.31-1.38-2.13-.33-.82-.49-1.72-.49-2.69 0-.99.17-1.9.51-2.73.34-.83.82-1.55 1.44-2.16.62-.61 1.36-1.08 2.21-1.42.85-.34 1.79-.51 2.82-.51.89 0 1.73.13 2.52.39.79.26 1.49.63 2.09 1.11.6.48 1.08 1.06 1.44 1.74.36.68.55 1.44.57 2.28h-2.74c-.06-.52-.24-.97-.54-1.37zM6.58 14.9H3.68v-3.51h3.07c.79 0 1.4.18 1.84.55.44.37.66.91.66 1.62 0 .7-.22 1.23-.67 1.59-.45.36-1.06.55-2 .05-.25.1-.5.1-.97.1z" />
    </svg>
  )
}

// ── Contact data ──────────────────────────────────────────────────────────────

const contactDetails = [
  {
    id: 'phone',
    Icon: Phone,
    label: 'PHONE',
    value: '+234 80 64786201',
    href: 'tel:+2348064786201',
  },
  {
    id: 'email',
    Icon: Mail,
    label: 'EMAIL',
    value: 'dikeprecious56@gmail.com',
    sub: 'I reply within 24 hours',
    href: 'mailto:lonex581@gmail.com',
  },
  {
    id: 'location',
    Icon: MapPin,
    label: 'LOCATION',
    value: 'Delta, Nigeria',
    sub: 'Available for remote work worldwide',
    href: null,
  },
]

const socialLinks = [
  { id: 'fiverr',   Icon: FiverrIcon,   label: 'Fiverr',   href: '#' },
  { id: 'linkedin', Icon: LinkedInIcon, label: 'LinkedIn',  href: '#' },
  { id: 'x',        Icon: XIcon,        label: 'X',         href: '#' },
  { id: 'dribbble', Icon: DribbbleIcon, label: 'Dribbble',  href: '#' },
  { id: 'behance',  Icon: BehanceIcon,  label: 'Behance',   href: '#' },
]

// ── Shared token values ───────────────────────────────────────────────────────

const iconContainer: React.CSSProperties = {
  width: 44,
  height: 44,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  background: 'rgba(59,130,246,0.1)',
  border: '1px solid rgba(59,130,246,0.2)',
  color: '#3B82F6',
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-32" style={{ background: '#05070D' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <FadeUp className="mb-12 text-center sm:text-left">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-3 font-sans text-base text-muted">
            Have a project in mind? Let&apos;s build something great together.
          </p>
        </FadeUp>

        {/* Card container */}
        <FadeUp delay={0.1}>
          <div
            style={{
              background: '#0F1420',
              border: '1px solid rgba(59,130,246,0.3)',
              borderRadius: 12,
              padding: '2.5rem',
              boxShadow: '0 0 40px rgba(59,130,246,0.06)',
            }}
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[55fr_45fr]">

              {/* ── Left: Form ── */}
              <div>
                <form className="flex flex-col gap-8" action="#" method="POST" aria-label="Contact form">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#3B82F6',
                        textTransform: 'uppercase',
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                      className="contact-input"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#3B82F6',
                        textTransform: 'uppercase',
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      autoComplete="email"
                      required
                      className="contact-input"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#3B82F6',
                        textTransform: 'uppercase',
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+234 000 0000"
                      autoComplete="tel"
                      className="contact-input"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#3B82F6',
                        textTransform: 'uppercase',
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      className="contact-input contact-textarea"
                    />
                  </div>

                  {/* Submit */}
                  <div>
                    <button
                      type="submit"
                      className="contact-submit"
                    >
                      SEND MESSAGE →
                    </button>
                  </div>
                </form>
              </div>

              {/* ── Right: Details + Social ── */}
              <div className="flex flex-col gap-6">
                {/* Contact items */}
                <div className="flex flex-col">
                  {contactDetails.map(({ id, Icon, label, value, sub, href }, idx) => (
                    <div key={id}>
                      <div className="flex items-start gap-4 py-5">
                        <div style={iconContainer}>
                          <Icon size={18} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span
                            style={{
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              letterSpacing: '0.12em',
                              color: '#3B82F6',
                              textTransform: 'uppercase',
                            }}
                          >
                            {label}
                          </span>
                          {href ? (
                            <a
                              href={href}
                              style={{
                                fontSize: '0.95rem',
                                fontWeight: 700,
                                color: '#F5F7FA',
                                textDecoration: 'none',
                              }}
                            >
                              {value}
                            </a>
                          ) : (
                            <span
                              style={{
                                fontSize: '0.95rem',
                                fontWeight: 700,
                                color: '#F5F7FA',
                              }}
                            >
                              {value}
                            </span>
                          )}
                          <span
                            style={{
                              fontSize: '0.8rem',
                              color: '#94A3B8',
                            }}
                          >
                            {sub}
                          </span>
                        </div>
                      </div>
                      {idx < contactDetails.length - 1 && (
                        <div
                          style={{
                            height: 1,
                            background: 'rgba(148,163,184,0.12)',
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Follow Me */}
                <div
                  style={{
                    border: '1px solid rgba(59,130,246,0.3)',
                    borderRadius: 10,
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      color: '#94A3B8',
                      textTransform: 'uppercase',
                      marginBottom: '0.875rem',
                    }}
                  >
                    Follow Me
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map(({ id, Icon, label, href }) => (
                      <a
                        key={id}
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon-btn"
                        style={iconContainer}
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
