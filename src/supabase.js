import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://gffbqldvokpadhsmcrdj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmZmJxbGR2b2twYWRoc21jcmRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0NjMxNDQsImV4cCI6MjAzNTAzOTE0NH0.6uSLWmq33rddRKhhnAY524n1n2GMW9sKocdQpj7yQF8",
);

export default supabase;
