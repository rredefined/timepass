# Ayle / Dev Portfolio

A responsive, game UI styled single page portfolio built with Next.js (App Router), TypeScript
and Tailwind CSS. Frosted glass panels, a full screen slide up mobile menu and a content layer
that lives in one config file.

Live demo: https://ayle-dev-portfolio.netlify.app

## Features

- Fully responsive, single column on phones and a two column layout on desktop
- Glassmorphism panels, cards and overlays
- Full screen mobile menu that slides up, with staggered link animations
- Animated rotating gradient border on the call to action button
- Expandable skill and tool cards
- Self hosted display font, no external font request
- All icons are inline SVG, no icon library dependency
- Static export, deployable to any static host
- Social link preview card via OpenGraph and Twitter metadata
- Respects the reduced motion preference

## Tech stack

| Layer      | Choice                       |
| ---------- | ---------------------------- |
| Framework  | Next.js 14, App Router       |
| Language   | TypeScript                   |
| Styling    | Tailwind CSS                 |
| Output     | Static export                |
| Hosting    | Netlify                      |

## Getting started

Requires Node.js 18.17 or newer.

```bash
git clone <your-repo-url>
cd ayle-portfolio
npm install
npm run dev
```

Open http://localhost:3000

## Commands

```bash
npm run dev      # start the dev server
npm run build    # static export into out/
npm run lint     # lint the project
```

## Editing content

Almost everything is driven by one file: `config/site.ts`. No component contains hardcoded copy.

| What you want to change          | Export in config/site.ts |
| -------------------------------- | ------------------------ |
| Name, role, tagline, About text  | `profile`                |
| Tab title, description, thumbnail| `meta`                   |
| Background and avatar images     | `assets`                 |
| Navbar wordmark                  | `brand`                  |
| Navbar tabs                      | `navLinks`               |
| Social links                     | `socials`                |
| Projects button                  | `callToAction`           |
| Stat cards                       | `stats`                  |
| Tech Stack grid                  | `techStack`              |
| Skills cards                     | `skills`                 |
| Design Tools cards               | `designTools`            |
| Section headings                 | `sections`               |
| Footer line                      | `footer`                 |

Images live in `public/`. Replace the file, then update the path in `assets`.

Each entry in `navLinks` has a `showOnMobile` flag that controls whether it appears
in the mobile menu.

## Project structure

```
app/
  layout.tsx          root shell and metadata
  page.tsx            page composition only
  globals.css         fonts, glass classes, animations
  icon.png            favicon
components/
  layout/             Background, Logo, Navbar, MobileMenu, Footer
  sections/           Hero, TechStack, CardColumn
  ui/                 Icon, SocialIcon, SectionTitle, ExpandableCard
config/
  site.ts             all site content
types/
  index.ts            shared TypeScript types
public/
  fonts/              self hosted font
  avatar.png          hero artwork
  bg.jpg              background image
  banner.gif          social share thumbnail
```

## Adding an icon

1. Add the key to the `IconName` union in `types/index.ts`
2. Add a matching `case` in `components/ui/Icon.tsx`
3. Reference the key from `config/site.ts`

## Adding a new card section

```ts
// config/site.ts
export const services: Card[] = [
  { title: "Consulting", body: "Description here.", icon: "code" },
];
```

```tsx
// app/page.tsx
<CardColumn title="Services" cards={services} />
```

## Deploying

The project is configured for static export, so `npm run build` produces a fully
static `out/` folder that works on Netlify, Vercel, GitHub Pages, Cloudflare Pages
or any static host.

Netlify from the CLI:

```bash
npm run build
npx netlify-cli deploy --prod --dir=out
```

Before deploying, set `meta.url` in `config/site.ts` to your own domain so the
social preview card resolves correctly.

## Asset credits

Replace the bundled images with your own before publishing. The background and the
original character art were generated with an AI image model. The font is Garesin,
downloaded from 1001fonts, and you should review its license for your intended use.

## License

MIT, see [LICENSE](LICENSE).
