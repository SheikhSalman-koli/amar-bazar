"use client"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'

export default function LoginForm() {

    const [loader, setLoader] = useState(false)

    const route = useRouter()

    const handleLogin=async(e)=>{
        setLoader(true)
         e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
      
        try{
        const res =await signIn('credentials',{email, password, callbackUrl: '/products', redirect: false})
        setLoader(false)
        if(res.ok){
            route.push('/products')
            Swal.fire('Logged in successfull!')
            form.reset()            
        }else{
            Swal.fire({
                icon: "error",
                title: "authentication failed",
                text: "please check your email & password with registered email & password."
            })
        }
        }catch(error){
            toast.error(error.message)
        }
    }

  return (
    <div>
         <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             name='email'
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              name='password'           
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#799EFF] text-white rounded px-4 py-2 hover:bg-blue-500 font-bold transition"
          >
            {loader ? (<span className="loading loading-spinner text-warning"></span>) : "Sign In"}
          </button>
        </form>
    </div>
  )
}
