/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
    remotePatterns: [{ hostname: 'www.digitalyzeit.com' }],
  },
};

export default nextConfig;
