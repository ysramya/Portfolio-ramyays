import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * /beyond-the-screen reads public/img/beyond-the-screen/** with node:fs
   * at build time (lib/gallery.ts) just to list filenames. Without this
   * exclusion, Next's output file tracing sees that fs access and bundles
   * the entire (large, growing) image folder into the page's serverless
   * function — those images are static assets served by the CDN, never
   * read by the function at runtime, so they don't belong in the bundle.
   */
  outputFileTracingExcludes: {
    "/beyond-the-screen": ["./public/img/beyond-the-screen/**"],
  },
};

export default nextConfig;
