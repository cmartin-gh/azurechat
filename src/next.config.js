/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: ["https://zany-carnival-v6vrgwj9vwrf6xpp-3000.app.github.dev", "localhost:3000"]
    } 
  }
};

module.exports = nextConfig;
