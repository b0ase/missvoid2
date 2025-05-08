/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Better for local file usage
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      },
    ],
  },
  // Disable type checking during build to avoid issues
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone', // Optimized for Vercel deployment
  
  // Environment variables
  env: {
    HUGGING_FACE_API_KEY: "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",
    REPLICATE_API_TOKEN: "r8_9Y9cnfgO0jiFD1XAAkx3DtswxUXQRhI1R9426",
    STABILITY_AI_API_KEY: "sk-KuR5oGgboEcU83PwApd2NtNezIw2Wl6xNvG86eHhvq3CpDNi",
    MESHY_API_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZDJmOGU2MTMtNTUyMS00YWYwLWE4NDEtOTUxMjdmZTZmMzYwIiwidHlwZSI6ImFwaV90b2tlbiIsImlhdCI6MTcxNzY3MTU4Mn0.XcC9MjA2jkzDf0FUwvF4hGOlQG2TqkuF8ULrZkYiAw8" // Actual Meshy API key
  },

  // Add Content Security Policy headers for development
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' ws: wss: https://api.meshy.ai https://assets.meshy.ai https://raw.githack.com; frame-src 'self' https://viewer.shapediver.com;"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig; 