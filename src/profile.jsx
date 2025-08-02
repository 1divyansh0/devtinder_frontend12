import React from 'react'
import { useSelector } from 'react-redux'
import Cardp from './utils/ProfileCard';
import Editcard from './utils/editcard';

const profile = () => {
  
  
  const userdata = useSelector(store=>store.user);
  console.log(userdata);
  return (
     <div className='flex flex-col md:flex-row'>
       <Cardp yourfeed={userdata}/>
       <Editcard user={userdata}/>
     </div>
  )
}

export default profile