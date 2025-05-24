import { BlogPost } from '../types/blog';
import { blogPosts } from '../constants/blog-posts';

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.id === id);
};

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
