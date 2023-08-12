import Input from "../input";

export default function UserForm({ action, value }) {
	// Membuat list element input
	const element = [
		{
			name: "name",
			type: "text",
			value: value.name,
		},
		{
			name: "role",
			type: "text",
			value: value.role,
		},
	];

	return (
		<form
			// Menggunakan props 'action' yang diterima sebagai server action dari element form
			action={action}
			className="p-4 flex flex-col justify-between w-full max-w-[24rem] sm:w-[24rem] h-[18rem] rounded-lg border border-slate-300 bg-slate-200"
		>
			<div className="flex flex-col items-center w-full ">
				<h1 className="font-semibold text-2xl ">Edit</h1>
			</div>
			{/* Map list element input */}
			{element.map((elem) => {
				return <Input elem={elem} />;
			})}
			<button
				type="submit"
				className="p-1 bg-green-400 hover:bg-green-600 rounded-lg outline-none duration-200"
			>
				Submit
			</button>
		</form>
	);
}
