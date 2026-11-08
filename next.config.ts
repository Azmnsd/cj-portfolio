/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ tells Next.js to generate a fully static site

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com", // allows Image optimization from Dribbble
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // allows Image optimization from Unsplash
      },
      {
        protocol: "https",
        hostname: "www.amandahum.com", // allows Image optimization from this host
      },
    ],
  },
};

export default nextConfig;