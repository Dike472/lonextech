const experiences = [
  {
    type: "work",
    role: "Full-Stack Web Developer",
    company: "Freelance",
    period: "2023 - Present",
    description:
      "Designing and building full-stack web applications for clients across Nigeria and internationally. Focus on Next.js frontends, Laravel backends, and MySQL databases.",
    tags: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
  },
  {
    type: "work",
    role: "Junior Web Developer",
    company: "Tech Startup (Contract)",
    period: "2022 - 2023",
    description:
      "Developed and maintained web features for an internal business platform. Collaborated with senior developers to ship new features on a biweekly cycle.",
    tags: ["React", "PHP", "MySQL"],
  },
];

const education = [
  {
    type: "education",
    role: "B.Sc. Computer Science",
    company: "University of Nigeria",
    period: "2019 - 2023",
    description:
      "Studied core computer science fundamentals including algorithms, data structures, software engineering, and databases. Final year project in web application development.",
    tags: ["Algorithms", "Databases", "Software Engineering"],
  },
];

const timeline = [...experiences, ...education];

export default function Resume() {
  return (
    <section id="resume" className="bg-surface py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-14 lg:mb-16">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Experience &amp; Education
          </h2>
        </div>

        {/* Timeline — the GSAP line-draw will animate the vertical line later */}
        <div className="relative">

          {/* Vertical timeline line — static for now, targeted by GSAP in animation pass */}
          <div
            id="resume-line"
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-rim md:left-8"
          />

          <ul className="space-y-10 pl-12 md:pl-20">
            {timeline.map((entry, i) => (
              <li key={i} className="relative">

                {/* Timeline dot */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[calc(2rem+2px)] top-1.5 h-3 w-3 rounded-full border-2 md:-left-[calc(3rem+2px)] ${
                    entry.type === "work"
                      ? "border-accent bg-accent/20"
                      : "border-cyan bg-cyan/20"
                  }`}
                />

                {/* Entry card */}
                <article className="rounded-2xl border border-rim bg-bg p-5 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-ink">
                        {entry.role}
                      </h3>
                      <p className="font-sans text-sm font-medium text-accent">
                        {entry.company}
                      </p>
                    </div>
                    <span className="rounded-full border border-rim bg-surface px-3 py-1 font-sans text-xs text-muted sm:shrink-0">
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
  );
}
