import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Body from './body'
import Login from './login'
import Profile from './profile'
import Feed from './feed'
import Requestpage from './requestpage'
import Connection from './utils/connection'
import { Toaster } from 'react-hot-toast'
import Home from './Home'
import Chat from './utils/Chat'




const App = () => {
  
  
  
  
  return (
    
    <BrowserRouter>
    <Toaster position="top-right" reverseOrder={false} />
     <Routes>
      <Route path="/" element={<Body/>}>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/feed" element={<Feed/>}/>
      <Route path="/request" element={<Requestpage/>}/>
      <Route path="/connections" element={<Connection/>}/>
      <Route path="/chat/:id/:firstname" element={<Chat/>}/>
      
      </Route>
     </Routes>
    </BrowserRouter>

  )
}

export default App;