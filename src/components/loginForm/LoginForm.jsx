"use client"
import React, { useEffect } from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useFormState } from "react-dom";
import { login } from '@/lib/userActions';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined)
    const router = useRouter()
    
     useEffect(()=>{
     state?.success && router.push("/")
     },[state?.success, router])
  return (
      <form action={formAction} className='flex flex-col gap-5 w-96 rounded-xl border-2 border-slate-200 shadow-2xl py-32 px-10 box-content'>
        <h1 className=' text-2xl font-semibold relative m-auto'>Login</h1>
        <input type="text" name='username' placeholder='Username' className='object-contain h-12 border-2 border-black rounded-md outline-none px-2'/>
        <input type="password" name='password' placeholder='Password' className='object-contain h-12 border-2 border-black rounded-md outline-none px-2'/>
        <button className='object-contain bg-black text-white h-12 rounded-full border-2 border-black duration-300 hover:bg-white hover:text-black'>Login</button>
        <Link href="/register" className='text-blue-800 relative m-auto'>Don't have an account? <b>Register</b></Link>
      </form> 
      
    
  )
}

export default LoginForm