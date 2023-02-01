import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config();
const url = <string>process.env.SUPABASE_URL;
const anon_key = <string>process.env.SUPABASE_ANON_KEY;
const supabase = createClient(url, anon_key);

export default supabase;
