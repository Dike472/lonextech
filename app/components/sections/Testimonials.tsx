const testimonials = [
  {
    quote:
      "Dike delivered our client portal in record time and the quality was excellent. His attention to detail and communication throughout the project made the entire process smooth.",
    author: "Amara Okonkwo",
    role: "CEO",
    company: "TechBridge Nigeria",
    initials: "AO",
  },
  {
    quote:
      "Working with Dike on our SMS platform was a great experience. He understood our requirements quickly and built exactly what we needed, with clean, maintainable code.",
    author: "James Okafor",
    role: "Product Manager",
    company: "StartupHub Lagos",
    initials: "JO",
  },
  {
    quote:
      "The dashboard Dike built for us transformed how we track operations. Fast, responsive, and exactly on brand. We'll definitely be hiring him again.",
    author: "Chioma Eze",
    role: "Operations Director",
    company: "NovaBiz Solutions",
    initials: "CE",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-14 lg:mb-16">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            What Clients Say
          </h2>
        </div>

        {/* Testimonial grid — 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="flex flex-col gap-5 rounded-2xl border border-rim bg-surface p-6 lg:p-7"
            >
              {/* Large opening quote mark */}
              <span
                aria-hidden="true"
                className="font-heading text-5xl font-bold leading-none text-accent/30 select-none"
              >
                &#8220;
              </span>

              <p className="flex-1 font-sans text-sm leading-relaxed text-muted">
                {t.quote}
              </p>

              {/* Attribution */}
              <footer className="flex items-center gap-3 border-t border-rim pt-5">
                {/* Avatar initials placeholder */}
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 font-heading text-sm font-bold text-accent"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic font-sans text-sm font-semibold text-ink">
                    {t.author}
                  </cite>
                  <p className="font-sans text-xs text-muted">
                    {t.role}, {t.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
