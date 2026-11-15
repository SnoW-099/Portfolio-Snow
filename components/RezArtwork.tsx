import Image from "next/image"
import type { Lang } from "@/lib/i18n"

const text = {
  en: { caption: "A little character for your community.", alt: "Rez website: navigation, bot profile and View Commands button.", footer: "Built for communities ↗" },
  es: { caption: "Un pequeño personaje para tu comunidad.", alt: "Web de Rez: navegación, perfil del bot y botón para ver los comandos.", footer: "Hecho para comunidades ↗" },
}

export default function RezArtwork({ lang, priority = false }: { lang: Lang; priority?: boolean }) {
  const t = text[lang]
  return (
    <div className="rez-artwork">
      <div className="rez-artwork-header">
        <Image className="rez-logo" src="/projects/rez-bot/logo.png" alt="" width={91} height={85} />
        <div><span className="rez-wordmark">Rez.</span><span className="rez-artwork-caption">{t.caption}</span></div>
      </div>
      <Image className="rez-screenshot" src="/projects/rez-bot/overview.png" alt={t.alt} width={785} height={355} sizes="(max-width: 640px) calc(100vw - 64px), (max-width: 900px) 80vw, 620px" priority={priority} />
      <div className="rez-artwork-footer"><span>Python / Discord.py</span><span>{t.footer}</span></div>
    </div>
  )
}
