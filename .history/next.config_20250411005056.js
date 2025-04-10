/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Better for local file usage
  },
  output: 'standalone', // Optimized for Vercel deployment
};

module.exports = nextConfig; 