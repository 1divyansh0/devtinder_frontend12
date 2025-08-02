import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { adduser } from './userslice';
import toast from 'react-hot-toast';

const editcard = ({user}) => {
  
  const [firstname, setfirstname] = useState(user?.firstname);
  const [lastname, setlastname] = useState(user?.lastname)
  const [dp, setdp] = useState(user?.dp)
  const [gender, setgender] = useState(user?.gender);
  const [age, setage] = useState(user?.age);
  const [skills, setskills] = useState(user?.skills);
  const [About, setAbout] = useState(user?.About)

  const dispatch = useDispatch();

  const url = import.meta.env.VITE_BASE_URL;
  const save = async ()=>{
   try{
        const res = await axios.patch(url+"update",{
      firstname,
      lastname,
      dp,
      gender,
      age,
      skills,
      About
    },{
      withCredentials:true
    })
    dispatch(adduser(res.data));
    toast.success("Profile Saved")
   }
   catch(err){
    console.log(err);

   }
 }
  return (
  <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Edit Your Profile</h2>
    <fieldset className="fieldset">
  <legend className="fieldset-legend text-xl">First Name</legend>
  <input type="text" value={firstname} className="input" placeholder="Type here" onChange={(e)=>{
    setfirstname(e.target.value)
  }} />
  
   </fieldset>
  <fieldset className="fieldset">
  <legend className="fieldset-legend text-xl">Last Name</legend>
  <input type="text"  value={lastname}className="input" placeholder="Type here" onChange={(e)=>{
    setlastname(e.target.value)
  }}/>
  
   </fieldset>
    <fieldset className="fieldset">
  <legend className="fieldset-legend text-xl">Display Picture</legend>
  <input type="text"  value={dp} className="input" placeholder="Type here" onChange={(e)=>{
    setdp(e.target.value)
  }} />
  
   </fieldset>
  <fieldset className="fieldset">
  <legend className="fieldset-legend text-xl">Age</legend>
  <input type="text"value={age} className="input" placeholder="Type here" onChange={(e)=>{
    setage(e.target.value)
  }}/>
  
   </fieldset>
       <fieldset className="fieldset">
  <legend className="fieldset-legend text-xl">Gender</legend>
  <input type="text"  value={gender} className="input" placeholder="Type here" onChange={(e)=>{
    setgender(e.target.value)
  }}/>
  
   </fieldset>
  <fieldset className="fieldset">
  <legend className="fieldset-legend text-xl">Skills</legend>
  <input type="text"  value={skills} className="input" placeholder="Type here" onChange={(e)=>{
    setskills(e.target.value)
  }} />
  
   </fieldset>
    <fieldset className="fieldset">
  <legend className="fieldset-legend text-xl">About</legend>
  <input type="text"  value={About} className="input" placeholder="Type here" onChange={(e)=>{
    setAbout(e.target.value)
  }} />
  
   </fieldset>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"  onClick={save}>Save Profile</button>
    </div>
   </div>
   </div>

  )
}

export default editcard