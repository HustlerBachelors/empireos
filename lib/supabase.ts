import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL ?? '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? '';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});

export type SponsorRecord = {
  id: string;
  name: string;
  status: string;
  brand_id: string;
  next_update: string | null;
  notes: string | null;
};

export async function fetchSponsors() {
  if (!supabaseUrl || !supabaseKey) {
    return [] as SponsorRecord[];
  }

  const { data, error } = await supabase
    .from<SponsorRecord>('sponsors')
    .select('id,name,status,next_update,brand_id,notes');

  if (error) {
    console.error('Supabase sponsor fetch error:', error.message);
    return [];
  }

  return data ?? [];
}
