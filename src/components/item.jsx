"use client";

import del from "@/utils/action/delete";
import Link from "next/link";

export default function Item({ data }) {
	return (
		<div className="flex flex-col w-[18rem] h-[9rem] border border-slate-300 rounded-lg overflow-hidden">
			<section className="px-3 py-2 flex justify-between h-[6rem] bg-slate-100">
				<section className="w-[8rem] ">
					<h1 className="font-semibold text-gray-950">{data.nama}</h1>
					<h1 className="text-sm text-gray-800">{data.jenis}</h1>
				</section>
				<section className="w-[8rem] flex flex-col items-end ">
					<h1 className="font-semibold text-gray-950">{`Rp ${data.harga}`}</h1>
					<h1 className="text-sm text-gray-800">EXP : {data.exp}</h1>
				</section>
			</section>
			<section className="p-4 flex items-center justify-between h-[3rem] bg-slate-200	">
				<Link
					href={`${data.id}`}
					className="py-1 text-center w-[6rem] text-gray-950  bg-blue-400 hover:bg-blue-600 rounded-lg outline-none duration-200"
				>
					Edit
				</Link>
				<button
					onClick={() => del(data.id)}
					className="py-1 w-[6rem] text-gray-950  bg-red-400 hover:bg-red-600 rounded-lg outline-none duration-200"
				>
					Delete
				</button>
			</section>
		</div>
	);
}
