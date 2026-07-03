/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'www.istockphoto.com',
      },
    ],
  },

  poweredByHeader: false,
};

export default nextConfig;
