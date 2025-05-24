import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  description: string;
  file_name: string;
  created_at: string;
  updated_at: string;
};

export async function getMDXContent(fileName: string): Promise<string> {
  const { data, error } = await supabase.storage.from('mdx-files').download(fileName);

  if (error) throw error;
  if (!data) throw new Error('MDX file not found');

  return await data.text();
}
