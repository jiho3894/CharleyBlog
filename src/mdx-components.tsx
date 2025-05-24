import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 style={{ color: 'red', fontSize: '48px' }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ color: 'blue', fontSize: '32px' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ color: 'green', fontSize: '24px' }}>{children}</h3>,
    h4: ({ children }) => <h4 style={{ color: 'purple', fontSize: '16px' }}>{children}</h4>,
    h5: ({ children }) => <h5 style={{ color: 'orange', fontSize: '12px' }}>{children}</h5>,
    h6: ({ children }) => <h6 style={{ color: 'pink', fontSize: '8px' }}>{children}</h6>,
    img: (props) => <Image sizes="100vw" style={{ width: '100%', height: 'auto' }} {...(props as ImageProps)} />,
    ...components,
  };
}
