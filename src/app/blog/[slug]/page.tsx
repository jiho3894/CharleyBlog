import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getBlogPost } from '@/lib/utils/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-8 pt-8">
      <div className="space-y-4">
        <Button variant="ghost" asChild className="pl-0">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          <time className="text-muted-foreground">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </div>
      <div className="prose prose-invert max-w-none">
        <div
          className="space-y-4 text-foreground"
          dangerouslySetInnerHTML={{
            __html: post.content
              .split('\n')
              .map((line) => {
                if (line.startsWith('# ')) {
                  return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.slice(2)}</h1>`;
                }
                if (line.startsWith('## ')) {
                  return `<h2 class="text-2xl font-semibold mt-6 mb-3">${line.slice(3)}</h2>`;
                }
                if (line.startsWith('### ')) {
                  return `<h3 class="text-xl font-medium mt-4 mb-2">${line.slice(4)}</h3>`;
                }
                if (line.startsWith('```')) {
                  return line.includes('```') && !line.startsWith('```')
                    ? '</code></pre>'
                    : '<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>';
                }
                if (line.startsWith('- ')) {
                  return `<li class="ml-4">${line.slice(2)}</li>`;
                }
                if (line.trim() === '') {
                  return '<br>';
                }
                return `<p class="leading-7">${line}</p>`;
              })
              .join(''),
          }}
        />
      </div>
    </article>
  );
};

export default BlogPostPage;
