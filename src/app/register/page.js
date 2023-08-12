import RegisterClient from "@/components/client/auth/registerClient";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Register() {
	// Mengambil status sesi user dari 'cookies'
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	// Melindungi Halaman dari User yang tidak terautentikasi atau tanpa role admin
	if (!session || session.user.user_metadata.role != "admin") {
		redirect("/login");
	}

	return (
		<div className="p-4 flex flex-col gap-y-4 items-center">
			<RegisterClient />
		</div>
	);
}
