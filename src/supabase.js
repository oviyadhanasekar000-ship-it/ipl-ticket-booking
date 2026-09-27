import { createClient } from "@supabase/supabase-js";

// Get these from your Supabase project: Project Settings -> API
const supabaseUrl = "https://qihcyvqcsrkanmbinnss.supabase.co";
const supabaseKey = "sb_publishable_5nzL9UOIwlrPYIs4zani3w_WwMPS3Il";

export const supabase = createClient(supabaseUrl, supabaseKey);