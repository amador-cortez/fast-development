const PROJECTS = [
  {
    name: 'Nimbus Analytics',
    tag: 'SaaS Dashboard',
    description: 'Real-time analytics platform processing 2B+ events/day for e-commerce teams.',
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    name: 'Orbital Fleet',
    tag: 'Mobile App',
    description: 'Cross-platform logistics app used by 15,000+ drivers across 6 countries.',
    gradient: 'from-fuchsia-500 to-pink-600',
  },
  {
    name: 'Lumen Pay',
    tag: 'Fintech Platform',
    description: 'PCI-compliant payments infrastructure processing $40M+ in monthly volume.',
    gradient: 'from-emerald-500 to-teal-600',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Selected work
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Products our clients are proud of
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className={`h-40 w-full bg-gradient-to-br ${project.gradient} opacity-80 transition group-hover:opacity-100`}
              />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                  {project.tag}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{project.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
