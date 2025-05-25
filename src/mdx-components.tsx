import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { Highlight, themes } from 'prism-react-renderer';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 제목
    h1: ({ children }) => <h1 className="text-4xl font-bold text-foreground mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold text-foreground mt-6 mb-3">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-bold text-foreground mt-4 mb-2">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-bold text-foreground mt-4 mb-2">{children}</h6>,

    // 단락
    p: ({ children }) => <p className="text-foreground leading-7 mb-4">{children}</p>,

    // 강조
    strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
    em: ({ children }) => <em className="italic text-foreground">{children}</em>,

    // 목록
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-foreground">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground">{children}</ol>,
    li: ({ children }) => <li className="text-foreground">{children}</li>,

    // 인용구
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),

    // 코드
    code: ({ children, className }) => {
      const language = className?.replace('language-', '') || '';
      const code = String(children).trim();

      if (language) {
        return (
          <Highlight theme={themes.nightOwl} code={code} language={language as any}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={`${className} p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm`} style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    <span className="inline-block w-8 text-right text-muted-foreground mr-4 select-none">{i + 1}</span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        );
      }

      return <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>;
    },
    pre: ({ children }) => (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm">{children}</pre>
    ),

    // 링크
    a: ({ href, children }) => (
      <Link
        href={href || '#'}
        className="text-primary hover:text-primary/80 underline underline-offset-4"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </Link>
    ),

    // 이미지
    img: (props) => (
      <Image
        {...(props as ImageProps)}
        width={800}
        height={400}
        sizes="100vw"
        className="w-full h-auto rounded-lg my-4"
        alt={props.alt || 'Blog post image'}
        priority={false}
        quality={90}
      />
    ),

    // 구분선
    hr: () => <hr className="my-8 border-border" />,

    // 테이블
    table: ({ children }) => (
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-border">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => <tr className="border-b border-border">{children}</tr>,
    th: ({ children }) => (
      <th className="border border-border px-4 py-2 text-left font-bold text-foreground">{children}</th>
    ),
    td: ({ children }) => <td className="border border-border px-4 py-2 text-foreground">{children}</td>,

    // 기타 컴포넌트
    ...components,
  };
}
