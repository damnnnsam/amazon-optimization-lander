import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensure the app directory is treated as the workspace root (avoids lockfile inference warnings)
    root: __dirname,
  },
};

export default nextConfig;
