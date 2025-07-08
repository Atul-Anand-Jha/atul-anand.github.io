/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/atul-anand.github.io',
  assetPrefix: '/atul-anand.github.io',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig