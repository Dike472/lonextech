'use client'

import { useState, useRef } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FadeUp } from '../ui/FadeUp'

type ContactState = { status: 'idle' | 'success' | 'error'; message: string }

// ── Brand social SVGs ─────────────────────────────────────────────────────────

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function MailIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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
    id: 'whatsapp',
    Icon: WhatsAppIcon,
    label: 'WHATSAPP',
    value: '+234 91 57364221',
    sub: 'Chat with me on WhatsApp',
    href: 'https://wa.me/2349157364221',
  },
  {
    id: 'email',
    Icon: Mail,
    label: 'EMAIL',
    value: 'dikeprecious56@gmail.com',
    sub: 'I reply within 24 hours',
    href: 'mailto:dikeprecious56@gmail.com',
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
  { id: 'whatsapp', Icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/2349157364221' },
  { id: 'email',    Icon: MailIcon,     label: 'Email',    href: 'mailto:dikeprecious56@gmail.com' },
  { id: 'twitter',  Icon: XIcon,        label: 'Twitter',  href: 'https://x.com/Dikepre33728817' },
  { id: 'linkedin', Icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dike-precious-ebuka-1a49ab267' },
  { id: 'github',   Icon: GitHubIcon,   label: 'GitHub',   href: 'https://github.com/Dike472' },
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
  const [state, setState] = useState<ContactState>({ status: 'idle', message: '' })
  const [isPending, setIsPending] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name    = (data.get('name')    as string)?.trim()
    const email   = (data.get('email')   as string)?.trim()
    const phone   = (data.get('phone')   as string)?.trim() || 'Not provided'
    const message = (data.get('message') as string)?.trim()

    if (!name || !email || !message) {
      setState({ status: 'error', message: 'Please fill in all required fields.' })
      return
    }

    setIsPending(true)
    setState({ status: 'idle', message: '' })

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New portfolio message from ${name}`,
          from_name: name,
          email,
          phone,
          message,
        }),
      })

      const json = await res.json()

      if (!res.ok || !json.success) {
        setState({ status: 'error', message: 'Something went wrong. Please try again or email me directly.' })
      } else {
        setState({ status: 'success', message: "Message sent! I'll reply within 24 hours." })
        form.reset()
      }
    } catch {
      setState({ status: 'error', message: 'Something went wrong. Please try again or email me directly.' })
    } finally {
      setIsPending(false)
    }
  }

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
                <form
                  ref={formRef}
                  className="flex flex-col gap-8"
                  onSubmit={handleSubmit}
                  aria-label="Contact form"
                >
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
                      disabled={isPending}
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
                      disabled={isPending}
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
                      disabled={isPending}
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
                      disabled={isPending}
                      className="contact-input contact-textarea"
                    />
                  </div>

                  {/* Feedback banner */}
                  {state.status !== 'idle' && (
                    <div
                      role="alert"
                      style={{
                        padding: '0.875rem 1.125rem',
                        borderRadius: 8,
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        background: state.status === 'success'
                          ? 'rgba(34,197,94,0.1)'
                          : 'rgba(239,68,68,0.1)',
                        border: `1px solid ${state.status === 'success' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}`,
                        color: state.status === 'success' ? '#4ADE80' : '#F87171',
                      }}
                    >
                      {state.message}
                    </div>
                  )}

                  {/* Submit */}
                  <div>
                    <button
                      type="submit"
                      disabled={isPending}
                      className="contact-submit"
                      style={{ opacity: isPending ? 0.7 : 1, cursor: isPending ? 'not-allowed' : 'pointer' }}
                    >
                      {isPending ? 'SENDING…' : 'SEND MESSAGE →'}
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
                              target={id === 'whatsapp' ? '_blank' : undefined}
                              rel={id === 'whatsapp' ? 'noopener noreferrer' : undefined}
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
                          {sub && (
                            <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                              {sub}
                            </span>
                          )}
                        </div>
                      </div>
                      {idx < contactDetails.length - 1 && (
                        <div
                          style={{ height: 1, background: 'rgba(148,163,184,0.12)' }}
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
                    {socialLinks.map(({ id, Icon, label, href,  }) => (
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
