import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { adduser, removeuser } from './utils/userslice';
import axios from 'axios';
import { addrequest } from './utils/requests';
import { MdMarkUnreadChatAlt } from "react-icons/md";
import toast from 'react-hot-toast';
import { addconnections } from './utils/connectionslice';


const Navbar = () => {
  
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = import.meta.env.VITE_BASE_URL;

   const refresh = async()=>{
  try{
    const existinguser = await axios.get(url+"me",{
      withCredentials:true
    })
    dispatch(adduser(existinguser.data));
  }catch(err){
    console.log('error:'+err)
  }

 }
 const requesthandle = async ()=>{
  try{
    const data = await axios.get(url+"request/pending",{
      withCredentials:true
    })
    dispatch(addrequest(data.data));
  }
  catch(err){
    console.log("Error:"+err);
  }
 }

 const requestconn = async ()=>{
  try{
    const data = await axios.get(url+"connections",{
      withCredentials:true
    })
    dispatch(addconnections(data.data));
  }
  catch(err){
    console.log("Error:"+err);
  }
 }


  useEffect(() => {
   refresh();
  }, [])
    useEffect(() => {
   requesthandle();
  }, [])
  

  const handleprofile = ()=>{
    return navigate("/profile")
  }
  
  const handlelogout = async()=>{
    try{
      const output = await axios.post(url+"logout",{
         
      },{
        withCredentials:true
      })
    
      dispatch(removeuser());
      toast.error("Logged Out!")
     

    }catch(err){
      console.log(err)
    }
  }
  const user = useSelector(store=>store.user);
  
  console.log(user);
 

  return (
    <div data-theme = "abyss" className=''>
  <div className="navbar bg-base-100 shadow-sm ">
  <div className="flex-1">
    <Link className="btn btn-ghost text-xl" to="/feed"><h1 className=" -ml-2 mt-5 text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 mb-6">
        DevTinder
      </h1></Link>
  </div>
  <div className="flex gap-1 items-center ">
    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
    {
      console.log(user)
    }
      {user?<MdMarkUnreadChatAlt className='mr-2 mt-1 w-6 h-6' onClick={()=>{
        toast.success("Feature Coming Soon!")
      }}/>:""}
       {user?
       <div className='flex gap-1 mr-1'>
        <p>{user?.firstname}</p>
        <p>{user?.lastname}</p>
        </div>
         :""}
    <div className="dropdown dropdown-end mr-3 ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        {user?<div className="w-10 rounded-full ">
          <img 
            alt="Tailwind CSS Navbar component"
            src={user?.dp} />
        </div>:""}
      </div>
      {user?<ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link className="justify-between" to="/profile">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/request"  onClick={requesthandle}>Requests</Link></li>
        <li><Link to="/connections"  onClick={requestconn}>Connections</Link></li>
        <li><Link onClick={handlelogout} to="/Home">Logout</Link></li>
      </ul>:""}
    </div>
  </div>
</div>

    </div>
  )
}

export default Navbar