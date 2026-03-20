import path from "path"
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
        protocol: "https",
      },
      {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
    ]
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  reactCompiler: true,
};

export default nextConfig;
