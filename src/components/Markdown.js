import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import CollapsibleCode from './CollapsibleCode';
import { visit } from 'unist-util-visit';

// Custom rehype plugin to convert <<code>> ... <</code>> into a collapsible code block
function collapsibleCodePlugin() {
  return (tree) => {
    visit(tree, 'text', (node) => {
    });

  };
}

const MarkdownRenderer = ({ markdownContent }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeRaw, collapsibleCodePlugin]}
      components={{
        // Map the custom HTML element to the CollapsibleCode component
        'collapsible-code': ({ node }) => {
          console.log('Collapsible code node:', node); // Debugging line
          return (
            <CollapsibleCode
              code={node.properties.code}
              title={node.properties.title}
              language={node.properties.language}
            />
          );
        },
      }}
    >
      {markdownContent}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;