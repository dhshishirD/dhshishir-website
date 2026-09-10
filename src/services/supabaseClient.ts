import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://htahcdfxjcqnscrqiqcm.supabase.co';
const supabasePublishableKey = 'sb_publishable_upQ3Mtw_udgoPYLok9igyQ_JgkjZIyb';

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
