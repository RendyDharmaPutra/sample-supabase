import Users from "@/components/server/users";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function User() {
	// Mengambil status sesi user dari 'cookies'
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	// Melindungi Halaman dari User yang tidak terautentikasi atau tanpa role admin
	if (!session || session.user.user_metadata.role != "admin") {
		redirect("/");
	}

	// Mengambil data user yang terautentikasi
	const user = await supabase.auth.getUser();

	// debugging
	console.log("------------------");
	console.log(session);

	// console.log("------------------");
	// console.log(role);

	console.log("------------------");
	console.log(user);

	console.log("------------------");
	console.log(user.data.user.user_metadata);

	// const newMeta = {
	// 	name: "Archilst",
	// 	role: "admin",
	// };

	// adminAuth.updateUserById("14cc367c-3755-425a-89b4-f90d8570cad0", {
	// 	user_metadata: newMeta,
	// });

	return (
		<div className="p-4 flex flex-col gap-y-4 items-center">
			<div className="px-4 py-2 flex justify-between w-full">
				<Link
					href="/register"
					className="py-1 block text-center w-[6rem] text-gray-950  bg-cyan-400 hover:bg-cyan-600 rounded-lg outline-none duration-200"
				>
					Add User
				</Link>
				<Link
					href="/"
					className="py-1 block text-center w-[6rem] text-gray-950  bg-cyan-400 hover:bg-cyan-600 rounded-lg outline-none duration-200"
				>
					Products
				</Link>
			</div>

			{/* SSR */}
			<Users />
		</div>
	);
}
