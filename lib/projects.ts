export type Project = {
  slug: string
  name: string
  status: string
  eyebrow: string
  role: string
  year: string
  focus: string
  shortDescription: string
  summary: string
  problem: string
  approach: string
  learnings: string
  tags: string[]
  repoUrl: string
  image: string
}

export const projects: Project[] = [
  {
    slug: "vibe",
    name: "Vibe",
    status: "Featured",
    eyebrow: "Developer dashboard",
    role: "Product design & frontend",
    year: "2025",
    focus: "Personal productivity",
    shortDescription:
      "A focused dashboard for snippets, links, notes, and quick actions I use while building.",
    summary:
      "Vibe started as a way to stop losing useful snippets and links across tabs, chats, and random files. The goal was to keep everyday developer tools in one place and make the interface feel fast, calm, and easy to scan.",
    problem:
      "My workflow was fragmented. Notes lived in one place, snippets in another, and useful links disappeared after a few days.",
    approach:
      "I designed a compact interface with clear grouping, fast access to frequent actions, and a visual hierarchy that keeps the important things visible first.",
    learnings:
      "This project pushed me to think more carefully about layout, pacing, and how a product can feel lightweight without feeling empty.",
    tags: ["React", "Vite", "CSS"],
    repoUrl: "https://github.com/SnoW-099/vibe",
    image: "/vibe.png",
  },
  {
    slug: "rez-bot",
    name: "Rez Bot",
    status: "Active",
    eyebrow: "Discord bot",
    role: "Architecture & backend",
    year: "2025",
    focus: "Community automation",
    shortDescription:
      "A Discord bot with economy commands, embeds, and persistent balances built with growth in mind.",
    summary:
      "Rez Bot is a practical bot project where I explored structure, persistence, and the day-to-day realities of keeping a community tool understandable as features grow.",
    problem:
      "Discord bots can become messy very quickly when new commands are added without a clear structure or reusable patterns.",
    approach:
      "I separated responsibilities, kept commands easier to read, and treated persistence as a first-class concern instead of an afterthought.",
    learnings:
      "I improved the way I think about maintainability, command flows, and building something small that can still evolve without collapsing under its own weight.",
    tags: ["Python", "Discord.py", "JSON"],
    repoUrl: "https://github.com/SnoW-099/Rez",
    image: "/rez.png",
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
