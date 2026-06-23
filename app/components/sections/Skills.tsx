/* Tech icon URLs from Simple Icons CDN — no hand-rolled SVGs */
const categories = [
  {
    label: "Frontend",
    skills: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "REST APIs", icon: "https://cdn.simpleicons.org/fastapi/009688" },
    ],
  },
  {
    label: "Database & Tools",
    skills: [
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/ffffff" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-surface py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header — eyebrow 1 of 3 */}
        <div className="mb-14 lg:mb-16">
          <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Tech Stack
          </p>
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Tools I Build With
          </h2>
        </div>

        {/* Category columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="rounded-2xl border border-rim bg-bg p-6 lg:p-8"
            >
              {/* Category label */}
              <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-muted">
                {cat.label}
              </p>

              {/* Skills list */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
