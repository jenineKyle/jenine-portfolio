/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
