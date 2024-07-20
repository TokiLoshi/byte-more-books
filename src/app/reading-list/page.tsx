import Link from "next/link";

export default function ReadingList() {
	return (
		<>
			<div className='justify-center'>
				<h1 className='text-2xl text-center'>Reading List</h1>
				<div className='items-center'>
					<Link href='/'>
						<p className='text-xl text-indigo-500 text-center'>Home</p>
					</Link>
					<Link href='/profile'>
						<p className='text-xl text-indigo-500 text-center'>Profile</p>
					</Link>
				</div>
			</div>
		</>
	);
}
