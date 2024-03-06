/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gmygxkvjdilaoerggioq.supabase.co",
      },
    ],
  },
};

export default nextConfig;
