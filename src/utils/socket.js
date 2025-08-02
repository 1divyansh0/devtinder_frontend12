import {io} from "socket.io-client"

 export const createsocketconnection = ()=>{
  const url =  import.meta.env.VITE_BASE_URL;
  return io(url);
}
