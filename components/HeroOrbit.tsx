/**
 * Decorative motion graphic behind the hero: three orbits (one per stage of the work) with a marker on each,
 * a ring of ticks and an arc that keeps drawing itself. Pure SVG + CSS; static under reduced motion.
 */
export default function HeroOrbit({ labels }: { labels: string[] }) {
  const orbits = [110, 190, 270]
  return (
    <svg className="hero-orbit" viewBox="0 0 600 600" aria-hidden="true" focusable="false">
      <line className="orbit-axis" x1="300" y1="0" x2="300" y2="600" />
      <line className="orbit-axis" x1="0" y1="300" x2="600" y2="300" />
      <circle className="orbit-ticks" cx="300" cy="300" r="292" />
      {orbits.map((r, i) => (
        <g key={r}>
          <circle className={"orbit-ring" + (i === 1 ? " orbit-ring-dashed" : "")} cx="300" cy="300" r={r} />
          <g className="orbit-spin" style={{ animationDuration: 26 + i * 16 + "s", animationDirection: i % 2 ? "reverse" : "normal", animationDelay: -i * 9 + "s" }}>
            <circle className="orbit-dot" cx={300 + r} cy="300" r={i === 0 ? 5 : 4} />
            <circle className="orbit-halo" cx={300 + r} cy="300" r="12" />
            <text className="orbit-label" x={300 + r + 20} y="304">{"0" + (i + 1) + " " + labels[i]}</text>
          </g>
        </g>
      ))}
      <circle className="orbit-arc" cx="300" cy="300" r="230" pathLength="100" />
      <g className="orbit-core">
        <circle cx="300" cy="300" r="26" />
        <path d="M300 286v28M286 300h28" />
      </g>
    </svg>
  )
}
