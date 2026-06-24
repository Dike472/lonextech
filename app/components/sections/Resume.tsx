'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'motion/react'

// ── Tech stack data ───────────────────────────────────────────────────────────

const techCategories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'Next.js',      icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
      { name: 'React',        icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'TypeScript',   icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Laravel',   icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
      { name: 'Node.js',   icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'PHP',       icon: 'https://cdn.simpleicons.org/php/777BB4' },
      { name: 'REST APIs', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
    ],
  },
  {
    label: 'Database & Tools',
    skills: [
      { name: 'MySQL',      icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
      { name: 'Prisma',     icon: 'https://cdn.simpleicons.org/prisma/ffffff' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'Git',        icon: 'https://cdn.simpleicons.org/git/F05032' },
      { name: 'Vercel',     icon: 'https://cdn.simpleicons.org/vercel/ffffff' },
    ],
  },
]

// ── Skills data ───────────────────────────────────────────────────────────────

const softwareSkills = [
  { name: 'HTML & CSS',    value: 90 },
  { name: 'JavaScript',   value: 78 },
  { name: 'TypeScript',   value: 80 },
  { name: 'React',        value: 65 },
  { name: 'Tailwind CSS', value: 70 },
  { name: 'PHP',          value: 80 },
  { name: 'Git & GitHub', value: 72 },
]

const languages = [
  { name: 'English', value: 95 },
  { name: 'Igbo',    value: 90 },
  { name: 'French',  value: 30 },
  { name: 'German',  value: 30 },
]

const personalSkills = [
  'Problem Solving',
  'Team Work',
  'Self-Learning',
  'Attention to Detail',
]

// ── Timeline data ─────────────────────────────────────────────────────────────

const experiences = [
  {
    type: 'work',
    role: 'Full-Stack Web Developer',
    company: 'Freelance',
    period: '2023 - Present',
    description:
      'Designing and building full-stack web applications for clients across Nigeria and internationally. Focus on Next.js frontends, Laravel backends, and MySQL databases.',
    tags: ['Next.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
  },
  {
    type: 'work',
    role: 'Junior Web Developer',
    company: 'Tech Startup (Contract)',
    period: '2022 - 2023',
    description:
      'Developed and maintained web features for an internal business platform. Collaborated with senior developers to ship new features on a biweekly cycle.',
    tags: ['React', 'PHP', 'MySQL'],
  },
]

const education = [
  {
    type: 'education',
    role: 'B.Sc. Computer Science',
    company: 'University of Nigeria',
    period: '2019 - 2023',
    description:
      'Studied core computer science fundamentals including algorithms, data structures, software engineering, and databases. Final year project in web application development.',
    tags: ['Algorithms', 'Databases', 'Software Engineering'],
  },
]

const timeline = [...experiences, ...education]

// ── Animated progress bar ─────────────────────────────────────────────────────

function SkillBar({
  name,
  value,
  color,
  index = 0,
}: {
  name: string
  value: number
  color: 'accent' | 'cyan'
  index?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0 })

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="font-sans text-sm text-ink">{name}</span>
        <span
          className={`font-sans text-sm font-semibold ${
            color === 'accent' ? 'text-accent' : 'text-cyan'
          }`}
        >
          {value}%
        </span>
      </div>
      <div className="h-[3px] w-full overflow-hidden rounded-full bg-rim">
        <motion.div
          className={`h-full rounded-full ${
            color === 'accent' ? 'bg-accent' : 'bg-cyan'
          }`}
          initial={{ width: '0%' }}
          animate={inView ? { width: `${value}%` } : { width: '0%' }}
          transition={{
            duration: 1.1,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: index * 0.08,
          }}
        />
      </div>
    </div>
  )
}

// ── Skill category card ───────────────────────────────────────────────────────

function SkillCategory({
  title,
  accentColor,
  children,
}: {
  title: string
  accentColor: 'accent' | 'cyan'
  children: ReactNode
}) {
  return (
    <div className="rounded-2xl border border-rim bg-bg p-6 lg:p-8">
      <div className="mb-6">
        <p className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-ink">
          {title}
        </p>
        <div
          className={`mt-2 h-[2px] w-8 ${
            accentColor === 'accent' ? 'bg-accent' : 'bg-cyan'
          }`}
        />
      </div>
      {children}
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function Resume() {
  return (
    <section id="resume" className="bg-surface py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="mb-14 text-center sm:text-left lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Resume
          </h2>
        </motion.div>

        {/* ── Tools I Build With sub-heading ── */}
        <div className="mb-8 text-center sm:text-left">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Tools I Build With
          </h3>
        </div>

        {/* ── Tech stack grid ── */}
        <motion.div
          className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
        >
          {techCategories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={{ hidden: { opacity: 0, y: 24, scale: 0.97 }, show: { opacity: 1, y: 0, scale: 1 } }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-rim bg-bg p-6 lg:p-8"
            >
              <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-muted">
                {cat.label}
              </p>
              <ul className="space-y-4">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                      loading="lazy"
                    />
                    <span className="font-sans text-sm font-medium text-ink">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Skills sub-heading ── */}
        <div className="mb-8 text-center sm:text-left">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Skills
          </h3>
        </div>

        {/* ── Skills grid ── */}
        <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <SkillCategory title="Software Skills" accentColor="accent">
            <div className="space-y-5">
              {softwareSkills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} value={s.value} color="accent" index={i} />
              ))}
            </div>
          </SkillCategory>

          <SkillCategory title="Languages" accentColor="cyan">
            <div className="space-y-5">
              {languages.map((l, i) => (
                <SkillBar key={l.name} name={l.name} value={l.value} color="cyan" index={i} />
              ))}
            </div>
          </SkillCategory>

          <SkillCategory title="Personal Skills" accentColor="accent">
            <ul className="space-y-3">
              {personalSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-2.5 font-sans text-sm text-ink">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </SkillCategory>

        </div>

        {/* ── Experience & Education sub-heading ── */}
        <div className="mb-10 text-center sm:text-left">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Experience &amp; Education
          </h3>
        </div>

        {/* ── Timeline (mobile) / Card grid (desktop) ── */}
        <div className="relative">

          {/* Vertical line — hidden on desktop grid */}
          <div
            id="resume-line"
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-rim md:left-8 lg:hidden"
          />

          <ul className="space-y-10 pl-12 pr-4 sm:pr-0 md:pl-20 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0 lg:pl-0 lg:pr-0">
            {timeline.map((entry, i) => (
              <li key={i} className="relative">

                {/* Timeline dot — hidden on desktop */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[calc(2rem+2px)] top-1.5 h-3 w-3 rounded-full border-2 md:-left-[calc(3rem+2px)] lg:hidden ${
                    entry.type === 'work'
                      ? 'border-accent bg-accent/20'
                      : 'border-cyan bg-cyan/20'
                  }`}
                />

                <article className="h-full rounded-2xl border border-rim bg-bg p-5 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <div>
                      <h4 className="font-heading text-lg font-bold text-ink">
                        {entry.role}
                      </h4>
                      <p className="font-sans text-sm font-medium text-accent">
                        {entry.company}
                      </p>
                    </div>
                    <span className="w-fit rounded-full border border-rim bg-surface px-3 py-1 font-sans text-xs text-muted">
                      {entry.period}
                    </span>
                  </div>

                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                    {entry.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-rim bg-surface px-2.5 py-1 font-sans text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        {/* Download CV CTA */}
        <div className="mt-14 flex justify-center lg:mt-16">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-accent/40 px-10 font-sans text-sm font-semibold text-accent transition-colors hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Download Full CV
          </a>
        </div>

      </div>
    </section>
  )
}
