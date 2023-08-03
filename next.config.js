/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.hmxexpress.com',
          port: '',
          pathname: '/*/**',
        }
      ],
    },
    async headers() {
      return [
        {
          source: '/login',
          headers: [
            {key:'Access-Control-Allow-Credential',value:'true'},
            {key:'Access-Control-Allow-Origin',value:'*'},
            {key:'Access-Control-Allow-Methods',value:'GET,OPTIONS,PATCH,DELETE,POST,PUT'},
            {key:'Access-Control-Allow-Headers',value:'X-CRSF, X-Requested-With, Accept, Accept-Version, Content-Lenght, Content-MDS'}
          ]
          
        },
      ]
    },
  }
  
  module.exports = nextConfig
  