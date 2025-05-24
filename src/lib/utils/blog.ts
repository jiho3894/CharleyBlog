import { serialize } from 'next-mdx-remote/serialize';
import { getMDXContent, supabase } from '../supabase';

export async function getPostBySlug(slug: string) {
  const { data: post, error } = await supabase.from('blog_table').select('*').eq('slug', slug).single();

  if (error) {
    throw error;
  }
  if (!post) return null;

  const mdxContent = await getMDXContent(post.file_name);
  const mdxSource = await serialize(mdxContent);

  return {
    ...post,
    mdxSource,
  };
}

export async function getAllPosts() {
  try {
    const { data: posts, error } = await supabase
      .from('blog_table')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    if (!posts || posts.length === 0) {
      return [];
    }

    return posts;
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return [];
  }
}
