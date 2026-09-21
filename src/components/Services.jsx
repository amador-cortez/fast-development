const SERVICES = [
  {
    title: 'Web Applications',
    description:
      'Fast, accessible, and SEO-friendly web apps built with modern frameworks like React and Next.js.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    title: 'Mobile Apps',
    description:
      'Native-feel iOS and Android apps from a single React Native codebase, shipped to both stores.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    ),
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Scalable infrastructure on AWS/GCP, CI/CD pipelines, and observability so you sleep at night.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 15a4 4 0 004 4h9a5 5 0 001.7-9.71 6 6 0 00-11.6-2.12A4.5 4.5 0 003 15z"
      />
    ),
  },
  {
    title: 'Product Design',
    description:
      'UX research, wireframes, and pixel-perfect UI design systems that your team can build on for years.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 21h10M12 17v4M4 4h16v9a4 4 0 01-4 4H8a4 4 0 01-4-4V4z"
      />
    ),
  },
  {
    title: 'API & Integrations',
    description:
      'Robust REST/GraphQL APIs, third-party integrations, and payment systems built to scale securely.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: 'AI & Automation',
    description:
      'LLM-powered features, internal tooling, and workflow automation that cut manual work dramatically.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0A5.5 5.5 0 0014 16.5H10a5.5 5.5 0 00-.343-3.264z"
      />
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            What we do
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            End-to-end software delivery
          </p>
          <p className="mt-4 text-lg text-slate-400">
            One team, from the first wireframe to production infrastructure. No handoffs, no
            surprises.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.06]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 text-indigo-300">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {service.icon}
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
