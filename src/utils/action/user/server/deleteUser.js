"use server";

import { adminAuth } from "@/utils/supabaseAdmin";
import { revalidatePath } from "next/cache";

export const handleDelete = async (id) => {
	await adminAuth.deleteUser(id);

	revalidatePath("/");
};
