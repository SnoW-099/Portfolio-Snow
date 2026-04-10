"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Github,
  Terminal,
  Zap,
  Cloud,
  Cpu,
  Atom,
  Triangle,
  Wind,
  Hexagon,
  Database,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const languages = [
  { name: "Python", level: "Mid Level", width: "50%", color: "bg-blue-400/60", dot: "bg-blue-400/40" },
  { name: "JavaScript", level: "Junior", width: "25%", color: "bg-yellow-400/60", dot: "bg-yellow-400/40" },
  { name: "TypeScript", level: "Junior", width: "25%", color: "bg-blue-500/60", dot: "bg-blue-500/40" },
  { name: "HTML & CSS", level: "Junior", width: "25%", color: "bg-orange-400/60", dot: "bg-orange-400/40" },
]

const tools = [
  { name: "Git & GitHub", icon: Github, hoverColor: "group-hover:text-white" },
  { name: "VS Code", icon: Terminal, hoverColor: "group-hover:text-[#007ACC]" },
  { name: "Vercel", icon: Zap, hoverColor: "group-hover:text-white" },
  { name: "Netlify", icon: Cloud, hoverColor: "group-hover:text-[#00C7B7]" },
]

const frameworks = [
  { name: "React", icon: Atom, hoverColor: "group-hover:text-[#61DAFB]", borderColor: "hover:border-[#61DAFB]/50" },
  { name: "Next.js", icon: Triangle, hoverColor: "group-hover:text-white", borderColor: "hover:border-white/50" },
  { name: "Tailwind", icon: Wind, hoverColor: "group-hover:text-[#06B6D4]", borderColor: "hover:border-[#06B6D4]/50" },
  { name: "Node.js", icon: Hexagon, hoverColor: "group-hover:text-[#339933]", borderColor: "hover:border-[#339933]/50" },
  { name: "Django", icon: Database, hoverColor: "group-hover:text-[#44B78B]", borderColor: "hover:border-[#44B78B]/50" },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const barsRef = useRef<HTMLDivElement>(null)
  const toolsRef = useRef<HTMLDivElement>(null)
  const frameworksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      })

      // Title fades in
      tl.fromTo(titleRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.3 })

      // Language bars fill
      if (barsRef.current) {
        const bars = barsRef.current.querySelectorAll(".skill-bar-fill")
        const barItems = barsRef.current.querySelectorAll(".skill-bar-item")
        tl.fromTo(barItems, { opacity: 0, x: -40 }, { opacity: 1, x: 0, stagger: 0.08, duration: 0.3 }, "-=0.1")
        tl.fromTo(bars, { width: "0%" }, { width: (i: number) => languages[i]?.width || "0%", stagger: 0.08, duration: 0.4 }, "-=0.3")
      }

      // Tools stagger in
      if (toolsRef.current) {
        const toolCards = toolsRef.current.querySelectorAll(".tool-card")
        tl.fromTo(toolCards, { opacity: 0, y: 30, rotateY: 45 }, { opacity: 1, y: 0, rotateY: 0, stagger: 0.06, duration: 0.3 }, "-=0.2")
      }

      // Frameworks rotate in
      if (frameworksRef.current) {
        const fwCards = frameworksRef.current.querySelectorAll(".fw-card")
        tl.fromTo(fwCards, { opacity: 0, scale: 0.8, rotateY: -45 }, { opacity: 1, scale: 1, rotateY: 0, stagger: 0.06, duration: 0.3 }, "-=0.2")
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/8 blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 md:px-8">
        <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold tracking-tight mb-12 md:mb-16 text-center opacity-0">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Languages */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground/50 font-medium mb-6 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Languages
            </h3>
            <div ref={barsRef} className="space-y-5">
              {languages.map((lang) => (
                <div key={lang.name} className="skill-bar-item">
                  <div className="flex justify-between items-center mb-2 text-sm">
                    <span className="text-foreground/90 font-medium flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${lang.dot}`} />
                      {lang.name}
                    </span>
                    <span className="text-muted-foreground text-xs">{lang.level}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div className={`skill-bar-fill h-full ${lang.color} rounded-full`} style={{ width: "0%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Tools */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground/50 font-medium mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Tools & Utils
              </h3>
              <div ref={toolsRef} className="grid grid-cols-2 gap-2">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="tool-card p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all flex items-center gap-3 group cursor-default"
                    style={{ perspective: "600px" }}
                  >
                    <tool.icon className={`w-4 h-4 text-muted-foreground ${tool.hoverColor} transition-colors`} />
                    <span className="text-xs font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground/50 font-medium mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Frameworks
              </h3>
              <div ref={frameworksRef} className="grid grid-cols-2 gap-2">
                {frameworks.map((fw) => (
                  <div
                    key={fw.name}
                    className={`fw-card p-3 rounded-xl bg-white/5 border border-white/5 ${fw.borderColor} transition-all flex items-center gap-3 group cursor-default`}
                    style={{ perspective: "600px" }}
                  >
                    <fw.icon className={`w-4 h-4 text-muted-foreground ${fw.hoverColor} transition-colors`} />
                    <span className="text-xs font-medium">{fw.name}</span>
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
