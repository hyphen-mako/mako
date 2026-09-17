import type { NextConfig } from 'next';
const config: NextConfig={
  devIndicators:false,
  distDir:process.env.MAKO_BUILD_DIR || ".next",
  async headers(){return [
    {source:'/',headers:[{key:'Cache-Control',value:'public, s-maxage=300, stale-while-revalidate=3600'}]},
    {source:'/mako/:path*',headers:[{key:'Cache-Control',value:'public, max-age=86400, stale-while-revalidate=604800'}]},
  ]}
};
export default config;
