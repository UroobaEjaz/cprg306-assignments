"use client";




import ItemList from './item-list.jsx';

import Link from 'next/link';


export default function Home() {
  return (
    <main className="bg-gray-950 text-white min-h-screen py-2">
      <div className=" ">
        <h1 className="text-3xl font-bold px-1">Shopping List</h1>
        <Link href="#">
          <ItemList />
        </Link>
      </div>
    </main>
  );
}

  