"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, MessageCircle, Mail, ExternalLink } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const contacts = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/SnoW-099",
    style: "bg-white/5 hover:bg-white/10 border-white/5",
    external: true,
  },
  {
    name: "Discord",
    icon: MessageCircle,
    value: ".snow_xd",
    style: "bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border-[#5865F2]/20",
    iconColor: "text-[#5865F2]",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:ryze0950@gmail.com",
    style: "bg-white/5 hover:bg-white/10 border-white/5",
  },
]

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      )

      // Links stagger
      if (linksRef.current) {
        const links = linksRef.current.querySelectorAll(".contact-link")
        gsap.fromTo(
          links,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-[70vh] w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-[150px]" />
      </div>

      <div className="relative z-10 text-center max-w-lg px-6">
        <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold tracking-tight mb-4 opacity-0 text-white">
          Get in touch.
        </h2>
        <p className="text-white/40 mb-10 text-sm md:text-base">
          Feel free to reach out — I'm always open to new opportunities.
        </p>

        <div ref={linksRef} className="space-y-3">
          {contacts.map((contact) => {
            const Component = contact.href ? "a" : "button"
            return (
              <Component
                key={contact.name}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                onClick={contact.value ? () => navigator.clipboard.writeText(contact.value!) : undefined}
                className={`contact-link w-full flex items-center gap-4 p-4 rounded-xl border transition-all group ${contact.style}`}
              >
                <contact.icon className={`w-5 h-5 ${contact.iconColor || "text-muted-foreground group-hover:text-foreground"} transition-colors`} />
                <span className="text-sm font-medium">{contact.name}</span>
                {contact.external && <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-40" />}
                {contact.value && (
                  <span className="text-xs ml-auto opacity-50 bg-[#5865F2]/20 px-2.5 py-1 rounded">{contact.value}</span>
                )}
              </Component>
            )
          })}
        </div>
      </div>
    </section>
  )
}
