"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const phrase = "< Angel />"
    let i = 0

    if (!textRef.current || !barRef.current) return

    textRef.current.textContent = ""

    const typeTimer = setInterval(() => {
      if (!textRef.current) return
      if (i < phrase.length) {
        textRef.current.textContent += phrase[i]
        i++
      } else {
        clearInterval(typeTimer)
      }
    }, 55)

    gsap.fromTo(
      barRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.9,
        delay: 0.25,
        ease: "power2.inOut",
        transformOrigin: "left center",
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.75,
            delay: 0.15,
            ease: "power3.inOut",
            onComplete: () => {
              setMounted(false)
              onComplete()
            },
          })
        },
      }
    )

    return () => clearInterval(typeTimer)
  }, [onComplete])

  if (!mounted) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9998] bg-[#050505] flex flex-col items-center justify-center gap-10"
    >
      <div className="font-mono tracking-widest text-white/90 select-none" style={{ fontSize: "clamp(1.25rem, 4vw, 2.5rem)" }}>
        <span ref={textRef} />
        <span className="text-blue-200 animate-pulse">_</span>
      </div>

      <div className="w-40 h-px bg-white/10 relative overflow-hidden">
        <div
          ref={barRef}
          className="absolute inset-0 bg-gradient-to-r from-blue-200 via-white/80 to-white origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <p className="text-[10px] font-mono text-white/20 tracking-[0.3em] uppercase">
        Loading portfolio
      </p>
    </div>
  )
}
