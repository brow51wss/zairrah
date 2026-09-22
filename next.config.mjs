import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: '/', destination: '/brand-guide', permanent: false },
    ]
  },
  async rewrites() {
    return [
      { source: '/brand-guide', destination: '/brand-guide/index.html' },
      { source: '/brand-guide/', destination: '/brand-guide/index.html' },
    ]
  },
}

export default nextConfig
