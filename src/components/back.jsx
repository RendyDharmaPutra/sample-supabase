"use client";

import { useRouter } from "next/navigation";

export default function Back() {
	const router = useRouter();

	return (
		<div className="px-4 py-2 flex justify-between w-[40rem]">
			<button
				onClick={router.back}
				className="py-1 block text-center w-[5rem] text-gray-950  bg-cyan-400 hover:bg-cyan-600 rounded-lg outline-none duration-200"
			>
				{"<--"} Back
			</button>
		</div>
	);
}
