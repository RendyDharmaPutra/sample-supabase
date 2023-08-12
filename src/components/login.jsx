"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Login() {
	const router = useRouter();
	const supabase = createClientComponentClient();

	const handleSignIn = async () => {
		await supabase.auth.signInWithPassword({
			email: "rendydharmaputra424@gmail.com",
			password: "rendydp424",
		});

		router.refresh();
	};

	const handleSignOut = async () => {
		await supabase.auth.signOut();
		router.refresh();
	};

	return (
		<div>
			<button onClick={handleSignIn}>Login</button>
			<button onClick={handleSignOut}>Logout</button>
		</div>
	);
}
