import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const MarkdownRenderer = ({ markdownContent }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}  // To support LaTeX inside markdown
      rehypePlugins={[rehypeKatex]} // To render LaTeX
    >
      {markdownContent}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
