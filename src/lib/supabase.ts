import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Event = {
  id: string;
  title: string;
  description: string;
  event_date: string;
  image_url: string;
  category: string;
  created_at: string;
  link:string;
};  

export type RecurringClass = {
  id: string;
  title: string;
  description: string;
  day_of_week: number;
  time: string;
  image_url: string;
  instructor: string;
  created_at: string;
};
