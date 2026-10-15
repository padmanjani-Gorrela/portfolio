import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/content'
import { ExternalLink, Reveal, SectionLabel } from './ui'

function Architecture({ layers }: { layers: string[] }) {
  return (
    <div className="mt-6 rounded-2xl border border-ivory/20 bg-ink/30 p-4" role="img" aria-label={`Layered architecture: ${layers.join(', then ')}`}>
      <ol className="flex flex-col gap-2" aria-hidden="true">
        {layers.map((l, i) => (
          <li key={l} className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-rose">{String(i + 1).padStart(2, '0')}</span>
            <span
              className="flex-1 rounded-lg border border-ivory/25 bg-wine/60 px-3 py-1.5 font-mono text-xs text-ivory"
              style={{ marginLeft: `${i * 6}px` }}
            >
              {l}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="on-ivory bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="04" script="Featured projects" />
          <h2 className="display text-5xl text-wine sm:text-7xl">
            Engineering depth,
            <br />
            as case studies
          </h2>
        </Reveal>

        <div className="mt-16 space-y-14">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <article className="grain group overflow-hidden rounded-[2.25rem] bg-wine text-ivory transition-transform duration-500 hover:-translate-y-1">
                <div className={`grid gap-0 lg:grid-cols-2 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div className="flex flex-col justify-between bg-crimson/70 p-8 sm:p-12">
                    <div>
                      <p className="font-mono text-xs tracking-[0.25em] text-rose">
                        PROJECT {p.index} · {p.category.toUpperCase()}
                      </p>
                      <h3 className="display mt-4 text-5xl sm:text-6xl">{p.title}</h3>
                    </div>
                    <div className="mt-10">
                      <p className="display text-[5.5rem] leading-none sm:text-[8rem]" aria-label={`Approximately ${p.metric.replace('~', '')} ${p.metricLabel}`}>
                        <span aria-hidden="true">{p.metric}</span>
                      </p>
                      <p className="mt-2 font-mono text-sm tracking-wide text-ivory/90" aria-hidden="true">
                        {p.metricLabel}
                      </p>
                    </div>
                    <Architecture layers={p.layers} />
                  </div>

                  <div className="p-8 sm:p-12">
                    <p className="text-lg leading-relaxed text-ivory/90">{p.description}</p>

                    <h4 className="mt-8 font-mono text-xs tracking-[0.25em] text-rose">ENGINEERING HIGHLIGHTS</h4>
                    <ul className="mt-4 space-y-2.5">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-ivory/90">
                          <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-rose" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <h4 className="mt-8 font-mono text-xs tracking-[0.25em] text-rose">TECH STACK</h4>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li key={s} className="rounded-full border border-ivory/35 px-3.5 py-1 text-sm">
                          {s}
                        </li>
                      ))}
                    </ul>

                    {(p.sourceUrl || p.demoUrl) && (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {p.sourceUrl && (
                          <ExternalLink
                            href={p.sourceUrl}
                            aria-label={`View source for ${p.title}`}
                            className="inline-flex items-center gap-1.5 rounded-full bg-ivory px-5 py-2.5 font-medium text-wine"
                          >
                            View Source <ArrowUpRight size={16} aria-hidden="true" />
                          </ExternalLink>
                        )}
                        {p.demoUrl && (
                          <ExternalLink
                            href={p.demoUrl}
                            aria-label={`Live demo of ${p.title}`}
                            className="inline-flex items-center gap-1.5 rounded-full border border-ivory/60 px-5 py-2.5 font-medium"
                          >
                            Live Demo <ArrowUpRight size={16} aria-hidden="true" />
                          </ExternalLink>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
