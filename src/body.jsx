import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const body = () => {
  const navigate = useNavigate()
 const user = useSelector(store=>store.user)
 const [loginpage, setloginpage] = useState(false)
  
  return (
    <div className='min-h-screen w-screen flex flex-col justify-between '>
        <Navbar/>
        <div className='min-h-[70vh] flex justify-center items-center mt-2 '>

          
        <Outlet />
        </div>
        <div >

         <Footer/> 
        </div>
       

    </div>
  )
}

export default body