import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/common/ui/button';
import { getPostBySlug, getAllPosts } from '@/lib/utils/blog';
import { MDXContent } from '@/components/mdx/mdx-content';
import type { BlogPost } from '@/lib/supabase';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// 정적 생성을 위한 설정
export const dynamic = 'force-static';

// 빌드 시점에 모든 포스트의 경로 생성
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

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
          <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
          <time className="text-sm text-muted-foreground">
            {new Date(post.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        {post.mdxSource && <MDXContent source={post.mdxSource} />}
      </div>
    </article>
  );
};

export default BlogPostPage;
