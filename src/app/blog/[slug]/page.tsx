import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/common/ui/button';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: 'welcome' }];
}

export const dynamicParams = false;

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const { default: Post } = await import(`@/lib/markdown/${slug}.mdx`);

  if (!Post) {
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
          <Post />
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
