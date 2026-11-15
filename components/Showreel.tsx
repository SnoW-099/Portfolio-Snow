"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import type { Dictionary } from "@/lib/i18n"

/**
 * Showreel: shows the poster until someone presses play, so the video is never downloaded for
 * visitors who do not want it. Playback starts from a click, so the soundtrack can play with sound.
 */
export default function Showreel({ t }: { t: Dictionary["showreel"] }) {
  const [playing, setPlaying] = useState(false)

  return (
    <figure id="showreel" className="showreel" data-reveal>
      {playing ? (
        <video className="showreel-video" poster="/showreel/poster.jpg" controls autoPlay playsInline preload="metadata" onEnded={() => setPlaying(false)}>
          <source src="/showreel/snow-dev.webm" type="video/webm" />
          <source src="/showreel/snow-dev.mp4" type="video/mp4" />
          {t.fallback}
        </video>
      ) : (
        <button type="button" className="showreel-start" onClick={() => setPlaying(true)} aria-label={t.aria} data-umami-event="showreel-play">
          <Image className="showreel-poster" src="/showreel/poster.jpg" alt="" width={1600} height={900} sizes="(max-width: 1200px) 100vw, 1200px" />
          <span className="showreel-shade" aria-hidden="true" />
          <span className="showreel-cta" aria-hidden="true">
            <span className="showreel-play"><Play /></span>
            <span className="showreel-label"><strong>{t.watch}</strong><span>{t.meta}</span></span>
          </span>
        </button>
      )}
      <figcaption className="sr-only">{t.caption}</figcaption>
    </figure>
  )
}
