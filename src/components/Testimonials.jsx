const TESTIMONIALS = [
  {
    quote:
      'Fast Development shipped our MVP in six weeks — faster and cleaner than any agency we\'d worked with before. They think like founders, not contractors.',
    name: 'Elena Marsh',
    role: 'CEO, Nimbus Analytics',
  },
  {
    quote:
      'The team caught architectural issues before they became expensive problems. Communication was constant and the code quality was excellent.',
    name: 'Marcus Odell',
    role: 'CTO, Orbital Fleet',
  },
  {
    quote:
      'We came in needing a payments overhaul. They delivered a PCI-compliant platform ahead of schedule and under budget.',
    name: 'Priya Nandan',
    role: 'VP Engineering, Lumen Pay',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-white/10 bg-white/[0.02] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Testimonials
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Don&apos;t just take our word for it
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <blockquote className="text-sm leading-7 text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm font-semibold text-white">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
