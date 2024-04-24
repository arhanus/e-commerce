import React from 'react'
import Link  from "next/link"
import LoginForm from '@/components/loginForm/LoginForm'
const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <LoginForm/>
    </div>
  )
}

export default Login