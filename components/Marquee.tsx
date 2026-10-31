import { services } from "@/lib/services"

/** Slow ribbon of the four services. Decorative (the Services section carries the content); static under reduced motion. */
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {services.map((service) => <span key={service.id}>{service.title}<i>✦</i></span>)}
          </div>
        ))}
      </div>
    </div>
  )
}
