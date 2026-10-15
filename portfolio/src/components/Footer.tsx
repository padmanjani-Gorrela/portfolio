import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-8 text-ivory/80 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-sm">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="underline underline-offset-4 hover:text-ivory">
          Back to top
        </a>
      </div>
    </footer>
  )
}
