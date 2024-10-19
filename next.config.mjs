/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/om-portfolio'    // Replace 'omchakane' with your repo name
    assetPrefix: '/om-portfolio/', // Ensure static assets are served with the correct base path
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig; // Export nextConfig instead of a new object
  
