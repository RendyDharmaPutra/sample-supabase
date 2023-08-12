"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const handleLogout = async () => {
	const supabase = createServerActionClient({ cookies });
	await supabase.auth.signOut();

	revalidatePath("/login/unauthenticated");
};
