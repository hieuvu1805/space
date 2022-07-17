/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.imgur.com",
      "imgur.com",
      "photos.marinetraffic.com",
      "farm1.staticflickr.com",
      "farm5.staticflickr.com",
      "live.staticflickr.com",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
