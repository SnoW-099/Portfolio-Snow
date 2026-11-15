import { localize, type L, type Lang } from "@/lib/i18n"

/** Public contact details, used by the pages and by the structured data. */
export const contact = {
  email: "ryze0950@gmail.com",
  github: "https://github.com/SnoW-099",
  x: "https://x.com/Ryze517182",
}

/**
 * "Available for projects from <month>" in the hero. Update it by hand, for example
 * `{ en: "December 2026", es: "diciembre de 2026" }`. While it is undefined, nothing is shown.
 */
export const availableFrom: L | undefined = undefined

/** How far each technology goes: used in shipped projects, familiar from private work, or still learning (with AI help). */
export type Level = "used" | "familiar" | "learning"

const levelLabels: Record<Level, L> = {
  used: { en: "Used in projects", es: "Usado en proyectos" },
  familiar: { en: "Familiar · private work", es: "Conocido · trabajo privado" },
  learning: { en: "Learning · AI-assisted", es: "Aprendiendo · con ayuda de IA" },
}

type CapabilityAreaSource = {
  id: string
  title: L
  description: L
  items: { name: string; level: Level }[]
  evidence: { label: L; href: string }[]
}

const capabilityAreas: CapabilityAreaSource[] = [
  {
    id: "frontend",
    title: { en: "Frontend Development", es: "Desarrollo frontend" },
    description: { en: "Responsive interfaces with clear hierarchy, keyboard support and motion that respects reduced-motion settings.", es: "Interfaces adaptables con una jerarquía clara, uso con teclado y animación que respeta la preferencia de movimiento reducido." },
    items: [
      { name: "HTML", level: "used" },
      { name: "CSS", level: "used" },
      { name: "JavaScript", level: "learning" },
      { name: "TypeScript", level: "learning" },
      { name: "React", level: "learning" },
    ],
    evidence: [{ label: { en: "Snow Dev website", es: "Web de Snow Dev" }, href: "/projects/portfolio" }, { label: { en: "Vibe", es: "Vibe" }, href: "/projects/vibe" }],
  },
  {
    id: "backend",
    title: { en: "Backend Development", es: "Desarrollo backend" },
    description: { en: "Small Python systems: program structure, data handling and command flows that stay readable as they grow.", es: "Sistemas pequeños en Python: estructura del programa, manejo de datos y flujos de comandos que siguen siendo legibles al crecer." },
    items: [{ name: "Python", level: "used" }],
    evidence: [{ label: { en: "Python Mini Systems", es: "Python Mini Systems" }, href: "/projects/py-mini-systems" }, { label: { en: "Rez Bot", es: "Rez Bot" }, href: "/projects/rez-bot" }],
  },
  {
    id: "databases",
    title: { en: "Databases", es: "Bases de datos" },
    description: { en: "JSON persistence in public projects. Supabase and MongoDB in private projects, with no public demo yet.", es: "Persistencia en JSON en proyectos públicos. Supabase y MongoDB en proyectos privados, todavía sin demo pública." },
    items: [
      { name: "JSON storage", level: "used" },
      { name: "Supabase", level: "familiar" },
      { name: "MongoDB", level: "familiar" },
    ],
    evidence: [{ label: { en: "Rez Bot", es: "Rez Bot" }, href: "/projects/rez-bot" }],
  },
  {
    id: "automation",
    title: { en: "Automation", es: "Automatización" },
    description: { en: "Bots and scripts that handle repetitive work, from community commands to local Windows diagnostics.", es: "Bots y scripts que se ocupan del trabajo repetitivo, desde comandos para comunidades hasta diagnósticos locales de Windows." },
    items: [
      { name: "Python scripts", level: "used" },
      { name: "Discord.py", level: "used" },
      { name: "PowerShell", level: "learning" },
    ],
    evidence: [{ label: { en: "Rez Bot", es: "Rez Bot" }, href: "/projects/rez-bot" }, { label: { en: "StarOptimizer", es: "StarOptimizer" }, href: "/projects/staroptimizer" }],
  },
  {
    id: "tools",
    title: { en: "Frameworks & Tools", es: "Frameworks y herramientas" },
    description: { en: "Version control in every project; web and desktop frameworks used with AI assistance while I learn them.", es: "Control de versiones en todos los proyectos; frameworks web y de escritorio usados con ayuda de IA mientras los aprendo." },
    items: [
      { name: "Git", level: "used" },
      { name: "Next.js", level: "learning" },
      { name: "Electron", level: "learning" },
    ],
    evidence: [{ label: { en: "How this site was built", es: "Cómo se hizo esta web" }, href: "/projects/portfolio" }, { label: { en: "StarOptimizer", es: "StarOptimizer" }, href: "/projects/staroptimizer" }],
  },
]

export const getLevelLabels = (lang: Lang) => localize(levelLabels, lang)
export const getCapabilityAreas = (lang: Lang) => localize(capabilityAreas, lang)
export const technologyNames = capabilityAreas.flatMap((area) => area.items.map((item) => item.name))
