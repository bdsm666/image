import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 允许在有 ESLint 错误的情况下依然完成构建 */
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* 允许在有 TypeScript 错误的情况下依然完成构建 */
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
