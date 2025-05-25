import { notFound } from 'next/navigation';
import { BlogPost } from '@/lib/supabase/type';
import { getAllPosts } from '@/lib/supabase';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: BlogPost) => {
    return {
      slug: post.slug,
    };
  });
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.description || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.description || post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const { default: Post } = await import(`@/lib/markdown/${slug}.mdx`);

  if (!Post) {
    notFound();
  }

  return (
    <article className="space-y-8 pt-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <Post />
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
