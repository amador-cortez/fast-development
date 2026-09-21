const COLUMNS = [
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Contact'],
  },
  {
    title: 'Services',
    links: ['Web Apps', 'Mobile Apps', 'Cloud & DevOps', 'AI & Automation'],
  },
  {
    title: 'Resources',
    links: ['Case Studies', 'Documentation', 'Pricing', 'FAQ'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 font-bold text-white">
                F
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                Fast<span className="text-indigo-400">Development</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              A product engineering studio helping startups and enterprises ship better
              software, faster.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="text-sm text-slate-400 transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Fast Development. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">Built for testing purposes with React &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
