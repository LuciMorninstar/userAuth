import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
   <nav className = "w-full px-10 py-7 bg-gray-400 flex flex-row items-center justify-between">
    <div> 
      <span className = "text-3xl font-semibold ">User Auth</span>

    </div>
    <div>
      <Link to = "/register" className = "bg-gradient-to-r bg-blue-500 cursor-pointer px-4 py-2 text-xl border border-blue-500 font-semibold rounded-md text-white ">Register</Link>

    </div>

   </nav>
  )
}

export default Navbar