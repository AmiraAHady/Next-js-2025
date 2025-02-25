import { signIn } from '@/app/_lib/auth'
import React from 'react'

export default function Login() {

  const login=async()=>{
    "use server"
    await signIn("google",{
      redirectTo:'/'
    })

  }
  return (
    <>
    <div>Login</div>
    <form action={login}>
      <button className='btn btn-primary'>Login By Gmail</button>
    </form>
    </>
  )
}
