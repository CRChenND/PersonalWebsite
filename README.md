# Chaoran Chen's Personal Website

Personal academic website for Chaoran Chen, built with Next.js App Router and Tailwind CSS.

## Project Structure

```text
app/
  layout.tsx          Root layout, metadata, fonts, shared shell
  page.tsx            Homepage content
  cv/page.tsx         CV page content
  robots.ts           robots.txt route
  sitemap.ts          sitemap.xml route
  styles/globals.css  Global theme tokens and Tailwind layers

components/
  *.tsx               Shared UI components used by the homepage and CV page

hooks/
  *.ts                Client-side hooks for theme and analytics behavior

public/
  images/             Logo, profile photo, and publication thumbnails
  static/             Downloadable/static assets such as cv.pdf and favicon.ico

.github/workflows/   GitHub Pages deployment workflow
```

Generated folders such as `.next/`, dependency folders such as `node_modules/`, OS files, and TypeScript build info are intentionally ignored.

## Development

```bash
npm install
npm run dev
```

The local site runs at `http://localhost:3000`.

## Build

```bash
npm run build
```

The project uses `next/font`, so production builds need network access to fetch Google Fonts unless the fonts are already cached.

## Content Updates

- Homepage profile, news, research overview, and publication data live in `app/page.tsx` and `components/NewsSection.tsx`.
- CV page data lives in `app/cv/page.tsx`.
- Publication thumbnails live in `public/images/publication/`.
- The downloadable CV lives at `public/static/cv.pdf`.
