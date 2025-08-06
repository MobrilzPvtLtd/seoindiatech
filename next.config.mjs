/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
    domains: ['www.digitalyzeit.com'],
    // You can also use remotePatterns for more specific control
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'www.digitalyzeit.com',
    //     pathname: '/wp-content/uploads/**',
    //   },
    // ],
  },
};

export default nextConfig;
