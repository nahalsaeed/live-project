/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/places-to-visit',
            permanent: false,
          },
          
        ]
      },
      images: {
        remotePatterns: [
          {  
          
             hostname: "backend.bntr.ai",
  
          }
        ],
      
      },
};

export default nextConfig;
