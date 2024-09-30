// next.config.mjs

import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = nextra({
  reactStrictMode: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
});

export default nextConfig;
