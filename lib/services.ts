/** Snow Dev services. Every service links to real work as proof; `scope` says honestly how far that proof goes. */
export type Service = {
  id: string
  title: string
  description: string
  items: string[]
  scope: string
  proof: { label: string; href: string }[]
}

export const services: Service[] = [
  {
    id: "web",
    title: "Web Development",
    description: "Sites that say who you are and what you offer, and work on any screen.",
    items: ["Landing pages", "Corporate pages", "Portfolios", "Responsive design"],
    scope: "Shown in this site. Client pages are new for me, so projects start small.",
    proof: [{ label: "This site", href: "/projects/portfolio" }],
  },
  {
    id: "apps",
    title: "Web Applications",
    description: "Focused tools with a clear interface, for the things you open every day.",
    items: ["Dashboards", "Mini applications", "Admin panels", "Custom tools"],
    scope: "Shown in a private dashboard and a desktop app in development.",
    proof: [{ label: "Vibe", href: "/projects/vibe" }, { label: "StarOptimizer", href: "/projects/staroptimizer" }],
  },
  {
    id: "automation",
    title: "Automation",
    description: "Bots and scripts that take repetitive work off your plate.",
    items: ["Task automation", "Connected forms", "Notifications", "Tool integrations"],
    scope: "Shown in a Discord bot and small Python systems. Integrations start as small projects.",
    proof: [{ label: "Rez Bot", href: "/projects/rez-bot" }, { label: "Python Mini Systems", href: "/projects/py-mini-systems" }],
  },
  {
    id: "creative",
    title: "Creative Development",
    description: "Prototypes and interactive pieces made to be explored.",
    items: ["Prototypes", "Digital experiments", "Interactive interfaces", "Original digital products"],
    scope: "Shown in Snowtify's Frost theme and StarOptimizer's interface.",
    proof: [{ label: "Snowtify", href: "/projects/snowtify" }, { label: "StarOptimizer", href: "/projects/staroptimizer" }],
  },
]
