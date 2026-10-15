import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { codingProfiles } from '../data/content'
import { ExternalLink, Reveal, SectionLabel } from './ui'
import { PlatformMark } from './Icons'

function Counter({ to }: { to: number }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(reduce ? to : 0)

  useEffect(() => {
    if (reduce) {
      setN(to)
      return
    }
    if (!inView) return
    const dur = 1800
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, to])

  return (
    <span ref={ref} aria-label={`${to} plus`}>
      <span aria-hidden="true">{n}+</span>
    </span>
  )
}

export default function CodingProfiles() {
  return (
    <section id="problem-solving" className="grain bg-wine py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="05" script="My coding journey" light />
          <p className="display text-[clamp(6rem,24vw,18rem)] leading-[0.85] text-ivory">
            <Counter to={400} />
          </p>
          <h2 className="display mt-4 max-w-4xl text-3xl sm:text-5xl">
            Problems. One continuous pursuit of better solutions.
          </h2>
          <p className="sr-only">400+ problems solved on LeetCode.</p>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {codingProfiles.map((p, i) => (
            <li key={p.platform}>
              <Reveal delay={i * 0.1} className="h-full">
                <article className="on-ivory flex h-full flex-col rounded-[2rem] bg-ivory p-7 text-ink transition-transform duration-300 hover:-translate-y-2 hover:rotate-[-0.5deg]">
                  <PlatformMark platform={p.platform} />
                  <h3 className="display mt-6 text-3xl text-wine">{p.platform}</h3>
                  <p className="mt-1 font-mono text-sm text-ink/70">@{p.username}</p>
                  <p className="mt-6 text-xl font-medium text-crimson">{p.achievement}</p>
                  <ExternalLink
                    href={p.url}
                    aria-label={`View ${p.platform} profile`}
                    className="mt-8 inline-flex items-center gap-1.5 self-start rounded-full bg-wine px-5 py-2.5 font-medium text-ivory transition-colors hover:bg-crimson"
                  >
                    View Profile <ArrowUpRight size={16} aria-hidden="true" />
                  </ExternalLink>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
