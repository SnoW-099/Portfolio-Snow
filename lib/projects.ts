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
  repoUrl?: string
  image?: string
  privateRepo?: boolean
  featured?: boolean
  highlights?: string[]
  aiAssisted?: boolean
  aiNote?: string
  liveUrl?: string
  cardNote?: string
  contributions?: { title: string; body: string }[]
  upstream?: { name: string; href: string; description: string }
  safetyNotes?: { title: string; body: string }[]
}

export const projects: Project[] = [
  {
    slug: "staroptimizer",
    name: "StarOptimizer",
    status: "Beta / v0.5.0",
    eyebrow: "Windows desktop app",
    role: "AI-assisted development & interface direction",
    year: "2026",
    focus: "Local diagnostics & reversible settings",
    shortDescription: "A Windows app for guided diagnostics, before-and-after CPU and RAM measurements, and reversible system settings.",
    summary: "StarOptimizer brings local diagnostics, prioritized recommendations, and a guided tune-up workflow into one desktop interface. It records measurements and keeps a persistent history for restoring supported changes.",
    problem: "It is hard to assess a system tweak without a baseline, a clear explanation of what changes, and a way to restore the original settings.",
    approach: "The app separates analysis, measurement, review, and application. It saves original values before a change, verifies the result, and keeps recovery available across restarts. Nova, a small animated companion, gives the diagnostic workflow a visual identity.",
    learnings: "This project brings together desktop interfaces, Windows integration, persistent recovery, and testing. Measurements describe observed CPU and RAM usage rather than promising an FPS or speed increase.",
    tags: ["Electron", "JavaScript", "PowerShell"],
    repoUrl: "https://github.com/SnoW-099/StarOptimizer",
    featured: true,
    highlights: ["Measure", "Review", "Restore"],
    aiAssisted: true,
    aiNote: "Built with AI assistance (vibe coding). I guide the scope and interface while continuing to learn JavaScript, Electron and the code behind the app.",
    cardNote: "Source available · Review the scope and recovery limits in the case study.",
    safetyNotes: [
      { title: "Review the source", body: "The public repository lets you inspect the implementation. Source availability is not a guarantee that an action is risk-free." },
      { title: "Supported recovery", body: "The project includes a history of supported changes and restore actions. Check the restore behavior for the specific action and release before changing your system." },
      { title: "What changes", body: "Local diagnostics and supported Windows configuration changes. Check the repository for the exact settings and permissions of the release you install." },
      { title: "Installer publisher", body: "Installer signing has not been confirmed here. Check the Windows publisher details and the release information before running it." },
    ],
  },
  {
    slug: "snowtify",
    name: "Snowtify",
    status: "Public",
    eyebrow: "Spotify customization",
    role: "Fork maintenance & custom features",
    year: "2026",
    focus: "Compatibility & recovery",
    shortDescription: "A stability-focused fork of Spicetify with diagnostic commands, repair tools, update checks, and the Snowtify Frost theme.",
    summary: "Snowtify builds on the open-source Spicetify CLI to customize the official Spotify desktop client. My additions focus on diagnosing problems, recovering customization after updates, and making maintenance easier.",
    problem: "Spotify updates can disrupt customization. Users need a clear way to inspect problems and recover while keeping their existing themes and extensions.",
    approach: "I added doctor, repair, and logs commands, an update panel, and the Frost theme. The fork preserves Spicetify's JavaScript API and configuration layout to stay compatible with its ecosystem.",
    learnings: "Maintaining a fork means balancing new features with upstream compatibility. Snowtify is derived from spicetify/cli and retains its LGPL-2.1 license; the underlying customization engine is upstream work.",
    tags: ["Go", "JavaScript", "CSS"],
    repoUrl: "https://github.com/SnoW-099/snowtify",
    featured: true,
    highlights: ["Doctor", "Repair", "Frost"],
    cardNote: "Based on Spicetify. My additions focus on diagnosis, repair and the Frost theme.",
    contributions: [
      { title: "Doctor & logs", body: "Diagnostic commands to inspect customization problems and collect information for troubleshooting." },
      { title: "Repair workflow", body: "Repair tools aimed at recovering customization after a Spotify update disrupts it." },
      { title: "Updates & Frost", body: "An update panel and the Snowtify Frost theme, while keeping the upstream API and configuration layout." },
    ],
    upstream: { name: "Spicetify CLI", href: "https://github.com/spicetify/cli", description: "The underlying customization engine and JavaScript API come from Spicetify. Snowtify is a fork, not a customization engine written from scratch." },
  },
  {
    slug: "portfolio",
    name: "Snow Portfolio",
    status: "This website",
    eyebrow: "Personal website",
    role: "Visual direction & AI-assisted development",
    year: "2026",
    focus: "Responsive interfaces & clear project stories",
    shortDescription: "My own space on the web. A light, responsive portfolio built around simple interfaces, thoughtful motion and an honest look at my work.",
    summary: "Snow is my online identity; Angel is my name. This portfolio brings my projects together and makes the level of experience behind them clear, including where I use AI to help build.",
    problem: "A portfolio needs to communicate what I am building without confusing a project's technology list with independent proficiency in every tool.",
    approach: "I used AI to help implement a Next.js and React site with a restrained blue palette, responsive layouts, keyboard-friendly navigation and motion that respects reduced-motion preferences.",
    learnings: "This is a vibe-coded project and part of my learning process. It is a place to practice reading generated code, refining layouts and explaining the choices behind the interface.",
    tags: ["Next.js", "React", "TypeScript", "CSS"],
    repoUrl: "https://github.com/SnoW-099/Portfolio-Snow",
    liveUrl: "/",
    featured: true,
    aiAssisted: true,
    aiNote: "Vibe-coded with AI assistance. I set the visual direction, choose the content and refine the result while continuing to learn the underlying web stack.",
    highlights: ["Responsive", "Accessible motion", "Clear content"],
  },
  {
    slug: "vibe",
    name: "Vibe",
    status: "Private project",
    privateRepo: true,
    eyebrow: "Developer dashboard",
    role: "Frontend development & UI",
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
    image: "/vibe.png",
  },
  {
    slug: "rez-bot",
    name: "Rez Bot",
    status: "Active",
    eyebrow: "Discord bot",
    role: "Python development",
    year: "2025",
    focus: "Community automation",
    shortDescription:
      "A Python Discord bot with economy commands, embeds, and persistent balances.",
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
  {
    slug: "py-mini-systems",
    name: "Python Mini Systems",
    status: "Learning projects",
    eyebrow: "Python fundamentals",
    role: "Python development",
    year: "2026",
    focus: "Small, practical systems",
    shortDescription: "Two small Python projects: store inventory management and a registration and login flow with JSON storage.",
    summary: "A collection of small backend exercises that turn Python fundamentals into runnable systems. Mini Store handles products and discounts; Mini Users explores registration, login, and JSON persistence.",
    problem: "Learning syntax is only a starting point. Small complete workflows make it easier to practice data handling and program structure.",
    approach: "I kept each system small and runnable on its own, covering product creation, search, deletion, discounts, and a separate user flow.",
    learnings: "These are learning exercises in Python, data structures, and persistence. The login exercise is not presented as a production authentication service.",
    tags: ["Python", "JSON", "CLI"],
    repoUrl: "https://github.com/SnoW-099/py-mini-systems",
    featured: false,
    highlights: ["Inventory", "Users", "Persistence"],
  },
]

export const featuredProjects = projects.filter(project => project.featured)

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
