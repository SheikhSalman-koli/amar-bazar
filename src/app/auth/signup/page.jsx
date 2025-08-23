
import React from 'react'
import RegisterForm from '../components/RegisterForm'

export default function page() {
  
  return (
      <div className="min-h-screen flex items-center justify-center  px-4 pt-24 pb-8">
      <div className="max-w-md w-full  rounded-xl border-1 border-gray-300 p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-[#799EFF]">Create an Account</h2>

        {/* Google Signup */}
        {/* <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="h-5 w-5"
          />
          Sign up with Google
        </button>

        <div className="flex items-center justify-center space-x-2 text-gray-400">
          <span className="h-px w-8 bg-gray-300 inline-block"></span>
          <span>or</span>
          <span className="h-px w-8 bg-gray-300 inline-block"></span>
        </div> */}

        {/* Signup Form */}
      
          <RegisterForm />
        <p className="text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <a href="/auth/login" className="text-[#799EFF] hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  )
}
