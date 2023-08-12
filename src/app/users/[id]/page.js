import Back from "@/components/back";
import UserForm from "@/components/form/userForm";
import { handleEdit } from "@/utils/action/user/server/updateUser";
import { adminAuth } from "@/utils/supabaseAdmin";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function User({ params }) {
	// Mengambil status sesi user dari 'cookies'
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	// Melindungi Halaman dari User yang tidak terautentikasi atau tanpa role admin
	if (!session || session.user.user_metadata.role != "admin") {
		redirect("/login");
	}

	// Mengambil data dari database berdasarkan data yang dipilih untuk diedit
	const { data, error } = await adminAuth.getUserById(params.id);

	// Mengembalikan user ke halaman utama, jika memilih data yang tidak terdapat di database
	if (error) {
		redirect("/");
	}

	// Menangkap metadata user
	const user = data.user.user_metadata;

	return (
		<div className="p-6 flex flex-col items-center">
			<h1 className="mb-6 font-semibold text-2xl">{data.user.email}</h1>
			<Back />

			{/* SSR */}
			{/* Mengirim metadata user ke komponen */}
			<UserForm
				action={async (e) => {
					"use server";
					await handleEdit(e, params.id);
				}}
				value={user}
			/>
		</div>
	);
}
