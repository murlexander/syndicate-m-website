import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   // typedRoutes is not supported with Turbopack
  //   // typedRoutes: true,
  // },
  // Exclude tmp directory from builds
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  webpack: (config) => {
    // Ignore tmp directory during webpack compilation
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ["**/tmp/**", "**/node_modules/**", "**/.git/**"],
    };
    return config;
  },
  // Exclude tmp from static generation
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: "./tsconfig.json",
  },
};

export default nextConfig;
