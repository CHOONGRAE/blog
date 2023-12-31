/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV !== 'production') {
      return [
        {
          source: '/api/:path',
          destination: 'http://localhost:3001/:path',
        },
      ]
    } else {
      return []
    }
  },
}

module.exports = nextConfig
