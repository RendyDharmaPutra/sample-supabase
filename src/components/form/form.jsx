import Input from "../input";

export default function Form({ action, value }) {
	// Membuat list element input
	const element = [
		{
			name: "nama",
			type: "text",
			value: value.nama,
		},
		{
			name: "jenis",
			type: "text",
			value: value.jenis,
		},
		{
			name: "exp",
			type: "date",
			value: value.exp,
		},
		{
			name: "harga",
			type: "number",
			value: value.harga,
		},
	];

	return (
		<form
			// Menggunakan props 'action' yang diterima sebagai server action dari element form
			action={action}
			className="p-4 flex flex-col justify-between w-full max-w-[26rem] sm:w-[26rem] h-[24rem] rounded-lg border border-slate-300 bg-slate-200"
		>
			{/* Map list element input */}
			{element.map((elem) => {
				return (
					// <div>
					// 	<label htmlFor={elem.name}>
					// 		{elem.name[0].toUpperCase() + elem.name.substring(1)}
					// 	</label>
					// 	<input
					// 		name={elem.name}
					// 		type={elem.type}
					// 		id={elem.name}
					// 		className="border border-black"
					// 	/>
					// </div>
					<Input elem={elem} />
				);
			})}
			{/* <div>
				<label htmlFor="nama">Nama</label>
				<input name="nama" id="nama" className="border border-black" />
			</div>
			<div>
				<label htmlFor="jenis">Jenis</label>
				<input name="jenis" id="jenis" className="border border-black" />
			</div>
			<div>
				<label htmlFor="exp">EXP</label>
				<input
					name="exp"
					type="date"
					id="exp"
					className="border border-black"
				/>
			</div>
			<div>
				<label htmlFor="harga">Harga</label>
				<input name="harga" id="harga" className="border border-black" />
			</div> */}
			<button
				type="submit"
				className="p-1 bg-green-400 hover:bg-green-600 rounded-lg outline-none duration-200"
			>
				Submit
			</button>
		</form>
	);
}
