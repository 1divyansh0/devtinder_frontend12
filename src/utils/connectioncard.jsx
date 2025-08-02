import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const connectioncard = ({data}) => {
  const navigate = useNavigate();
  
  const [message, setmessage] = useState([]);
  const [newmessage, setnewmessage] = useState("")


  return (
 <div className="card bg-primary text-primary-content w-96">
  <div className="card-body">
    <h2 className="card-title"></h2>
    <div className='flex gap-6'>
      <img src={data?.dp} className='w-15 h-15 rounded' alt="" />
    <div className='flex-col'>
      <h1 className='font-semibold'>{data?.firstname+" "+data?.lastname}</h1>
      <p>{data?.About}</p>
      <p>{data?.gender}</p>
    </div>
    </div>
    <div className="card-actions justify-end">
      <button  onClick={()=>{
        const id = data?._id;
        navigate(`/chat/${id}/${data?.firstname}`)
      }} className="btn btn-dark">Chat</button>
    </div>
  </div>
</div>
  )
}

export default connectioncard