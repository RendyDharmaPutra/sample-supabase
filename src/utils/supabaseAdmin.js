const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://ezoofkqgdygcddmpknsp.supabase.co";
const serviceRoleKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6b29ma3FnZHlnY2RkbXBrbnNwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDA5Nzk2MiwiZXhwIjoxOTk1NjczOTYyfQ.wgYo5uzyoyKsuFZ9vO2TAZwVNJCld98Vq8cmUFkQfiE";

const supabase = createClient(supabaseUrl, serviceRoleKey, {
	auth: {
		autoRefreshToken: false,
		persistSession: false,
	},
});

export const adminAuth = supabase.auth.admin;

// export default adminAuth;
