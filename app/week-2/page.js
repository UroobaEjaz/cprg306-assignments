
import StudentInfo from './student-info';
import Link from 'next/link';

export default function Page() {
    return (
      <main className="mb-4 p-3 my-4 bg-black text-white min-h-screen ">
        <Link href='./week-3'> Shopping list   
        <StudentInfo/>
         </Link>
      
      </main>
    );
  }


