import { ImageResponse } from "next/og"
import { getProjectBySlug } from "@/lib/projects"
import { isLang } from "@/lib/i18n"

export const alt = "Snow Dev project"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/** One share card per project: category, name and the Snow Dev brand, in the site's black and white. */
export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const project = isLang(lang) ? getProjectBySlug(slug, lang) : undefined
  const name = project?.name ?? "Snow Dev"

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, color: "#fafafa", background: "#0a0a0a", backgroundImage: "radial-gradient(circle at 1px 1px, #2a2a2a 1.5px, transparent 0)", backgroundSize: "32px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#a3a3a3", letterSpacing: 2, textTransform: "uppercase" }}>
          <span>{project?.category ?? ""}</span>
          <span>{project?.year ?? ""}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: name.length > 16 ? 96 : 132, fontWeight: 600, letterSpacing: -6, lineHeight: 1 }}>{name + "."}</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, lineHeight: 1.4, color: "#a3a3a3", maxWidth: 940 }}>{project?.eyebrow ?? ""}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 28, borderTop: "1px solid #2a2a2a", fontSize: 30 }}>
          <span style={{ fontWeight: 600, letterSpacing: -1 }}>Snow Dev.</span>
          <span style={{ color: "#a3a3a3", fontSize: 24 }}>portfolio-snow.netlify.app</span>
        </div>
      </div>
    ),
    size,
  )
}
