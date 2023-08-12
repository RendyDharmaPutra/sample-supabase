"use client";

import { useState } from "react";

export default function Input({ elem }) {
	const [value, setValue] = useState(elem.value);

	return (
		<div className="flex flex-col gap-y-0.5">
			<label htmlFor={elem.name} className="text-md text-gray-800 ">
				{elem.name[0].toUpperCase() + elem.name.substring(1)}
			</label>
			<input
				required
				name={elem.name}
				type={elem.type}
				id={elem.name}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="py-1 px-3 border-slate-300 focus:border bg-slate-100 rounded-lg outline-none duration-200"
			/>
		</div>
	);
}
