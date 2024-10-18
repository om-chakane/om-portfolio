/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',    // Replace 'omchakane' with your repo name
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig; // Export nextConfig instead of a new object
  
