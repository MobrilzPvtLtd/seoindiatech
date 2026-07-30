/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
    remotePatterns: [
      { hostname: 'www.digitalyzeit.com' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'randomuser.me' },
    ],
  },
};

export default nextConfig;
