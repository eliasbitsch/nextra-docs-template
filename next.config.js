const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  output: 'export',
  //   images: {
  //   unoptimized: true,
  // },
})

module.exports = withNextra()
