import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfeed } from './utils/feedslice';
import Card from './utils/Feedcard';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const feed = () => {
  const SkeletonCard = () => {
  return (
    <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  )
}
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const yourfeed = useSelector(store=>store.feed);
  const [noterror, setnoterror] = useState(true)
  const [loading, setloading] = useState(true)
 
  
  
  const url = import.meta.env.VITE_BASE_URL;
  
  const getfeed=async()=>{
    try{
    const feeddata = await axios.get(url+"feed",{
      withCredentials:true
    });
  
    //  console.log(feeddata?.data?.feeddata)
     dispatch(addfeed(feeddata?.data?.feeddata));

    }
    catch(err){
      if(err.status==401)
        setnoterror(false);
      toast.error("Please Login/Signup!")
      navigate("/")
    }finally{
      setloading(false);
    }
    

  }
  
  useEffect(() => {
    getfeed()
  }, [])

    if (loading) {
    return (
      <div className="flex flex-wrap gap-4 p-4">
        <SkeletonCard />
      </div>
    )
  }
  
  if(noterror){

  if(yourfeed?.length==0)return <h1 className='text-center font-bold'>No New Users!</h1>
  
  
  return (
    <div>
    <Card yourfeed={yourfeed?.[0]}/>
    </div>
  )
}
}

export default feed