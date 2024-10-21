/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/om-portfolio',    // Replace 'omchakane' with your repo name
  images: {
    unoptimized: true,
  },
};

export default nextConfig; // Export nextConfig instead of a new object

