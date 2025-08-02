import { createSlice } from "@reduxjs/toolkit";

const feedslice = createSlice({
    name: "feed",
    initialState:null,
    reducers:{
        addfeed:(state,action)=>{
        return action.payload;
        },
        removefeed:(state,actions)=>{
          const array = state.filter((ele)=>(ele._id!=actions.payload));
          return array;
        }
    }
})

export const {addfeed,removefeed} = feedslice.actions
export default feedslice.reducer