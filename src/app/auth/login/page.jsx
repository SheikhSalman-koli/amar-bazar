import React from 'react'
import LoginForm from '../components/LoginForm'

export default function page() {
  return (
   <div className="min-h-screen flex items-center justify-center  px-4 pt-16">
      <div className="max-w-md w-full border-1 border-gray-300 rounded-xl  p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-[#799FEE]">Sign in to Your Account</h2>

        {/* Google Login */}
        {/* <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="h-5 w-5"
          />
          Sign in with Google
        </button> */}

        {/* <div className="flex items-center justify-center space-x-2 text-gray-400">
          <span className="h-px w-8 bg-gray-300 inline-block"></span>
          <span>or</span>
          <span className="h-px w-8 bg-gray-300 inline-block"></span>
        </div> */}

        {/* Credentials Login */}
       
          <LoginForm />
        <p className="text-center text-gray-500 text-sm">
          Don’t have an account?{" "}
          <a href="/auth/signup" className="text-[#799EFF] hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}
