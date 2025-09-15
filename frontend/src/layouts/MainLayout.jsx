import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <main className='flex flex-col '>
        <Navbar/>
        <Outlet/>

    </main>
  )
}

export default MainLayout