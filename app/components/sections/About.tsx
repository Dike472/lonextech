import Image from "next/image";

const stats = [
  { value: "12+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "8+", label: "Happy Clients" },
];

const focuses = [
  "Full-Stack Web Development",
  "UI/UX Implementation",
  "REST API Design",
  "Database Architecture",
  "Performance Optimization",
];

export default function About() {
  return (
    <section id="about" className="py-14 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*
          Grid: items-start ensures both columns top-align on desktop.
          Photo column gets self-start to explicitly pin it to the row's top edge.
        */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[55fr_45fr] lg:gap-28">

          {/* ── Left: Content ── */}
          <div className="order-last flex flex-col gap-7 lg:order-first">
            <div>
              <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
                About Me
              </h2>
            </div>

            <div className="space-y-4 font-sans text-base leading-relaxed text-muted">
              <p>
                I&apos;m Dike Precious, a Full-Stack Web Developer based in Nigeria
                with a passion for building digital products that are both
                beautiful and functional.
              </p>
              <p>
                I specialise in crafting full-stack applications using Next.js
                on the frontend and Laravel on the backend, with a strong focus
                on clean architecture, responsive design, and developer
                experience.
              </p>
              <p>
                When I&apos;m not writing code, I enjoy exploring new technologies,
                contributing to open-source projects, and pushing the limits of
                what&apos;s possible on the web.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-rim pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 font-sans text-xs leading-tight text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Focus areas */}
            <div className="space-y-3 border-t border-rim pt-6">
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-muted">
                What I focus on
              </p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {focuses.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 font-sans text-sm text-ink"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: Photo column ──
              self-start on this grid child guarantees top-alignment with the
              "About Me" heading regardless of the grid's row height.
          */}
          <div className="order-first self-start lg:order-last">

            {/* Mobile: full-width landscape crop — fills screen width, face focused */}
            <div className="relative h-[64vw] w-full overflow-hidden lg:hidden">
              <Image
                src="/profile-photo.png"
                alt="Dike Precious"
                fill
                sizes="100vw"
                className="object-cover object-[50%_20%]"
                style={{ filter: 'brightness(1.15) contrast(1.05)' }}
                priority
              />
              {/* Fades — sized for mobile container height */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-bg via-bg/60 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-bg to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-bg to-transparent"
              />
            </div>

            {/* Desktop: original portrait cutout, pixel-aligned to heading top */}
            <div className="relative hidden w-fit lg:block">
              <Image
                src="/profile-photo.png"
                alt="Dike Precious"
                width={407}
                height={612}
                className="h-[480px] w-auto"
                style={{ filter: 'brightness(1.1) contrast(1.05)' }}
                priority
              />
              {/* Bottom fade — strongest */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-bg via-bg/65 to-transparent"
              />
              {/* Left edge fade */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-bg to-transparent"
              />
              {/* Right edge fade */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-bg to-transparent"
              />
              {/* Top fade */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-bg/50 to-transparent"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
