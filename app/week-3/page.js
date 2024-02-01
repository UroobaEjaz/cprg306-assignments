"use client";





import Item from './item';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="bg-gray-950 text-white min-h-screen flex items-center justify-left">
      <div className="text-left">
        <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
        <Link href="#">
          <Item />
        </Link>
      </div>
    </main>
  );
}

  