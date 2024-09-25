// components/LaTeX.tsx
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

interface LaTeXProps {
  inline?: boolean;
  children: string;
}

const LaTeX: React.FC<LaTeXProps> = ({ inline = false, children }) => {
  return inline ? <InlineMath>{children}</InlineMath> : <BlockMath>{children}</BlockMath>;
};

export default LaTeX;
