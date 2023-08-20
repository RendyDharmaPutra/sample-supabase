import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ezoofkqgdygcddmpknsp.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6b29ma3FnZHlnY2RkbXBrbnNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAwOTc5NjIsImV4cCI6MTk5NTY3Mzk2Mn0.P27JUk4wh9_EguoxDDbvsMp3lIjFT-yZcRwoEM23bTU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
