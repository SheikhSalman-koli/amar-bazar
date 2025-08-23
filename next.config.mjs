/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blueberry-react-next.maraviyainfotech.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
         protocol: 'https',
        hostname: 'i.ibb.co',
      }
    ],
  },
};

export default nextConfig;
