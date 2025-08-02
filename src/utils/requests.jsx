import { createSlice } from "@reduxjs/toolkit";

const requestslice = createSlice({
    name: "request",
    initialState:null,
    reducers:{
       addrequest:(state,action)=>{
        return action.payload.data;
       },
       removerequest:(state,action)=>{
         const array = state.filter((ele)=>(ele?.fromuserid._id!==action.payload))
         return array
       }
    }
})
export const {addrequest,removerequest} = requestslice.actions
export default requestslice.reducer;