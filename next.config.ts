import type { NextConfig } from 'next';
const config: NextConfig={devIndicators:false,distDir:process.env.PICKCARE_BUILD_DIR || ".next"};
export default config;
