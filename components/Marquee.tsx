const words = ["Design", "Develop", "Connect"]

/** Ribbon echoing the Design / Develop / Connect reel. Decorative; moves with scrolling only, and is static under reduced motion. */
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {[...words, ...words].map((word, i) => <span key={i}>{word}<i>✦</i></span>)}
          </div>
        ))}
      </div>
    </div>
  )
}
