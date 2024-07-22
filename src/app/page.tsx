import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<>
			<div className=' bg-slate-500 w-screen justify'>
				<h1 className='text-2xl text-center'>Byte More Books</h1>
				<p className='mt-2 text-center'>loading...</p>
			</div>
			<div className='justify-center m-2'>
				<Link href='/profile'>
					<p className='text-2xl text-indigo-500 text-center m-2 '>
						Profile Page
					</p>
				</Link>
				<Button variant='outline'>Shadcn Button</Button>
			</div>
		</>
	);
}
