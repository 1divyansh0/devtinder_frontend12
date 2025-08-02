
import { createSlice } from "@reduxjs/toolkit";

const connectionslice = createSlice({
    name:'connection',
    initialState:null,
    reducers:{
        addconnections:(state,action)=>{
            return action.payload
        }
    }
})
export const {addconnections} = connectionslice.actions;
export default connectionslice.reducer