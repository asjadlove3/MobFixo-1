import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hides the little "N" dev badge so it never shows up in a recording.
  devIndicators: false,
  images: { unoptimized: true },
  // Pin the project root so Next doesn't pick up a stray package-lock.json from a parent folder (e.g. C:\Users\<you>).
  turbopack: { root: process.cwd() },
};

export default nextConfig;
