import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// import { handleLogout } from "@/utils/action/user/logout";
import LogoutClient from "../client/auth/logoutClient";

export default async function Navbar() {
	// Mengambil status sesi user dari 'cookies'
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	return (
		<nav className="sticky inset-0 px-4 py-2 flex items-center justify-between bg-slate-300/70 border-b border-slate-400/70 backdrop-blur-lg">
			<h1 className="font-semibold text-xl">Supabase</h1>

			{/* SSR */}
			{/* <form action={handleLogout}>
				<button>Logout</button>
			</form> */}

			{/* CSR */}
			{session && <LogoutClient />}
		</nav>
	);
}
