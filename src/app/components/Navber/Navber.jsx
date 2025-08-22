import Link from 'next/link'
import React from 'react'
import Logo from '../Logo/Logo'

export default function Navber() {

    const links = <>
     <li> <Link href='/items'>Items</Link></li>
      <li><Link href='/add-item'>Add Item</Link></li>
    </>

    return (
        <div className='fixed w-full shadow-sm bg-base-100 z-50 px-2 lg:px-12'>

        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
                 <Logo />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="px-4 py-2 rounded-md border-1 hover:text-white hover:bg-[#799EFF] transition">Login</button>
            </div>
        </div>
        </div>
    )
}
