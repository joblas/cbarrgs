/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com', 'i.ytimg.com', 'i3.ytimg.com', 'i4.ytimg.com']
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
