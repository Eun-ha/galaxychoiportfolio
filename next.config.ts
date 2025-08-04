import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
console.log("API_URL in next.config.js", process.env.API_URL);

export default nextConfig;
