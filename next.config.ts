import path from "path"
import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,

  /* config options here */
  images: {
    unoptimized: true,
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
