/** Snow Dev mark: a six-arm snowflake on a blue-black tile. Decorative; the wordmark next to it names the brand. */
export default function SnowDevMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" focusable="false" style={{ width: size, height: size }}>
      <defs>
        <linearGradient id="snowdev-tile" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0b0f1a" />
          <stop offset="1" stopColor="#7c5cff" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#snowdev-tile)" />
      <g stroke="#f4f6fa" strokeWidth="2.4" strokeLinecap="round" fill="none">
        <path d="M8 20H32M14 9.6L26 30.4M26 9.6L14 30.4" />
        <path d="M20 14.5l-2.5-2M20 14.5l2.5-2M20 25.5l-2.5 2M20 25.5l2.5 2" />
      </g>
      <circle cx="20" cy="20" r="2" fill="#f4f6fa" />
    </svg>
  )
}
