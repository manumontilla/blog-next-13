"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
// import CardContent from "./MDXComponent";
import CodeBlock from "./CodeBlock";

// const components = {
//   h1: (props:any) => <h1 style={{color: 'tomato'}} {...props} />,
//   pre: (props:any) => <div {...props} />,
//   code: CodeBlock
// }

const components = { CodeBlock };

interface MDXContentProps {
  source: MDXRemoteProps;
}

export default function MDXContent({ source }: MDXContentProps) {
  // return <MDXRemote {...source} components={components} />;
  // return <MDXRemote {...source} components={components} />;
  return <MDXRemote {...source} />;
}
