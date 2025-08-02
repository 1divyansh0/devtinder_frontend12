import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { adduser } from './utils/userslice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const login = () => {

const dispatch = useDispatch();
const navigate = useNavigate();

 const [password, setpassword] = useState("");
 const [email, setemail] = useState("")
 const [signup, setsignup] = useState(false)
 const [firstname, setfirstname] = useState("");
 const [lastname, setlastname] = useState("");
 const [gender, setgender] = useState("")

 const url = import.meta.env.VITE_BASE_URL;

 
 
 const handlesignup = async()=>{
  try{
    const res = await axios.post(url+"signup",{
      firstname,
      lastname,
      email,
      password,
      gender
    },{
      withCredentials:true
    })
    console.log(res)
  dispatch(adduser(res.data))
  toast.success(`${firstname}, Complete your Profile!`)
  navigate("/profile")
}catch(err){
  
  
}
}

const handler =  async()=>{
  
  const id = toast.loading("Connecting You to DevTinder")
  try{
     console.log(url);
     const data = await axios.post(url+"login",{
       email,
       password
      },{
        withCredentials : true
      })

      console.log(data)
      dispatch(adduser(data.data));
      // const user = useSelector(store=>store.user);
      // console.log(user);
      toast.success(`Welcome ${data?.data?.firstname}!`,{id})
      navigate("/feed")
    }
    catch(err){
      console.log(err);
       toast.error(err?.response?.data,{id})
    }

 }



  return (
    <div>
    <div className="card card-border bg-base-100 w-96">
  <div className="card-body">
    {!signup?<h2 className="card-title text-xl text-center">Login!</h2>:<h2 className="card-title text-xl text-center">Create Account</h2>}
    {signup? <div>
  <fieldset className="fieldset">
  <legend className="fieldset-legend text-xl">Enter Your First Name</legend>
  <input type="text" className="input" placeholder="Type First Name" value={firstname} onChange={
    (e)=>{
        setfirstname(e.target.value)

    }
  } />
 
   </fieldset>
    <fieldset className="fieldset">
  <legend className="fieldset-legend text-xl">Enter Your Last Name</legend>
  <input type="text" className="input" placeholder="Type Last Name" value={lastname} onChange={
    (e)=>{
        setlastname(e.target.value)

    }
  } />
 
   </fieldset>
       <fieldset className="fieldset">
  <legend className="fieldset-legend text-xl">Enter Your Gender</legend>
  <input type="text" className="input" placeholder="Type Gender in Small Letters" value={gender} onChange={
    (e)=>{
        setgender(e.target.value)

    }
  } />
 
   </fieldset>
   
   
   </div>:""}


   <fieldset className="fieldset">
  <legend className="fieldset-legend text-xl">Enter Your Email</legend>
  <input type="text" className="input" placeholder="Type Email" value={email} onChange={
    (e)=>{
        setemail(e.target.value)

    }
  } />
 
   </fieldset>
      <fieldset className="fieldset">
  <legend className="fieldset-legend text-xl">Enter Your Password</legend>
  <input type="text" className="input" placeholder="Type Password" value={password} onChange={(e)=>{
   setpassword(e.target.value)
  }}/>

   </fieldset>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary" type='submit' >{!signup?<span onClick={handler}>Login</span>:<span onClick={handlesignup}>SignUp</span>}</button>
    </div>
  </div>
  {!signup?<p className='text-center p-5'>New User? <span  className='font-bold cursor-pointer' onClick={()=>{
    setsignup(!signup);
  }}>SignUp Now</span></p>:""}
</div>

    </div>
  )
}

export default login