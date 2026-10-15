import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { codingProfiles, links, profile } from '../data/content'
import { ExternalLink, Reveal } from './ui'
import { GitHubIcon, LinkedInIcon } from './Icons'

export default function Contact() {
  const social = [
    { label: 'LinkedIn', href: links.linkedin, Icon: LinkedInIcon },
    { label: 'GitHub', href: links.github, Icon: GitHubIcon },
  ]

  return (
    <section id="contact" className="grain overflow-hidden bg-crimson py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="script text-3xl text-ivory/90">Thank you for visiting</p>
        </Reveal>

        <h2 className="display mt-4 text-[clamp(3.5rem,13vw,11rem)]" aria-label="Let's connect">
          {['LET’S', 'CONNECT'].map((w, i) => (
            <span key={w} className="mr-[0.2em] inline-block overflow-hidden align-bottom" aria-hidden="true">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h2>

        <Reveal delay={0.1}>
          <p className="display mt-8 max-w-3xl text-3xl sm:text-4xl">Let&apos;s build something meaningful.</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ivory/90">
            Interested in backend engineering, challenging problems, or building software that makes a difference?
            Let&apos;s connect.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={links.email}
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ivory px-8 py-4 text-lg font-medium text-wine transition-transform hover:-translate-y-0.5"
          >
            <Mail size={20} aria-hidden="true" />
            Email Me
          </a>
          <p className="mt-3 font-mono text-sm text-ivory/85">{profile.email}</p>

          <ul className="mt-10 flex flex-wrap gap-3" aria-label="Social links">
            {social.map(({ label, href, Icon }) => (
              <li key={label}>
                <ExternalLink
                  href={href}
                  aria-label={label}
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/60 px-5 py-2.5 font-medium transition-colors hover:bg-ivory hover:text-wine"
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </ExternalLink>
              </li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2" aria-label="Coding profiles">
            {codingProfiles.map((p) => (
              <li key={p.platform}>
                <ExternalLink
                  href={p.url}
                  aria-label={p.platform}
                  className="font-mono text-sm tracking-wide text-ivory/90 underline decoration-ivory/40 underline-offset-4 hover:decoration-ivory"
                >
                  {p.platform}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
