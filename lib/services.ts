import { localize, type L, type Lang } from "@/lib/i18n"

/** Snow Dev services. Every service links to real work as proof; `scope` says honestly how far that proof goes. */
type ServiceSource = {
  id: string
  title: L
  description: L
  items: L<string[]>
  scope: L
  /** Starting price shown next to the proof. Leave it out and nothing is shown. Edit the figures here. */
  priceFrom?: L
  proof: { label: L; href: string }[]
}

const services: ServiceSource[] = [
  {
    id: "web",
    title: { en: "Web Development", es: "Desarrollo web" },
    description: { en: "Sites that say who you are and what you offer, and work on any screen.", es: "Webs que cuentan quién eres y qué ofreces, y que funcionan en cualquier pantalla." },
    items: { en: ["Landing pages", "Corporate pages", "Portfolios", "Responsive design"], es: ["Landing pages", "Webs corporativas", "Portfolios", "Diseño adaptable"] },
    scope: { en: "Shown in this site. Client pages are new for me, so projects start small.", es: "Se ve en esta web. Las webs para clientes son nuevas para mí, así que los proyectos empiezan pequeños." },
    priceFrom: { en: "Landing page from €150 · Corporate site or portfolio from €300", es: "Landing page desde 150 € · Web corporativa o portfolio desde 300 €" },
    proof: [{ label: { en: "This site", es: "Esta web" }, href: "/projects/portfolio" }],
  },
  {
    id: "apps",
    title: { en: "Web Applications", es: "Aplicaciones web" },
    description: { en: "Focused tools with a clear interface, for the things you open every day.", es: "Herramientas centradas y con una interfaz clara, para lo que abres cada día." },
    items: { en: ["Dashboards", "Mini applications", "Admin panels", "Custom tools"], es: ["Paneles", "Mini aplicaciones", "Paneles de administración", "Herramientas a medida"] },
    scope: { en: "Shown in a private dashboard and a desktop app in development.", es: "Se ve en un panel privado y en una aplicación de escritorio en desarrollo." },
    priceFrom: { en: "From €400", es: "Desde 400 €" },
    proof: [{ label: { en: "Vibe", es: "Vibe" }, href: "/projects/vibe" }, { label: { en: "StarOptimizer", es: "StarOptimizer" }, href: "/projects/staroptimizer" }],
  },
  {
    id: "automation",
    title: { en: "Automation", es: "Automatización" },
    description: { en: "Bots and scripts that take repetitive work off your plate.", es: "Bots y scripts que te quitan de encima el trabajo repetitivo." },
    items: { en: ["Task automation", "Connected forms", "Notifications", "Tool integrations"], es: ["Automatizar tareas", "Formularios conectados", "Notificaciones", "Integraciones"] },
    scope: { en: "Shown in a Discord bot and small Python systems. Integrations start as small projects.", es: "Se ve en un bot de Discord y en pequeños sistemas en Python. Las integraciones empiezan como proyectos pequeños." },
    priceFrom: { en: "Bot or script from €80", es: "Bot o script desde 80 €" },
    proof: [{ label: { en: "Rez Bot", es: "Rez Bot" }, href: "/projects/rez-bot" }, { label: { en: "Python Mini Systems", es: "Python Mini Systems" }, href: "/projects/py-mini-systems" }],
  },
  {
    id: "creative",
    title: { en: "Creative Development", es: "Desarrollo creativo" },
    description: { en: "Prototypes and interactive pieces made to be explored.", es: "Prototipos y piezas interactivas hechas para explorarse." },
    items: { en: ["Prototypes", "Digital experiments", "Interactive interfaces", "Original digital products"], es: ["Prototipos", "Experimentos digitales", "Interfaces interactivas", "Productos digitales propios"] },
    scope: { en: "Shown in Snowtify's Frost theme and StarOptimizer's interface.", es: "Se ve en el tema Frost de Snowtify y en la interfaz de StarOptimizer." },
    priceFrom: { en: "Price on request", es: "Precio a consultar" },
    proof: [{ label: { en: "Snowtify", es: "Snowtify" }, href: "/projects/snowtify" }, { label: { en: "StarOptimizer", es: "StarOptimizer" }, href: "/projects/staroptimizer" }],
  },
]

export const getServices = (lang: Lang) => localize(services, lang)
