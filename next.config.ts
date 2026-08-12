import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — required for Cloudflare Pages (and any plain static
  // host). No API routes or server actions are used, so nothing is lost.
  output: "export",
  images: {
    // Next's built-in image optimization needs a running server/edge
    // function, which a static export doesn't have. `unoptimized: true`
    // ships the images as-is instead — still works fine with next/image's
    // lazy loading and layout behavior, just skips the resize/format step.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
