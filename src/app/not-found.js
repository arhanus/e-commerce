import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-4'>
      <h2>404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='flex items-center justify-center p-2 bg-black w-64 h-12 rounded-md text-white hover:bg-slate-800'>Return Home</Link>
    </div>
  )
}