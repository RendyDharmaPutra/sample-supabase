"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LoginClient() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	const supabase = createClientComponentClient();

	const handleLogin = async () => {
		await supabase.auth.signInWithPassword({ email, password });
		router.refresh();
	};

	return (
		<div className="p-6 flex flex-col items-center justify-between w-[26rem] h-[20rem] border border-gray-300 rounded-xl bg-gray-200">
			<div className="flex flex-col items-center w-full ">
				<h1 className="font-semibold text-2xl ">Login</h1>
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
						className="p-1 border border-gray-500 bg-gray-50 rounded-lg outline-none"
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
						className="p-1 border border-gray-500 bg-gray-50 rounded-lg outline-none"
					/>
				</div>
				<button
					type="submit"
					onClick={handleLogin}
					className="p-1 border border-green-600 bg-green-400 hover:bg-green-600 rounded-lg outline-none duration-200"
				>
					Login
				</button>
			</div>
		</div>
	);
}
