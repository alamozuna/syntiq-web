/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/servicios",
        destination: "/formaciones",
        permanent: true,
      },
      {
        source: "/servicios/:path*",
        destination: "/formaciones",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
