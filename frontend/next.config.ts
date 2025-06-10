import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
    async rewrites() {
      return [
        {
          source: "/backend/:path*",
          destination: `${process.env.BACKEND_URL}/:path*`,
        },
      ];
    },
};

export default nextConfig;
