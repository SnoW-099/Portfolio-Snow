import { ArrowDown } from "lucide-react"

/** Rotating seal: the call to action set on a circle, with an arrow pointing at the form. Decorative. */
export default function SpinBadge({ text }: { text: string }) {
  const r = 62
  const phrase = (text + " · ").repeat(3)
  return (
    <span className="spin-badge" aria-hidden="true">
      <svg viewBox="0 0 160 160" focusable="false">
        <defs><path id="spin-badge-path" d={`M80 80m-${r} 0a${r} ${r} 0 1 1 ${r * 2} 0a${r} ${r} 0 1 1 -${r * 2} 0`} /></defs>
        <text><textPath href="#spin-badge-path" textLength={Math.floor(2 * Math.PI * r) - 4}>{phrase}</textPath></text>
      </svg>
      <ArrowDown />
    </span>
  )
}
