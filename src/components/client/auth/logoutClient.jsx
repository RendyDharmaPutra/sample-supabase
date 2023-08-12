"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function LogoutClient() {
	const router = useRouter();
	const supabase = createClientComponentClient();

	const handleLogout = async () => {
		await supabase.auth.signOut();
		router.refresh();
	};

	return (
		<div>
			<button
				onClick={handleLogout}
				className="py-1 block text-center w-[6rem] text-gray-950 bg-red-400 hover:bg-red-600 rounded-lg outline-none duration-200"
			>
				Logout
			</button>
		</div>
	);
}
