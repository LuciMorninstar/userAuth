import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import RegisterPage from './pages/RegisterPage'
import { Toaster } from 'react-hot-toast'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    
    <BrowserRouter>
     <Toaster position="top-right"/>

    <Routes>
      <Route path = "/" element ={<MainLayout/>}>

      <Route index element={<HomePage/>}/>
      <Route path = "/register" element={<RegisterPage/>}/>
      <Route path = "/login" element={<LoginPage/>}/>

      
    
      
      
      </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App