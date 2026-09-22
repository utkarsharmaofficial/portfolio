# Portfolio

Personal portfolio site for Utkarsh Sharma. Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All resume/profile content lives in one place: [src/data/portfolio.ts](src/data/portfolio.ts). Edit that file to update experience, projects, skills, or contact links — no need to touch the components.

## Assets to drop in before deploying

- `public/photo.jpg` — square headshot. Swap the placeholder div in [src/components/About.tsx](src/components/About.tsx) for an `<img>` once added (instructions are in a comment there).
- `public/resume.pdf` — used by the "Resume" button in the nav (`profile.resumeUrl`).
- `src/app/favicon.ico` — replace with your own favicon if desired.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — zero config needed.
