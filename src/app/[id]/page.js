import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { update } from "@/utils/action/update";
// import supabase from "@/utils/supabaseClient";
import Back from "@/components/back";
import Form from "@/components/form/form";
// import Form from "@/components/client/form/form-update";

export const revalidate = 0;

export default async function Update({ params }) {
	// Mengambil status sesi user dari 'cookies'
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	// Melindungi Halaman dari User yang tidak terautentikasi
	if (!session) {
		redirect("/login");
	}

	// Mengambil data dari database berdasarkan data yang dipilih untuk diedit
	const { data, error } = await supabase
		.from("testing")
		.select()
		.eq("id", params.id)
		.single();

	// Mengembalikan user ke halaman utama, jika memilih data yang tidak terdapat di database
	if (error) {
		redirect("/");
	}

	return (
		<div className="p-4 flex flex-col gap-y-4 items-center h-screen bg-gray-50">
			<h1 className="font-semibold text-xl">Update Data</h1>
			<Back />

			{/* Server-side */}
			{/* Mengirimkan Server Action dan Value sebagai props  */}
			<Form
				action={async (e) => {
					"use server";
					await update(e, params.id);
				}}
				value={data}
			/>

			{/* Client-side */}
			{/* <Form value={data} /> */}
		</div>
	);
}
