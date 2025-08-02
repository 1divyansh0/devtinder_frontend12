import React from 'react'
import Requestcard from './utils/requestcard'
import { useSelector } from 'react-redux'

const requestpage = () => {
  const requestdata = useSelector(store=>store.request);
  console.log(requestdata);
  if(requestdata?.length==0)return <h1>No Request Found!</h1>
    
  return(
    <div className='flex flex-col gap-3'>
      {requestdata?.map((ele)=>{
        return <Requestcard key={ele._id} data = {ele}/>
      })
      }
    </div>
  )
  
}

export default requestpage