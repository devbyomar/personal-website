# omarbaher.dev

Personal engineering portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** (App Router, Server Components)
- **TypeScript** (strict mode)
- **Tailwind CSS** (custom design system)
- **Framer Motion** (subtle scroll animations)
- **Lucide Icons**

## Structure

```
src/
├── app/                    # Next.js App Router
│   ├── projects/[slug]/    # Dynamic case study pages
│   ├── layout.tsx          # Root layout + SEO
│   ├── page.tsx            # Homepage
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/             # React components
│   ├── ui/                 # Reusable primitives
│   ├── navbar.tsx          # Sticky navigation
│   ├── hero.tsx            # Landing section
│   ├── about.tsx           # About + skills
│   ├── featured-work.tsx   # Project cards
│   ├── philosophy.tsx      # Engineering principles
│   ├── writing.tsx         # Blog placeholder
│   ├── contact.tsx         # Contact links
│   └── footer.tsx          # Footer
├── content/                # Data layer
│   ├── projects.ts         # Case study content
│   └── site.ts             # Site config
├── lib/                    # Utilities
│   └── utils.ts            # cn() helper
└── types/                  # TypeScript types
    └── index.ts
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Push to GitHub and import in [Vercel](https://vercel.com). Zero config needed.

## Customization

- **Content**: Edit `src/content/projects.ts` and `src/content/site.ts`
- **Styling**: Edit `tailwind.config.ts` and `src/app/globals.css`
- **Resume**: Place your PDF at `public/resume.pdf`
- **OG Image**: Place at `public/og.png` (1200×630)
- **Screenshots**: Replace placeholder divs in project pages with actual images

## License

Private — All rights reserved.
