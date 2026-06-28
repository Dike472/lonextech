'use client'

import Image from 'next/image'
import { FadeUp } from '../ui/FadeUp'

interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  liveUrl: string
  desktopImg: string
  imgStyle: React.CSSProperties
}

const projects: Project[] = [
  {
    id: 'lammysms',
    name: 'LammySMS',
    description:
      'A live SMS verification number reselling platform built for the Nigerian market. Users fund their wallet, purchase virtual numbers from multiple providers, and receive real-time SMS codes for service verification. Built with Next.js, Prisma, MySQL, and Flutterwave payments.',
    tags: ['Next.js', 'Typescript', 'Node.js', 'Prisma', 'MySQL', 'Tailwind CSS'],
    liveUrl: 'https://lammysms.com',
    desktopImg: '/desktop%20screenshot%20for%20lammysms.com.png',
    // contain: every pixel of the screenshot is visible
    imgStyle: {
      objectFit: 'contain',
      objectPosition: 'top center',
    },
  },
  {
    id: 'lammylogs',
    name: 'LammyLogs Marketplace',
    description:
      'A live digital goods marketplace where users buy premium social media accounts and digital products. Features a wallet-based payment system. Built with Laravel, PHP, MySQL, and Bootstrap.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    liveUrl: 'https://lammylogsmarketplace.com',
    desktopImg: '/desktop%20screenshot%20for%20lammylogs.png',
    // cover + top keeps website content fully in frame.
    // clip-path hides only the bottom 5% (≈54px on a 1080p screenshot)
    // which is enough to remove the Windows taskbar pinned apps row.
    // clip-path is purely visual — it never touches the element's box model
    // so it does not conflict with fill's enforced height:100%.
    imgStyle: {
      objectFit: 'cover',
      objectPosition: 'top',
      clipPath: 'inset(0 0 5% 0)',
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <FadeUp className="mb-12 text-center sm:text-left lg:mb-16">
          <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Selected Work
          </p>
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <FadeUp key={project.id} delay={i * 0.12} className="flex">
              <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-rim bg-bg">

                {/* Screenshot */}
                <div className="relative aspect-video w-full overflow-hidden bg-surface">
                  <Image
                    src={project.desktopImg}
                    alt={`${project.name} screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={project.imgStyle}
                    className="transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[20%]"
                    style={{
                      background:
                        'linear-gradient(to bottom, transparent 0%, rgba(5,7,13,0.55) 100%)',
                    }}
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

              </article>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
