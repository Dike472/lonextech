'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'motion/react'
import { FadeUp } from '../ui/FadeUp'
import {
  siNextdotjs, siReact, siTypescript, siTailwindcss,
  siLaravel, siNodedotjs, siPhp, siFastapi,
  siMysql, siPrisma, siPostgresql, siGit, siVercel,
} from 'simple-icons'

// ── Inline SVG icon renderer ──────────────────────────────────────────────────

function TechIcon({ icon, color }: { icon: { path: string }; color: string }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
      className="h-6 w-6 shrink-0"
    >
      <path d={icon.path} />
    </svg>
  )
}

// ── Tech stack data ───────────────────────────────────────────────────────────

const techCategories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'Next.js',      icon: siNextdotjs,    color: '#ffffff' },
      { name: 'React',        icon: siReact,         color: '#61DAFB' },
      { name: 'TypeScript',   icon: siTypescript,    color: '#3178C6' },
      { name: 'Tailwind CSS', icon: siTailwindcss,   color: '#06B6D4' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Laravel',   icon: siLaravel,   color: '#FF2D20' },
      { name: 'Node.js',   icon: siNodedotjs, color: '#339933' },
      { name: 'PHP',       icon: siPhp,       color: '#777BB4' },
      { name: 'REST APIs', icon: siFastapi,   color: '#009688' },
    ],
  },
  {
    label: 'Database & Tools',
    skills: [
      { name: 'MySQL',      icon: siMysql,      color: '#4479A1' },
      { name: 'Prisma',     icon: siPrisma,     color: '#ffffff' },
      { name: 'PostgreSQL', icon: siPostgresql, color: '#4169E1' },
      { name: 'Git',        icon: siGit,        color: '#F05032' },
      { name: 'Vercel',     icon: siVercel,     color: '#ffffff' },
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

type TimelineEntry = {
  type: 'work' | 'education'
  role: string
  company: string
  period: string
  description: string
  tags?: string[]
}

const experiences: TimelineEntry[] = [
  {
    type: 'work',
    role: 'Full-Stack Web Developer',
    company: 'Freelance',
    period: '2020 - Present',
    description:
      'Designing and building full-stack web products for clients across Nigeria and beyond. Delivered live platforms including an SMS verification marketplace and a digital goods marketplace — both fully deployed and serving real users.',
    
  },
  {
    type: 'work',
    role: 'Frontend Developer',
    company: 'Real Estate Project',
    period: '2022 - 2023',
    description:
      'Built the frontend interface for a real estate listings platform — property search, filtering, detailed listing pages, and a responsive layout optimised for mobile users. Focused on clean UI, fast load times, and smooth user experience across devices.',
   
  },
]

const education: TimelineEntry[] = [
  {
    type: 'education',
    role: 'B.Sc. Computer Science',
    company: 'Nnamdi Azikwe University Nigeria',
    period: '2020 - 2025',
    description:
      'Earned a Bachelor of Science in Computer Science with a focus on software engineering, database systems, and web application development. Gained strong theoretical and practical foundations that directly underpin my approach to building scalable, well-architected web systems.',
   
  },
]

const timeline: TimelineEntry[] = [...experiences, ...education]

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
        <span className={`font-sans text-sm font-semibold ${color === 'accent' ? 'text-accent' : 'text-cyan'}`}>
          {value}%
        </span>
      </div>
      <div className="h-[3px] w-full overflow-hidden rounded-full bg-rim">
        <motion.div
          className={`h-full rounded-full ${color === 'accent' ? 'bg-accent' : 'bg-cyan'}`}
          initial={{ width: '0%' }}
          animate={inView ? { width: `${value}%` } : { width: '0%' }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.08 }}
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
        <p className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-ink">{title}</p>
        <div className={`mt-2 h-[2px] w-8 ${accentColor === 'accent' ? 'bg-accent' : 'bg-cyan'}`} />
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

        <FadeUp className="mb-14 text-center sm:text-left lg:mb-16">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Resume
          </h2>
        </FadeUp>

        {/* ── Tools I Build With ── */}
        <FadeUp className="mb-8 text-center sm:text-left">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Tools I Build With
          </h3>
        </FadeUp>

        <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((cat, i) => (
            <FadeUp key={cat.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-rim bg-bg p-6 lg:p-8">
                <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-muted">
                  {cat.label}
                </p>
                <ul className="space-y-4">
                  {cat.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-4">
                      <TechIcon icon={skill.icon} color={skill.color} />
                      <span className="font-sans text-sm font-medium text-ink">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* ── Skills ── */}
        <FadeUp className="mb-8 text-center sm:text-left">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Skills
          </h3>
        </FadeUp>

        <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FadeUp>
            <SkillCategory title="Software Skills" accentColor="accent">
              <div className="space-y-5">
                {softwareSkills.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} value={s.value} color="accent" index={i} />
                ))}
              </div>
            </SkillCategory>
          </FadeUp>

          <FadeUp delay={0.1}>
            <SkillCategory title="Languages" accentColor="cyan">
              <div className="space-y-5">
                {languages.map((l, i) => (
                  <SkillBar key={l.name} name={l.name} value={l.value} color="cyan" index={i} />
                ))}
              </div>
            </SkillCategory>
          </FadeUp>

          <FadeUp delay={0.2}>
            <SkillCategory title="Personal Skills" accentColor="accent">
              <ul className="space-y-3">
                {personalSkills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 font-sans text-sm text-ink">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </SkillCategory>
          </FadeUp>
        </div>

        {/* ── Experience & Education ── */}
        <FadeUp className="mb-10 text-center sm:text-left">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Experience &amp; Education
          </h3>
        </FadeUp>

        <div className="relative">
          <div
            id="resume-line"
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-rim md:left-8 lg:hidden"
          />

          <ul className="space-y-10 pl-12 pr-4 sm:pr-0 md:pl-20 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0 lg:pl-0 lg:pr-0">
            {timeline.map((entry, i) => (
              <li key={i} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[calc(2rem+2px)] top-1.5 h-3 w-3 rounded-full border-2 md:-left-[calc(3rem+2px)] lg:hidden ${
                    entry.type === 'work' ? 'border-accent bg-accent/20' : 'border-cyan bg-cyan/20'
                  }`}
                />
                <FadeUp delay={i * 0.1} className="h-full">
                  <article className="h-full rounded-2xl border border-rim bg-bg p-5 sm:p-6">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                      <div>
                        <h4 className="font-heading text-lg font-bold text-ink">{entry.role}</h4>
                        <p className="font-sans text-sm font-medium text-accent">{entry.company}</p>
                      </div>
                      <span className="w-fit rounded-full border border-rim bg-surface px-3 py-1 font-sans text-xs text-muted">
                        {entry.period}
                      </span>
                    </div>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-muted">{entry.description}</p>
                    {entry.tags && entry.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {entry.tags.map((tag) => (
                          <span key={tag} className="rounded-md border border-rim bg-surface px-2.5 py-1 font-sans text-xs text-muted">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>

        {/* Download CV CTA */}
        <FadeUp className="mt-14 flex justify-center lg:mt-16">
          <a
            href="/api/download-cv"
            download="Dike_Precious_CV.pdf"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-accent/40 px-10 font-sans text-sm font-semibold text-accent transition-colors hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </FadeUp>

      </div>
    </section>
  )
}
