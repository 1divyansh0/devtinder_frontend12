import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removefeed } from './feedslice';
import toast from 'react-hot-toast';

const card = ({yourfeed}) => {
  const url = import.meta.env.VITE_BASE_URL;



  const dispatch = useDispatch();

  
  const handler = async(status,id)=>{
    try{
      const res = await axios.post(url +"request/send/"+status+"/"+id,{},{
        withCredentials:true
      })
     dispatch(removefeed(id))

     if(status=="interested")
      toast.success("Connection Request Sent",{
        duration:1000});
    else toast.error("Profile Ignored!",{
      duration:1000
    })

    }catch(err){
      console.log(err);
    }
  }



  console.log(yourfeed);



  return (
    <div className="card bg-base-100 w-96 shadow-sm glass mb-3">
  <figure>
    <img
      src={yourfeed?.dp}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold">{yourfeed?.firstname+" " +yourfeed?.lastname}</h2>
    <p><span className=' font-semibold'>About: </span> {yourfeed?.About}</p>
    <p><span className=' font-semibold'>Skills: </span>{yourfeed?.skills}</p>
    <p><span className=' font-semibold'>Age: </span>{yourfeed?.age}</p>
    <p><span className=' font-semibold'>Gender: </span>{yourfeed?.gender}</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>handler("interested",yourfeed?._id)}>Interested</button>
      <button className="btn btn-primary"  onClick={()=>handler("ignore",yourfeed?._id)}>Ignore</button>
    </div>

  </div>


</div>

    
  )
}

export default card
