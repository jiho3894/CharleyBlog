'use client';

import { MDXRemote } from 'next-mdx-remote';
import Image, { ImageProps } from 'next/image';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold tracking-tight">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold tracking-tight">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold tracking-tight">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg font-semibold tracking-tight">{children}</h4>
  ),
  h5: ({ children }: { children: React.ReactNode }) => (
    <h5 className="text-base font-semibold tracking-tight">{children}</h5>
  ),
  h6: ({ children }: { children: React.ReactNode }) => (
    <h6 className="text-sm font-semibold tracking-tight">{children}</h6>
  ),
  img: (props: ImageProps) => <Image sizes="100vw" style={{ width: '100%', height: 'auto' }} {...props} />,
};

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={components} />;
}
