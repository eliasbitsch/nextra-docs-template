// next.config.js

/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
});

module.exports = withNextra({
  // Any other Next.js configuration can go here
  images: {
    unoptimized: false,  // or false, depending on your requirements
  },
});
