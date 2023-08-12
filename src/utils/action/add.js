"use server";

import supabase from "../supabaseClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const add = async (e) => {
	const nama = e.get("nama");
	const jenis = e.get("jenis");
	const exp = e.get("exp");
	const harga = e.get("harga");

	console.log("------------");
	console.log("On the Server");

	const { data, error } = await supabase
		.from("testing")
		.insert([{ nama, jenis, exp, harga }]);

	// if (error) {
	// 	console.log(error);
	// }

	// if (data) {
	// 	revalidatePath("/");
	// }
	revalidatePath("/");
	redirect("/");
};
