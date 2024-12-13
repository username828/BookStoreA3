/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  

  //added this
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        fs: false // 'empty' equivalent in Webpack 5
      }
    }

    return config
  }
};

export default nextConfig;
