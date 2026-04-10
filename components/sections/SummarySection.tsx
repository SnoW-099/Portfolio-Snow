"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { label: "Languages", value: "4", detail: "Python, JS, TS, HTML/CSS" },
  { label: "Frameworks", value: "5", detail: "React, Next.js, Tailwind, Node, Django" },
  { label: "Tools", value: "6+", detail: "Git, VS Code, Vercel, Netlify, Supabase, MongoDB" },
  { label: "Projects", value: "2+", detail: "Vibe, Rez Bot, and more coming" },
]

export default function SummarySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" },
        }
      )

      if (statsRef.current) {
        const cards = statsRef.current.querySelectorAll(".stat-card")
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: statsRef.current, start: "top 75%", toggleActions: "play none none reverse" },
          }
        )
      }

      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: 1,
          scrollTrigger: { trigger: footerRef.current, start: "top 90%", toggleActions: "play none none reverse" },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-[80vh] w-full flex flex-col items-center justify-center relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[180px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 md:px-8 text-center">
        <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold tracking-tight mb-4 opacity-0 text-white">
          At a glance.
        </h2>
        <p className="text-white/40 text-sm md:text-base mb-12">
          A quick summary of what I bring to the table.
        </p>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-white/80 mb-2">{stat.label}</div>
              <div className="text-[11px] text-white/40 leading-relaxed">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div ref={footerRef} className="relative z-10 mt-20 opacity-0">
        <p className="text-sm text-white/30">
          © 2025 Angel. Designed with <span className="text-white/60">immersive</span> scroll.
        </p>
      </div>
    </section>
  )
}
