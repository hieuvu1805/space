/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.imgur.com",
      "imgur.com",
      "photos.marinetraffic.com",
      "farm1.staticflickr.com",
      "farm2.staticflickr.com",
      "farm3.staticflickr.com",
      "farm4.staticflickr.com",
      "farm5.staticflickr.com",
      "farm6.staticflickr.com",
      "farm7.staticflickr.com",
      "farm8.staticflickr.com",
      "farm9.staticflickr.com",
      "farm10.staticflickr.com",
      "live.staticflickr.com",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
