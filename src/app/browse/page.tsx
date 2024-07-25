"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const readingList = [
	{
		title: "Test Title1",
		description: "TestDescription1",
		pages: 234,
		ISBN: "MadeUpISBN123",
		readStatus: false,
	},
	{
		title: "Test Title2",
		description: "Another test description",
		pages: 234,
		ISBN: "MadeUpISBN124",
		readStatus: false,
	},
	{
		title: "Test Title3",
		description: "BlahBlah Fishpaste",
		pages: 234,
		ISBN: "MadeUpISBN125",
		readStatus: false,
	},
];

export default function Browse() {
	const [readStatus, setReadStatus] = useState(false);
	const [formShowing, setFormShowing] = useState(false);
	const handleMoreBooks = () => {
		alert(`Currently form should be showing? ${formShowing}`);
		setFormShowing(true);
	};

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
			<div className='shadow m-4 p-2 rounded justify-center text-center bg-indigo-500'>
				{readingList.map((book) => (
					<div key={book.ISBN} className='mb-4 shadow bg-zinc-800 p-5 rounded'>
						<h1 className='text-xl'>{book.title}</h1>
						<p>{book.description}</p>
						<p>{book.readStatus}</p>
					</div>
				))}
				<Button onClick={handleMoreBooks}>Add More!</Button>
				{formShowing && <p>Stuff to conditionally render</p>}
			</div>
		</>
	);
}
