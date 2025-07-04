import { supabase } from './client';

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
