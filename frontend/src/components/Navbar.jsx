import React from 'react'
import {Link} from "react-router-dom"
import useUserStore from '../../utils/Store.js'

const Navbar = () => {

  const user = useUserStore((state)=> state.user);
    const logout = useUserStore((state)=> state.logout);

  const handleLogout = ()=>{

    const yes = window.confirm("Do you really want to logout?");

    if(yes){
    
      logout();
    }
  }
  
  return (
   <nav className = "w-full px-10 py-7 bg-gray-400 flex flex-row items-center justify-between shadow-md shadow-gray-500">
    <div> 
      <span className = "text-3xl font-semibold text-white ">Website</span>

    </div>

   
    <div>

       {user ? (<div onClick={handleLogout} className = "bg-gradient-to-r bg-blue-500 cursor-pointer px-4 py-2 text-xl border border-blue-500 font-semibold rounded-md text-white duration-300 ease-in-out">{user.userName}</div>):(
           <Link to = "/register" className = "bg-gradient-to-r bg-blue-500 cursor-pointer px-4 py-2 text-xl border border-blue-500 font-semibold rounded-md text-white ">Register</Link>
       )}
   

    </div>

   </nav>
  )
}

export default Navbar