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
        port: "3040",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "dev.wiswords.com",
        port: "3050",
        pathname: "/uploads/**",
      },
    ],
    domains: ["localhost", "wiswords.com"],
  },
}

module.exports = nextConfig
