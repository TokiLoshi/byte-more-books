import Link from "next/link";

export default function Browse() {
	return (
		<>
			<div className='justify-center'>
				<h1 className='text-2xl text-center'>Browse Books</h1>
				<div className='items-center'>
					<Link href='/'>
						<p className='text-xl text-indigo-500 text-center'>Home</p>
					</Link>
					<Link href='/profile'>
						<p className='text-xl text-indigo-500 text-center'>Profile</p>
					</Link>
					<Link href='/reading-list'>
						<p className='text-xl text-indigo-500 text-center'>Reading List</p>
					</Link>
				</div>
			</div>
		</>
	);
}
