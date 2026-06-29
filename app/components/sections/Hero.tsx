"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";

const photoEntrance = {
  initial: { opacity: 0, x: 40, scale: 0.96 },
  animate: { opacity: 1, x: 0, scale: 1 },
  transition: {
    duration: 0.8,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    delay: 0.3,
  },
};


export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 300], [0, -40]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(
        ".hero-word",
        { y: 30, opacity: 0, duration: 0.5, ease: "power2.out", stagger: 0.15 },
        0
      )
        .from(
          ".hero-role",
          { opacity: 0, y: 8, duration: 0.4, ease: "power2.out" },
          0.4
        )
        .from(
          ".hero-bio",
          { opacity: 0, y: 8, duration: 0.4, ease: "power2.out" },
          0.6
        )
        .from(
          ".hero-ctas",
          { opacity: 0, y: 8, duration: 0.4, ease: "power2.out" },
          0.8
        );
    }, sectionRef.current!);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] overflow-x-hidden flex items-center"
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

          {/* Two-column hero grid */}
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[60fr_40fr] md:gap-8 lg:grid-cols-[55fr_45fr] lg:gap-12 xl:gap-16">

            {/* ── LEFT: Text column ── */}
            <div className="flex flex-col items-center gap-7 text-center md:items-start md:text-left">

              {/* Availability badge */}
              <div className="flex w-fit items-center gap-2.5 rounded-full border border-rim bg-surface px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-cyan" />
                <span className="font-sans text-xs font-medium tracking-wide text-muted">
                  Open to new opportunities
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="whitespace-nowrap font-heading text-3xl font-extrabold leading-[1.04] tracking-[-0.02em] text-ink sm:text-4xl lg:text-5xl">
                  <span className="hero-word">Hi, I&apos;m </span>
                  <span className="hero-word text-accent">Dike Precious</span>
                </h1>
                <p className="hero-role font-heading text-lg font-semibold tracking-[-0.01em] text-muted sm:text-xl lg:text-2xl">
                  Full-Stack Web Developer
                </p>
              </div>

              {/* Bio */}
              <p className="hero-bio font-sans text-base leading-relaxed text-muted sm:text-lg max-w-[65ch]">
                A passionate Web Developer focused on creating modern, responsive and user-friendly web solutions..
              </p>

              {/* ── Mobile-only photo (between bio and CTAs) ── */}
              <motion.div
                className="relative mx-auto w-full max-w-[280px] md:hidden"
                style={{
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 72% 78% at 50% 44%, black 0%, black 52%, transparent 80%)",
                  maskImage:
                    "radial-gradient(ellipse 72% 78% at 50% 44%, black 0%, black 52%, transparent 80%)",
                }}
                {...photoEntrance}
              >
                <Image
                  src="/profile-photo.png"
                  alt="Dike Precious — Full-Stack Web Developer"
                  width={380}
                  height={480}
                  priority
                  sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 380px"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "380px",
                    objectFit: "contain",
                    objectPosition: "top",
                    position: "relative",
                    zIndex: 1,
                    background: "transparent",
                  }}
                />
              </motion.div>

              {/* CTAs */}
              <div className="hero-ctas flex flex-wrap justify-center gap-3 md:justify-start">
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
              <div className="flex items-center justify-center gap-4 border-t border-rim pt-6 md:justify-start">
                <a
                  href="https://github.com/Dike472"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex min-h-[44px] items-center gap-2 font-sans text-sm text-muted transition-colors duration-200 hover:text-accent"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
                <span className="h-4 w-px bg-rim" aria-hidden="true" />
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex min-h-[44px] items-center gap-2 font-sans text-sm text-muted transition-colors duration-200 hover:text-accent"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <span className="h-4 w-px bg-rim" aria-hidden="true" />
                <a
                  href="https://x.com/Dikepre33728817"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="inline-flex min-h-[44px] items-center gap-2 font-sans text-sm text-muted transition-colors duration-200 hover:text-accent"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter
                </a>
              </div>


            </div>

            {/* ── RIGHT: Photo column (tablet + desktop) ── */}
            <motion.div
              className="relative mx-auto hidden w-full max-w-[340px] md:block lg:max-w-[380px]"
              style={{
                y: photoY,
                willChange: "transform",
                background: "transparent",
                border: "none",
                boxShadow: "none",
                WebkitMaskImage:
                  "radial-gradient(ellipse 72% 78% at 50% 44%, black 0%, black 52%, transparent 80%)",
                maskImage:
                  "radial-gradient(ellipse 72% 78% at 50% 44%, black 0%, black 52%, transparent 80%)",
              }}
              {...photoEntrance}
            >
              <Image
                src="/profile-photo.png"
                alt="Dike Precious — Full-Stack Web Developer"
                width={460}
                height={575}
                priority
                sizes="(max-width: 1024px) 340px, 380px"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 1,
                  background: "transparent",
                }}
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
