import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'your-supabase-url';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Blog interface
export interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  slug: string;
  seo_title?: string;
  seo_description?: string;
}

// Admin password interface
export interface AdminPassword {
  id: string;
  password: string;
  created_at: string;
}
