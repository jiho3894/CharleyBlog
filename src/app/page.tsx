import { getAllPosts } from '@/lib/utils/blog';
import Link from 'next/link';

// 정적 생성을 위한 설정
export const dynamic = 'force-static';

// 빌드 시점에 데이터 가져오기
async function getStaticPosts() {
  const posts = await getAllPosts();
  return posts;
}

const BlogPage = async () => {
  const posts = await getStaticPosts();

  return (
    <div className="space-y-12 pt-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted/50 via-muted/30 to-background border border-border/20">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-12">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Welcome to Charley Blog
              </h1>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-muted/30 border-2 border-primary/20 flex items-center justify-center relative overflow-hidden">
                <div className="text-4xl lg:text-5xl font-bold text-primary/80">👨‍💻</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-full scale-110"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
      </div>
      <div className="space-y-8">
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="group space-y-3 pb-8 border-b border-border/30 last:border-b-0">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`} className="block">
                    {post.title}
                  </Link>
                </h3>
                <time className="text-sm text-muted-foreground font-medium">
                  {new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
