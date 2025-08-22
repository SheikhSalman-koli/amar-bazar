import React from 'react'

export default function LoginForm() {
  return (
    <div>
         <form className="space-y-4" >
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
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
            Sign In
          </button>
        </form>
    </div>
  )
}
