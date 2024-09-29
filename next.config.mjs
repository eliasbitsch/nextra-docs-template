import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  // images: {
  //   unoptimized: true,
  // },
});

export default withNextra;
