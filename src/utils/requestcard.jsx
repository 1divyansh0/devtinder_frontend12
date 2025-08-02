import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { removerequest } from './requests';
import toast from 'react-hot-toast';

const requestcard = ({data}) => {
  const url = import.meta.env.VITE_BASE_URL;
  const dispatch = useDispatch();
    const handler = async(status,id)=>{
        try{
          const res = await axios.post( url + "review/"+status+"/"+id,{},{
            withCredentials:true
          })

          dispatch(removerequest(id));
          if(status=="accepted")
            toast.success("Accepted");
          else toast.error("Rejected")
        }
        catch(err){
          console.log(err);
        }
    }

    console.log(data);
  return (
       <div className="card bg-primary text-primary-content w-96">
  <div className="card-body">
    <h2 className="card-title"></h2>
    <div className='flex gap-2'>
      <img src={data?.fromuserid?.dp} className='w-15 h-15 rounded' alt="" />
    <div className='flex-col'>
      <h1 className='font-semibold'>{data?.fromuserid?.firstname+" "+data?.fromuserid?.lastname}</h1>
      <p>{data?.fromuserid?.About}</p>
      <p>{data?.fromuserid?.gender}</p>
    </div>
    </div>
    <div className="card-actions justify-end">
      <button className="btn" onClick={()=>handler("rejected",data?.fromuserid._id)}>Reject</button>
      <button className="btn" onClick={()=>handler("accepted",data?.fromuserid._id)}>Accept</button>
    </div>
  </div>
</div>
  )
}

export default requestcard
