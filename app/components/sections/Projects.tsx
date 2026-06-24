import Image from 'next/image'

const projects = [
  {
    id: "lammysms",
    name: "LammySMS",
    description:
      "Live platform — SMS verification number reselling with Flutterwave payments, Next.js, Laravel, MySQL",
    tags: ["Next.js", "Laravel", "MySQL", "Flutterwave", "Tailwind CSS"],
    liveUrl: "https://lammysms.com",
    githubUrl: "#",
    desktopImg: "/desktop%20screenshot%20for%20lammysms.com.png",
    mobileImg: "/mobile%20screenshot%20for%20lammysms.com.png",
  },
  {
    id: "lammylogs",
    name: "LammyLogs Marketplace",
    description:
      "Live marketplace — digital goods marketplace with wallet system, Telegram delivery, Laravel + MySQL",
    tags: ["Laravel", "MySQL", "Telegram API", "Tailwind CSS"],
    liveUrl: "https://lammylogsmarketplace.com",
    githubUrl: "#",
    desktopImg: "/desktop%20screenshot%20for%20lammylogs.png",
    mobileImg: "/mobile%20screenshot%20for%20lammylogs.png",
  },
]

interface ProjectImgProps {
  desktopSrc: string
  mobileSrc: string
  alt: string
}

function ProjectImg({ desktopSrc, mobileSrc, alt }: ProjectImgProps) {
  return (
    <>
      {/* Desktop screenshot — visible on sm+ */}
      <Image
        src={desktopSrc}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="hidden object-cover object-top transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] sm:block"
      />
      {/* Mobile screenshot — visible only on xs */}
      <Image
        src={mobileSrc}
        alt={alt}
        fill
        sizes="100vw"
        className="block object-cover object-top transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] sm:hidden"
      />
    </>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12 lg:mb-16">
          <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Selected Work
          </p>
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
        </div>

        {/* Equal 2-col grid on desktop, single col on mobile — items-stretch forces equal card heights */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-t-2 border-rim border-t-accent bg-surface"
            >
              {/* Screenshot area */}
              <div className="relative h-[200px] w-full overflow-hidden sm:h-[240px] lg:h-[260px]">
                <ProjectImg
                  desktopSrc={project.desktopImg}
                  mobileSrc={project.mobileImg}
                  alt={project.name}
                />
                {/* Lighter overlay — only covers bottom 40%, screenshot is fully visible above */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
                  style={{ background: 'linear-gradient(to bottom, transparent 80%, rgba(5,7,13,0.4) 100%)' }}
                />
              </div>

              {/* Card content — flex-1 so all cards stretch to same height */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
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

                {/* Buttons — stack on mobile, row on sm+ */}
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-accent px-6 font-sans text-sm font-semibold text-white transition-all duration-200 hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.40)] sm:w-auto"
                  >
                    View Live
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg border border-rim px-6 font-sans text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:bg-surface-raised sm:w-auto"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
