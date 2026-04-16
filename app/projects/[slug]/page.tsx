"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { ArrowLeft, ExternalLink, Layers, Lightbulb, BookOpen, Wrench } from "lucide-react"

const projectDetails: Record<string, {
  name: string
  tagline: string
  description: string
  motivation: string
  architecture: string
  challenges: string
  learnings: string
  tags: { name: string; color: string }[]
  highlights: string[]
  href: string
  glow: string
  status: string
}> = {
  vibe: {
    name: "Vibe",
    tagline: "A minimalist web terminal for deep-focus productivity.",
    description:
      "Vibe is a keyboard-first web terminal designed to eliminate distractions and maximize developer focus. It strips away every unnecessary UI element, leaving only what matters: your workflow.",
    motivation:
      "I was tired of bloated productivity apps that slow you down instead of speeding you up. I wanted something that felt like a native terminal but lived in the browser — instant, clean, and zero-config.",
    architecture:
      "Built on Next.js App Router with full SSR for sub-50ms Time to Interactive. The CLI parser is custom-built — no external libraries — handling command tokenization, argument parsing, and pipe chaining. State management uses React context with optimistic updates for instant feedback.",
    challenges:
      "The hardest part was making the custom CLI parser robust enough to handle edge cases like quoted strings with escaped characters, while keeping it lightweight. I also spent time fine-tuning the rendering pipeline to avoid layout shifts on command output.",
    learnings:
      "This project taught me a lot about performance budgets, how SSR affects perceived speed, and the importance of keyboard accessibility. I also improved my TypeScript skills building complex generic types for the command registry.",
    tags: [
      { name: "TypeScript", color: "text-indigo-300/80 border-indigo-500/20 bg-indigo-500/5" },
      { name: "Next.js", color: "text-blue-300/80 border-blue-500/20 bg-blue-500/5" },
      { name: "React", color: "text-cyan-300/80 border-cyan-500/20 bg-cyan-500/5" },
    ],
    highlights: ["SSR with Next.js App Router", "Custom CLI parser", "< 50ms TTI", "Zero dependencies for core logic", "Keyboard-first UX"],
    href: "https://github.com/SnoW-099/vibe",
    glow: "rgba(99,102,241,0.15)",
    status: "Live",
  },
  "rez-bot": {
    name: "Rez Bot",
    tagline: "Full-featured Discord bot for community management.",
    description:
      "Rez is a comprehensive Discord automation bot built to handle everything a growing server needs — from security and moderation to engagement features like giveaways and XP levelling.",
    motivation:
      "I manage several Discord communities and found myself repeating the same manual moderation tasks over and over. Instead of relying on generic bots with limited customization, I built my own from scratch with exactly the features I needed.",
    architecture:
      "The bot runs on an async event-driven architecture using Discord.py's gateway connection. Commands are registered as slash commands through Discord's REST API. All persistent data (XP, warnings, configs) uses a SQLite database with a custom ORM layer for type-safe queries. The modular cog system allows hot-reloading features without restarting the bot.",
    challenges:
      "Rate limiting was the biggest challenge — Discord's API has strict rate limits, and I had to implement a smart queue system that batches requests and respects per-route limits. Handling concurrent events from multiple servers without race conditions required careful async/await patterns.",
    learnings:
      "Building Rez deepened my understanding of event-driven systems, async programming in Python, and database design. I learned how to structure a large Python project with proper separation of concerns using cogs, and how to write resilient code that handles API failures gracefully.",
    tags: [
      { name: "Python", color: "text-purple-300/80 border-purple-500/20 bg-purple-500/5" },
      { name: "Discord.py", color: "text-white/50 border-white/10 bg-white/3" },
      { name: "SQLite", color: "text-blue-300/80 border-blue-500/20 bg-blue-500/5" },
    ],
    highlights: ["Async event-driven architecture", "Slash commands + REST API", "SQLite persistence layer", "Hot-reloadable cog system", "Smart rate-limit queue"],
    href: "https://github.com/SnoW-099/Rez",
    glow: "rgba(168,85,247,0.15)",
    status: "Active",
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const project = projectDetails[slug]

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link href="/" className="text-blue-300 hover:underline">← Back home</Link>
        </div>
      </div>
    )
  }

  const sections = [
    { icon: Lightbulb, title: "Why I built it", content: project.motivation },
    { icon: Layers, title: "Architecture", content: project.architecture },
    { icon: Wrench, title: "Challenges", content: project.challenges },
    { icon: BookOpen, title: "What I learned", content: project.learnings },
  ]

  return (
    <div className="min-h-screen bg-[#050505] text-foreground relative selection:bg-foreground selection:text-background">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-[0.4] bg-repeat z-10" />
        <div
          className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] rounded-full blur-[180px] animate-blob"
          style={{ background: project.glow }}
        />
      </div>

      <div className="relative z-10 px-4 pt-10 pb-20 max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <header className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.02]">
              {project.status}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-3">
            {project.name}
          </h1>
          <p className="text-xl text-white/50 font-light leading-relaxed">
            {project.tagline}
          </p>
        </header>

        <section className="mb-12">
          <p className="text-base text-white/60 leading-relaxed">
            {project.description}
          </p>
        </section>

        <section className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-xs font-medium tracking-wide px-3 py-1.5 rounded-lg border ${tag.color} shadow-inner`}
              >
                {tag.name}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((h) => (
              <span
                key={h}
                className="text-[10px] font-mono tracking-wide text-white/40 border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 rounded-md"
              >
                {h}
              </span>
            ))}
          </div>
        </section>

        <div className="space-y-8 mb-14">
          {sections.map((s) => (
            <section
              key={s.title}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-white/40" />
                </div>
                <h2 className="text-lg font-semibold text-white/90">{s.title}</h2>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">{s.content}</p>
            </section>
          ))}
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-white/80 hover:text-white"
        >
          View Repository
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
