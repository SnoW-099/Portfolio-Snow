const nextConfig = {
  async redirects() {
    return [{ source: "/projects/nivra", destination: "/projects", permanent: true }]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
