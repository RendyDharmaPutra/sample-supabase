import { adminAuth } from "@/utils/supabaseAdmin";
import User from "@/components/user";

export default async function Users() {
	// Mengambil daftar user dengan autentikasi admin
	const users = await adminAuth.listUsers();

	// debugging
	console.log("------------------");
	console.log(users);

	console.log("------------------");
	console.log(users.data.users);

	return (
		<div className="p-4 flex flex-wrap justify-center gap-x-4 gap-y-4 rounded-lg border border-slate-300 bg-slate-200">
			{/* SSR */}
			{/* Map data daftar user dan memasukkannya ke komponen user  */}
			{users.data.users.map((user) => (
				<User user={user} />
			))}
		</div>
	);
}
