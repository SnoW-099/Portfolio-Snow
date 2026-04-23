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
    tagline: "A premium developer dashboard featuring a modern Bento Grid layout.",
    description:
      "Vibe centralizes your workflow with a snippet manager, quick links, persistent notes, and project tracking. It is a high-performance solution engineered for real-time synchronization and productivity mapping.",
    motivation:
      "I needed a centralized dashboard that wasn't bloated with heavy frameworks. Vibe is built upon modular principles to ensure scalability, reliability, and seamless integration within professional production environments.",
    architecture:
      "Modular Frontend Architecture. Built with React, Vite, and Vanilla CSS to ensure optimized low-latency processing and high throughput. Designed for maximum responsiveness under high-intensity task tracking.",
    challenges:
      "Securing the persistent notes and quick links across sessions. Integrated standard encryption protocols and secure environment handling to make the dashboard production-ready while keeping bundle size extremely low.",
    learnings:
      "Learned to orchestrate a Bento Grid layout robustly using Vanilla CSS, eliminating the need for bulky UI libraries. Mastered Vite's optimized build pipeline for highly performant frontend solutions.",
    tags: [
      { name: "React", color: "text-indigo-300/80 border-indigo-500/20 bg-indigo-500/5" },
      { name: "Vite", color: "text-blue-300/80 border-blue-500/20 bg-blue-500/5" },
      { name: "Vanilla CSS", color: "text-pink-300/80 border-pink-500/20 bg-pink-500/5" },
    ],
    highlights: ["Bento Grid UI", "React & Vite Setup", "Vanilla CSS Styling"],
    href: "https://github.com/SnoW-099/vibe",
    glow: "rgba(99,102,241,0.15)",
    status: "Live",
  },
  "rez-bot": {
    name: "Rez Bot",
    tagline: "High-Performance Security and Economic Infrastructure for Discord.",
    description:
      "Rez is an integrated Discord ecosystem designed for high-availability environments. It consolidates a modular Security Engine and a scalable Economic Framework, offering real-time telemetry through a proprietary Liquid Black terminal interface.",
    motivation:
      "To build an infrastructure-driven development module for the next generation of Discord management. Rez replaces repetitive moderation actions with an advanced setup featuring global analytical ranking systems.",
    architecture:
      "Dual-component architecture: Service Layer (Discord Core) using Python/Disnake for async event-driven real-time interactions, and an API Gateway using Flask/CORS designed for low-latency JSON data delivery to frontend consumers. Persistence uses Hybrid PostgreSQL (Supabase) and MongoDB.",
    challenges:
      "High concurrency management. Handled asyncio for non-blocking I/O operations to ensure high throughput during peak loads. Ensuring strict CORS policy configurations for the bridging interface.",
    learnings:
      "Architected a scalable bridge between a Discord backend and a Web UI. Engineered hybrid data solutions utilizing Supabase for relational data and MongoDB for unstructured logs. Mastered RESTful gateway deployments.",
    tags: [
      { name: "Python", color: "text-purple-300/80 border-purple-500/20 bg-purple-500/5" },
      { name: "Flask", color: "text-emerald-300/80 border-emerald-500/20 bg-emerald-500/5" },
      { name: "Disnake", color: "text-white/50 border-white/10 bg-white/3" },
    ],
    highlights: ["Async Event-Driven Core", "Flask Backend Gateway", "Hybrid Persistence (SQL/NoSQL)"],
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
