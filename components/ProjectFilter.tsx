"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/** Category filter for server-rendered project cards. Cards opt in with data-category. */
export default function ProjectFilter({ categories, children }: { categories: string[]; children: ReactNode }) {
  const [active, setActive] = useState("All")
  const [shown, setShown] = useState<number | null>(null)
  const grid = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = Array.from(grid.current?.querySelectorAll<HTMLElement>("[data-category]") ?? [])
    for (const card of cards) card.hidden = active !== "All" && card.dataset.category !== active
    setShown(cards.filter((card) => !card.hidden).length)
  }, [active])

  return (
    <>
      <div className="archive-filters" role="group" aria-label="Filter projects by category">
        {["All", ...categories].map((category) => (
          <button key={category} type="button" aria-pressed={active === category} onClick={() => setActive(category)}>{category}</button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{shown === null ? "" : shown + (shown === 1 ? " project" : " projects") + " shown"}</p>
      <div ref={grid} className="archive-grid">{children}</div>
    </>
  )
}
