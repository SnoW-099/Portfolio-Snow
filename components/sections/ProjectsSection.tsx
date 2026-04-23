"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Code2, FileText } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    num: "01",
    name: "Vibe",
    slug: "vibe",
    description: "A premium developer dashboard featuring a modern Bento Grid layout. Centralize your workflow with a snippet manager, quick links, and project tracking.",
    highlights: ["Bento Grid UI", "React & Vite Setup", "Vanilla CSS Styling"],
    tags: ["React", "Vite"],
    tagColors: ["text-indigo-300/80 border-indigo-500/20 bg-indigo-500/5", "text-blue-300/80 border-blue-500/20 bg-blue-500/5"],
    glow: "rgba(99,102,241,0.2)",
    borderHover: "hover:border-indigo-500/40",
    href: "https://github.com/SnoW-099/vibe",
    colSpan: "md:col-span-12",
    image: "/vibe.png",
  },
  {
    num: "02",
    name: "Rez Bot",
    slug: "rez-bot",
    description: "An integrated Discord ecosystem for high-availability environments. Features a modular Security Engine, Economic Framework, and a Flask REST API bridge.",
    highlights: ["Async Event-Driven Core", "Flask Backend Gateway", "Hybrid Persistence (SQL/NoSQL)"],
    tags: ["Python", "Flask", "Disnake"],
    tagColors: ["text-purple-300/80 border-purple-500/20 bg-purple-500/5", "text-emerald-300/80 border-emerald-500/20 bg-emerald-500/5", "text-white/30 border-white/8 bg-white/3"],
    glow: "rgba(168,85,247,0.2)",
    borderHover: "hover:border-purple-500/40",
    href: "https://github.com/SnoW-099/Rez",
    colSpan: "md:col-span-12",
    image: "/rez.png",
  },
]

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=350%",
          scrub: 2,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      })

      tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
      tl.to({}, { duration: 0.2 })

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".project-card")
        cards.forEach((card, i) => {
          tl.fromTo(
            card,
            { opacity: 0, scale: 0.9, y: 100 },
            { opacity: 1, scale: 1, y: 0, duration: 1, ease: "slow(0.7, 0.7, false)" },
            i === 0 ? undefined : "-=0.5"
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
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-[250px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 md:px-10 h-full flex flex-col justify-center py-20">
        <div className="mb-16 opacity-0 text-center md:text-left" ref={titleRef}>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Selected work.
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-xl">
            Building digital infrastructures and beautiful interfaces.
          </p>
        </div>

        <div ref={cardsRef} className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.name}
              className="project-card relative rounded-[2.5rem] bg-white/[0.01] backdrop-blur-3xl border border-white/[0.08] group overflow-hidden transition-all duration-700 hover:border-white/[0.15]"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                style={{ background: `radial-gradient(1200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.glow}, transparent 80%)` }}
              />

              <div className="relative z-10 flex flex-col md:flex-row min-h-[400px]">
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-black text-white/5 tabular-nums">
                      {project.num}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[11px] font-mono tracking-wider text-white/30 border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-8">
                    <div className="flex gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-4 py-2 rounded-xl border ${project.tagColors[i]}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
                        title="Repository"
                      >
                        <Code2 className="w-5 h-5" />
                      </a>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="p-3 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
                        title="Case Study"
                      >
                        <FileText className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex flex-1 relative items-center justify-center p-12 bg-white/[0.01]">
                  <div className="relative w-full aspect-video group-hover:scale-105 transition-transform duration-700 flex justify-center items-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-[90%] h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
