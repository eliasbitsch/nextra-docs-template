// pages/_app.tsx
import { MDXProvider } from '@mdx-js/react';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS for rendering math
import './styles/global.css';

const components = {
  // Define your MDX components here if needed
};

function MyApp({ Component, pageProps }: any) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;

