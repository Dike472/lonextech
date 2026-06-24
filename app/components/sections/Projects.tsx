'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const projects = [
  {
    id: 'lammysms',
    name: 'LammySMS',
    description:
      'Live platform — SMS verification number reselling with Flutterwave payments, Next.js, Laravel, MySQL',
    tags: ['Next.js', 'Laravel', 'MySQL', 'Flutterwave', 'Tailwind CSS'],
    liveUrl: 'https://lammysms.com',
    desktopImg: '/desktop%20screenshot%20for%20lammysms.com.png',
  },
  {
    id: 'lammylogs',
    name: 'LammyLogs Marketplace',
    description:
      'Live marketplace — digital goods marketplace with wallet system, Telegram delivery, Laravel + MySQL',
    tags: ['Laravel', 'MySQL', 'Telegram API', 'Tailwind CSS'],
    liveUrl: 'https://lammylogsmarketplace.com',
    desktopImg: '/desktop%20screenshot%20for%20lammylogs.png',
  },
]

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1 },
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="mb-12 text-center sm:text-left lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Selected Work
          </p>
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
        </motion.div>

        {/* Staggered project grid */}
        <motion.div
          className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              transition={{ duration: 0.6, ease }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-rim bg-bg"
            >
              {/* Screenshot area */}
              <div className="relative h-[220px] w-full overflow-hidden sm:h-[240px] lg:h-[260px]">
                <Image
                  src={project.desktopImg}
                  alt={project.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                />
                {/* Subtle bottom fade */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%]"
                  style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(5,7,13,0.55) 100%)' }}
                />
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <div className="flex-1 space-y-3">
                  <h3 className="font-heading text-xl font-bold text-ink sm:text-2xl">
                    {project.name}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-rim bg-bg px-3 py-1 font-sans text-xs font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-accent px-6 font-sans text-sm font-semibold text-white transition-all duration-200 hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.40)] sm:w-auto"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
