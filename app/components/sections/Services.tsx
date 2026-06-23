'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  Code2,
  LayoutDashboard,
  ShoppingBag,
  Plug,
  Database,
  Layers,
} from 'lucide-react'

interface Service {
  Icon: React.ElementType
  name: string
  teaser: string
  description: string
  bullets: string[]
}

const services: Service[] = [
  {
    Icon: Code2,
    name: 'Full-Stack Web Development',
    teaser: 'Frontend to backend, end-to-end',
    description:
      'End-to-end web apps built with Next.js + Laravel — typed APIs, clean architecture, and responsive UI shipped on schedule.',
    bullets: [
      'Next.js & React frontends',
      'Laravel REST APIs',
      'MySQL / PostgreSQL databases',
      'Responsive Tailwind CSS UI',
    ],
  },
  {
    Icon: LayoutDashboard,
    name: 'SaaS Platform Development',
    teaser: 'Subscriptions, payments, dashboards',
    description:
      'Subscription-based platforms with auth systems, payment integration, usage tracking, and multi-tenant dashboards.',
    bullets: [
      'Stripe & Flutterwave payments',
      'User authentication & roles',
      'Usage metrics & analytics',
      'Multi-tenant architecture',
    ],
  },
  {
    Icon: ShoppingBag,
    name: 'E-Commerce & Marketplace',
    teaser: 'Listings, wallets, order management',
    description:
      'Full-featured marketplace solutions with product catalogs, wallet systems, automated order flow, and digital goods delivery.',
    bullets: [
      'Product catalog management',
      'Wallet & payout systems',
      'Order tracking & automation',
      'Digital goods delivery',
    ],
  },
  {
    Icon: Plug,
    name: 'API Integration',
    teaser: 'Connect any third-party service',
    description:
      'Connecting your platform to payment gateways, SMS providers, and third-party services via robust, versioned REST APIs.',
    bullets: [
      'Payment gateway integration',
      'SMS API & verification',
      'Webhook handling',
      'OAuth & third-party auth',
    ],
  },
  {
    Icon: Database,
    name: 'Database Architecture',
    teaser: 'Schema design that scales',
    description:
      'MySQL and PostgreSQL schema design, Prisma ORM setup, index optimization, and migration management built to scale.',
    bullets: [
      'MySQL & PostgreSQL design',
      'Prisma ORM setup',
      'Query & index optimization',
      'Migration management',
    ],
  },
  {
    Icon: Layers,
    name: 'UI/UX Implementation',
    teaser: 'Pixel-perfect, animated interfaces',
    description:
      'Figma-to-code implementations with Framer Motion animations, accessibility-first markup, and mobile-first responsive layouts.',
    bullets: [
      'Figma to code',
      'Framer Motion animations',
      'Mobile-first responsive design',
      'Accessibility (WCAG AA)',
    ],
  },
]

interface CardProps {
  service: Service
  isFlipped: boolean
  onFlip: (val: boolean) => void
}

function ServiceCard({ service: { Icon, name, teaser, description, bullets }, isFlipped, onFlip }: CardProps) {
  return (
    /*
      Outer div: holds perspective so children get proper 3D depth.
      motion.div: the card body that rotates — transformStyle preserve-3d keeps children in shared 3D space.
      Front face: default orientation (no extra rotation) — visible when card at 0deg, hidden when card at 180deg.
      Back face: pre-rotated 180deg — hidden when card at 0deg, visible when card at 180deg (total = 360 = front-facing).
    */
    <div className="h-[380px]" style={{ perspective: '1000px' }}>
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' as const }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        whileHover={{ y: -4 }}
      >
        {/* ── Front face ── */}
        <div
          className="absolute inset-0 flex flex-col gap-5 rounded-2xl border border-rim bg-bg p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_0_28px_rgba(59,130,246,0.13)]"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          } as React.CSSProperties}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Icon size={22} strokeWidth={1.5} />
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <h3 className="font-heading text-lg font-bold leading-snug text-ink">
              {name}
            </h3>
            <p className="font-sans text-sm leading-relaxed text-muted">{teaser}</p>
          </div>

          <button
            onClick={() => onFlip(true)}
            className="w-fit font-sans text-sm font-medium text-cyan transition-opacity duration-150 hover:opacity-70"
            aria-label={`View more about ${name}`}
          >
            View More →
          </button>
        </div>

        {/* ── Back face — pre-rotated 180deg so backface-visibility hides it by default ── */}
        <div
          className="absolute inset-0 flex flex-col gap-4 rounded-2xl border border-accent/30 bg-bg p-6"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          } as React.CSSProperties}
        >
          <p className="font-sans text-sm leading-relaxed text-muted">
            {description}
          </p>

          <div className="flex flex-1 flex-col gap-3">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-muted/70">
              What&apos;s included
            </p>
            <ul className="space-y-2">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2.5 font-sans text-sm text-ink"
                >
                  <span
                    className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => onFlip(false)}
            className="w-fit font-sans text-sm font-medium text-cyan transition-opacity duration-150 hover:opacity-70"
            aria-label={`Go back to ${name} overview`}
          >
            ← Back
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default function Services() {
  const [flipped, setFlipped] = useState<boolean[]>(Array(6).fill(false))
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' })
  const teaserFired = useRef(false)

  /* Auto-flip teaser — fires every time section enters viewport */
  useEffect(() => {
    if (!isInView) {
      teaserFired.current = false
      return
    }
    if (teaserFired.current) return
    teaserFired.current = true

    const flip = setTimeout(() => {
      setFlipped((prev) => { const n = [...prev]; n[0] = true; return n })
    }, 800)

    const unflip = setTimeout(() => {
      setFlipped((prev) => { const n = [...prev]; n[0] = false; return n })
    }, 3000)

    return () => {
      clearTimeout(flip)
      clearTimeout(unflip)
    }
  }, [isInView])

  const handleFlip = (index: number, val: boolean) => {
    setFlipped((prev) => {
      const n = [...prev]
      n[index] = val
      return n
    })
  }

  return (
    <section ref={sectionRef} id="services" className="bg-surface py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-14 lg:mb-16">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Services I Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.name}
              service={service}
              isFlipped={flipped[i]}
              onFlip={(val) => handleFlip(i, val)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
