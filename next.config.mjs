/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      // allow images from Supabase storage
      "boexjtaembwyqvzipxbr.supabase.co",
    ],
  },
};

export default nextConfig;
