/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
]

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      { hostname: 'www.digitalyzeit.com' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'randomuser.me' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      { source: '/new', destination: '/', permanent: true },
      { source: '/old', destination: '/', permanent: true },
      { source: '/contactus', destination: '/contact-us', permanent: true },
      { source: '/contact-us/', destination: '/contact-us', permanent: true },
      {
        source: '/services/pay-per-click',
        destination: '/services/ppc-advertising',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
