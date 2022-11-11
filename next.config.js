/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    //config profile images domain for next js
    domains: ["cdn2.iconfinder.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
