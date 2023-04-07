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
        protocol: "http",
        hostname: "wiswords.com",
        port: "3040",
        pathname: "/uploads/**",
      },
    ],
    domains: ["localhost", "wiswords.com"],
  },
}

module.exports = nextConfig
