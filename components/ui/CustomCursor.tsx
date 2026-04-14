"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let dotX   = 0, dotY   = 0
    let ringX  = 0, ringY  = 0
    let hovering = false
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onEnter = () => { hovering = true  }
    const onLeave = () => { hovering = false }

    const attachHoverListeners = () => {
      document
        .querySelectorAll<HTMLElement>("a, button, [data-cursor-hover], [role='button']")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnter)
          el.addEventListener("mouseleave", onLeave)
        })
    }

    const tick = () => {
      
      dotX += (mouseX - dotX) * 0.85
      dotY += (mouseY - dotY) * 0.85

      
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1

      const dotSize   = 6
      const ringSize  = hovering ? 44 : 28

      if (dotRef.current) {
        dotRef.current.style.transform  = `translate(${dotX - dotSize / 2}px, ${dotY - dotSize / 2}px)`
        dotRef.current.style.opacity    = hovering ? "0" : "1"
      }
      if (ringRef.current) {
        ringRef.current.style.transform  = `translate(${ringX - ringSize / 2}px, ${ringY - ringSize / 2}px)`
        ringRef.current.style.width      = `${ringSize}px`
        ringRef.current.style.height     = `${ringSize}px`
      }

      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove)

    
    const observer = new MutationObserver(attachHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })
    attachHoverListeners()

    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      observer.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-white mix-blend-difference transition-opacity duration-150"
        style={{ width: 6, height: 6 }}
      />
      
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-white/70 mix-blend-difference transition-[width,height] duration-200 ease-out"
        style={{ width: 28, height: 28 }}
      />
    </>
  )
}
