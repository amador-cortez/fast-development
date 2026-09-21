export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 lg:pt-48 lg:pb-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for new projects — Q4 2026
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            We build software that
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}
              ships fast
            </span>{' '}
            and scales further.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Fast Development is a product engineering studio. We partner with startups and
            enterprises to design, build, and ship web, mobile, and cloud platforms — without
            the agency overhead.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-indigo-500 px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 sm:w-auto"
            >
              Book a free consult
            </a>
            <a
              href="#work"
              className="w-full rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto"
            >
              View our work
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-widest">Trusted by teams at</span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-400">
              <span>Nimbus</span>
              <span>Orbital</span>
              <span>Lumen&nbsp;Labs</span>
              <span>Vertex</span>
              <span>Ferro&nbsp;Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
