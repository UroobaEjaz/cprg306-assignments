import Image from 'next/image'
import Page from "./week-2/page"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
     <Page/>
      
    </main>
  )
}
