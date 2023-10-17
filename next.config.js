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
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "dev.wiswords.com",
        pathname: "/uploads/**",
      },
    ],
    domains: ["localhost", "wiswords.com", "vercel.app", "dev.wiswords.com"],
  },
}

module.exports = nextConfig
