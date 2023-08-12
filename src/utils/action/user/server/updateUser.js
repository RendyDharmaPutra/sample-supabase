"use server";

import { adminAuth } from "@/utils/supabaseAdmin";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const handleEdit = async (e, id) => {
	console.log("------------");
	console.log("on Server");
	console.log(e.get("name"));
	console.log(e.get("role"));
	const metadata = {
		name: e.get("name"),
		role: e.get("role"),
	};
	console.log(metadata);
	console.log(id);

	await adminAuth.updateUserById(id, { user_metadata: metadata });
	// const { error } = await supabase.auth.signInWithPassword(user);
	// console.log(error);

	revalidatePath("/users");
	redirect("/users");
};
