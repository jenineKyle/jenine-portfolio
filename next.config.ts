/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
