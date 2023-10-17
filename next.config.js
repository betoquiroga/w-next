/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wiswords.com",
      },
      {
        protocol: "https",
        hostname: "dev.wiswords.com",
      },
    ],
  },
}

module.exports = nextConfig
