import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Snow Dev — Independent Digital Development",
    short_name: "Snow Dev",
    description:
      "Websites, applications, automations and creative digital products, built independently by Snow.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
  }
}
