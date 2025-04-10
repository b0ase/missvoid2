/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'vercel.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }
    ],
    unoptimized: false,
  },
  output: 'standalone', // Optimized for Vercel deployment
};

module.exports = nextConfig; 