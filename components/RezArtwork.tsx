import Image from "next/image"

export default function RezArtwork({ priority = false }: { priority?: boolean }) {
  return (
    <div className="rez-artwork">
      <div className="rez-artwork-header">
        <Image className="rez-logo" src="/projects/rez-bot/logo.png" alt="" width={91} height={85} />
        <div><span className="rez-wordmark">Rez.</span><span className="rez-artwork-caption">A little character for your community.</span></div>
        <span className="rez-project-label">Discord bot</span>
      </div>
      <Image className="rez-screenshot" src="/projects/rez-bot/overview.png" alt="Rez website: navigation, bot profile and View Commands button." width={785} height={355} sizes="(max-width: 640px) calc(100vw - 64px), (max-width: 900px) 80vw, 620px" priority={priority} />
      <div className="rez-artwork-footer"><span>Python / Discord.py</span><span>Built for communities ↗</span></div>
    </div>
  )
}
