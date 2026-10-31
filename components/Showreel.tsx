"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

/**
 * Showreel: shows the poster until someone presses play, so the 5 MB video is never downloaded for
 * visitors who do not want it. Playback starts from a click, so the soundtrack can play with sound.
 */
export default function Showreel() {
  const [playing, setPlaying] = useState(false)
  const video = useRef<HTMLVideoElement>(null)

  return (
    <figure id="showreel" className="showreel" data-reveal>
      {playing ? (
        <video
          ref={video}
          className="showreel-video"
          src="/showreel/snow-dev.mp4"
          poster="/showreel/poster.jpg"
          controls
          autoPlay
          playsInline
          preload="auto"
          onEnded={() => setPlaying(false)}
        >
          Your browser cannot play this video. It is a 33-second film about Snow Dev&apos;s projects.
        </video>
      ) : (
        <button type="button" className="showreel-start" onClick={() => setPlaying(true)} aria-label="Play the Snow Dev showreel, 33 seconds, with sound">
          <Image className="showreel-poster" src="/showreel/poster.jpg" alt="" width={1600} height={900} sizes="(max-width: 1200px) 100vw, 1200px" />
          <span className="showreel-shade" aria-hidden="true" />
          <span className="showreel-cta" aria-hidden="true">
            <span className="showreel-play"><Play /></span>
            <span className="showreel-label"><strong>Watch the film</strong><span>33 s · with sound</span></span>
          </span>
        </button>
      )}
      <figcaption className="sr-only">A 33-second film showing Snowtify, StarOptimizer, Rez Bot, Vibe, Python Mini Systems and this website.</figcaption>
    </figure>
  )
}
