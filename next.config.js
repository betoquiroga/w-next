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
