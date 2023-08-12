import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { add } from "@/utils/action/add";
import Back from "@/components/back";
import Form from "@/components/form/form";
// import Form from "@/components/client/form/form-add";

export default async function Add() {
	// Mengambil status sesi user dari 'cookies'
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	// Melindungi Halaman dari User yang tidak terautentikasi
	if (!session) {
		redirect("/login");
	}
	return (
		<div className="p-4 flex flex-col items-center gap-y-4 h-screen bg-gray-50">
			<h1 className="font-semibold text-xl">Add Data</h1>
			{/* Komponen untuk kembali ke halaman awal */}
			<Back />

			{/* SSR */}
			{/* Mengirimkan Server Action dan Value sebagai props  */}
			<Form action={add} value={""} />

			{/* CSR */}
			{/* <Form /> */}
		</div>
	);
}
