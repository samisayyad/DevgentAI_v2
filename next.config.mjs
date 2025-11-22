/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ui.aceternity.com', 'assets.aceternity.com'],
  },
};

export default nextConfig;
