# Angel / Snow — Portfolio

A portfolio built with Next.js 16, React 19 and TypeScript. The interface uses a light background, blue accents, system fonts and responsive project cards.

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

The homepage, project archive, case studies and 404 page share the same visual design. Project content lives in `lib/projects.ts`; profile and skills live in `lib/profile.ts`. Styles live in `app/globals.css`.

The interface uses local system fonts, supports keyboard navigation and respects reduced-motion preferences. Contact links open an email client; there is no form backend.
