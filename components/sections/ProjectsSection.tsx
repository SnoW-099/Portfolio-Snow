"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, Code2, FileText, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    num: "01",
    name: "Vibe",
    slug: "vibe",
    status: "Frontend dashboard",
    description: "A focused developer dashboard for snippets, links, project notes, and everyday workflow shortcuts.",
    impact: "Turns scattered dev resources into one quick command center.",
    problem: "Developer notes and useful links get spread across tabs, files, and chats.",
    solution: "A fast Bento UI that keeps the most-used actions visible and easy to scan.",
    highlights: ["Bento Grid UI", "Snippet Manager", "Quick Links"],
    tags: ["React", "Vite", "CSS"],
    tagColors: ["text-indigo-300/80 border-indigo-500/20 bg-indigo-500/5", "text-blue-300/80 border-blue-500/20 bg-blue-500/5", "text-white/35 border-white/10 bg-white/[0.03]"],
    glow: "rgba(99,102,241,0.22)",
    href: "https://github.com/SnoW-099/vibe",
    image: "/vibe.png",
  },
  {
    num: "02",
    name: "Rez Bot",
    slug: "rez-bot",
    status: "Discord economy bot",
    description: "A Discord bot with economy commands, embeds, persistent user balances, and a cleaner structure for future moderation features.",
    impact: "Gives a server playful economy commands that can grow into a broader bot system.",
    problem: "Server utility commands often become messy when features grow one file at a time.",
    solution: "A smaller bot core with readable command flows and safer token handling through environment variables.",
    highlights: ["Economy Commands", "Embed Responses", "Persistent Balances"],
    tags: ["Python", "Discord.py", "JSON"],
    tagColors: ["text-purple-300/80 border-purple-500/20 bg-purple-500/5", "text-emerald-300/80 border-emerald-500/20 bg-emerald-500/5", "text-white/35 border-white/10 bg-white/[0.03]"],
    glow: "rgba(168,85,247,0.22)",
    href: "https://github.com/SnoW-099/Rez",
    image: "/rez.png",
  },
]

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      )

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".project-card")
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 46, scale: 0.98 },
            {
              opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 86%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full relative overflow-hidden py-28 md:py-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[250px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="mb-14 text-center opacity-0 md:text-left" ref={titleRef}>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/15 bg-blue-200/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-blue-100/60">
            <Sparkles className="h-3 w-3" />
            Built by shipping
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Projects that show the work.
          </h2>
          <p className="text-white/45 text-lg mt-4 max-w-2xl">
            Real repos, real constraints, and small products that explain how I think.
          </p>
        </div>

        <div ref={cardsRef} className="space-y-10">
          {projects.map((project) => (
            <article
              key={project.name}
              className="project-card relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.06] via-white/[0.018] to-transparent shadow-[0_24px_90px_rgba(0,0,0,0.3)] backdrop-blur-3xl transition-all duration-700 group hover:-translate-y-1 hover:border-white/[0.18] md:rounded-[2rem]"
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-1000 pointer-events-none group-hover:opacity-100"
                style={{ background: `radial-gradient(1200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.glow}, transparent 80%)` }}
              />

              <div className="relative z-10 grid min-h-[470px] grid-cols-1 md:grid-cols-[1.02fr_0.98fr]">
                <div className="flex flex-col justify-between p-6 md:p-10 lg:p-12">
                  <div>
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                      <span className="text-5xl font-black text-white/8 tabular-nums">
                        {project.num}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-white/38">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                      {project.name}
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-white/58 md:text-lg">
                      {project.description}
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/[0.08] bg-black/18 p-4">
                        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">Problem</div>
                        <p className="mt-2 text-sm leading-relaxed text-white/52">{project.problem}</p>
                      </div>
                      <div className="rounded-2xl border border-white/[0.08] bg-black/18 p-4">
                        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">Solution</div>
                        <p className="mt-2 text-sm leading-relaxed text-white/52">{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="mb-5 max-w-xl text-sm leading-relaxed text-blue-100/58">
                      {project.impact}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-mono tracking-wider text-white/32"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={tag}
                            className={`rounded-xl border px-4 py-2 text-xs font-semibold ${project.tagColors[i]}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.03]"
                          title="Repository"
                        >
                          <Code2 className="h-5 w-5" />
                          GitHub
                        </a>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/55 transition-all hover:scale-[1.03] hover:bg-white/10 hover:text-white"
                          title="Case Study"
                        >
                          <FileText className="h-5 w-5" />
                          Case
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex min-h-[260px] items-center justify-center border-t border-white/[0.08] p-5 md:border-l md:border-t-0 md:p-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_55%)] opacity-80" />
                  <div className="relative flex aspect-video w-full items-center justify-center transition-transform duration-700 group-hover:scale-[1.03]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="!static !h-auto w-[96%] rounded-2xl object-contain shadow-[0_22px_60px_rgba(0,0,0,0.48)]"
                    />
                    <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white/25 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/65" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
