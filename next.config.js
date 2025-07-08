/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio', // Repository name-based basePath
  assetPrefix: '/portfolio',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig