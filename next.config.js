/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  workboxOptions: { disableDevLogs: true },
  disable: !process.env.NODE_ENV === "production",
});

const nextConfig = withPWA({
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
});

module.exports = nextConfig;
