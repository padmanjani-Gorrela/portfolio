# Sri Padmanjani Gorrela — Portfolio

Editorial red × cream portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## Structure

- `src/data/content.ts` — all copy, links, projects, skills (edit content here)
- `src/components/` — Preloader, Nav, Hero, About, Experience, Skills, Projects, CodingProfiles, Education, Contact, Footer
- `tailwind.config.js` — design tokens (wine, crimson, ivory, ink, rose; Anton / DM Sans / Caveat)

## Adding project links

Project "View Source" and "Live Demo" buttons are hidden until real URLs exist. Set `sourceUrl` / `demoUrl` for a project in `src/data/content.ts` and the buttons appear automatically.

## Notes

- Animations respect `prefers-reduced-motion` (including the 400+ counter, which shows the final value immediately).
- The hero uses an abstract code/geometry visual. To use a portrait, add an image to `public/` and swap it into `Hero.tsx`.
- Amazon content is a high-level teaser only; the 50% ocean-freight adoption figure is the team's target, not a claimed result.
