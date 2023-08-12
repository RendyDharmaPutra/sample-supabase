"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function RegisterClient() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const router = useRouter();
	const supabase = createClientComponentClient();

	// Fungsi untuk registrasi user
	const handleRegister = async () => {
		const user = {
			name,
			role,
		};

		await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `http://localhost:3000/register/callback`,
			},
		});
		router.refresh();
	};

	return (
		<div className="p-6 flex flex-col items-center justify-between w-[26rem] h-[20rem] border border-slate-300 rounded-xl bg-slate-200">
			<div className="flex flex-col items-center w-full ">
				<h1 className="font-semibold text-2xl ">Register</h1>
			</div>
			<div className="px-4 flex flex-col justify-around w-full h-[14rem] ">
				<div className="flex flex-col gap-y-0.5 ">
					<label htmlFor="email" className="text-md text-gray-800 ">
						Email
					</label>
					<input
						autoFocus
						name="email"
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="py-1 px-3 focus:border-slate-300 border bg-slate-100 rounded-lg outline-none duration-200"
					/>
				</div>
				<div className="flex flex-col gap-y-0.5 ">
					<label htmlFor="password" className="text-md text-gray-800 ">
						Password
					</label>
					<input
						name="password"
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="py-1 px-3 focus:border-slate-300 border bg-slate-100 rounded-lg outline-none duration-200"
					/>
				</div>
				<button
					type="submit"
					onClick={handleRegister}
					className="p-1 bg-green-400 hover:bg-green-600 rounded-lg outline-none duration-200"
				>
					Register
				</button>
			</div>
		</div>
	);
}
