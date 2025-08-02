import React, { useEffect } from 'react'
import Connectioncard from './connectioncard'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addconnections } from './connectionslice'
import toast from 'react-hot-toast'

const connection = () => {
  
  const dispatch = useDispatch();
  const url =  import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  
  const dataconnections = useSelector(store=>store.connection);
  const getdata = async()=>{
    if(dataconnections)return;
    const id = toast.loading("Loading Your Connections")
    try{
    const data = await axios.get(url+"connections",{

        headers: {
        Authorization: `Bearer ${token}`,
        },
        withCredentials:true
    })
    toast.success("Your Connections has been Loaded!",{id:id})
    if(data?.data)
    dispatch(addconnections(data.data));
   }catch(err){
    toast.error("Network Error!",{id:id})
    console.log(err);
   }

   }


   useEffect(() => {
       getdata();
    }, [])
    

    if(dataconnections?.length==0)return <h1 className='text-center text-xl font-bold'>You Have No Connections!</h1>
    
  return (
    <div className='flex flex-col gap-3 md:flex-row  '>
      <h1 className='text-center text-2xl fornt-bold p-5'>Connections</h1>
      {dataconnections?.filter(ele => ele !== null).map((ele)=>{
       
       return <Connectioncard key={ele._id} data={ele}/>

      })

      }

    </div>
  )
}

export default connection
