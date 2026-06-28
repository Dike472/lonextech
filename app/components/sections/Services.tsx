'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Frame, Globe, Smartphone, Cpu, Settings2 } from 'lucide-react'
import { FadeUp } from '../ui/FadeUp'

interface Service {
  id: string
  Icon: React.ElementType
  name: string
  description: string
  bullets: string[]
}

const services: Service[] = [
  {
    id: 'uiux',
    Icon: Frame,
    name: 'UI / UX DESIGN',
    description:
      'I design Simple, clean, and easy-to-use interfaces for the best user experience.',
    bullets: [
      'Website UI design',
      'Mobile app UI design',
      'Wireframes & prototypes',
      'Brand interface design',
      'And lots more',
    ],
  },
  {
    id: 'web',
    Icon: Globe,
    name: 'WEB DEVELOPMENT',
    description:
      'I build Modern and responsive websites built to look great and work smoothly on all devices.',
    bullets: [
      'Business & portfolio websites',
      'Landing pages',
      'E-commerce websites',
      'Investment platforms',
      'Website redesigns',
      'Custom web solutions',
    ],
  },
  {
    id: 'mobile',
    Icon: Smartphone,
    name: 'MOBILE APP DEVELOPMENT',
    description: 'I build Cross-platform Android and iOS apps for any business.',
    bullets: [
      'Android applications',
      'iOS applications',
      'Cross-platform apps',
      'Delivery & tracking apps',
      'Real-time apps',
      'API-powered mobile application',
    ],
  },
  {
    id: 'ai',
    Icon: Cpu,
    name: 'AI & API INTEGRATION',
    description:
      'Connecting your website or app with smart tools and third-party services for better functionality and performance.',
    bullets: [
      'AI chatbot integration',
      'Image detection systems',
      'Payment gateway integration',
      'SMS & email systems',
      'Third-party API integration',
      'Automation tools',
    ],
  },
  {
    id: 'maintenance',
    Icon: Settings2,
    name: 'MAINTENANCE & SUPPORT',
    description: 'Keeping your website fast, secure and fully functional.',
    bullets: [
      'Website updates & bug fixes',
      'Performance optimization',
      'Security updates',
      'Hosting & deployment',
      'SEO improvements',
    ],
  },
]

// ── Card ─────────────────────────────────────────────────────────────────────

interface CardProps {
  service: Service
  isFlipped: boolean
  onFlip: (val: boolean) => void
}

function ServiceCard({
  service: { Icon, name, description, bullets },
  isFlipped,
  onFlip,
}: CardProps) {
  return (
    <motion.div
      className="service-card-wrapper"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      style={{ height: '100%', perspective: '1000px' }}
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d' as const,
          position: 'relative',
          height: '100%',
          minHeight: '280px',
          width: '100%',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* ── Front ── */}
        <div
          className="service-card-face"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem',
            borderRadius: '12px',
            background: '#0F1420',
            border: '1px solid rgba(59,130,246,0.3)',
            boxShadow: '0 0 24px rgba(59,130,246,0.07)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          } as React.CSSProperties}
        >
          {/* Icon */}
          <div
            style={{
              width: 52,
              height: 52,
              flexShrink: 0,
              background: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon size={24} color="#3B82F6" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3
            style={{
              marginTop: '1.5rem',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#F5F7FA',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {name}
          </h3>

          {/* Description */}
          <p
            style={{
              marginTop: '0.75rem',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              color: '#94A3B8',
              flex: 1,
            }}
          >
            {description}
          </p>

          {/* CTA */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onFlip(true)
            }}
            style={{
              paddingTop: '1.5rem',
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              color: '#3B82F6',
              textTransform: 'uppercase',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'inherit',
            }}
            aria-label={`Learn more about ${name}`}
          >
            VIEW MORE →
          </button>
        </div>

        {/* ── Back ── */}
        <div
          className="service-card-face"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem',
            borderRadius: '12px',
            background: '#0F1420',
            border: '1px solid rgba(59,130,246,0.3)',
            boxShadow: '0 0 24px rgba(59,130,246,0.07)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          } as React.CSSProperties}
        >
          {/* Title */}
          <h3
            style={{
              flexShrink: 0,
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#3B82F6',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {name}
          </h3>

          {/* Bullet list */}
          <ul
            className="service-card-list"
            style={{
              flex: 1,
              marginTop: '1rem',
              overflowY: 'auto',
              listStyle: 'none',
              padding: 0,
              margin: '1rem 0 0',
            }}
          >
            {bullets.map((bullet) => (
              <li
                key={bullet}
                style={{
                  borderLeft: '2px solid #3B82F6',
                  paddingLeft: '0.75rem',
                  paddingTop: '0.4rem',
                  paddingBottom: '0.4rem',
                  fontSize: '0.875rem',
                  color: '#F5F7FA',
                }}
              >
                {bullet}
              </li>
            ))}
          </ul>

          {/* Go back */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onFlip(false)
            }}
            style={{
              flexShrink: 0,
              paddingTop: '1rem',
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              color: '#94A3B8',
              textTransform: 'uppercase',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'inherit',
            }}
            aria-label={`Go back to ${name} overview`}
          >
            ← GO BACK
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function Services() {
  const [flipped, setFlipped] = useState<boolean[]>(
    Array(services.length).fill(false)
  )
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const teaserFired = useRef(false)

  useEffect(() => {
    if (!isInView) {
      teaserFired.current = false
      return
    }
    if (teaserFired.current) return
    teaserFired.current = true

    // flip card 0 to back after 0.8s, hold 1.5s, flip back
    const flipTimer = setTimeout(() => {
      setFlipped((prev) => {
        const n = [...prev]
        n[0] = true
        return n
      })
    }, 800)

    const unflipTimer = setTimeout(() => {
      setFlipped((prev) => {
        const n = [...prev]
        n[0] = false
        return n
      })
    }, 2900) // 800 + 600 (animation) + 1500 (hold)

    return () => {
      clearTimeout(flipTimer)
      clearTimeout(unflipTimer)
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
        <FadeUp className="mb-14 text-center sm:text-left lg:mb-16">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Services I Offer
          </h2>
        </FadeUp>

        {/*
          6-column grid on desktop:
          cards 0-2 each span 2 columns → fills the 3-col row
          card 3 starts at col 2 and spans 2 → centered left
          card 4 starts at col 4 and spans 2 → centered right
          result: row 2 has 2 cards centred under the 3-card row
        */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, i) => {
            const lgClass =
              i === 0
                ? 'lg:col-span-2'
                : i === 1
                  ? 'lg:col-span-2'
                  : i === 2
                    ? 'lg:col-span-2'
                    : i === 3
                      ? 'lg:col-start-2 lg:col-span-2'
                      : 'lg:col-start-4 lg:col-span-2'

            return (
              <FadeUp
                key={service.id}
                delay={i * 0.08}
                className={`h-full ${lgClass}`}
              >
                <ServiceCard
                  service={service}
                  isFlipped={flipped[i]}
                  onFlip={(val) => handleFlip(i, val)}
                />
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
