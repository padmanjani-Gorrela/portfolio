import { education } from '../data/content'
import { Reveal, SectionLabel } from './ui'

export default function Education() {
  return (
    <section id="education" className="on-ivory bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="06" script="Education & achievements" />
          <h2 className="display text-5xl text-wine sm:text-7xl">Foundations</h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-wine/25 p-8 sm:p-10">
              <p className="font-mono text-xs tracking-[0.2em] text-crimson">{education.period}</p>
              <h3 className="display mt-3 text-4xl text-wine sm:text-5xl">{education.school}</h3>
              <p className="mt-3 text-lg text-ink/85">{education.degree}</p>
              <p className="mt-8 display text-6xl text-crimson">
                {education.cgpa}
              </p>
              <p className="mt-1 text-sm text-ink/70">CGPA</p>
            </div>
          </Reveal>

          <ol className="relative space-y-6 border-l border-crimson/40 pl-8">
            {education.achievements.map((a, i) => (
              <li key={a} className="relative">
                <span className="absolute -left-[2.45rem] top-2 h-3 w-3 rounded-full bg-crimson ring-4 ring-ivory" aria-hidden="true" />
                <Reveal delay={i * 0.1}>
                  <p className="font-mono text-xs tracking-[0.2em] text-crimson">ACHIEVEMENT {String(i + 1).padStart(2, '0')}</p>
                  <p className="mt-2 text-xl text-ink">{a}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
