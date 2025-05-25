import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold text-red-500">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-blue-500">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-green-500">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold text-purple-500">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-bold text-orange-500">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-bold text-pink-500">{children}</h6>,
    img: (props) => (
      <Image
        {...(props as ImageProps)}
        width={800}
        height={400}
        sizes="100vw"
        className="w-full h-auto"
        alt={props.alt || 'Blog post image'}
        priority={false}
        quality={90}
      />
    ),
    ...components,
  };
}
