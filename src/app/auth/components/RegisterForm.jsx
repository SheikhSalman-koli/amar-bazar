"use client"
import { saveUsers } from '@/app/actions/auth/saveUsers'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

// can not create user or register by next.js without database, save users in DB is creating user here. 

export default function RegisterForm() {

// const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const realPAssword = password === confirmPassword
const [loader, setLoader] = useState(false)

const route = useRouter()

  const handleRegister =async(e)=>{
    setLoader(true)
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value

        // if(!realPAssword) return alert('enter correct password')
        const payload = {
            name, email, password, photo
        }

        const res =await saveUsers(payload);
        setLoader(false)
        if(res?.insertedId){
            Swal.fire({
                icon: "success",
                title:"Registration Successfull!",
                text: "now you can login with your registered email & passwrod"
            })
            route.push('/auth/login')
        }
  }

    return (
        <div>
            <form className="space-y-4" onSubmit={handleRegister}>
                <div>
                    <label className="block text-gray-600 mb-1">Name</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name='name'
                        placeholder="Enter your name"
                        required
                    />
                </div>
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
                    <label className="block text-gray-600 mb-1">Photo</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name='photo'
                        placeholder="Enter photo URL"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-600 mb-1">Password</label>
                    <input
                        type="password"
                        name='password'
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        //   value={password}
                        //   onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                {/* <div>
                    <label className="block text-gray-600 mb-1">Confirm Password</label>
                    <input
                        type="password"
                        name='password'
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                    />
                </div> */}
                <button
                    type="submit"
                    className="w-full bg-[#799EFF] text-white rounded px-4 py-2 hover:bg-blue-500 transition"
                >
                    {loader ? (<span className="loading loading-spinner text-warning"></span>) : "Sign Up"}
                </button>
            </form>
        </div>
    )
}
