/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "via.placeholder.com",
        },
        {
          protocol: "https",
          hostname: "flagcdn.com",
        },
        {
          protocol: "https",
          hostname: "img.clerk.com",
          port: "",
        },
      ],
    },
  };
  
  module.exports = nextConfig;