import Link from "next/link";

export default function Profile() {
	return (
		<>
			<div className='justify items-center'>
				<h1 className='text-2xl indigo-500 text-center m-2'>Profile Page</h1>
				<div className='items-center'>
					<Link href='/'>
						<p className='text-xl text-indigo-500 text-center'>Home</p>
					</Link>
					<Link href='/reading-list'>
						<p className='text-xl text-indigo-500 text-center'>Reading List</p>
					</Link>
					<Link href='/browse'>
						<p className='text-xl text-indigo-500 text-center'>Browse</p>
					</Link>
					<Link href='/profile'>
						<p className='text-xl text-indigo-500 text-center'>Profile</p>
					</Link>
				</div>
			</div>
		</>
	);
}
