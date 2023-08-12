"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const handleLogin = async (e) => {
	const supabase = createServerActionClient({ cookies });

	console.log("------------");
	console.log("on Server");
	console.log(e.get("email"));
	console.log(e.get("password"));
	const user = {
		email: e.get("email"),
		password: e.get("password"),
	};
	console.log(user);

	await supabase.auth.signInWithPassword(user);
	// const { error } = await supabase.auth.signInWithPassword(user);
	// console.log(error);

	revalidatePath("/login");
};
