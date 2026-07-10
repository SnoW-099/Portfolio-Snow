"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"

interface MagneticProps {
  children: React.ReactElement<{ ref?: React.Ref<HTMLDivElement> }>
}

export default function Magnetic({ children }: MagneticProps) {
  const magnetic = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const defaultXTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" })
    const defaultYTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" })

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const rect = magnetic.current?.getBoundingClientRect()
      if (!rect) return

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distanceX = clientX - centerX
      const distanceY = clientY - centerY

      defaultXTo(distanceX * 0.35)
      defaultYTo(distanceY * 0.35)
    }

    const handleMouseLeave = () => {
      defaultXTo(0)
      defaultYTo(0)
    }

    const current = magnetic.current
    if (current) {
      current.addEventListener("mousemove", handleMouseMove)
      current.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (current) {
        current.removeEventListener("mousemove", handleMouseMove)
        current.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return React.cloneElement(children, { ref: magnetic })
}
