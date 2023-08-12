import Input from "../input";

export default function Login({ action }) {
	const element = [
		{
			name: "email",
			type: "text",
			value: "",
		},
		{
			name: "password",
			type: "password",
			value: "",
		},
	];
	return (
		<div className="p-6 flex flex-col items-center justify-between w-[26rem] h-[20rem] border border-gray-300 rounded-xl bg-gray-200">
			<div className="flex flex-col items-center w-full ">
				<h1 className="font-semibold text-2xl ">Login</h1>
			</div>
			<form
				action={action}
				className="px-4 flex flex-col justify-around w-full h-[14rem] "
			>
				{element.map((e) => (
					<Input elem={e} />
				))}
				<button
					type="submit"
					className="p-1 border border-green-600 bg-green-400 rounded-lg outline-none"
				>
					Login
				</button>
			</form>
		</div>
	);
}
