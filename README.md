# personal-website

Evan's personal portfolio — a minimal single-page site built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com).

## Local development

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

```bash
npm run build    # output in dist/
npm run preview  # preview production build
```

## Editing content

Update copy and links without touching layout code:

| File | What to change |
|------|----------------|
| `src/content/site.ts` | Name, role, tagline, email, social URLs |
| `src/content/about.ts` | About paragraphs |
| `src/content/projects.ts` | Project cards (title, description, tags, links) |

After changing the production URL, set `site` in `astro.config.mjs` to your Vercel or custom domain for correct canonical and Open Graph URLs.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New Project** → **Import Git Repository** → select the repo.
3. Vercel auto-detects Astro; build settings are also in `vercel.json` (`npm run build`, output `dist/`).
4. Optionally set a custom domain under **Project Settings → Domains**.

Deploy previews are enabled automatically for pull requests when the repo is connected.

## Structure

```
src/
  content/     # site data (typed TypeScript)
  components/  # page sections
  layouts/     # BaseLayout (meta, global styles)
  pages/       # routes (index only for v1)
  styles/      # global CSS + Tailwind
public/        # favicon, og-image.svg, optional images/
```

## Before first deploy

1. Push the repo to `https://github.com/evmack18/personal-website` (or update project repo URLs in `src/content/projects.ts`).
2. Set `site` in `astro.config.mjs` to your Vercel URL (e.g. `https://your-site.vercel.app`).
3. Add your LinkedIn URL in `src/content/site.ts` if you want it on the contact section.
4. Replace the GitHub noreply email with your preferred address when ready.
