/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizations
  reactStrictMode: true,
  
  // Ensure environment variables are available at build time
  env: {
    // These are already available via process.env, but explicitly listing them
    // helps with build-time validation
  },

  // Optimize images if using next/image
  images: {
    domains: [],
    unoptimized: false,
  },

  // Production build optimizations
  swcMinify: true,
  
  // Output configuration
  output: 'standalone', // For better deployment compatibility
  
  // Ensure API routes work in production
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;

