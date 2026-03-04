import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cms.advosion.dk"], //  WP host
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb", // pick what you want: "5mb", "10mb", "20mb"
    },
  },
};

export default nextConfig;
