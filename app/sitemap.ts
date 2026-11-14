import type { MetadataRoute } from "next"
import { publicSlugs } from "@/lib/projects"
import { langs, siteUrl } from "@/lib/i18n"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/projects", changeFrequency: "weekly" as const, priority: 0.8 },
    ...publicSlugs.map((slug) => ({ path: "/projects/" + slug, changeFrequency: "monthly" as const, priority: 0.7 })),
  ]
  // One entry per language, each pointing at its translation (hreflang).
  return paths.flatMap(({ path, ...rest }) => langs.map((lang) => ({
    url: siteUrl + "/" + lang + path,
    ...rest,
    alternates: { languages: Object.fromEntries(langs.map((other) => [other, siteUrl + "/" + other + path])) },
  })))
}
