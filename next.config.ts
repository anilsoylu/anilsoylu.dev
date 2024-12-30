import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsHmrCache: false,
  },
  compress: true,
}

export default nextConfig
