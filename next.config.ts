import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    return [
      { source: "/politics/:path*", destination: "/", statusCode: 301 },
      { source: "/environment/:path*", destination: "/", statusCode: 301 },
    ];
  },
};

export default nextConfig;
