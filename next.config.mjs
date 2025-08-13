// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//     images: {
//     domains: ['www.digitalyzeit.com'],
//     // You can also use remotePatterns for more specific control
//     // remotePatterns: [
//     //   {
//     //     protocol: 'https',
//     //     hostname: 'www.digitalyzeit.com',
//     //     pathname: '/wp-content/uploads/**',
//     //   },
//     // ],
//   },
// };

// export default nextConfig;


// Netlify  configuration


// next.config.js

/** @type {import('next').NextConfig} */
const { withNetlify } = require('@netlify/next');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.digitalyzeit.com'],
  },
};

export default withNetlify(nextConfig);
