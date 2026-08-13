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



const cacheHeader = [

  { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },

]



const nextConfig = {

  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion'],
  },

  images: {

    formats: ['image/avif', 'image/webp'],

    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    minimumCacheTTL: 31536000,

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

      {

        source: '/images/:path*',

        headers: cacheHeader,

      },

      {

        source: '/_next/static/:path*',

        headers: cacheHeader,

      },

      {

        source: '/sit-transparent.png',

        headers: [

          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },

        ],

      },

      {

        source: '/sitemap.xml',

        headers: [

          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },

          { key: 'Cache-Control', value: 'public, max-age=86400' },

        ],

      },

      {

        source: '/llms.txt',

        headers: [

          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },

          { key: 'Cache-Control', value: 'public, max-age=86400' },

        ],

      },

      {

        source: '/agents.json',

        headers: [

          { key: 'Content-Type', value: 'application/json; charset=utf-8' },

          { key: 'Cache-Control', value: 'public, max-age=86400' },

        ],

      },

      {

        source: '/agent-instructions.md',

        headers: [

          { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },

          { key: 'Cache-Control', value: 'public, max-age=86400' },

        ],

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

      { source: '/locations/noida', destination: '/seo-services/seo-services-in-noida', permanent: true },

      { source: '/locations/delhi', destination: '/seo-services/seo-services-in-delhi', permanent: true },

      { source: '/services/woocommerce-seo', destination: '/services/e-commerce-seo', permanent: true },

      { source: '/services/seo-web-design', destination: '/services/ui-ux-design', permanent: true },

      { source: '/:path+/', destination: '/:path+', permanent: true },

    ]

  },

}



export default nextConfig

