# Snow Dev

Snow Dev — Independent Digital Development. Websites, applications, automations and creative digital products, built by Snow ([SnoW-099](https://github.com/SnoW-099)).

Live: https://portfolio-snow.netlify.app

Built with Next.js 16, React 19 and TypeScript. Black-and-white design, Geist type, plain CSS in `app/globals.css` (Tailwind is only used for a few utilities).

## Run locally

Requires Node.js and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Validate

```sh
npx tsc --noEmit
npm run build
```

## Where things live

| Content | File |
|---|---|
| Projects (category, visibility, case-study text) | `lib/projects.ts` |
| Services and the projects that back them | `lib/services.ts` |
| Capabilities and levels (used / familiar / learning) | `lib/profile.ts` |
| Project screenshots and videos | `public/projects/<slug>/` (see [docs/CAPTURAS.md](docs/CAPTURAS.md)) |
| Contact form | `components/ContactForm.tsx` + `public/__forms.html` |
| Plan for the next web project | [docs/PROYECTO-WEB.md](docs/PROYECTO-WEB.md) |

## Contact form

The form uses Netlify Forms. `public/__forms.html` registers the form when Netlify deploys the site, and `ContactForm` posts to it. Form detection must be enabled in the Netlify dashboard (Project configuration → Forms). Submissions appear there and can be forwarded by email. If sending fails, the form shows the email address instead.

## Honesty rules

Services link to the projects that back them. Projects state whether they are public, private, experimental or in development. Capabilities separate tools used in projects, tools known from private work, and tools still being learned with AI help. StarOptimizer and this site are labeled as AI-assisted.
