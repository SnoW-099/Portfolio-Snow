"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, Terminal, Zap, Cloud, Atom, Triangle, Wind, Hexagon, Database, Cpu } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const languages = [
  { name: "Python", level: "Junior+", pct: 65, from: "#3572A5", to: "#6A9FD8" },
  { name: "JavaScript", level: "Learning", pct: 40, from: "#F7DF1E", to: "#F0C808" },
  { name: "TypeScript", level: "Learning", pct: 35, from: "#3178C6", to: "#5A9BD5" },
  { name: "HTML & CSS", level: "Learning (Basics)", pct: 30, from: "#E34C26", to: "#563D7C" },
]

const tools = [
  { name: "Git & GitHub", icon: Github, glow: "group-hover:border-white/30 group-hover:text-white" },
  { name: "VS Code", icon: Terminal, glow: "group-hover:border-[#007ACC]/50 group-hover:text-[#007ACC]" },
  { name: "Vercel", icon: Zap, glow: "group-hover:border-white/30 group-hover:text-white" },
  { name: "Netlify", icon: Cloud, glow: "group-hover:border-[#00C7B7]/50 group-hover:text-[#00C7B7]" },
]

const frameworks = [
  { name: "React", icon: Atom, glow: "group-hover:border-[#61DAFB]/40 group-hover:text-[#61DAFB]" },
  { name: "Next.js", icon: Triangle, glow: "group-hover:border-white/40 group-hover:text-white" },
  { name: "Tailwind", icon: Wind, glow: "group-hover:border-[#06B6D4]/40 group-hover:text-[#06B6D4]" },
  { name: "Node.js", icon: Hexagon, glow: "group-hover:border-[#339933]/40 group-hover:text-[#339933]" },
  { name: "Django", icon: Database, glow: "group-hover:border-[#44B78B]/40 group-hover:text-[#44B78B]" },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const barsRef = useRef<HTMLDivElement>(null)
  const toolsRef = useRef<HTMLDivElement>(null)
  const frameworksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=310%",
          scrub: 2,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      })

      tl.fromTo(
        [titleRef.current, subtitleRef.current],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.35, ease: "power2.out" },
      )
      tl.to({}, { duration: 0.1 })

      if (barsRef.current) {
        const items = barsRef.current.querySelectorAll(".skill-item")
        const fills = barsRef.current.querySelectorAll<HTMLElement>(".skill-fill")
        tl.fromTo(items, { opacity: 0, x: -24 }, { opacity: 1, x: 0, stagger: 0.08, duration: 0.3, ease: "power2.out" })
        tl.fromTo(fills, { width: "0%" }, { width: (i) => `${languages[i]?.pct ?? 0}%`, stagger: 0.08, duration: 0.45, ease: "power2.out" }, "-=0.2")
      }

      tl.to({}, { duration: 0.1 })

      if (toolsRef.current) {
        const cards = toolsRef.current.querySelectorAll(".tool-card")
        tl.fromTo(cards, { opacity: 0, y: 18, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, stagger: 0.05, duration: 0.3, ease: "power2.out" })
      }

      tl.to({}, { duration: 0.1 })

      if (frameworksRef.current) {
        const cards = frameworksRef.current.querySelectorAll(".fw-card")
        tl.fromTo(cards, { opacity: 0, y: 18, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, stagger: 0.07, duration: 0.45, ease: "power2.out" })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 left-1/4 w-[550px] h-[550px] rounded-full bg-indigo-500/6 blur-[160px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 md:px-10">
        <div className="mb-12 md:mb-14">
          <h2
            ref={titleRef}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white opacity-0"
          >
            What I build with.
          </h2>
          <p
            ref={subtitleRef}
            className="text-white/30 text-sm mt-2 opacity-0"
          >
            Languages, frameworks & tools in my daily stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-medium mb-5 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" /> Languages
            </h3>
            <div ref={barsRef} className="space-y-5">
              {languages.map((lang) => (
                <div key={lang.name} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-white/85">{lang.name}</span>
                    <span className="text-xs text-white/30">{lang.level}</span>
                  </div>
                  <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="skill-fill h-full rounded-full"
                      style={{
                        width: "0%",
                        background: `linear-gradient(90deg, ${lang.from}, ${lang.to})`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-medium mb-4 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" /> Tools
              </h3>
              <div ref={toolsRef} className="grid grid-cols-2 gap-2">
                {tools.map((t) => (
                  <div
                    key={t.name}
                    data-cursor-hover
                    className={`tool-card flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/8 transition-all duration-300 group ${t.glow}`}
                  >
                    <t.icon className="w-4 h-4 text-white/25 transition-colors duration-300" />
                    <span className="text-xs font-medium text-white/60 group-hover:text-inherit transition-colors duration-300">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-medium mb-4 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" /> Frameworks
              </h3>
              <div ref={frameworksRef} className="grid grid-cols-2 gap-2">
                {frameworks.map((fw) => (
                  <div
                    key={fw.name}
                    data-cursor-hover
                    className={`fw-card flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/8 transition-all duration-300 group ${fw.glow}`}
                  >
                    <fw.icon className="w-4 h-4 text-white/25 transition-colors duration-300" />
                    <span className="text-xs font-medium text-white/60 group-hover:text-inherit transition-colors duration-300">
                      {fw.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
