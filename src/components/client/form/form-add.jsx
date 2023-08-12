"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Form() {
	const [nama, setNama] = useState("");
	const [jenis, setJenis] = useState("");
	const [exp, setExp] = useState("");
	const [harga, setHarga] = useState("");
	const router = useRouter();
	const supabase = createClientComponentClient();

	const add = async () => {
		await supabase.from("testing").insert({ nama, jenis, exp, harga });
		router.refresh();
		router.push("/");
	};

	return (
		<div className="p-4 flex flex-col justify-between w-full max-w-[26rem] sm:w-[26rem] h-[24rem] rounded-lg bg-gray-200">
			<div className="flex flex-col gap-y-0.5 ">
				<label htmlFor="nama" className="text-md text-gray-800 ">
					Nama
				</label>
				<input
					required
					name="nama"
					type="text"
					id="nama"
					value={nama}
					onChange={(e) => setNama(e.target.value)}
					className="p-1 border border-gray-500 bg-gray-50 rounded-lg outline-none"
				/>
			</div>
			<div className="flex flex-col gap-y-0.5 ">
				<label htmlFor="jenis" className="text-md text-gray-800 ">
					Jenis
				</label>
				<input
					required
					name="jenis"
					type="text"
					id="jenis"
					value={jenis}
					onChange={(e) => setJenis(e.target.value)}
					className="p-1 border border-gray-500 bg-gray-50 rounded-lg outline-none"
				/>
			</div>
			<div className="flex flex-col gap-y-0.5 ">
				<label htmlFor="exp" className="text-md text-gray-800 ">
					Exp
				</label>
				<input
					required
					name="exp"
					type="date"
					id="exp"
					value={exp}
					onChange={(e) => setExp(e.target.value)}
					className="p-1 border border-gray-500 bg-gray-50 rounded-lg outline-none"
				/>
			</div>
			<div className="flex flex-col gap-y-0.5 ">
				<label htmlFor="harga" className="text-md text-gray-800 ">
					Harga
				</label>
				<input
					required
					name="harga"
					type="number"
					id="harga"
					value={harga}
					onChange={(e) => setHarga(e.target.value)}
					className="p-1 border border-gray-500 bg-gray-50 rounded-lg outline-none"
				/>
			</div>
			<button
				onClick={add}
				className="p-1 border border-green-600 bg-green-400 hover:bg-green-600 rounded-lg outline-none duration-200"
			>
				Submit
			</button>
		</div>
	);
}
