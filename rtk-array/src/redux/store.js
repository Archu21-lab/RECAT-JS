import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth_slice.js"


const store = configureStore({
    reducer:{
        auth:authReducer,
    },
})