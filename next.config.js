const path = require("node:path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/photo/**",
      },
    ],
  },

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID, // pulls from .env file
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, // pulls from .env file
  },
  // Enables the styled-components SWC transform
  // styledComponents: true,
}

module.exports = nextConfig
