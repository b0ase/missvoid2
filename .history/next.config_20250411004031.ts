import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['vercel.com'],
    remotePatterns: [],
    unoptimized: true, // For local files
  },
  output: 'standalone', // Optimized for Vercel deployment
};

export default nextConfig;
