"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, MessageCircle, Mail, ExternalLink, Copy } from "lucide-react"
import Magnetic from "../Magnetic"

gsap.registerPlugin(ScrollTrigger)

const contacts = [
  {
    name: "GitHub",
    label: "github.com/SnoW-099",
    icon: Github,
    href: "https://github.com/SnoW-099",
    glow: "hover:border-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]",
    external: true,
  },
  {
    name: "Discord",
    label: ".snow_xd",
    icon: MessageCircle,
    value: ".snow_xd",
    glow: "hover:border-[#5865F2]/40 hover:shadow-[0_0_20px_rgba(88,101,242,0.1)]",
    iconColor: "text-[#5865F2]",
  },
  {
    name: "Email",
    label: "ryze0950@gmail.com",
    icon: Mail,
    href: "mailto:ryze0950@gmail.com",
    glow: "hover:border-amber-500/30 hover:shadow-[0_0_20px_rgba(251,191,36,0.08)]",
  },
]

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [titleRef.current, subRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
            toggleActions: "play none none reverse",
          },
        },
      )
      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.querySelectorAll(".contact-link"),
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, stagger: 0.1, duration: 0.45, ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 58%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-[80vh] w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full bg-blue-200/4 blur-[160px]" />
      </div>

      <div className="relative z-10 text-center max-w-md px-6 w-full">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-3 opacity-0 text-gradient-amber"
        >
          Let&apos;s talk.
        </h2>
        <p
          ref={subRef}
          className="text-white/35 mb-10 text-sm opacity-0"
        >
          Open to opportunities, collabs, and interesting conversations.
        </p>

        <div ref={linksRef} className="space-y-3">
          {contacts.map((contact) => {
            if (contact.href) {
              return (
                <Magnetic key={contact.name}>
                  <a
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    data-cursor-hover
                    className={`contact-link w-full flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/8 transition-all duration-300 group text-left ${contact.glow}`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
                      <contact.icon className={`w-4 h-4 ${contact.iconColor ?? "text-white/50"} group-hover:text-white transition-colors`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-white/30 uppercase tracking-wider mb-0.5">{contact.name}</div>
                      <div className="text-sm font-medium text-white/75 truncate">{contact.label}</div>
                    </div>
                    {contact.external && <ExternalLink className="w-3.5 h-3.5 text-white/20 flex-shrink-0" />}
                  </a>
                </Magnetic>
              )
            }

            return (
              <Magnetic key={contact.name}>
                <button
                  onClick={() => navigator.clipboard.writeText(contact.value!)}
                  data-cursor-hover
                  className={`contact-link w-full flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/8 transition-all duration-300 group text-left ${contact.glow}`}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
                    <contact.icon className={`w-4 h-4 ${contact.iconColor ?? "text-white/50"} group-hover:text-white transition-colors`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] text-white/30 uppercase tracking-wider mb-0.5">{contact.name}</div>
                    <div className="text-sm font-medium text-white/75 truncate">{contact.label}</div>
                  </div>
                  <Copy className="w-3.5 h-3.5 text-white/20 flex-shrink-0 group-hover:text-white/40 transition-colors" />
                </button>
              </Magnetic>
            )
          })}
        </div>
      </div>
    </section>
  )
}
