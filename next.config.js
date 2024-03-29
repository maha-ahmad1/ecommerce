/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  typescript: {
    ignoreBuildErrors: true,
  },
};
module.exports = {
  images: {
    domains: ['fakestoreapi.com'],
  },
};
