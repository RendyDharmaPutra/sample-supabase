import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import Items from "@/components/server/items";

// Revalidate untuk menentukan waktu berlakunya cache
export const revalidate = 0;

export default async function Home() {
	// Mengambil status sesi user dari 'cookies'
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	// Melindungi Halaman dari User yang tidak terautentikasi
	if (!session) {
		redirect("/login");
	}

	// Debugging
	console.log("--------------");
	console.log(supabase);

	return (
		<div className="p-4 flex flex-col gap-y-4 items-center ">
			<div className="px-4 py-2 flex justify-between w-full">
				<Link
					href="/add"
					className="py-1 block text-center w-[6rem] text-gray-950  bg-cyan-400 hover:bg-cyan-600 rounded-lg outline-none duration-200"
				>
					Add Data
				</Link>
				<Link
					href="/users"
					className="py-1 block text-center w-[6rem] text-gray-950  bg-cyan-400 hover:bg-cyan-600 rounded-lg outline-none duration-200"
				>
					User
				</Link>
			</div>

			{/* Container dari data yang ditampilkan */}
			<Items />
		</div>
	);
}
