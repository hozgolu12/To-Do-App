
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  user_id?: string;
  created_at?: string;
};
