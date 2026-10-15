import { skills } from '../data/content'
import { Reveal, SectionLabel } from './ui'

export default function Skills() {
  return (
    <section id="skills" className="on-ivory bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="03" script="Technical arsenal" />
          <h2 className="display text-5xl text-wine sm:text-7xl">My engineering toolkit</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.08}>
              <section
                aria-label={group.title}
                className={`group h-full rounded-3xl border border-wine/20 p-6 transition-colors duration-300 hover:border-crimson hover:bg-white/60 ${
                  group.title === 'Core Computer Science' ? 'lg:col-span-2' : ''
                }`}
              >
                <h3 className="font-mono text-xs tracking-[0.25em] text-crimson">
                  <span aria-hidden="true">{String(i + 1).padStart(2, '0')} / </span>
                  {group.title.toUpperCase()}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-wine/25 px-4 py-1.5 text-sm font-medium text-ink transition-colors group-hover:border-crimson/50 hover:bg-wine hover:text-ivory"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
