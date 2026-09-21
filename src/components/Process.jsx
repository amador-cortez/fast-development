const STEPS = [
  {
    step: '01',
    title: 'Discover',
    description: 'We dig into your goals, users, and constraints to scope the right MVP.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Rapid prototyping and UI design, validated with real users before we write code.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Agile sprints with weekly demos, so you always know exactly where things stand.',
  },
  {
    step: '04',
    title: 'Launch & Scale',
    description: 'We ship to production and stick around to monitor, iterate, and scale with you.',
  },
]

export default function Process() {
  return (
    <section id="process" className="border-t border-white/10 bg-white/[0.02] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            How we work
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A process built for speed
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          {STEPS.map((item, idx) => (
            <div key={item.step} className="relative">
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-6">
                <span className="text-4xl font-bold text-white/10">{item.step}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              </div>
              {idx < STEPS.length - 1 && (
                <div className="mt-8 hidden h-px w-full bg-gradient-to-r from-white/20 to-transparent md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
