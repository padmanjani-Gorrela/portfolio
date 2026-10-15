import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'

type ExternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> & {
  href: string
  children: ReactNode
}

/** Consistent external-link behaviour: new tab + noopener noreferrer. mailto links stay in-tab. */
export function ExternalLink({ href, children, 'aria-label': ariaLabel, ...rest }: ExternalLinkProps) {
  const isMail = href.startsWith('mailto:')
  if (isMail) {
    return (
      <a href={href} aria-label={ariaLabel} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ? `${ariaLabel} (opens in a new tab)` : undefined}
      {...rest}
    >
      {children}
    </a>
  )
}

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionLabel({
  index,
  script,
  light = false,
}: {
  index: string
  script: string
  light?: boolean
}) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span
        className={`font-mono text-xs tracking-[0.25em] ${light ? 'text-rose' : 'text-crimson'}`}
        aria-hidden="true"
      >
        {index}
      </span>
      <span className={`h-px w-12 ${light ? 'bg-rose/60' : 'bg-crimson/50'}`} aria-hidden="true" />
      <span className={`script text-2xl ${light ? 'text-rose' : 'text-crimson'}`}>{script}</span>
    </div>
  )
}
