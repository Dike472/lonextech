export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden flex items-center"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-accent/8 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] bottom-1/4 h-[280px] w-[280px] rounded-full bg-cyan/5 blur-[100px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100dvh-4rem)] flex-col justify-center py-20">
          <div className="flex max-w-2xl flex-col gap-7">

            {/* Availability badge */}
            <div className="flex w-fit items-center gap-2.5 rounded-full border border-rim bg-surface px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan" />
              <span className="font-sans text-xs font-medium tracking-wide text-muted">
                Open to new opportunities
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-heading text-5xl font-extrabold leading-[1.04] tracking-[-0.03em] text-ink text-balance sm:text-6xl lg:text-7xl">
                Dike
                <br />
                <span className="text-accent">Precious</span>
              </h1>
              <p className="font-heading text-lg font-semibold tracking-[-0.01em] text-muted sm:text-xl lg:text-2xl">
                Full-Stack Web Developer
              </p>
            </div>

            {/* Bio */}
            <p className="font-sans text-base leading-relaxed text-muted sm:text-lg">
              Building premium digital experiences with Next.js, Laravel, and
              modern web technologies. Passionate about clean code and
              pixel-perfect interfaces.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-8 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-rim px-8 font-sans text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent/40 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Hire Me
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 border-t border-rim pt-6">
              <a
                href="https://github.com/Dike472"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center font-sans text-sm text-muted transition-colors duration-200 hover:text-accent"
              >
                GitHub
              </a>
              <span className="h-4 w-px bg-rim" aria-hidden="true" />
              <a
                href="#"
                className="inline-flex min-h-[44px] items-center font-sans text-sm text-muted transition-colors duration-200 hover:text-accent"
              >
                LinkedIn
              </a>
              <span className="h-4 w-px bg-rim" aria-hidden="true" />
              <a
                href="#"
                className="inline-flex min-h-[44px] items-center font-sans text-sm text-muted transition-colors duration-200 hover:text-accent"
              >
                Twitter
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-2">
              <div>
                <p className="font-heading text-3xl font-bold text-ink">3+</p>
                <p className="font-sans text-xs text-muted">Years Experience</p>
              </div>
              <span className="h-12 w-px bg-rim" aria-hidden="true" />
              <div>
                <p className="font-heading text-3xl font-bold text-accent">12+</p>
                <p className="font-sans text-xs text-muted">Projects Delivered</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
