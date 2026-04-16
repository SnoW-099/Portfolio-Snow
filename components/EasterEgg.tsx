"use client"

import { useEffect, useState, useCallback } from "react"

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
]

interface Drop {
  id: number
  x: number
  delay: number
  speed: number
  chars: string[]
}

export default function EasterEgg() {
  const [active, setActive] = useState(false)
  const [sequence, setSequence] = useState<string[]>([])

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      const next = [...sequence, e.key]
      if (next.length > KONAMI.length) next.shift()
      setSequence(next)

      if (next.length === KONAMI.length && next.every((k, i) => k === KONAMI[i])) {
        setActive(true)
        setSequence([])
        setTimeout(() => setActive(false), 4000)
      }
    },
    [sequence],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [handleKey])

  if (!active) return null

  const drops: Drop[] = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    speed: 2 + Math.random() * 3,
    chars: Array.from({ length: 8 + Math.floor(Math.random() * 12) }, () =>
      String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96)),
    ),
  }))

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-black/40" />
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute top-0 text-green-400/80 font-mono text-xs leading-tight"
          style={{
            left: `${drop.x}%`,
            animation: `matrix-fall ${drop.speed}s linear ${drop.delay}s infinite`,
          }}
        >
          {drop.chars.map((char, j) => (
            <div
              key={j}
              style={{ opacity: 1 - j * 0.08 }}
            >
              {char}
            </div>
          ))}
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-green-400 font-mono text-lg tracking-widest animate-pulse">
          WAKE UP, NEO...
        </p>
      </div>
      <style jsx>{`
        @keyframes matrix-fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  )
}
