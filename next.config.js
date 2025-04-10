/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['vercel.com'],
    remotePatterns: [],
    unoptimized: true, // For local files
  },
  output: 'standalone', // Optimized for Vercel deployment
};

module.exports = nextConfig; 