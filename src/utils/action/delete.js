"use server";

import supabase from "../supabaseClient";
import { revalidatePath } from "next/cache";

const del = async (object) => {
	const { data, error } = await supabase
		.from("testing")
		.delete()
		.eq("id", object);

	revalidatePath("/");
};

export default del;
