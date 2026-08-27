import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL || "https://boexjtaembwyqvzipxbr.supabase.co",
  process.env.SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvZXhqdGFlbWJ3eXF2emlweGJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MDQ1ODcsImV4cCI6MjA1ODk4MDU4N30.kb7V_yCkByOIM7BFboboUQv8iaGC-4QF89PpvXwKbgc"
);

