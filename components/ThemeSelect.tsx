"use client"

import { useEffect, useId, useState } from "react"
import { SunMoon } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeSelect() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const id = useId()

  useEffect(() => { setMounted(true) }, [])

  return (
    <div className="appearance-control">
      <label className="sr-only" htmlFor={id}>Appearance</label>
      <SunMoon aria-hidden="true" />
      <select id={id} value={mounted ? theme ?? "system" : "system"} disabled={!mounted} onChange={(event) => setTheme(event.target.value)}>
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  )
}
