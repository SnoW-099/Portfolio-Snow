const nextConfig = {
  async redirects() {
    return [{ source: "/projects/nivra", destination: "/projects", permanent: true }]
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
