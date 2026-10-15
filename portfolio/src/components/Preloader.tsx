import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Preloader({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const total = reduce ? 400 : 1600
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / total)
      setProgress(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(onDone, 250)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone, reduce])

  return (
    <motion.div
      className="grain fixed inset-0 z-[100] flex flex-col items-center justify-center bg-wine text-ivory"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: reduce ? 0.01 : 0.9, ease: [0.76, 0, 0.24, 1] }}
      role="status"
      aria-live="polite"
      aria-label={`Loading portfolio, ${progress} percent`}
    >
      <p className="display text-[22vw] leading-none sm:text-[14rem]" aria-hidden="true">
        SPG
      </p>
      <div className="mt-6 h-px w-48 overflow-hidden bg-ivory/25 sm:w-72">
        <div className="h-full bg-ivory" style={{ width: `${progress}%`, transition: 'width 80ms linear' }} />
      </div>
      <p className="mt-3 font-mono text-xs tracking-[0.3em] text-rose" aria-hidden="true">
        {String(progress).padStart(3, '0')}
      </p>
    </motion.div>
  )
}
