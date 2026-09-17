import type { NextConfig } from 'next';
const config: NextConfig={
  devIndicators:false,
  distDir:process.env.MAKO_BUILD_DIR || ".next",
  async headers(){return [
    {source:'/',headers:[{key:'Cache-Control',value:'public, s-maxage=300, stale-while-revalidate=3600'}]},
    {source:'/mako/:path*',headers:[{key:'Cache-Control',value:'public, max-age=86400, stale-while-revalidate=604800'}]},
    {source:'/:path((?!api/).*)',headers:[{key:'X-Robots-Tag',value:'index, follow, max-image-preview:large, max-snippet:-1'}]},
    {source:'/api/:path*',headers:[{key:'X-Robots-Tag',value:'noindex, nofollow'}]},
    {source:'/:path*',headers:[
      {key:'X-Content-Type-Options',value:'nosniff'},
      {key:'X-Frame-Options',value:'DENY'},
      {key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},
      {key:'Strict-Transport-Security',value:'max-age=31536000; includeSubDomains'},
      {key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=(), interest-cohort=()'},
      {key:'Content-Security-Policy',value:'upgrade-insecure-requests'},
    ]},
  ]}
};
export default config;
