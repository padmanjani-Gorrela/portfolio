import { experience } from '../data/content'
import { Reveal, SectionLabel } from './ui'

export default function Experience() {
  return (
    <section id="experience" className="grain bg-wine py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="02" script="Experience" light />
          <h2 className="display text-5xl sm:text-7xl">
            Engineering in
            <br />
            the real world
          </h2>
        </Reveal>

        <ol className="relative mt-16 space-y-10 border-l border-ivory/30 pl-6 sm:pl-12">
          {experience.map((e, i) => (
            <li key={e.org} className="relative">
              <span
                className="absolute -left-[1.95rem] top-3 h-3 w-3 rounded-full bg-ivory ring-4 ring-wine sm:-left-[3.45rem]"
                aria-hidden="true"
              />
              <Reveal delay={i * 0.1}>
                <article className="grid gap-6 rounded-[2rem] border border-ivory/20 bg-ink/25 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
                  <header>
                    <p className="font-mono text-xs tracking-[0.2em] text-rose">{e.period}</p>
                    <h3 className="display mt-3 text-4xl sm:text-5xl">{e.org}</h3>
                    <p className="mt-2 text-lg text-ivory/90">{e.role}</p>
                    <p className="script mt-3 text-2xl text-rose">{e.team}</p>
                  </header>
                  <div>
                    <p className="text-lg leading-relaxed text-ivory/90">{e.description}</p>
                    <ul className="mt-5 space-y-2">
                      {e.points.map((p) => (
                        <li key={p} className="flex gap-3 text-ivory/85">
                          <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-rose" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    {e.note && <p className="mt-5 border-t border-ivory/15 pt-4 text-sm text-rose">{e.note}</p>}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
