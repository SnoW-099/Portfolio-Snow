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
    description: "Fast, responsive websites that present a person, a product or a small business clearly.",
    items: ["Landing pages", "Corporate pages", "Portfolios", "Responsive design"],
    scope: "Shown in this site and the Snowtify website.",
    proof: [{ label: "Snow Dev site", href: "/projects/portfolio" }, { label: "Snowtify", href: "/projects/snowtify" }],
  },
  {
    id: "apps",
    title: "Web Applications",
    description: "Focused tools with a clear interface: the screens people open every day to get something done.",
    items: ["Dashboards", "Mini applications", "Admin panels", "Custom tools"],
    scope: "Small apps so far: a private dashboard and a desktop app in development.",
    proof: [{ label: "Vibe", href: "/projects/vibe" }, { label: "StarOptimizer", href: "/projects/staroptimizer" }],
  },
  {
    id: "automation",
    title: "Automation",
    description: "Scripts, bots and connections that take repetitive work off your plate.",
    items: ["Task automation", "Connected forms", "Notifications", "Tool integrations"],
    scope: "Python bots and scripts; integrations are taken on as small projects.",
    proof: [{ label: "Rez Bot", href: "/projects/rez-bot" }, { label: "Python Mini Systems", href: "/projects/py-mini-systems" }],
  },
  {
    id: "creative",
    title: "Creative Development",
    description: "Ideas worth trying: prototypes and interactive pieces built to be explored.",
    items: ["Prototypes", "Digital experiments", "Interactive interfaces", "Original digital products"],
    scope: "Experiments and original products, from themes to desktop companions.",
    proof: [{ label: "Snowtify Frost", href: "/projects/snowtify" }, { label: "StarOptimizer", href: "/projects/staroptimizer" }],
  },
]
