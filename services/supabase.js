import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gmygxkvjdilaoerggioq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdteWd4a3ZqZGlsYW9lcmdnaW9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxOTY5ODMsImV4cCI6MjAyNDc3Mjk4M30.JCUI0ln1q4f1m0QERyVfhJl8g36QPI11H4ZGty3atVE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
