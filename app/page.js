import Image from 'next/image'
import Page from "./week-2/page"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mb-4 p-3 my-4 bg-black text-white min-h-screen ">
      <h1 className="mb-4 text-4xl p-4">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="list-none">
        <li className="mb-2 p-1 text-xl ">
          <Link href='./week-2'>Week 2</Link>
        </li>
        <li className="mb-2 p-1 text-xl">
          <Link href='./week-3'>Week 3</Link>
        </li>
        <li className="mb-2 p-1 text-xl">
          <Link href='./week-4'>week 4</Link>
        </li>
        <li className="mb-2 p-1 text-xl">
          <Link href='./week-5'>week 5</Link>
        </li>
        <li className="mb-2 p-1 text-xl">
          <Link href='./week-6'>week 6</Link>
        </li>
        <li className="mb-2 p-1 text-xl">
          <Link href='./week-7'>week 7</Link>
        </li>
        <li className="mb-2 p-1 text-xl">
          <Link href='./week-8'>week 8</Link> 
        </li>
        <li className="mb-2 p-1 text-xl">
          <Link href='./week-10'>week 10</Link>
          </li>
  
      </ul>
      
      
    </main>
  )
}
