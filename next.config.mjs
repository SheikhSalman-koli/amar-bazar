/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blueberry-react-next.maraviyainfotech.com',
      }
    ],
  },
};

export default nextConfig;
