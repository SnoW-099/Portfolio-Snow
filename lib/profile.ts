/** How far each technology goes: used in shipped projects, familiar from private work, or still learning (with AI help). */
export type Level = "used" | "familiar" | "learning"

export const levelLabels: Record<Level, string> = {
  used: "Used in projects",
  familiar: "Familiar · private work",
  learning: "Learning · AI-assisted",
}

export type CapabilityArea = {
  id: string
  title: string
  description: string
  items: { name: string; level: Level }[]
  evidence: { label: string; href: string }[]
}

export const capabilityAreas: CapabilityArea[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Responsive interfaces with clear hierarchy, keyboard support and motion that respects reduced-motion settings.",
    items: [
      { name: "HTML", level: "used" },
      { name: "CSS", level: "used" },
      { name: "JavaScript", level: "learning" },
      { name: "TypeScript", level: "learning" },
      { name: "React", level: "learning" },
    ],
    evidence: [{ label: "Snow Dev website", href: "/projects/portfolio" }, { label: "Vibe", href: "/projects/vibe" }],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Small Python systems: program structure, data handling and command flows that stay readable as they grow.",
    items: [{ name: "Python", level: "used" }],
    evidence: [{ label: "Python Mini Systems", href: "/projects/py-mini-systems" }, { label: "Rez Bot", href: "/projects/rez-bot" }],
  },
  {
    id: "databases",
    title: "Databases",
    description: "JSON persistence in public projects. Supabase and MongoDB in private projects, with no public demo yet.",
    items: [
      { name: "JSON storage", level: "used" },
      { name: "Supabase", level: "familiar" },
      { name: "MongoDB", level: "familiar" },
    ],
    evidence: [{ label: "Rez Bot", href: "/projects/rez-bot" }],
  },
  {
    id: "automation",
    title: "Automation",
    description: "Bots and scripts that handle repetitive work, from community commands to local Windows diagnostics.",
    items: [
      { name: "Python scripts", level: "used" },
      { name: "Discord.py", level: "used" },
      { name: "PowerShell", level: "learning" },
    ],
    evidence: [{ label: "Rez Bot", href: "/projects/rez-bot" }, { label: "StarOptimizer", href: "/projects/staroptimizer" }],
  },
  {
    id: "tools",
    title: "Frameworks & Tools",
    description: "Version control in every project; web and desktop frameworks used with AI assistance while I learn them.",
    items: [
      { name: "Git", level: "used" },
      { name: "Next.js", level: "learning" },
      { name: "Electron", level: "learning" },
    ],
    evidence: [{ label: "How this site was built", href: "/projects/portfolio" }, { label: "StarOptimizer", href: "/projects/staroptimizer" }],
  },
]
