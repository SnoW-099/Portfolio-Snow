// Visitors whose browser prefers Spanish (or another language of Spain) go to /es; everyone else to /en.
// shortcut: only the first language of Accept-Language is read; move to a proxy if more languages are added.
const spanish = [{ type: "header", key: "accept-language", value: "(es|ca|gl|eu).*" }]

const nextConfig = {
  async redirects() {
    return [
      { source: "/projects/nivra", destination: "/projects", permanent: true },
      { source: "/:lang(en|es)/projects/nivra", destination: "/:lang/projects", permanent: true },
      { source: "/", has: spanish, destination: "/es", permanent: false },
      { source: "/", destination: "/en", permanent: false },
      { source: "/projects", has: spanish, destination: "/es/projects", permanent: false },
      { source: "/projects", destination: "/en/projects", permanent: false },
      // Only slugs: the images in public/projects/<slug>/ must keep their own URLs.
      { source: "/projects/:slug([^/.]+)", has: spanish, destination: "/es/projects/:slug", permanent: false },
      { source: "/projects/:slug([^/.]+)", destination: "/en/projects/:slug", permanent: false },
    ]
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
