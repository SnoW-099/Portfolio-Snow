"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import type { Dictionary } from "@/lib/i18n"

/** Category filter for server-rendered project cards. Cards opt in with data-category. */
export default function ProjectFilter({ categories, children, t }: { categories: string[]; children: ReactNode; t: Dictionary["archive"] }) {
  const [active, setActive] = useState(t.all)
  const [shown, setShown] = useState<number | null>(null)
  const grid = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = Array.from(grid.current?.querySelectorAll<HTMLElement>("[data-category]") ?? [])
    for (const card of cards) card.hidden = active !== t.all && card.dataset.category !== active
    setShown(cards.filter((card) => !card.hidden).length)
  }, [active, t.all])

  return (
    <>
      <div className="archive-filters" role="group" aria-label={t.filterLabel}>
        {[t.all, ...categories].map((category) => (
          <button key={category} type="button" aria-pressed={active === category} onClick={() => setActive(category)}>{category}</button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{shown === null ? "" : shown + " " + (shown === 1 ? t.shownOne : t.shownMany)}</p>
      <div ref={grid} className="archive-grid">{children}</div>
    </>
  )
}
