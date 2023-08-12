import LoginClient from "@/components/client/auth/loginClient";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Login() {
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (session) {
		redirect("/");
	}

	return (
		<div className="p-4 flex flex-col gap-y-4 items-center">
			<LoginClient />
		</div>
	);
}
