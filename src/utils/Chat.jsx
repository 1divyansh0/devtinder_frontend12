import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createsocketconnection } from './socket';
import { useSelector } from 'react-redux';

import { useRef } from 'react';

const Chat = () => {
  const chatContainerRef = useRef(null);
  const [message, setmessage] = useState([]);
  const [newmessage, setnewmessage] = useState("")
  

    const {id,firstname}  = useParams();
    const user = useSelector(store=>store.user);
    const fromuserid = user?._id;
    
    useEffect(() => {
       if(!user)return ;
     const socket = createsocketconnection();
     socket.emit("joinchat",{firstname: user?.firstname,fromuserid,id})

     socket.on("messagerecieved",({firstname,text})=>{
          setmessage((message)=>[...message ,{firstname,text}]);
     })
    
     return ()=>{
        socket.disconnect();
     }
   }, [user,id])

  useEffect(() => {
  if (chatContainerRef.current) {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }
}, [message]);


   const sendmessage = ()=>{
      const socket = createsocketconnection();
      socket.emit("sendmessage",{firstname:user?.firstname,fromuserid,id,text:newmessage});
      
   }
   


  return (
    <>
    {message.length==0?<h1 className='font-semibold text-xl'> Chat with {firstname}</h1>:""}
   <div className='w-[95%] h-[68vh] border-1 rounded-xl absolute'>
   <div className='overflow-y-auto  h-[calc(68vh-60px)] px-4 py-2 scrollbar-none' ref={chatContainerRef}>
        {message?.map((msg,index)=>{
        return <div key={index} className="chat chat-start">
        <div className=" mt-2 chat-header">
     {msg.firstname}
  </div>
  <div className="chat-bubble">{msg.text}</div>
  <div className="chat-footer opacity-50">Seen</div>
</div>
    })}
     
   </div>

    <div className='absolute flex  justify-between border-1 rounded-b-xl bottom-0 w-[100%] '>
    <input  value ={newmessage} onChange={(e)=>{
        setnewmessage(e.target.value)
    }} className='w-full h-15 text-center ' type='text' placeholder='type something' />
    <button onClick={()=>{
        sendmessage();
        setnewmessage("");
    }} className="btn h-15 rounded-br-xl rounded-bl-none rounded-tr-none rounded-tl-none border-0 ">Send</button>
    </div>
   </div>
   </>
  )
}

export default Chat