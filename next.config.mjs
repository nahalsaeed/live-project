/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/main',
            permanent: false,
          },
          
        ]
      },
      images: {
        remotePatterns: [
          {  
            // protocol: "http",
             hostname: "backend.bntr.ai",
            // hostname: "35.182.84.60",
          }
        ],
      
      },
};

export default nextConfig;
