import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { aboutHighlights } from '../data/content'
import { Reveal, SectionLabel } from './ui'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="about" ref={ref} className="on-ivory relative overflow-hidden bg-ivory py-24 sm:py-32">
      <motion.span
        style={{ y }}
        className="display pointer-events-none absolute -right-6 top-10 select-none text-[28vw] leading-none text-rose/25 lg:text-[18rem]"
        aria-hidden="true"
      >
        01
      </motion.span>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <SectionLabel index="01" script="A little about me" />
            <h2 className="display text-5xl text-wine sm:text-7xl">
              Curious Mind.
              <br />
              Engineering Mindset.
            </h2>
          </Reveal>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-ink/85 lg:pt-16">
          <Reveal delay={0.1}>
            <p>
              I’m Sri Padmanjani Gorrela, an Information Technology student and Software Development Engineer
              Intern at Amazon. I enjoy turning complex problems into practical software solutions, building
              reliable backend applications, and understanding how systems work beneath the surface.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              My interests include backend engineering, API design, database optimization, software architecture,
              and data structures and algorithms. I believe great engineering is about more than making something
              work — it’s about making it reliable, maintainable, and efficient.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {aboutHighlights.map((h) => (
                <li key={h.label} className="rounded-3xl border border-wine/20 bg-white/40 p-5">
                  <p className="display text-3xl text-crimson">{h.value}</p>
                  <p className="mt-2 text-sm text-ink/75">{h.label}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
