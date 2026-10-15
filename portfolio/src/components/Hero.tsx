import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const lines = ['BUILDING SYSTEMS.', 'SOLVING PROBLEMS.', 'SHIPPING IMPACT.']

const codeLines = [
  { t: '@RestController', c: 'text-rose' },
  { t: 'class OrderController {', c: 'text-ivory' },
  { t: '  @GetMapping("/items")', c: 'text-rose' },
  { t: '  Page<Item> list(Pageable p) {', c: 'text-ivory' },
  { t: '    return service.find(p);', c: 'text-ivory/80' },
  { t: '  }', c: 'text-ivory' },
  { t: '}', c: 'text-ivory' },
]

export default function Hero({ ready }: { ready: boolean }) {
  let wordIndex = 0
  return (
    <section id="top" className="grain relative flex min-h-screen items-center overflow-hidden bg-wine text-ivory">
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-crimson/60 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 pb-24 pt-28 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.25em] text-rose sm:text-sm"
          >
            SOFTWARE ENGINEER · AMAZON SDE INTERN
          </motion.p>

          <h1 className="display mt-6 text-[clamp(2.75rem,9vw,7.5rem)]" aria-label={lines.join(' ')}>
            {lines.map((line) => (
              <span key={line} className="block" aria-hidden="true">
                {line.split(' ').map((word) => {
                  const i = wordIndex++
                  return (
                    <span key={word + i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                      <motion.span
                        className="inline-block"
                        initial={{ y: '110%' }}
                        animate={ready ? { y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  )
                })}
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <p className="script mt-8 text-3xl text-rose">Sri Padmanjani Gorrela</p>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-ivory/90">
              Software engineer focused on backend systems, scalable APIs, and solving complex problems through
              clean, reliable code.
            </p>
            <p className="mt-4 font-mono text-sm tracking-wide text-rose">
              Java · Spring Boot · Distributed Systems · Problem Solving
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-ivory px-7 py-3.5 font-medium text-wine transition-transform hover:-translate-y-0.5"
              >
                Explore My Work
                <ArrowUpRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-ivory/60 px-7 py-3.5 font-medium text-ivory transition-colors hover:bg-ivory/10"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>
        </div>

        {/* Abstract technical visual: layered geometry + animated code window (no invented photo) */}
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.6 }}
          aria-hidden="true"
        >
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-[2rem] border border-rose/50" />
          <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full bg-crimson" />
          <motion.div
            className="relative rounded-[1.75rem] border border-ivory/20 bg-ink/90 p-5 shadow-2xl"
            animate={ready ? { y: [0, -10, 0] } : {}}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-crimson" />
              <span className="h-3 w-3 rounded-full bg-rose" />
              <span className="h-3 w-3 rounded-full bg-ivory/70" />
            </div>
            <pre className="overflow-hidden font-mono text-[12.5px] leading-6 sm:text-sm">
              {codeLines.map((l, i) => (
                <motion.div
                  key={i}
                  className={l.c}
                  initial={{ opacity: 0, x: -10 }}
                  animate={ready ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.1 + i * 0.18 }}
                >
                  {l.t}
                </motion.div>
              ))}
              <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-rose" />
            </pre>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-rose"
      >
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <ArrowDown size={18} aria-hidden="true" className="scrollcue" />
      </a>
    </section>
  )
}
