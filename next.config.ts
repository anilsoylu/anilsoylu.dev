import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsHmrCache: false,
  },
  images: {
    deviceSizes: [390, 435, 768, 1024, 1280],
    formats: ["image/avif"],
  },
  compress: true,
}

export default nextConfig
