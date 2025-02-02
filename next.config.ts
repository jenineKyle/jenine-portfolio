/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/next-js", // Change this to your GitHub repo name if using GitHub Pages
  assetPrefix: "/next-js/",
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
