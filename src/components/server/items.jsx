import supabase from "@/utils/supabaseClient";
import Item from "../item";

export default async function Items() {
	// Mengambil data dari database
	const { data } = await supabase.from("testing").select();

	return (
		<div className="px-2 py-6 flex flex-wrap justify-center gap-x-6 gap-y-6 w-full rounded-lg border border-slate-300 bg-slate-200">
			{/* Map data dan memasukkan nya ke komponen */}
			{data.map((d) => {
				return <Item data={d} />;
			})}
		</div>
	);
}
