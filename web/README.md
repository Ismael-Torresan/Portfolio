# Portfolio — ismael.torresan.dev

Personal portfolio of Ismael Torresan, rebuilt as a modern static site.

## Stack

- **Next.js 15** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for animations
- **react-icons**

Dark/light theme with no-flash toggle. All content lives in
[`src/data/content.ts`](src/data/content.ts) — edit that one file to update
your bio, experience, skills, and projects.

## Develop

```bash
cd web
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static export to ./out
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `web/out` to GitHub Pages with the custom domain
`ismael.torresan.dev` (set via `public/CNAME`).

**One-time setup:** in the GitHub repo, go to
**Settings → Pages → Build and deployment → Source** and select
**GitHub Actions**.
