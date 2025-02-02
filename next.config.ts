/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "", // Change this to your GitHub repo name if using GitHub Pages
  assetPrefix: "",
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
