import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice"
import feedReducer from "./feedslice"
import requestReducer from "./requests"
import connectionReducer from "./connectionslice"

export const store = configureStore({
    reducer:{
        "user":userReducer,
        "feed": feedReducer,
        "request": requestReducer,
        "connection":connectionReducer
    }
})